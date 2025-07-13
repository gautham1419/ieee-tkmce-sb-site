import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "IEEE Org",
    "IEEE Digital Library", 
    "IEEE Collabratec",
    "IEEE Region 10",
    "IEEE Kerala Section"
  ];

  const membershipLinks = [
    "Join IEEE",
    "Join IEEE Society",
    "Renew Membership"
  ];

  const contactInfo = [
    "IEEE SB Counselor",
    "Dr. Binu PJ (INEB)",
    "📧 ✉"
  ];

  const addresses = [
    {
      title: "TKM College of Engineering",
      location: "Karicode, Kollam",
      membership: "Renew Membership"
    },
    {
      title: "Chairman",
      location: "Augustine Waters",
      membership: "SB PC"
    },
    {
      title: "Vice-chairman", 
      location: "Hazel Grace",
      membership: "SB MI"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* IEEE Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">IEEE</span>
              </div>
              <div>
                <div className="text-sm font-bold">IEEE SB TKMCE</div>
                <div className="text-xs opacity-80">TKM College of Engineering</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur. Convallis elit dignissim prom lorem tempus lorem. Adipiscing dignissim lorem tortor risus. Sollicitudin lorem cursus. Elementum lobortis cursus tellus cursus cursus.
            </p>
            <div className="space-y-2 text-sm">
              <div>Terms & Conditions</div>
              <div>Privacy Policy</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              {quickLinks.map((link, index) => (
                <li key={index} className="hover:opacity-100 transition-opacity cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h3 className="font-semibold mb-4">Membership</h3>
            <ul className="space-y-2 text-sm opacity-90">
              {membershipLinks.map((link, index) => (
                <li key={index} className="hover:opacity-100 transition-opacity cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Contact Us</h4>
              <div className="space-y-1 text-sm opacity-90">
                {contactInfo.map((info, index) => (
                  <div key={index}>{info}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold mb-4">Address</h3>
            <div className="space-y-4 text-sm opacity-90">
              {addresses.map((addr, index) => (
                <div key={index}>
                  <div className="font-medium">{addr.title}</div>
                  <div>{addr.location}</div>
                  <div>{addr.membership}</div>
                  <div className="flex space-x-2 mt-1">
                    <span>📧</span>
                    <span>✉</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-75 mb-4 md:mb-0">
            © All Rights Reserved by IEEE SB TKMCE | Conceived by walkinyourdream and Developed by EXECOM members
          </div>
          
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 opacity-75 hover:opacity-100 transition-opacity cursor-pointer" />
            <Twitter className="w-5 h-5 opacity-75 hover:opacity-100 transition-opacity cursor-pointer" />
            <Instagram className="w-5 h-5 opacity-75 hover:opacity-100 transition-opacity cursor-pointer" />
            <Linkedin className="w-5 h-5 opacity-75 hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;