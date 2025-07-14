import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ExuroSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-gray-800">
            <h2 className="text-4xl font-bold mb-6">EXURO</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Exuro is the flagship technical symposium of IEEE SB TKMCE, a confluence of brilliant minds in technology and engineering. This annual event features a series of workshops, competitions, and keynote sessions by industry stalwarts, providing a platform for students to showcase their talents, learn about emerging technologies, and network with peers and professionals. Join us for an unforgettable experience of innovation and learning.
            </p>
            <Link to="https://www.instagram.com/ieeesbtkmce/" target="_blank" rel="noopener noreferrer">
              <Button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 px-8 py-3 text-base font-semibold rounded-lg">
                View Last Year EXURO
              </Button>
            </Link>
          </div>

          {/* Right Logo */}
          <div className="flex flex-col items-center justify-center">
            <img 
              src="/exuro20.png"
              alt="EXURO 20 Logo"
              className="w-48 h-48 object-contain"
            />
            <p className="mt-4 text-gray-600 font-semibold">*Inter Student Branch Virtual Tech Summit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExuroSection;