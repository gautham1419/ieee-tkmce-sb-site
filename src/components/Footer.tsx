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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IEEE</span>
              </div>
              <div>
                <h2 className="text-white text-xl font-bold">IEEE SB TKMCE</h2>
                <p className="text-sm text-gray-400">TKM College of Engineering</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              A community of students and young professionals dedicated to advancing technology for the benefit of humanity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors">
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(linkSections).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-white mb-4">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="font-semibold text-white mb-4">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <p>Dr. Binu P J (INEB)</p>
                <a href="mailto:ieeesbtkmce@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4"/> ieeesbtkmce@gmail.com
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4"/> +91 987 654 3210
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        <div className="text-center pt-8 text-sm">
          <p>&copy; {new Date().getFullYear()} IEEE SB TKMCE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;