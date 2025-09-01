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
      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <img 
                src="/images/ieeelogoblue.png" 
                alt="IEEE Logo" 
                className="h-full w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center';
                  fallback.innerHTML = '<span class="text-primary-foreground font-bold text-xs sm:text-sm">IEEE</span>';
                  target.parentNode?.insertBefore(fallback, target);
                }}
              />
            </div>
            <div className="hidden xs:block">
              <div className="text-xs sm:text-sm font-semibold text-gray-800">IEEE SB TKMCE</div>
              <div className="text-[10px] xs:text-xs text-gray-500">TKM College of Engineering</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-2 py-1.5 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://www.ieee.org/membership/join?WT_mc_id=hc_join" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                Join IEEE
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden -mr-1">
            <Button
              variant="ghost"
              size="icon"
              className="w-9 h-9"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden transition-all duration-300 ease-in-out">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <a 
                  href="https://www.ieee.org/membership/join?WT_mc_id=hc_join" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="outline" size="sm" className="w-full text-sm">
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