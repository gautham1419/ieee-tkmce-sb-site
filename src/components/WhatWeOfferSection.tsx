import { Book, Users, Mic, Award, Code, Briefcase, Rocket, Zap } from 'lucide-react';

const offerings = [
  { icon: Book, title: 'Technical Publications', description: 'Gain access to the IEEE Xplore Digital Library and stay updated with the latest research and publications.' },
  { icon: Users, title: 'Professional Development', description: 'Enhance your professional skills through workshops on resume building, interview preparation, and public speaking.' },
  { icon: Mic, title: 'Networking Opportunities', description: 'Connect with peers, faculty, and industry professionals at local and international IEEE events.' },
  { icon: Award, title: 'Technical Workshops', description: 'Participate in hands-on workshops and seminars on cutting-edge technologies and tools.' },
  { icon: Code, title: 'Project Competitions', description: 'Showcase your innovative projects and compete for recognition and prizes at various competitions.' },
  { icon: Briefcase, title: 'Hackathons & Coding', description: 'Challenge your coding skills and collaborate with peers in exciting hackathons and coding contests.' },
  { icon: Rocket, title: 'Career Support', description: 'Receive guidance and support for your career path, including internship and job opportunities.' },
  { icon: Zap, title: 'Leadership Opportunities', description: 'Develop your leadership skills by taking on roles in the student branch executive committee.' },
];

const WhatWeOfferSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((item, index) => (
            <div key={index} className="text-center p-6 border-b-4 border-transparent hover:border-blue-500 transition-colors duration-300">
              <div className="flex justify-center items-center mb-4">
                <item.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
