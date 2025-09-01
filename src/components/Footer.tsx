import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const linkSections = {
    "Quick Links": [
      { name: "IEEE.org", href: "https://www.ieee.org" },
      { name: "IEEE Xplore Digital Library", href: "https://ieeexplore.ieee.org" },
      { name: "IEEE Collabratec", href: "https://ieee-collabratec.ieee.org" },
      { name: "IEEE Region 10", href: "https://r10.ieee.org" },
      { name: "IEEE Kerala Section", href: "https://ieee-kerala.org" },
    ],
    "Membership": [
      { name: "Join IEEE", href: "https://www.ieee.org/membership/join/index.html" },
      { name: "Join IEEE Society", href: "https://www.ieee.org/membership/societies.html" },
      { name: "Renew Membership", href: "https://www.ieee.org/membership/renew.html" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/ieeesbtkmce/" },
    { icon: Twitter, href: "https://twitter.com/IEEEsbTKMCE" },
    { icon: Instagram, href: "https://www.instagram.com/ieeesbtkmce/" },
    { icon: Linkedin, href: "https://in.linkedin.com/company/ieee-sb-tkmce" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-8 mb-10 sm:mb-12">
          {/* Logo and About Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-4 sm:gap-5 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0">
                <img 
                  src="/images/ieeelogoblue.png" 
                  alt="IEEE Logo" 
                  className="h-full w-auto object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full bg-blue-600 rounded-lg flex items-center justify-center';
                    fallback.innerHTML = '<span class="text-white font-bold text-sm sm:text-base">IEEE</span>';
                    target.parentNode?.insertBefore(fallback, target);
                  }}
                />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">IEEE SB TKMCE</h2>
                <p className="text-xs sm:text-sm text-gray-400">TKM College of Engineering</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 text-gray-400">
              A community of students and young professionals dedicated to advancing technology for the benefit of humanity.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`${social.icon.name} link`}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Section */}
          <div className="lg:col-span-2 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-8">
            {Object.entries(linkSections).map(([title, links]) => (
              <div key={title} className="space-y-3 sm:space-y-4">
                <h3 className="font-semibold text-white text-base sm:text-lg">{title}</h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs xs:text-sm text-gray-400 hover:text-white transition-colors inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Contact Section */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-semibold text-white text-base sm:text-lg">Contact Us</h3>
              <div className="space-y-2 sm:space-y-2.5 text-xs xs:text-sm">
                <p className="text-gray-400">Dr. Binu P J (INEB)</p>
                <a 
                  href="mailto:ieeesbtkmce@gmail.com" 
                  className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>ieeesbtkmce@gmail.com</span>
                </a>
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 987 654 3210</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700/50 h-px" />

        <div className="text-center pt-6 sm:pt-8">
          <p className="text-xs xs:text-sm text-gray-500">
            &copy; {new Date().getFullYear()} IEEE SB TKMCE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;