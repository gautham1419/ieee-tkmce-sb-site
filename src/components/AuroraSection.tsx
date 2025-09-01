import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AuroraSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content - Order changes on mobile */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">AURORA</h2>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
              Aurora is the flagship technical symposium of IEEE SB TKMCE, a confluence of brilliant minds in technology and engineering. This annual event features a series of workshops, competitions, and keynote sessions by industry stalwarts, providing a platform for students to showcase their talents, learn about emerging technologies, and network with peers and professionals. Join us for an unforgettable experience of innovation and learning.
            </p>
            <Link to="https://www.instagram.com/ieeesbtkmce/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button 
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white 
                transition-colors duration-300 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg"
              >
                View Last Year's AURORA
              </Button>
            </Link>
          </div>

          {/* Right Logo - Order changes on mobile */}
          <div className="order-1 md:order-2 flex justify-center mb-8 md:mb-0">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <img 
                src="/events/Aurora.jpg" 
                alt="AURORA Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuroraSection;