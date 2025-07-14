import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NewsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-gray-800">
            <div className="flex items-center space-x-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Latest News
              </h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Latest News & Updates</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Stay informed about our latest activities, upcoming events, and recent achievements. From technical workshops to community outreach programs, there's always something happening at the IEEE Student Branch. Check back often for the latest updates!
            </p>

            <div className="flex space-x-4">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                More Details
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Register NOW!
              </Button>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative h-80 flex items-center justify-center">
            <div className="absolute w-64 h-80 rounded-xl overflow-hidden shadow-2xl transform -rotate-6 transition-transform duration-300 hover:scale-105 z-10">
              <img
                src="https://i.ibb.co/GvN6hV3/Whats-App-Image-2024-07-13-at-11-05-38-PM.jpg"
                alt="AKSC'23 Band Event Poster"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-64 h-80 rounded-xl overflow-hidden shadow-2xl transform rotate-6 transition-transform duration-300 hover:scale-105">
              <img
                src="https://i.ibb.co/yQd5F3c/Whats-App-Image-2024-07-13-at-11-05-40-PM.jpg"
                alt="Caption Clash Event Poster"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;