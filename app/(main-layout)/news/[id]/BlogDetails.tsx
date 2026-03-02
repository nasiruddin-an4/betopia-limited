import React from 'react'; 
import { BiCalendar, BiCloud, BiMapPin, BiTrendingUp } from 'react-icons/bi';
import { CgLock } from 'react-icons/cg';
import { FaUserSecret } from 'react-icons/fa';
import { GiLightBulb } from 'react-icons/gi';

const BlogDetaills = () => {
  const speakers = [
    { name: "Mr. Rezwanul Hoque", title: "CEO of Geekbolt" },
    { name: "Mr. Kamrul Ahmemd", title: "Head of Business - IPDC Technologies Ltd" },
    { name: "Engr. M. Zayedhasan", title: "Former CTO of Grameenphone" },
    { name: "Mr. Syed Almas Kabir", title: "President of BASIS" },
    { name: "Mr. Farhad Bin Inam", title: "Managing Director of Singapore Business Federation" },
    { name: "Dr. Annabelle Gawer", title: "Renowned Researcher and professor in digital platforms and ecosystems at University of Surrey" }
  ];

  const programHighlights = [
    "Cost efficiency in technology",
    "Insights into tech trends",
    "Experienced speakers from the industry",
    "Networking opportunities with fellow tech leaders"
  ];

  const targetAudience = [
    "CTOs and Tech Leaders",
    "Product Managers",
    "Engineering Managers",
    "Software Quality Leaders (CQO)",
    "IT Decision Makers",
    "Innovation Heads",
    "Technology Directors and VPs",
    "Technical advisors and coaches"
  ];

 
  const challenges = [
    {
      icon: <GiLightBulb className="w-6 h-6 text-[#FF9500]" />,
      title: "Innovation Cost & Security",
      description: "Balancing innovation budgets while maintaining robust security measures"
    },
    {
      icon: <BiCloud className="w-6 h-6 text-[#FF9500]" />,
      title: "Cloud Migration",
      description: "Seamlessly transitioning legacy systems to modern cloud infrastructure"
    },
    {
      icon: <BiTrendingUp className="w-6 h-6 text-[#FF9500]" />,
      title: "Scalability",
      description: "Building systems that scale efficiently with business growth"
    },
    {
      icon: <FaUserSecret className="w-6 h-6 text-[#FF9500]" />,
      title: "Talent Acquisition",
      description: "Finding and retaining top technical talent in a competitive market"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-yellow-50 p-4 md:py-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content - Scrollable */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#FF9500] mb-6">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                On <span className="font-semibold">Feb 13, 2024</span>, Stack Man in collaboration with the Asia-Geo Enterprises 
                (Singapore) is honored to convene an exclusive workshop tailored for CTOs and 
                Tech leaders. This pivotal event will delve into critical topics such as cost-effective 
                technology solutions, growth hacking strategies, and the latest tech trends shaping 
                the industry.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Attendees can expect insightful discussions led by seasoned experts, exploring 
                innovative approaches to drive efficiency and strategic growth in technology 
                environments.
              </p>
            </section>

            {/* Distinguished Guests & Speakers */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#FF9500] mb-6">Distinguished Guests & Speakers</h2>
              <p className="text-gray-700 mb-6">
                This workshop brought together 150+ network and influencers leaders from Tech-Bangla 
                Group and other organizations to discuss pressing challenges including:
              </p>
              <div className="space-y-4">
                {speakers.map((speaker, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border-2 border-orange-200 rounded-xl hover:border-orange-400 transition-colors">
                    <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{speaker.name}</h3>
                      <p className="text-sm text-gray-600">{speaker.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Program Highlights */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#FF9500] mb-6">Program Highlights</h2>
              <div className="space-y-3">
                {programHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Target Audience */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#FF9500] mb-6">Target Audience</h2>
              <p className="text-gray-700 mb-6">This workshop is specifically designed for:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">{audience}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Organizer & Partners */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#FF9500] mb-6">Organizer & Partners</h2>
              <div className="text-center py-8">
                <p className="text-gray-500 italic">Organization logos would appear here</p>
              </div>
            </section>



            <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Expert Hosting Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#FF9500] mb-4">
            Expert Hosting & Instructions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Each of our panels will outline best practices for business security having a 
            discussion and Q&A led by a world-renowned expert in the field. Attendees will 
            have the opportunity to engage directly with industry leaders, gaining valuable 
            insights into emerging technologies, risk mitigation strategies, and innovative 
            approaches to digital transformation. Our expert hosts will facilitate interactive 
            sessions designed to foster collaboration and knowledge sharing among peers.
          </p>
        </section>

        {/* Targeted Challenges Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#FF9500] mb-2">
            Targeted Challenges
          </h2>
          <p className="text-gray-600 mb-8">
            The workshop addresses key challenges facing technology leaders:
          </p>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div 
                key={index}
                className="bg-linear-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="bg-[#AF90E11A] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-[#FF9500] mb-4">
            Conclusion
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you&apos;re seeking to optimize operational efficiency, adopt cutting-edge 
            technologies, or navigate complex cybersecurity landscapes, this workshop offers 
            a unique opportunity to learn from the best and network with peers facing similar 
            challenges. Don&apos;t miss this exclusive event that promises to equip you with 
            actionable strategies essential for success in today&apos;s dynamic tech landscape.
          </p>
        </section>
      </div>
    </div>
          </div>

          {/* Right Sidebar - Fixed on Large Devices */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-6">Event Information</h3>
                
                {/* Date & Time */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <BiCalendar className="w-5 h-5 text-orange-400" />
                    <span className="font-semibold text-orange-400">Date & Time</span>
                  </div>
                  <p className="text-sm ml-8">📅 Feb, 2024</p>
                  <p className="text-sm ml-8">3:00 PM - 6:00 PM</p>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <BiMapPin className="w-5 h-5 text-orange-400" />
                    <span className="font-semibold text-orange-400">Location</span>
                  </div>
                  <p className="text-sm ml-8">Hotel Sheraton, Dhaka</p>
                </div>

                {/* Organizer */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <CgLock className="w-5 h-5 text-orange-400" />
                    <span className="font-semibold text-orange-400">Organizer</span>
                  </div>
                  <p className="text-sm ml-8">LOgix Tech Leaders</p>
                </div>

                {/* Register Button */}
                <button className="w-full bg-linear-to-r from-[#FF9500] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg">
                  Register for Next Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetaills;