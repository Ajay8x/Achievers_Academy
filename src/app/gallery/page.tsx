'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Camera, Image as ImageIcon, Filter, Sparkles } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Laboratories' | 'Classrooms' | 'Activities';
  src: string;
  campus: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Achievers World School Campus Infrastructure',
    category: 'Infrastructure',
    src: '/images/static_achivers.jpg',
    campus: 'Manmad'
  },
  {
    id: 'g-2',
    title: 'Achievers IIT & Medical Main Building',
    category: 'Infrastructure',
    src: '/images/static_Chandwad.jpeg',
    campus: 'Chandwad'
  },
  {
    id: 'g-3',
    title: 'Wisdom International School Green Campus',
    category: 'Infrastructure',
    src: '/images/static_Niphad.jpeg',
    campus: 'Niphad'
  },
  {
    id: 'g-4',
    title: 'Advanced Computer & Coding Laboratory',
    category: 'Laboratories',
    src: '/images/static_Gallery_Computar_Lab_comp_lab_31_-_Photo.jpg',
    campus: 'Manmad / Niphad'
  },
  {
    id: 'g-5',
    title: 'Physics Experimental Research Lab',
    category: 'Laboratories',
    src: '/images/static_physics__lab_36_-_Photo.jpg',
    campus: 'Chandwad'
  },
  {
    id: 'g-6',
    title: 'Chemistry Laboratory & Reaction Stations',
    category: 'Laboratories',
    src: '/images/static_Gallery_Chemistry_Lab_Day_view_1_-_Photo.jpg',
    campus: 'Chandwad'
  },
  {
    id: 'g-7',
    title: 'Biology & Life Sciences Specimen Lab',
    category: 'Laboratories',
    src: '/images/static_Gallery_Biology_Lab_Day_view_6_-_Photo.jpg',
    campus: 'Niphad / Chandwad'
  },
  {
    id: 'g-8',
    title: 'Grand Cultural & Performing Arts Auditorium',
    category: 'Activities',
    src: '/images/static_Gallery_auditorium_Auditorium-1_41_-_Photo.jpg',
    campus: 'Niphad'
  },
  {
    id: 'g-9',
    title: 'Vibrant Toddler Activity & Discovery Room',
    category: 'Classrooms',
    src: '/images/static_Toddler_Room_19_-_Photo.jpg',
    campus: 'Manmad'
  },
  {
    id: 'g-10',
    title: 'Interactive Smart Classroom Jr. KG',
    category: 'Classrooms',
    src: '/images/static_Gallery_Classroom_Jr._KG_img1.jpg',
    campus: 'Manmad'
  },
  {
    id: 'g-11',
    title: 'Annual Sports Day & Outdoor Field Activities',
    category: 'Activities',
    src: '/images/static_Gallery_activities_activity14.jpg',
    campus: 'Niphad'
  },
  {
    id: 'g-12',
    title: 'Campus Frontage & Green Landscaping',
    category: 'Infrastructure',
    src: '/images/static_Gallery_infra_1.jpg',
    campus: 'Manmad'
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Infrastructure', 'Laboratories', 'Classrooms', 'Activities'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/20 text-gold-400 border border-gold-400/30 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-4 h-4 text-gold-400" />
            <span>Campus Visuals</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Campus Infrastructure &amp; Life Gallery
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Take a visual tour through our modern classrooms, high-tech science laboratories, sports fields, auditoriums, and hostel facilities across all three campuses.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeCategory === cat
                  ? 'bg-navy-950 text-gold-400 shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-3xl overflow-hidden bg-navy-950 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-1 text-gold-400">
                    <span>{item.category}</span>
                    <span className="bg-white/20 text-white px-2 py-0.5 rounded-full backdrop-blur-xs">
                      {item.campus}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold font-serif leading-tight">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="relative max-h-[75vh] bg-black flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-navy-950 text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-gold-400 font-bold uppercase tracking-wider">
                  {selectedImage.category} • {selectedImage.campus}
                </span>
                <h3 className="text-lg font-bold font-serif mt-1">{selectedImage.title}</h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

