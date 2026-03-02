import React from 'react'; 
import { BiCheckCircle, BiCode, BiCoffee, BiMessageSquare } from 'react-icons/bi';
import { FaUserSecret } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  borderColor: string;
}

interface TimelineEvent {
  id: number;
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  timeColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Anika Rahman',
    role: 'Senior Software Engineer',
    quote: '"At Betopia, I get to work on meaningful projects and grow faster than ever."',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    borderColor: 'border-purple-500'
  },
  {
    id: 2,
    name: 'Rafiq Ahmed',
    role: 'DevOps Lead',
    quote: '"The collaborative culture here pushes me to be my best self every single day."',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    borderColor: 'border-blue-500'
  },
  {
    id: 3,
    name: 'Nadia Hassan',
    role: 'Product Designer',
    quote: '"Innovation and creativity are encouraged here. I love the freedom to explore new ideas."',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    borderColor: 'border-pink-500'
  }
];

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    time: '10:00 AM',
    title: 'Standup Meeting',
    description: 'Quick sync with the team',
    icon: <FaUserSecret className="w-6 h-6 text-white" />,
    iconBg: 'bg-[#FF9500]',
    timeColor: 'text-[#FF9500]'
  },
  {
    id: 2,
    time: '11:00 AM',
    title: 'Deep Work Sessions',
    description: 'Focused coding time',
    icon: <BiCode className="w-6 h-6 text-white" />,
    iconBg: 'bg-purple-500',
    timeColor: 'text-purple-500'
  },
  {
    id: 3,
    time: '2:00 PM',
    title: 'Team Collaboration',
    description: 'Brainstorm together',
    icon: <BiMessageSquare className="w-6 h-6 text-white" />,
    iconBg: 'bg-blue-500',
    timeColor: 'text-blue-500'
  },
  {
    id: 4,
    time: '5:00 PM',
    title: 'Code Review',
    description: 'Quietly check & feedback',
    icon: <BiCheckCircle className="w-6 h-6 text-white" />,
    iconBg: 'bg-green-500',
    timeColor: 'text-green-500'
  },
  {
    id: 5,
    time: '7:00 PM',
    title: 'Chill & Coffee',
    description: 'Unwind and connect',
    icon: <BiCoffee className="w-6 h-6 text-white" />,
    iconBg: 'bg-pink-500',
    timeColor: 'text-pink-500'
  }
];

const TeamSections: React.FC = () => {
  return (
    <div className=" bg-white">
      {/* Testimonials Section */}
      {/* <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hear From Our <span className="text-[#FF9500]">Team</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Real stories from the people who make Betopia special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-full border-4 ${testimonial.borderColor} mb-4 overflow-hidden shadow-lg`}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-[#FF9500] mb-4">{testimonial.role}</p>
                <p className="text-gray-600 italic leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Day Timeline Section */}
      <section className="py-10 lg:py-20 px-4 bg-linear-to-b from-orange-50 to-white">
        <div className="max-w-7xl w-11/12 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl lg:text-[52px] font-bold text-gray-900 mb-4">
              A Day at <span className="text-[#FF9500]">Betopia</span>
            </h2>
            <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-4  mb-5" />
            <p className="text-gray-600 text-lg md:text-xl lg:text-2xl">
              From morning standups to evening coffee - here&apos;s what a typical day looks like
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {timelineEvents.map((event) => (
              <div key={event.id} className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${event.iconBg} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                  {event.icon}
                </div>
                <p className={`text-2xl font-bold ${event.timeColor} mb-3`}>
                  {event.time}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSections;