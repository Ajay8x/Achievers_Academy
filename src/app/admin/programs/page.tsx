'use client';

import React, { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { 
  BookOpen, 
  School, 
  Building2, 
  Award, 
  CheckCircle2, 
  ExternalLink,
  GraduationCap,
  Sparkles,
  Users,
  Search,
  Home,
  Bus
} from 'lucide-react';
import Link from 'next/link';

interface ProgramItem {
  id: string;
  category: 'Pre-Primary' | 'Primary & Secondary' | 'Higher Secondary' | 'Competitive Entrance';
  name: string;
  grades: string;
  campuses: string[];
  boardOrExam: string;
  hostelAvailable: boolean;
  transportAvailable: boolean;
  description: string;
  keyFeatures: string[];
  link: string;
}

const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: 'prog-1',
    category: 'Pre-Primary',
    name: 'Early Childhood Foundation (Nursery, Jr & Sr KG)',
    grades: 'Nursery, Junior KG, Senior KG (Ages 3 - 6)',
    campuses: ['Achievers World School (Manmad)', 'Wisdom International School (Niphad)'],
    boardOrExam: 'CBSE Early Childhood Care & Education (ECCE)',
    hostelAvailable: false,
    transportAvailable: true,
    description: 'Play-way interactive learning, phonetic development, cognitive motor skills, and creative sensory activities in child-friendly environment.',
    keyFeatures: ['Activity-based Montessori Playrooms', 'Theme-based Audio-Visual Learning', 'Dedicated Nanny & Teacher Ratio', 'Safe GPS Transportation'],
    link: '/programs/pre-primary'
  },
  {
    id: 'prog-2',
    category: 'Primary & Secondary',
    name: 'Primary & Middle School Education (Classes 1st to 8th)',
    grades: 'Standard 1st to 8th',
    campuses: ['Achievers World School (Manmad)', 'Wisdom International School (Niphad)'],
    boardOrExam: 'CBSE & Maharashtra State Board',
    hostelAvailable: true,
    transportAvailable: true,
    description: 'Holistic foundational schooling emphasizing mathematics, science experiments, computational thinking, languages, arts, and physical education.',
    keyFeatures: ['Smart Interactive Classrooms', 'Science & Computer Technology Labs', 'Spoken English & Communication Skills', 'Regular Physical & Sports Activities'],
    link: '/programs/primary-secondary'
  },
  {
    id: 'prog-3',
    category: 'Primary & Secondary',
    name: 'Secondary Board Preparation (Classes 9th & 10th)',
    grades: 'Standard 9th & 10th (SSC & CBSE Board)',
    campuses: ['Achievers World School (Manmad)', 'Wisdom International School (Niphad)'],
    boardOrExam: 'CBSE Class X / Maharashtra State Board SSC',
    hostelAvailable: true,
    transportAvailable: true,
    description: 'Rigorous academic preparation for secondary board exams with continuous chapter-wise testing, remedial coaching, and concept mastery.',
    keyFeatures: ['Experienced Senior Faculty Mentors', 'Weekly Board Pattern Mock Tests', 'Personalized Weakness Analysis', 'Foundation Coaching for JEE/NEET'],
    link: '/programs/primary-secondary'
  },
  {
    id: 'prog-4',
    category: 'Higher Secondary',
    name: 'Higher Secondary Science (Classes 11th & 12th)',
    grades: 'Standard 11th & 12th Science Stream',
    campuses: ['Achievers IIT & Medical (Chandwad)', 'Achievers World School (Manmad)'],
    boardOrExam: 'Maharashtra State Board HSC & CBSE',
    hostelAvailable: true,
    transportAvailable: true,
    description: 'Comprehensive Science stream education in Physics, Chemistry, Mathematics, and Biology with fully equipped modern practical laboratories.',
    keyFeatures: ['State-of-the-Art Practical Labs', 'Qualified Master Faculty', 'Synchronized Board & Entrance Syllabus', 'Regular Practical & Theory Assessments'],
    link: '/programs/higher-secondary'
  },
  {
    id: 'prog-5',
    category: 'Competitive Entrance',
    name: '11th CET Integrated Program',
    grades: 'Standard 11th Science (PCM / PCB)',
    campuses: ['Achievers IIT & Medical (Chandwad)', 'Achievers World School (Manmad)'],
    boardOrExam: 'Maharashtra State Board + MHT-CET',
    hostelAvailable: true,
    transportAvailable: true,
    description: 'Two-year foundation program synchronizing 11th state board curriculum with MHT-CET shortcuts and weekly objective problem sessions.',
    keyFeatures: ['State Board Syllabus Synchronization', 'Weekly Chapter-wise MCQ Drills', 'Formula Booklets & Shortcut Workshops', 'Residential Hostels at Chandwad'],
    link: '/programs/competitive-exams#11th-cet'
  },
  {
    id: 'prog-6',
    category: 'Competitive Entrance',
    name: '11th JEE (Main & Advanced) 2-Year Program',
    grades: 'Standard 11th Science (PCM) + Engineering Aspirants',
    campuses: ['Achievers IIT & Medical (Chandwad)'],
    boardOrExam: 'NTA JEE Main & IIT JEE Advanced',
    hostelAvailable: true,
    transportAvailable: true,
    description: 'Kota-curriculum integrated foundation batch covering advanced mechanics, atomic structure, and calculus with daily practice problem sheets (DPP).',
    keyFeatures: ['Daily Practice Problem (DPP) Sheets', 'Bi-weekly Computer-Based Tests (CBT)', 'Dedicated Daily 2-Hour Doubt Solving Halls', 'Residential Boys & Girls Hostels with Night Study'],
    link: '/programs/competitive-exams#11th-jee'
  },
  {
    id: 'prog-7',
    category: 'Competitive Entrance',
    name: '11th NEET Medical 2-Year Comprehensive',
    grades: 'Standard 11th Science (PCB) + Medical Aspirants',
    campuses: ['Achievers IIT & Medical (Chandwad)'],
    boardOrExam: 'NTA NEET-UG (MBBS / BDS)',
    hostelAvailable: true,
    transportAvailable: true,
    description: 'Two-year intensive pre-medical foundation program featuring line-by-line NCERT Biology, human physiology, and conceptual physics problem sessions.',
    keyFeatures: ['100% NCERT Biology Line-by-Line Mastery', 'High-Yield Biological Diagram Drills', '720-Marks OMR Pattern Exam Series', 'Residential Hostels with Nutritious Diet'],
    link: '/programs/competitive-exams#11th-neet'
  },
  {
    id: 'prog-8',
    category: 'Competitive Entrance',
    name: '12th CET Rank Booster & Target Batch',
    grades: 'Standard 12th Science (PCM / PCB)',
    campuses: ['Achievers IIT & Medical (Chandwad)', 'Achievers World School (Manmad)'],
    boardOrExam: 'Maharashtra State CET Cell',
    hostelAvailable: true,
    transportAvailable: true,
    description: 'High-speed problem solving and full-length simulated exam drills covering 15 years of solved CET questions for COEP and VJTI cutoffs.',
    keyFeatures: ['15-Year Solved CET Question Bank Analysis', 'Timed 90-Minute Online Exam Simulations', 'High-Weightage Topic Mastery Drills', 'HSC Board Exam Synchronization'],
    link: '/programs/competitive-exams#12th-cet'
  },
  {
    id: 'prog-9',
    category: 'Competitive Entrance',
    name: '12th JEE Main & Advanced Target Batch',
    grades: 'Standard 12th Science (PCM) + Engineering Aspirants',
    campuses: ['Achievers IIT & Medical (Chandwad)'],
    boardOrExam: 'NTA JEE Main & IIT JEE Advanced',
    hostelAvailable: true,
    transportAvailable: true,
    description: 'One-year rank accelerator for Class 12 covering complete 12th advanced topics, comprehensive 11th revision, and national-level CBT mock tests.',
    keyFeatures: ['Full-Syllabus All-India CBT Test Series', 'Electrodynamics & Organic Reaction Drills', 'Personalized Weak-Area Score Optimization', 'Kota-Trained Senior Mentors'],
    link: '/programs/competitive-exams#12th-jee'
  },
  {
    id: 'prog-10',
    category: 'Competitive Entrance',
    name: '12th NEET Medical Target & Test Series',
    grades: 'Standard 12th Science (PCB) + Medical Aspirants',
    campuses: ['Achievers IIT & Medical (Chandwad)'],
    boardOrExam: 'NTA NEET-UG (MBBS / BDS)',
    hostelAvailable: true,
    transportAvailable: true,
    description: 'One-year target batch focused on 600+ score threshold for Government Medical Colleges with 100+ full-length 720-mark OMR mock exams.',
    keyFeatures: ['100+ Full-Length 720-Marks OMR Tests', 'Genetics, Ecology & Physiology Rapid Drills', 'Negative Marking Control & Time Management', 'Medical Seat Mentorship Track'],
    link: '/programs/competitive-exams#12th-neet'
  }
];

export default function AdminProgramsPage() {
  const [programs] = useState<ProgramItem[]>(PROGRAMS_DATA);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = programs.filter((p) => {
    if (categoryFilter !== 'all' && p.category !== categoryFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      return p.name.toLowerCase().includes(q) || p.boardOrExam.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
                <BookOpen className="w-5 h-5" />
              </span>
              <h1 className="text-2xl font-bold font-serif text-slate-900">
                Academic Programs &amp; Courses Manager
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Catalog of all academic streams: Pre-Primary, Primary, Secondary, Higher Secondary, and JEE/NEET/CET wings.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-bold">
              {programs.length} Academic Streams Configured
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm mb-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[280px]">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search program by name, syllabus or exam..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white text-slate-700"
            >
              <option value="all">All Academic Categories</option>
              <option value="Pre-Primary">Pre-Primary (Nursery - KG)</option>
              <option value="Primary & Secondary">Primary &amp; Secondary (1st - 10th)</option>
              <option value="Higher Secondary">Higher Secondary (11th - 12th)</option>
              <option value="Competitive Entrance">Competitive Entrance (JEE/NEET/CET)</option>
            </select>
          </div>

          <div className="text-xs font-semibold text-slate-500">
            Showing <span className="font-bold text-slate-900">{filtered.length}</span> programs
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:border-blue-400 transition flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    {prog.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {prog.boardOrExam}
                  </span>
                </div>

                <h3 className="text-base font-bold font-serif text-slate-900">{prog.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{prog.description}</p>

                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 space-y-1.5 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                    <span>Eligible Grades: {prog.grades}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Building2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span className="truncate">Campuses: {prog.campuses.join(', ')}</span>
                  </div>

                  <div className="flex items-center gap-4 pt-1 text-[11px]">
                    <span className="flex items-center gap-1 text-slate-600">
                      <Home className="w-3 h-3 text-indigo-500" />
                      Hostel: <strong className={prog.hostelAvailable ? 'text-indigo-600' : 'text-slate-400'}>{prog.hostelAvailable ? 'Yes' : 'No'}</strong>
                    </span>
                    <span className="flex items-center gap-1 text-slate-600">
                      <Bus className="w-3 h-3 text-teal-500" />
                      Transport: <strong className={prog.transportAvailable ? 'text-teal-600' : 'text-slate-400'}>{prog.transportAvailable ? 'Yes' : 'No'}</strong>
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1.5">Key Program Highlights</span>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {prog.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Admissions Open 2025-26
                </span>

                <Link
                  href={prog.link}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline"
                >
                  <span>View Public Page</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
