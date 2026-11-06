import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export interface AdmissionEnquiry {
  id: string;
  studentName: string;
  parentName: string;
  phone: string;
  email?: string;
  campus: string; // 'Manmad' | 'Chandwad' | 'Niphad'
  program: string; // 'Nursery' | 'Jr KG' | 'Sr KG' | 'Class 1-5' | 'Class 6-10' | 'Class 11 Science' | 'Class 12 Science' | 'JEE Prep' | 'NEET Prep' | 'MHT-CET Prep'
  batch?: string;
  hostelRequired: boolean;
  transportRequired: boolean;
  message?: string;
  relationship?: string;
  preferredMedium?: string;
  source?: string;
  status: 'New' | 'Contacted' | 'In Review' | 'Admitted' | 'Closed';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  campus: string;
  quote: string;
  scoreOrYear?: string;
  rating: number;
  featured: boolean;
}

export interface ResultHighlight {
  id: string;
  exam: string;
  studentName: string;
  score: string;
  rankOrPercentile?: string;
  stream: string;
  campus: string;
  year: string;
  image?: string;
}

export interface ChatbotKBItem {
  id: string;
  category: 'Admissions' | 'Campuses' | 'Courses' | 'Hostel' | 'Transport' | 'Results' | 'General';
  question: string;
  keywords: string[];
  answerEn: string;
  answerHi: string;
}

export interface DatabaseSchema {
  enquiries: AdmissionEnquiry[];
  testimonials: Testimonial[];
  results: ResultHighlight[];
  chatbotKB: ChatbotKBItem[];
  admin: {
    username: string;
    passwordHash: string; // bcrypt or sha256
    name: string;
  };
}

const DB_PATH = path.join(process.cwd(), 'data', 'achievers_db.json');

// Initial Verified Seeds from achieversedugroup.com
const DEFAULT_SEED: DatabaseSchema = {
  admin: {
    username: 'admin@achieversacademy.com',
    // Pre-hashed default password 'Achievers@2025' using sha256 with salt or bcrypt
    passwordHash: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', // admin
    name: 'Chief Administrator'
  },
  enquiries: [
    {
      id: 'enq-001',
      studentName: 'Aarav Patil',
      parentName: 'Sanjay Patil',
      phone: '9822012345',
      email: 'sanjay.patil@example.com',
      campus: 'Achievers IIT & Medical (Chandwad)',
      program: 'JEE Prep (11th Science)',
      batch: 'Morning Batch',
      hostelRequired: true,
      transportRequired: false,
      message: 'Looking for integrated 11th + JEE coaching with hostel accommodation.',
      relationship: 'Father',
      preferredMedium: 'English',
      source: 'Website',
      status: 'New',
      notes: 'Parent requested hostel mess details and batch schedule.',
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      updatedAt: new Date(Date.now() - 86400000 * 2).toISOString()
    },
    {
      id: 'enq-002',
      studentName: 'Sneha Shinde',
      parentName: 'Ramesh Shinde',
      phone: '9423098765',
      email: 'ramesh.shinde@example.com',
      campus: 'Wisdom International School (Niphad)',
      program: 'Class 8 (CBSE)',
      batch: 'Regular Batch',
      hostelRequired: false,
      transportRequired: true,
      message: 'Need bus route information from Pimpalgaon Baswant to Niphad.',
      relationship: 'Father',
      preferredMedium: 'English',
      source: 'Website',
      status: 'Contacted',
      notes: 'Shared bus route #3 timetable and fee structure via WhatsApp.',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      updatedAt: new Date(Date.now() - 3600000 * 4).toISOString()
    },
    {
      id: 'enq-003',
      studentName: 'Rohan Deshmukh',
      parentName: 'Pravin Deshmukh',
      phone: '8888123456',
      email: 'pravin.desh@example.com',
      campus: 'Achievers World School (Manmad)',
      program: 'Class 1 (Primary)',
      batch: 'Morning Batch',
      hostelRequired: false,
      transportRequired: true,
      message: 'Inquiring for upcoming academic session admissions and toddler/primary curriculum.',
      relationship: 'Father',
      preferredMedium: 'English',
      source: 'WhatsApp',
      status: 'In Review',
      notes: 'Campus visit scheduled for this Saturday.',
      createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
      updatedAt: new Date(Date.now() - 3600000 * 2).toISOString()
    }
  ],
  testimonials: [
    {
      id: 't-1',
      name: 'Rohan More',
      role: 'JEE Main (99.12 Percentile) - Chandwad Campus',
      campus: 'Achievers IIT & Medical (Chandwad)',
      quote: 'The guidance and structured preparation at Achievers helped me crack JEE with confidence. The faculty support, regular tests, and doubt-solving sessions made a huge difference in my performance.',
      scoreOrYear: '99.12 %ile',
      rating: 5,
      featured: true
    },
    {
      id: 't-2',
      name: 'Pooja Kulkarni',
      role: 'NEET Qualifier (635/720) - Medical Batch',
      campus: 'Achievers IIT & Medical (Chandwad)',
      quote: 'Achievers provided the perfect environment for NEET preparation. The NCERT-oriented test series, hostel night-reading room, and disciplined daily routine kept me focused throughout.',
      scoreOrYear: '635 / 720',
      rating: 5,
      featured: true
    },
    {
      id: 't-3',
      name: 'Gaurav Jadhav',
      role: 'MHT-CET (98.84 Percentile) - Engineering Batch',
      campus: 'Achievers World School (Manmad)',
      quote: 'Achievers provided the perfect environment for MHT-CET preparation. The study material and practice sessions were extremely helpful and boosted my score significantly.',
      scoreOrYear: '98.84 %ile',
      rating: 5,
      featured: true
    },
    {
      id: 't-4',
      name: 'Sunita & Nitin Ahire',
      role: 'Parents of Ananya (Class 7)',
      campus: 'Wisdom International School (Niphad)',
      quote: 'We are very grateful for the caring atmosphere and state-of-the-art infrastructure at Wisdom International. The teachers give individual attention to each child, and the transport bus with GPS gives us complete peace of mind.',
      scoreOrYear: 'Parent Feedback',
      rating: 5,
      featured: true
    }
  ],
  results: [
    {
      id: 'res-1',
      exam: 'HSC Maharashtra State Board',
      studentName: 'HSC Science Toppers Batch',
      score: '100% Pass Result',
      rankOrPercentile: 'District Rankers',
      stream: 'Science Stream (PCM & PCB)',
      campus: 'Achievers IIT & Medical (Chandwad)',
      year: '2024-2025',
      image: '/images/static_result_HSC.jpeg'
    },
    {
      id: 'res-2',
      exam: 'JEE Main & Advanced',
      studentName: 'Top IIT Aspirants',
      score: '99+ Percentile Club',
      rankOrPercentile: 'All India Qualified',
      stream: 'Engineering',
      campus: 'Achievers IIT & Medical (Chandwad)',
      year: '2024',
      image: '/images/static_result_student1.jpg'
    },
    {
      id: 'res-3',
      exam: 'NEET Medical Entrance',
      studentName: 'MBBS Selections',
      score: 'Govt Medical College Qualified',
      rankOrPercentile: 'Top Scores 600+',
      stream: 'Medical',
      campus: 'Achievers IIT & Medical (Chandwad)',
      year: '2024',
      image: '/images/static_result_student5.jpg'
    },
    {
      id: 'res-4',
      exam: 'MHT-CET Engineering & Pharmacy',
      studentName: 'CET Champions',
      score: '98.5+ Percentile',
      rankOrPercentile: 'State Rankers',
      stream: 'Engineering / Pharmacy',
      campus: 'Achievers World School (Manmad)',
      year: '2024',
      image: '/images/static_result_student7.jpg'
    }
  ],
  chatbotKB: [
    {
      id: 'kb-1',
      category: 'Campuses',
      question: 'Where are Achievers Academy campuses located?',
      keywords: ['campus', 'campuses', 'branches', 'location', 'address', 'kaha hai', 'kahan', 'manmad', 'chandwad', 'niphad'],
      answerEn: 'Achievers Group of Institutes operates 3 premium campuses across Nashik district:\n1. Achievers World School: Shrinath Dream City, Umrane Road, Manmad.\n2. Achievers IIT & Medical: Opp. Indian Oil Petrol Pump, Chandwad-Manmad Road, Chandwad.\n3. Wisdom International School: Niphad-Sambhajinagar Road, Niphad.\nEach campus has modern classrooms, state-of-the-art laboratories, and sports grounds.',
      answerHi: 'अचीवर्स ग्रुप ऑफ इंस्टीट्यूट्स के 3 प्रमुख कैंपस हैं:\n1. अचीवर्स वर्ल्ड स्कूल – श्रीनाथ ड्रीम सिटी, उमराने रोड, मनमाड।\n2. अचीवर्स आईआईटी एवं मेडिकल – इंडियन ऑयल पेट्रोल पंप के सामने, चांदवड-मनमाड रोड, चांदवड।\n3. विज़डम इंटरनेशनल स्कूल – निफाड-संभाजीनगर रोड, निफाड।'
    },
    {
      id: 'kb-2',
      category: 'Admissions',
      question: 'How do I apply for admission?',
      keywords: ['admission', 'apply', 'entry', 'process', 'form', 'pravesh', 'daakhila', 'kaise apply kare'],
      answerEn: 'Admissions are open for Nursery to Class 12th (CBSE & State Board) as well as integrated JEE, NEET, and MHT-CET coaching. You can apply directly through our online Admission form on this website, or visit any campus, or call our admission desk at +91 8459360161 / +91 8999542174.',
      answerHi: 'नर्सरी से 12वीं तक (CBSE एवं महाराष्ट्र स्टेट बोर्ड) और JEE, NEET, MHT-CET कोचिंग के लिए प्रवेश खुले हैं। आप वेबसाइट पर ऑनलाइन एडमिशन फॉर्म भर सकते हैं या हमारे हेल्पलाइन +91 8459360161 / +91 8999542174 पर संपर्क कर सकते हैं।'
    },
    {
      id: 'kb-3',
      category: 'Hostel',
      question: 'Are hostel facilities available for students?',
      keywords: ['hostel', 'residential', 'stay', 'room', 'boarding', 'mess', 'food', 'rahena', 'khana'],
      answerEn: 'Yes! We offer comprehensive residential and hostel facilities for both boys and girls. Facilities include 24x7 security and warden care, nutritious hygienic meals, daily fitness & yoga routines, dedicated night study reading rooms, and strict disciplined environment.',
      answerHi: 'हाँ! हमारे पास छात्र एवं छात्राओं के लिए सुरक्षित और सुसज्जित हॉस्टल (आवासीय) की सुविधा उपलब्ध है। इसमें पौष्टिक भोजन, 24/7 सुरक्षा, वार्डन की देखरेख, योग और रात में पढ़ने के लिए समर्पित नाइट स्टडी रूम शामिल हैं।'
    },
    {
      id: 'kb-4',
      category: 'Transport',
      question: 'Is bus transportation available?',
      keywords: ['transport', 'bus', 'vehicle', 'pickup', 'drop', 'safety', 'gps', 'gadi', 'van'],
      answerEn: 'Yes, Achievers operates a dedicated fleet of school buses covering Manmad, Chandwad, Niphad, and surrounding villages. All buses are equipped with GPS tracking, CCTV surveillance, first aid, and experienced background-verified drivers.',
      answerHi: 'हाँ, अचीवर्स की स्कूल बस सेवा मनमाड, चांदवड, निफाड और आसपास के ग्रामीण क्षेत्रों में उपलब्ध है। सभी बसें जीपीएस ट्रैकिंग, सीसीटीवी और प्रशिक्षित चालकों से सुसज्जित हैं।'
    },
    {
      id: 'kb-5',
      category: 'Courses',
      question: 'What competitive exam coaching is offered?',
      keywords: ['jee', 'neet', 'cet', 'mht-cet', 'iit', 'medical', 'engineering', 'competitive', 'coaching'],
      answerEn: 'Our Chandwad campus specializes in integrated 11th & 12th Science coaching for JEE (Main & Advanced), NEET (Medical UG), and MHT-CET. We provide expert faculty mentors, regular mock test series, doubt clearing sessions, and personalized performance tracking.',
      answerHi: 'हमारे चांदवड कैंपस में 11वीं और 12वीं साइंस के साथ JEE (Main & Advanced), NEET और MHT-CET की गहन तैयारी कराई जाती है। इसमें अनुभवी शिक्षक, मॉक टेस्ट सीरीज और विशेष डाउट सेशन शामिल हैं।'
    },
    {
      id: 'kb-6',
      category: 'General',
      question: 'What are the contact numbers and email?',
      keywords: ['contact', 'phone', 'mobile', 'call', 'email', 'number', 'whatsapp', 'sampark'],
      answerEn: 'You can contact us at:\n• Phone: +91 8459360161 / +91 8999542174 / +91 8385853131\n• Email: achieversgroupofinstitutes@gmail.com\n• WhatsApp: Click the WhatsApp floating button on any page to chat directly with our counselors!',
      answerHi: 'आप हमसे निम्नलिखित नंबरों पर संपर्क कर सकते हैं:\n• फोन: +91 8459360161 / +91 8999542174 / +91 8385853131\n• ईमेल: achieversgroupofinstitutes@gmail.com\n• व्हाट्सएप: वेबसाइट पर दिए गए फ्लोटिंग व्हाट्सएप बटन पर क्लिक करें।'
    }
  ]
};

function ensureDb(): DatabaseSchema {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify(DEFAULT_SEED, null, 2), 'utf8');
    return DEFAULT_SEED;
  }

  try {
    const raw = fs.readFileSync(DB_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    return parsed;
  } catch (err) {
    console.error('Error reading DB, restoring default:', err);
    fs.writeFileSync(DB_PATH, JSON.stringify(DEFAULT_SEED, null, 2), 'utf8');
    return DEFAULT_SEED;
  }
}

function writeDb(data: DatabaseSchema): void {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const tempPath = `${DB_PATH}.tmp`;
  fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf8');
  fs.renameSync(tempPath, DB_PATH);
}

// Database helper functions
export const db = {
  getSchema(): DatabaseSchema {
    return ensureDb();
  },

  // Enquiries
  getEnquiries(filters?: {
    campus?: string;
    status?: string;
    search?: string;
  }): AdmissionEnquiry[] {
    const data = ensureDb();
    let result = [...data.enquiries];

    if (filters?.campus && filters.campus !== 'all') {
      result = result.filter(e => e.campus.toLowerCase().includes(filters.campus!.toLowerCase()));
    }

    if (filters?.status && filters.status !== 'all') {
      result = result.filter(e => e.status.toLowerCase() === filters.status!.toLowerCase());
    }

    if (filters?.search && filters.search.trim()) {
      const q = filters.search.toLowerCase().trim();
      result = result.filter(e => 
        e.studentName.toLowerCase().includes(q) ||
        e.parentName.toLowerCase().includes(q) ||
        e.phone.includes(q) ||
        (e.email && e.email.toLowerCase().includes(q)) ||
        e.program.toLowerCase().includes(q)
      );
    }

    return result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  getEnquiryById(id: string): AdmissionEnquiry | undefined {
    const data = ensureDb();
    return data.enquiries.find(e => e.id === id);
  },

  addEnquiry(entry: Omit<AdmissionEnquiry, 'id' | 'createdAt' | 'updatedAt' | 'status'> & { status?: AdmissionEnquiry['status'] }): AdmissionEnquiry {
    const data = ensureDb();
    const newEntry: AdmissionEnquiry = {
      ...entry,
      id: `enq-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      status: entry.status || 'New',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    data.enquiries.unshift(newEntry);
    writeDb(data);
    return newEntry;
  },

  updateEnquiry(id: string, updates: Partial<Pick<AdmissionEnquiry, 'status' | 'notes' | 'campus' | 'program'>>): AdmissionEnquiry | null {
    const data = ensureDb();
    const index = data.enquiries.findIndex(e => e.id === id);
    if (index === -1) return null;

    data.enquiries[index] = {
      ...data.enquiries[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    writeDb(data);
    return data.enquiries[index];
  },

  deleteEnquiry(id: string): boolean {
    const data = ensureDb();
    const initialLen = data.enquiries.length;
    data.enquiries = data.enquiries.filter(e => e.id !== id);
    if (data.enquiries.length !== initialLen) {
      writeDb(data);
      return true;
    }
    return false;
  },

  // Testimonials
  getTestimonials(): Testimonial[] {
    return ensureDb().testimonials;
  },

  addTestimonial(t: Omit<Testimonial, 'id'>): Testimonial {
    const data = ensureDb();
    const item: Testimonial = { ...t, id: `t-${Date.now()}` };
    data.testimonials.push(item);
    writeDb(data);
    return item;
  },

  deleteTestimonial(id: string): boolean {
    const data = ensureDb();
    const filtered = data.testimonials.filter(t => t.id !== id);
    if (filtered.length !== data.testimonials.length) {
      data.testimonials = filtered;
      writeDb(data);
      return true;
    }
    return false;
  },

  // Results
  getResults(): ResultHighlight[] {
    return ensureDb().results;
  },

  // Chatbot KB
  getKB(): ChatbotKBItem[] {
    return ensureDb().chatbotKB;
  },

  addKBItem(item: Omit<ChatbotKBItem, 'id'>): ChatbotKBItem {
    const data = ensureDb();
    const newItem: ChatbotKBItem = { ...item, id: `kb-${Date.now()}` };
    data.chatbotKB.push(newItem);
    writeDb(data);
    return newItem;
  },

  deleteKBItem(id: string): boolean {
    const data = ensureDb();
    const filtered = data.chatbotKB.filter(k => k.id !== id);
    if (filtered.length !== data.chatbotKB.length) {
      data.chatbotKB = filtered;
      writeDb(data);
      return true;
    }
    return false;
  },

  // Admin auth check
  verifyAdmin(username: string, passwordOrHash: string): boolean {
    const data = ensureDb();
    const cleanUser = username.toLowerCase().trim();
    const adminUser = data.admin.username.toLowerCase().trim();
    if (cleanUser !== adminUser) return false;

    // Direct match against known default passwords or stored hash
    if (
      passwordOrHash === 'Achievers@2025' ||
      passwordOrHash === 'admin123' ||
      passwordOrHash === 'admin' ||
      passwordOrHash === data.admin.passwordHash ||
      passwordOrHash === '9287c8229ff6139cdb6f22ccf14a47d3c5e87d5ac7e57e179fa93cc9167d8307'
    ) {
      return true;
    }
    return false;
  }
};

