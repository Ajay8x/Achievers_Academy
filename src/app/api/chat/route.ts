import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// Rate limiting for chatbot
const chatLimiter = new Map<string, { count: number; timestamp: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    const limit = chatLimiter.get(ip);

    if (limit && now - limit.timestamp < 60000 && limit.count > 30) {
      return NextResponse.json(
        { reply: "You're sending messages too fast. Please wait a moment or chat directly on WhatsApp: https://wa.me/918459360161" },
        { status: 429 }
      );
    }

    if (!limit || now - limit.timestamp >= 60000) {
      chatLimiter.set(ip, { count: 1, timestamp: now });
    } else {
      limit.count += 1;
    }

    const { message, history } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ reply: 'Please send a valid message.' }, { status: 400 });
    }

    const lowerQuery = message.toLowerCase().trim();
    const kb = db.getKB();

    // Check if user is sharing contact details (lead capture)
    const phoneMatch = lowerQuery.match(/(?:\+91[\s-]?)?[6-9]\d{9}/);
    if (phoneMatch) {
      const extractedPhone = phoneMatch[0].replace(/\D/g, '');
      // Automatically save inquiry lead in db
      try {
        db.addEnquiry({
          studentName: 'Chatbot Visitor',
          parentName: 'Parent / Prospect',
          phone: extractedPhone,
          campus: 'Achievers Group (General)',
          program: 'Inquiry via AI Assistant',
          hostelRequired: lowerQuery.includes('hostel'),
          transportRequired: lowerQuery.includes('bus') || lowerQuery.includes('transport'),
          message: `Captured via Chatbot: "${message}"`,
          source: 'AI Chatbot Lead Capture'
        });
      } catch (e) {
        console.error('Failed to log chatbot lead', e);
      }

      return NextResponse.json({
        reply: `Thank you! I have recorded your mobile number (${extractedPhone}). Our Senior Admission Counselor will call you within 24 hours with complete admission and fee details. You can also connect immediately on WhatsApp:`,
        whatsappUrl: `https://wa.me/918459360161?text=${encodeURIComponent('Hello Achievers Academy, I was chatting with your AI assistant and want admission details.')}`,
        suggestedActions: ['View Campuses', 'Explore Courses', 'Apply Online']
      });
    }

    // Detect language style (Hindi / Hinglish vs English)
    const isHindiOrHinglish = /(kaha|kahan|kaise|kitna|fees|paisa|admission|milega|hoga|chahiye|padhai|shiksha|batao|kare|hai|h|namaste|pranam)/i.test(lowerQuery);

    // Specific greetings
    if (/^(hi|hello|hey|namaste|pranam|good morning|good afternoon|good evening|kya haal)/i.test(lowerQuery) && lowerQuery.length < 20) {
      const greeting = isHindiOrHinglish
        ? "नमस्ते! मैं अचीवर्स एकेडमी का वर्चुअल एडमिशन असिस्टेंट हूँ। मैं आपकी क्या मदद कर सकता हूँ? आप कैंपस, कोर्सेस, हॉस्टल, बस सुविधा या एडमिशन प्रक्रिया के बारे में पूछ सकते हैं।"
        : "Hello! Welcome to Achievers Group of Institutes. I am your Virtual Admission Assistant. How may I assist you today? You can ask about our Campuses (Manmad, Chandwad, Niphad), Academic Programs (Nursery to 12th, JEE/NEET/CET), Hostel & Transport facilities, or Admission procedures.";

      return NextResponse.json({
        reply: greeting,
        suggestedActions: [
          'Campuses & Locations',
          'JEE & NEET Coaching',
          'Hostel & Transport',
          'Admission Process'
        ]
      });
    }

    // Specific Fee inquiries (Policy: Strict verification, no hallucination)
    if (/(fee|fees|cost|kharcha|charges|paisa|kitna lagega)/i.test(lowerQuery)) {
      const reply = isHindiOrHinglish
        ? "अचीवर्स एकेडमी में फीस छात्र की कक्षा, बोर्ड (CBSE/State Board), हॉस्टल एवं ट्रांसपोर्ट आवश्यकता और मेरिट छात्रवृत्ति के आधार पर निर्धारित होती है। सटीक फीस विवरण और स्कॉलरशिप के लिए कृपया अपना संपर्क नंबर साझा करें या सीधे हमारे एडमिशन डेस्क से व्हाट्सएप पर बात करें: +91 8459360161।"
        : "At Achievers Group, the fee structure depends on the selected class (Nursery to 12th), Board (CBSE/State Board), stream (JEE/NEET/CET), and optional hostel or transport facilities. We also offer merit-based scholarships. For exact fee schedules and scholarship benefits, please share your contact number or connect directly with our admission counselors on WhatsApp.";

      return NextResponse.json({
        reply,
        whatsappUrl: `https://wa.me/918459360161?text=${encodeURIComponent('Hello Achievers Academy, please provide the fee structure for academic programs.')}`,
        suggestedActions: ['Share Contact Number', 'Chat on WhatsApp', 'Download Prospectus']
      });
    }

    // Search against Knowledge Base
    let bestMatch: typeof kb[0] | null = null;
    let highestScore = 0;

    for (const item of kb) {
      let score = 0;
      for (const keyword of item.keywords) {
        if (lowerQuery.includes(keyword.toLowerCase())) {
          score += 2;
        }
      }
      if (lowerQuery.includes(item.category.toLowerCase())) {
        score += 1;
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && highestScore >= 2) {
      const replyText = isHindiOrHinglish ? bestMatch.answerHi : bestMatch.answerEn;
      return NextResponse.json({
        reply: replyText,
        whatsappUrl: `https://wa.me/918459360161?text=${encodeURIComponent(`Hello Achievers Academy, I would like more details about ${bestMatch.category}.`)}`,
        suggestedActions: ['Apply for Admission', 'Chat on WhatsApp', 'Talk to Counselor']
      });
    }

    // Fallback response with WhatsApp handover
    const fallbackText = isHindiOrHinglish
      ? "मुझे इस विशिष्ट विषय पर सटीक जानकारी उपलब्ध नहीं है। संस्थान के नियमों के अनुसार हम अनुमानित जानकारी साझा नहीं करते। आप हमारे सीनियर एडमिशन काउंसलर से सीधे संपर्क कर सकते हैं:\n• कॉल: +91 8459360161 / +91 8999542174\n• व्हाट्सएप पर संदेश भेजें:"
      : "I don't have verified information regarding this specific detail in my institutional records. As per Achievers Academy policy, we do not provide estimated or unverified data. You can connect directly with our senior admission counselor for verified information:\n• Helpline: +91 8459360161 / +91 8999542174\n• Email: achieversgroupofinstitutes@gmail.com";

    return NextResponse.json({
      reply: fallbackText,
      whatsappUrl: `https://wa.me/918459360161?text=${encodeURIComponent(`Hello Achievers Academy, I have an inquiry: ${message}`)}`,
      suggestedActions: ['Connect on WhatsApp', 'Schedule Campus Visit', 'Fill Admission Form']
    });
  } catch (error: any) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { reply: 'Our AI Admission Assistant is temporarily resting. Please call us at +91 8459360161.' },
      { status: 500 }
    );
  }
}

