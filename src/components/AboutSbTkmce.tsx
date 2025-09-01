import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const AboutSbTkmce = () => {
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img 
            src="/images/aboutus.JPG" 
            alt="IEEE SB TKMCE Team" 
            className="rounded-lg shadow-xl w-full h-auto"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">About IEEE SB TKMCE</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The IEEE Student Branch at TKM College of Engineering is a vibrant community of students dedicated to exploring the frontiers of technology. We provide a platform for members to develop their technical skills, engage in professional networking, and participate in a wide range of activities, from hands-on workshops and coding competitions to inspiring talks from industry leaders. Our goal is to foster innovation and prepare the next generation of engineers and technology leaders.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSbTkmce;
