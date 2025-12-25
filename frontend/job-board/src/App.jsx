import React, { useState } from 'react';
import { 
  Briefcase, Monitor, FileText, User, Settings, 
  Menu, X, Heart, Share2, MapPin, DollarSign, 
  ChevronLeft, CheckCircle, Clock 
} from 'lucide-react';

// --- MOCK DATA ---
const JOBS_DATA = [
  {
    id: 1,
    title: "Web Application Developer",
    company: "Backd Business Funding",
    location: "Austin, Texas Metropolitan Area",
    type: "On-site",
    match: 64,
    matchColor: "text-yellow-500",
    ringColor: "border-yellow-400",
    tags: ["Full time", "0 of 3 skills match", "Mid Level"],
    salary: "$65/hr - $75/hr",
    posted: "1 hours ago",
    applicants: 25,
    description: "Collaborate and work closely with product management, engineering..."
  },
  {
    id: 2,
    title: "Software Engineer, Network Infrastructure",
    company: "Cursor AI",
    location: "Sunnyvale, CA",
    type: "On-site",
    match: 93,
    matchColor: "text-green-500",
    ringColor: "border-green-500",
    tags: ["Full time", "5+ years exp", "Mid Level"],
    salary: "$161K/yr - $239K/yr",
    posted: "2 hours ago",
    applicants: 15,
    description: "Design and implement high-performance network infrastructure..."
  },
  {
    id: 3,
    title: "Full-Stack Software Engineer (Web Developer)",
    company: "Simons Foundation",
    location: "New York, NY",
    type: "On-site",
    match: 82,
    matchColor: "text-lime-500",
    ringColor: "border-lime-400",
    tags: ["Full time", "5+ years exp", "Mid Level"],
    salary: "$125K/yr - $140K/yr",
    posted: "5 hours ago",
    applicants: 12,
    description: "Join our team to build scientific tools for the future..."
  }
];

// --- COMPONENTS ---

// 1. Sidebar (Responsive: Side on Desktop, Bottom Nav on Mobile)
const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'jobs', icon: Briefcase, label: 'Jobs' },
    { id: 'mock', icon: Monitor, label: 'AI Mock Interview' },
    { id: 'resume', icon: FileText, label: 'Resume' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'settings', icon: Settings, label: 'Setting' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r h-screen fixed left-0 top-0 p-6 z-20">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">J</div>
          <span className="text-xl font-bold tracking-tight">JobNova</span>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === item.id 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-purple-600'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Upgrade Card */}
        <div className="mt-auto bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-5 text-center text-white shadow-xl">
          <h4 className="font-bold text-lg mb-1">Upgrade Your Plan</h4>
          <p className="text-xs text-purple-100 mb-3">Boost your success rate now!</p>
          <button className="bg-white text-purple-600 text-xs font-bold py-2 px-4 rounded-full w-full hover:bg-opacity-90 transition">
            Subscription
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t flex justify-around py-3 z-50 pb-safe">
        {menuItems.slice(0, 4).map((item) => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1 ${activeTab === item.id ? 'text-purple-600' : 'text-gray-400'}`}
          >
            <item.icon size={20} />
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

// 2. Job Card Component
const JobCard = ({ job, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white rounded-2xl p-6 mb-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-4">
        {/* Match Circle */}
        <div className={`w-14 h-14 rounded-full border-4 ${job.ringColor} flex items-center justify-center flex-shrink-0 bg-white relative`}>
          <div className="text-center">
            <span className={`block text-sm font-bold ${job.matchColor}`}>{job.match}%</span>
            <span className="block text-[8px] text-gray-400 -mt-1">Match</span>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-lg text-gray-800 group-hover:text-purple-600 transition-colors">{job.title}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <Briefcase size={14} />
            <span>{job.company}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <MapPin size={14} />
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-purple-600 transition">
          <Share2 size={18} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-red-500 transition">
          <Heart size={18} />
        </button>
      </div>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-4">
      {job.tags.map((tag, i) => (
        <span key={i} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
          {tag}
        </span>
      ))}
      <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-100">
        {job.salary}
      </span>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
      <div className="text-xs text-gray-400 flex gap-3">
        <span>{job.posted}</span>
        <span>•</span>
        <span>{job.applicants} applicants</span>
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition">Apply</button>
        <button 
          onClick={(e) => { e.stopPropagation(); }} 
          className="px-4 py-2 text-sm font-medium text-white bg-lime-400 hover:bg-lime-500 rounded-lg shadow-sm shadow-lime-200 transition"
        >
          Mock Interview
        </button>
      </div>
    </div>
  </div>
);

// 3. Right Sidebar (Widgets)
const RightPanel = ({ isDetail }) => {
  if (isDetail) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4">Why is this job a good fit?</h3>
        
        {/* Animated Score Bars */}
        {[{ label: 'Education', val: '95%' }, { label: 'Work Exp', val: '80%' }, { label: 'Skills', val: '90%' }].map((item, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between text-xs mb-1 font-semibold text-gray-600">
                <span>{item.label}</span>
                <span>{item.val}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: item.val }}
                ></div>
              </div>
            </div>
        ))}
        
        <div className="mt-6 p-4 bg-purple-50 rounded-xl">
           <div className="flex items-center gap-2 mb-2">
             <CheckCircle size={16} className="text-green-500" />
             <span className="text-sm font-bold text-gray-800">Relevant Experience</span>
           </div>
           <p className="text-xs text-gray-600 leading-relaxed">
             You have substantial experience as a UX designer, aligning well with the seniority requirements.
           </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-b from-white to-purple-50 p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="mb-4 text-purple-600">
        <Monitor size={32} />
      </div>
      <h3 className="font-bold text-gray-800 text-lg mb-2">Ace Your Interviews with AI-Powered Mock Sessions!</h3>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
        Struggling with interview nerves? Let our cutting-edge AI coach help you shine.
      </p>
      
      <div className="space-y-4">
        <div className="flex gap-3">
           <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0"></div>
           <div>
             <h4 className="text-sm font-bold">Job-Specific Simulations</h4>
             <p className="text-xs text-gray-500">Practice with questions tailored to your target role.</p>
           </div>
        </div>
        <div className="flex gap-3">
           <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0"></div>
           <div>
             <h4 className="text-sm font-bold">Actionable Feedback</h4>
             <p className="text-xs text-gray-500">Get detailed analysis of your responses.</p>
           </div>
        </div>
      </div>

      <button className="w-full mt-6 bg-gray-900 text-white py-3 rounded-xl text-sm font-bold hover:bg-gray-800 transition shadow-lg">
        Mock Interview
      </button>
    </div>
  );
};

// 4. Job Detail View
const JobDetail = ({ job, onBack }) => (
  <div className="animate-fade-in-up">
    {/* Header */}
    <div className="flex items-center gap-4 mb-6">
       <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition">
         <ChevronLeft size={24} />
       </button>
       <div className="flex-1">
         <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
            <div className="w-12 h-12 rounded-full border-4 border-green-500 flex items-center justify-center text-green-600 font-bold bg-white text-xs">
               93%
            </div>
         </div>
         <p className="text-gray-500 text-sm">{job.company} • {job.location}</p>
       </div>
    </div>

    {/* Green Promo Banner */}
    <div className="bg-lime-300 rounded-xl p-6 mb-8 relative overflow-hidden">
       <div className="relative z-10 flex justify-between items-center">
         <div>
            <h3 className="font-bold text-gray-900 mb-1">Maximize your interview success</h3>
            <p className="text-sm text-gray-800 opacity-80 max-w-md">
              Our platform simulates real interview scenarios, helping you refine your responses.
            </p>
         </div>
         <button className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition">
           Start Interview
         </button>
       </div>
    </div>

    {/* Qualifications Section */}
    <div className="mb-8">
      <h3 className="font-bold text-lg mb-3">Qualification</h3>
      <p className="text-sm text-gray-500 mb-4">Discover how your skills align with the requirements of this position.</p>
      <div className="flex flex-wrap gap-2">
        {['Figma', 'User Research', 'Prototyping', 'HTML/CSS', 'Agile', 'Wireframing'].map(skill => (
          <span key={skill} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Details Text */}
    <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
       <div>
         <h3 className="font-bold text-lg mb-2 text-gray-900">Required</h3>
         <ul className="list-disc pl-5 space-y-1">
           <li>5+ years of design experience</li>
           <li>3+ years of delivering design solutions as a UX designer</li>
           <li>Experience prototyping with HTML, CSS, JavaScript</li>
         </ul>
       </div>
       <div>
         <h3 className="font-bold text-lg mb-2 text-gray-900">Responsibilities</h3>
         <p>Collaborate and work closely with product management, engineering, and sales to design solutions...</p>
       </div>
    </div>
  </div>
);


// --- MAIN APP ---
const App = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen bg-[#FAFAFB] text-gray-900 font-sans md:pl-64">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content Area */}
      <main className="p-4 md:p-8 max-w-7xl mx-auto">
        
        {/* Top Header (Mobile Only) */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">J</div>
            <span className="font-bold text-lg">JobNova</span>
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
             <img src="/api/placeholder/32/32" alt="Profile" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Center Feed */}
          <div className="lg:col-span-2">
            {!selectedJob ? (
              <>
                {/* Dashboard Tabs */}
                <div className="flex items-center gap-4 mb-6 overflow-x-auto no-scrollbar">
                   {['Matched', 'Liked', 'Applied'].map((tab, i) => (
                     <button key={tab} className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition ${
                       i === 0 ? 'bg-white text-purple-600 shadow-sm ring-1 ring-purple-100' : 'text-gray-400 hover:text-gray-600'
                     }`}>
                       {tab} {i > 0 && <span className="ml-1 w-2 h-2 bg-lime-400 rounded-full inline-block align-middle"></span>}
                     </button>
                   ))}
                </div>
                
                {/* Filters Bar */}
                <div className="bg-purple-500 rounded-xl p-4 mb-6 flex justify-between items-center text-white shadow-lg shadow-purple-200">
                  <span className="font-medium text-sm flex items-center gap-2">
                    <Clock size={16} /> Change Job Reference
                  </span>
                  <button className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-xs font-bold transition">
                    Top matched
                  </button>
                </div>

                {/* Job List */}
                <div className="space-y-4 pb-20 md:pb-0">
                  {JOBS_DATA.map(job => (
                    <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job)} />
                  ))}
                </div>
              </>
            ) : (
              // Detail View
              <JobDetail job={selectedJob} onBack={() => setSelectedJob(null)} />
            )}
          </div>

          {/* Right Sidebar (Responsive: Hidden on small tablets, moves to bottom on mobile) */}
          <div className="hidden lg:block">
             <RightPanel isDetail={!!selectedJob} />
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default App;