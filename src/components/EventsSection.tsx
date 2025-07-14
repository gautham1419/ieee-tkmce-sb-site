import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "AKSC'23",
      subtitle: "ALL KERALA STUDENT CONGRESS",
      imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      link: "https://aksc.ieee-mint.org/",
    },
    {
      id: 2,
      title: "ICSETS'23",
      subtitle: "INTERNATIONAL CONFERENCE",
      imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "https://tkmce.ac.in/international-conference-ece.php",
    },
    {
      id: 3,
      title: "XTRACT'23",
      subtitle: "PROJECT EXPO & COMPETITION",
      imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "https://www.instagram.com/ieeesbtkmce/",
    },
  ];

  return (
    <section id="major-events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Major Events Hosted
          </h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 uppercase font-medium mb-4">{event.subtitle}</p>
                <Link to={event.link} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700">Know More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;