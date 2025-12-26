// src/JobDescription.jsx
import React from 'react';
import {
  MapPin, Clock, Monitor, Briefcase, DollarSign, User,
  Calendar, Users, Globe, ChevronLeft, Sparkles
} from 'lucide-react';

// We accept 'onBack' as a prop here
const JobDescription = ({ onBack }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 font-sans animate-fade-in-up">
      
      {/* --- BACK BUTTON --- */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-purple-600 mb-6 transition-colors font-medium"
      >
        <ChevronLeft size={20} />
        Back to Jobs
      </button>

      {/* --- HEADER SECTION --- */}
      <header className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div className="flex-1">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded-md mb-3">
            2 hours ago
          </span>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white border rounded-full flex items-center justify-center p-2 shadow-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Company Logo" className="w-full h-full" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">UX Designer</h1>
              <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                <span>Company name</span>
                <span>•</span>
                <MapPin size={14} /> <span>Ann Arbor, MI</span>
                <span>•</span>
                <span>3 days ago</span>
                <span>•</span>
                <Monitor size={14} /> <span>Remote</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-600 mt-2">
            <div className="flex items-center gap-1"><MapPin size={16} className="text-gray-400"/> United States</div>
            <div className="flex items-center gap-1"><Briefcase size={16} className="text-gray-400"/> Internship</div>
            <div className="flex items-center gap-1"><Monitor size={16} className="text-gray-400"/> Remote</div>
            <div className="flex items-center gap-1"><Clock size={16} className="text-gray-400"/> 5+ years exp</div>
            <div className="flex items-center gap-1"><DollarSign size={16} className="text-gray-400"/> $90K/yr - $130K/yr</div>
            <div className="flex items-center gap-1"><User size={16} className="text-gray-400"/> Mid Level</div>
          </div>
        </div>

        <div className="mt-6 md:mt-0 flex-shrink-0">
          <div className="w-20 h-20 rounded-full border-4 border-[#D6F379] flex flex-col items-center justify-center bg-white">
            <span className="text-2xl font-bold text-lime-700">93%</span>
            <span className="text-xs text-gray-400">Match</span>
          </div>
        </div>
      </header>

      <hr className="border-gray-100 mb-8" />

      {/* Content Body */}
      <p className="text-gray-600 leading-relaxed mb-8">
        Job description Job description Job description Job description...
      </p>

      {/* --- PROMO BANNER --- */}
      <div className="bg-[#D6F379] rounded-2xl p-6 md:p-8 mb-10">
        <div className="flex items-center gap-2 mb-3">
            <Sparkles className="text-lime-800" />
            <h3 className="text-xl font-bold text-lime-900">Maximize your interview success</h3>
        </div>
        <p className="text-lime-900/80 mb-6 max-w-2xl">
          Our platform simulates real interview scenarios...
        </p>
        <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-xl transition">
            Start Interview
        </button>
      </div>

      {/* --- DETAILS SECTIONS --- */}
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Qualification</h3>
          <div className="flex flex-wrap gap-2">
            {['Accidental Death and Dismemberment (AD&D)', 'Amazon Web Services (AWS)', 'Analysis Skills', 'DevOps'].map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {skill}
                </span>
            ))}
          </div>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-2">
            <li>Collaborate and work closely with product management...</li>
            <li>Work in a start-up style environment...</li>
            </ul>
        </section>

         <hr className="border-gray-100 my-8" />

        <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Company</h3>
            <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-xl flex-shrink-0"></div>
                <div>
                    <h4 className="text-lg font-bold">Company name</h4>
                    <p className="text-sm text-gray-500">Founded in 1979 • Carlsbad, California, US</p>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default JobDescription;