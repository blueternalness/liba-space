import React from 'react';
import {
  MapPin,
  Clock,
  Monitor,
  Briefcase,
  DollarSign,
  User,
  Calendar,
  Users,
  Globe,
  ChevronLeft,
  Sparkles
} from 'lucide-react';

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
           {/* Top Tag */}
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded-md mb-3">
            3 days ago
          </span>
          
          <div className="flex items-start gap-4">
             {/* Logo Placeholder */}
            <div className="w-12 h-12 bg-white border rounded-full flex items-center justify-center p-2 shadow-sm">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Company Logo" className="w-full h-full" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">UX Designer</h1>
              <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                <span className="font-medium text-gray-900">Google</span>
                <span>•</span>
                <MapPin size={14} /> <span>Ann Arbor, MI</span>
                <span>•</span>
                <span>3 days ago</span>
                <span>•</span>
                <Monitor size={14} /> <span>Remote</span>
              </div>
            </div>
          </div>

          {/* Job Key Details Tags */}
          <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-600 mt-2">
            <div className="flex items-center gap-1"><MapPin size={16} className="text-gray-400"/> United States</div>
            <div className="flex items-center gap-1"><Briefcase size={16} className="text-gray-400"/> Internship</div>
            <div className="flex items-center gap-1"><Monitor size={16} className="text-gray-400"/> Remote</div>
            <div className="flex items-center gap-1"><Clock size={16} className="text-gray-400"/> 5+ years exp</div>
            <div className="flex items-center gap-1"><DollarSign size={16} className="text-gray-400"/> $90K/yr - $130K/yr</div>
            <div className="flex items-center gap-1"><User size={16} className="text-gray-400"/> Mid Level</div>
          </div>
        </div>

        {/* Match Score Circle */}
        <div className="mt-6 md:mt-0 flex-shrink-0">
          <div className="w-20 h-20 rounded-full border-4 border-[#D6F379] flex flex-col items-center justify-center bg-white relative">
            <span className="text-2xl font-bold text-lime-700">93%</span>
            <span className="text-[10px] text-gray-400 -mt-1 uppercase tracking-wide">Match</span>
          </div>
        </div>
      </header>

      <hr className="border-gray-100 mb-8" />

      {/* Intro Text */}
      <p className="text-gray-600 leading-relaxed mb-8">
        Google User Experience (UX) is made up of multi-disciplinary teams of UX Designers, Researchers, Writers, Content Strategists, Program Managers, and Engineers: we care deeply about the people who use our products. The UX team plays an integral part in gathering insights about the attitudes, emotions, and behaviors of people who use our products to inspire and inform design. We collaborate closely with each other and with engineering and product management to create industry-leading products that deliver value for the people who use them, and for Google’s businesses. 
        
        As an Interaction Designer, you’ll rely on user-centered design methods to craft industry-leading user experiences—from concept to execution. Like all of our UX jobs, you’ll collaborate with your design partners to leverage and evolve the Google design language to build beautiful, innovative, inspired products that people love to use.
      </p>

      {/* --- PROMO BANNER --- */}
      <div className="bg-[#D6F379] rounded-2xl p-6 md:p-8 mb-10 relative overflow-hidden">
        {/* Robot Icon / Sparkles */}
        <div className="flex items-center gap-3 mb-3 relative z-10">
            <div className="p-2 bg-lime-800 rounded-lg text-white">
               <Sparkles size={20} />
            </div>
            <h3 className="text-xl font-bold text-lime-900">Maximize your interview success</h3>
        </div>
        
        <p className="text-lime-900/80 mb-6 max-w-2xl relative z-10 font-medium">
          Our platform simulates real interview scenarios, helping you refine your responses and boost your confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
          <div>
            <h4 className="font-bold text-lime-900 mb-1">Job-Specific Simulations:</h4>
            <p className="text-sm text-lime-900/70 leading-snug">Practice with questions tailored to your target role, ensuring relevance and preparation.</p>
          </div>
          <div>
            <h4 className="font-bold text-lime-900 mb-1">Actionable Feedback:</h4>
            <p className="text-sm text-lime-900/70 leading-snug">Get detailed analysis of your responses and practical, step-by-step improvement suggestions.</p>
          </div>
          <div>
            <h4 className="font-bold text-lime-900 mb-1">Boost Success Rates:</h4>
            <p className="text-sm text-lime-900/70 leading-snug">Perfect your interview skills and increase your chances of landing the job you want.</p>
          </div>
        </div>
        
        <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-xl transition shadow-lg relative z-10">
            Start Interview
        </button>
      </div>

      {/* --- MAIN CONTENT SECTIONS --- */}
      <div className="space-y-10 text-gray-700 leading-relaxed">
        
        {/* Qualification Tags */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Qualification</h3>
          <p className="text-sm text-gray-500 mb-4">Discover how your skills align with the requirements of this position. Below is a detailed list of the essential skills needed for the role.</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Accidental Death and Dismemberment (AD&D)', 
              'Amazon Web Services (AWS)', 
              'Analysis Skills', 
              'DevOps', 
              'Apache ActiveMQ', 
              'Application Programming Interface (API)', 
              'Call Center', 
              'Change Control'
            ].map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-full transition-colors cursor-default">
                    {skill}
                </span>
            ))}
          </div>
        </section>

        {/* Required */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Required</h3>
          <ul className="space-y-3 list-disc pl-5 marker:text-gray-400">
            <li>3+ years of design experience</li>
            <li>3+ years of delivering design solutions as a UX designer or interaction designer experience</li>
            <li>Have an available online portfolio</li>
            <li>Experience prototyping (HTML, XHTML, JavaScript, CSS, Flash or Flash Catalyst, or Axure)</li>
          </ul>
        </section>

        {/* Preferred */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Preferred</h3>
          <ul className="space-y-3 list-disc pl-5 marker:text-gray-400">
            <li>2+ years of mass-market consumer web / mobile products experience</li>
            <li>Experience working in a collaborative team and working directly with developers for implementation of designs</li>
          </ul>
        </section>

        {/* Responsibilities */}
        <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Responsibilities</h3>
            <ul className="space-y-4 list-disc pl-5 marker:text-gray-400">
              <li>Collaborate and work closely with product management, engineering, sales, and research from design concept to design solution, setting UX guidelines and driving cross-team collaboration and sharing, as well as establish best practices for interaction models and user interface designs throughout the team.</li>
              <li>Work in a start-up style environment, where iteration is encouraged and design acumen is demonstrated through design end-to-end product ownership.</li>
              <li>Communicate complex, interactive design concepts clearly and persuasively across different audiences and varying levels of the organization through excellent communication, presentation, interpersonal and analytical skills.</li>
              <li>Earn trust with product managers to develop shared vision and use research and data to identify opportunities and inform decisions.</li>
            </ul>
        </section>

        {/* Benefits */}
        <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
            <p className="mb-6 text-gray-600">We believe happy team members create amazing work. Here’s what we offer to make that happen:</p>
            <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">🏠</span> 
                  <span><strong>Remote Flexibility:</strong> Work from wherever you’re most productive and happy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">📈</span> 
                  <span><strong>Equity Options:</strong> Become a shareholder through our stock options plan after 6 months.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">💳</span> 
                  <span><strong>Meal Vouchers:</strong> Enjoy an €8/day meal voucher to make your lunch break even better.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">🍴</span> 
                  <span><strong>Lunch at the Office:</strong> If you’re in Bologna, we have lunch together at the office, and it is on us!</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">⚕️</span> 
                  <span><strong>Health Coverage:</strong> Comprehensive support through the Metasalute Health Assistance Fund.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">🎂</span> 
                  <span><strong>Birthday Bliss:</strong> Celebrate your day with an extra day off, just for you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">🧠</span> 
                  <span><strong>Mental Wellness:</strong> Free access to iFeel, our psychological support platform.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">🌎</span> 
                  <span><strong>International Environment:</strong> Grow your language skills while working with a diverse and global team.</span>
                </li>
            </ul>
        </section>

         <hr className="border-gray-100 my-10" />

        {/* Company Section */}
        <section>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Similar Jobs</h3>
            <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex-shrink-0 border border-gray-200"></div>
                <div>
                    <h4 className="text-lg font-bold text-gray-900">Kforce</h4>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 mt-2">
                        <div className="flex items-center gap-2"><Calendar size={16}/> Founded in 1979</div>
                        <div className="flex items-center gap-2"><MapPin size={16}/> Carlsbad, California, US</div>
                        <div className="flex items-center gap-2"><Users size={16}/> 1001-5000 employees</div>
                        <div className="flex items-center gap-2"><Globe size={16}/> Website</div>
                    </div>
                </div>
            </div>
            <p className="text-sm leading-7 text-gray-600 bg-gray-50 p-6 rounded-xl border border-gray-100">
              Kforce has a client that is seeking a UI/UX Developer in Madison, WI. Overview: In brief, we a handful of AI-powered tools for our workforce which could use a facelift to improve the overall user experience. In an ideal scenario, we would love to bring on someone that has the skills to work directly in our codebases (engineering skills) while they make improvements to the UI/UX based on their knowledge of best practices. We currently have three tools that users are interacting with; one is an Edge browser extension (JavaScript), one is using Streamlit web application (python currently but we'd be open to migrating this to some React/Angular/other framework), and the other is a basic React web application.
            </p>
        </section>
      </div>
    </div>
  );
};

export default JobDescription;