import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Chapters", href: "/chapters" },
    { name: "Events", href: "/events" },
    { name: "Execom", href: "/execom" },
    { name: "More", href: "#" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">IEEE</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-gray-300">IEEE SB TKMCE</div>
              <div className="text-xs text-gray-400">TKM College of Engineering</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Join IEEE Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.ieee.org/membership/join?WT_mc_id=hc_join" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                Join IEEE
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg rounded-b-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <a href="https://www.ieee.org/membership/join?WT_mc_id=hc_join" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Join IEEE
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;