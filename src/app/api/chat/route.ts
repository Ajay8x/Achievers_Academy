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

    const { message, preferredLang } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ reply: 'Please send a valid message.' }, { status: 400 });
    }

    const lowerQuery = message.toLowerCase().trim();
    const kb = db.getKB();

    // Detect language style (Explicit preferredLang or Hindi / Hinglish keywords vs English)
    const isHindiOrHinglish = preferredLang === 'hi' ||
      (preferredLang !== 'en' && /\b(kaha|kahan|kaise|kitna|kitni|paisa|paise|milega|milegi|hoga|hogi|chahiye|padhai|shiksha|batao|bataiye|kare|karna|hai|hein|namaste|pranam|dakhila|pravesh|kya|kyu|kyun|suvidha|subidha)\b/i.test(lowerQuery)) ||
      /[\u0900-\u097F]/.test(message);

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

      const leadReply = isHindiOrHinglish
        ? `धन्यवाद! मैंने आपका मोबाइल नंबर (${extractedPhone}) दर्ज कर लिया है। हमारे सीनियर एडमिशन काउंसलर 24 घंटे के भीतर आपको पूरी प्रवेश और फीस जानकारी के साथ कॉल करेंगे। आप तुरंत व्हाट्सएप पर भी जुड़ सकते हैं:`
        : `Thank you! I have recorded your mobile number (${extractedPhone}). Our Senior Admission Counselor will call you within 24 hours with complete admission and fee details. You can also connect immediately on WhatsApp:`;

      const leadActions = isHindiOrHinglish
        ? ['कैंपस देखें', 'कोर्सेस देखें', 'ऑनलाइन आवेदन करें']
        : ['View Campuses', 'Explore Courses', 'Apply Online'];

      return NextResponse.json({
        reply: leadReply,
        whatsappUrl: `https://wa.me/918459360161?text=${encodeURIComponent(isHindiOrHinglish ? 'नमस्ते अचीवर्स एकेडमी, मैंने चैटबॉट पर संपर्क किया था और एडमिशन जानकारी चाहिए।' : 'Hello Achievers Academy, I was chatting with your AI assistant and want admission details.')}`,
        suggestedActions: leadActions
      });
    }

    // Specific greetings
    if (/^(hi|hello|hey|namaste|pranam|good morning|good afternoon|good evening|kya haal|नमस्ते|प्रणाम|जय श्री राम|हाय)/i.test(lowerQuery) && lowerQuery.length < 25) {
      const greeting = isHindiOrHinglish
        ? "नमस्ते! मैं अचीवर्स एकेडमी का वर्चुअल एडमिशन असिस्टेंट हूँ। मैं आपकी क्या मदद कर सकता हूँ? आप हमारे 3 कैंपसों (मनमाड, चांदवड़, निफाड़), CBSE एवं स्टेट बोर्ड, JEE/NEET/CET कोचिंग, या हॉस्टल व बस सुविधा के बारे में पूछ सकते हैं।"
        : "Hello! Welcome to Achievers Group of Institutes. I am your Virtual Admission Assistant. How may I assist you today? You can ask about our Campuses (Manmad, Chandwad, Niphad), Academic Programs (Nursery to 12th, JEE/NEET/CET), Hostel & Transport facilities, or Admission procedures.";

      const greetingActions = isHindiOrHinglish
        ? ['कैंपस एवं स्थान', 'JEE और NEET कोचिंग', 'हॉस्टल सुविधाएं', 'एडमिशन प्रक्रिया']
        : ['Campuses & Locations', 'JEE & NEET Coaching', 'Hostel & Transport', 'Admission Process'];

      return NextResponse.json({
        reply: greeting,
        suggestedActions: greetingActions
      });
    }

    // Specific Fee inquiries (Policy: Strict verification, no hallucination)
    if (/(fee|fees|cost|kharcha|charges|paisa|kitna lagega|फीस|खर्चा)/i.test(lowerQuery)) {
      const reply = isHindiOrHinglish
        ? "अचीवर्स एकेडमी में फीस छात्र की कक्षा, बोर्ड (CBSE/State Board), हॉस्टल एवं ट्रांसपोर्ट आवश्यकता और मेरिट छात्रवृत्ति के आधार पर निर्धारित होती है। सटीक फीस विवरण और स्कॉलरशिप के लिए कृपया अपना संपर्क नंबर साझा करें या सीधे हमारे एडमिशन डेस्क से व्हाट्सएप पर बात करें: +91 8459360161।"
        : "At Achievers Group, the fee structure depends on the selected class (Nursery to 12th), Board (CBSE/State Board), stream (JEE/NEET/CET), and optional hostel or transport facilities. We also offer merit-based scholarships. For exact fee schedules and scholarship benefits, please share your contact number or connect directly with our admission counselors on WhatsApp.";

      const feeActions = isHindiOrHinglish
        ? ['मोबाइल नंबर शेयर करें', 'व्हाट्सएप पर बात करें', 'प्रॉस्पेक्टस डाउनलोड']
        : ['Share Contact Number', 'Chat on WhatsApp', 'Download Prospectus'];

      return NextResponse.json({
        reply,
        whatsappUrl: `https://wa.me/918459360161?text=${encodeURIComponent(isHindiOrHinglish ? 'नमस्ते अचीवर्स एकेडमी, कृपया फीस स्ट्रक्चर की जानकारी दें।' : 'Hello Achievers Academy, please provide the fee structure for academic programs.')}`,
        suggestedActions: feeActions
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
      const actions = isHindiOrHinglish 
        ? ['एडमिशन के लिए आवेदन', 'व्हाट्सएप पर चैट', 'काउंसलर से बात करें']
        : ['Apply for Admission', 'Chat on WhatsApp', 'Talk to Counselor'];

      const waText = isHindiOrHinglish
        ? `नमस्ते अचीवर्स एकेडमी, मुझे ${bestMatch.category} के बारे में और जानकारी चाहिए।`
        : `Hello Achievers Academy, I would like more details about ${bestMatch.category}.`;

      return NextResponse.json({
        reply: replyText,
        whatsappUrl: `https://wa.me/918459360161?text=${encodeURIComponent(waText)}`,
        suggestedActions: actions
      });
    }

    // Fallback response with WhatsApp handover
    const fallbackText = isHindiOrHinglish
      ? "मुझे इस विशिष्ट विषय पर सटीक जानकारी उपलब्ध नहीं है। संस्थान के नियमों के अनुसार हम अनुमानित जानकारी साझा नहीं करते। आप हमारे सीनियर एडमिशन काउंसलर से सीधे संपर्क कर सकते हैं:\n• कॉल: +91 8459360161 / +91 8999542174\n• व्हाट्सएप पर संदेश भेजें:"
      : "I don't have verified information regarding this specific detail in my institutional records. As per Achievers Academy policy, we do not provide estimated or unverified data. You can connect directly with our senior admission counselor for verified information:\n• Helpline: +91 8459360161 / +91 8999542174\n• Email: achieversgroupofinstitutes@gmail.com";

    const fallbackActions = isHindiOrHinglish
      ? ['व्हाट्सएप पर जुड़ें', 'कैंपस विजिट शेड्यूल करें', 'एडमिशन फॉर्म भरें']
      : ['Connect on WhatsApp', 'Schedule Campus Visit', 'Fill Admission Form'];

    return NextResponse.json({
      reply: fallbackText,
      whatsappUrl: `https://wa.me/918459360161?text=${encodeURIComponent(isHindiOrHinglish ? `नमस्ते अचीवर्स एकेडमी, मेरी एक पूछताछ है: ${message}` : `Hello Achievers Academy, I have an inquiry: ${message}`)}`,
      suggestedActions: fallbackActions
    });
  } catch (error: any) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { reply: 'Our AI Admission Assistant is temporarily resting. Please call us at +91 8459360161.' },
      { status: 500 }
    );
  }
}

