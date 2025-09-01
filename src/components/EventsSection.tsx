import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const EventsSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const events = [
    {
      id: 1,
      title: "EMBS & VTS",
      subtitle: "CHAPTER INAUGURATION",
      imageUrl: "/events/embsvts.JPG",
      sectionId: "embs-vts"
    },
    {
      id: 2,
      title: "TinkHerHack 3.0",
      subtitle: "HACKATHON",
      imageUrl: "/events/tinkherhack.JPG",
      sectionId: "tinkherhack"
    },
    {
      id: 3,
      title: "Hack The Future",
      subtitle: "HACKATHON",
      imageUrl: "/events/htf.png",
      sectionId: "hack-the-future"
    },
  ];

  return (
    <section id="major-events" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Major Events Hosted
          </h2>
          <div className="flex space-x-2 w-full sm:w-auto">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
              aria-label="Previous events"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
              aria-label="Next events"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col"
              onClick={() => scrollToSection(event.sectionId)}
            >
              <div className="relative overflow-hidden pt-[56.25%]">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium flex items-center text-sm sm:text-base">
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{event.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 uppercase font-medium mt-auto">{event.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;