import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "AKSC'23",
      subtitle: "ALL KERALA STUDENT CONGRESS",
      date: "17 September 2023",
      location: "TKM College of Engineering, Kollam",
      description: "Lorem ipsum dolor sit amet consectetur. Adipiscing tempor magna aliquet vitae volutpat. Dictum cursus at tellus mauris ut duis.",
      bgColor: "bg-gradient-to-br from-purple-900 to-purple-700"
    },
    {
      id: 2, 
      title: "AKSC'23",
      subtitle: "ALL KERALA STUDENT CONGRESS", 
      date: "17 September 2023",
      location: "TKM College of Engineering, Kollam",
      description: "Lorem ipsum dolor sit amet consectetur. Adipiscing tempor magna aliquet vitae volutpat. Dictum cursus at tellus mauris ut duis.",
      bgColor: "bg-gradient-to-br from-purple-900 to-purple-700"
    },
    {
      id: 3,
      title: "AKSC'23", 
      subtitle: "ALL KERALA STUDENT CONGRESS",
      date: "17 September 2023",
      location: "TKM College of Engineering, Kollam", 
      description: "Lorem ipsum dolor sit amet consectetur. Adipiscing tempor magna aliquet vitae volutpat. Dictum cursus at tellus mauris ut duis.",
      bgColor: "bg-gradient-to-br from-purple-900 to-purple-700"
    }
  ];

  return (
    <section id="events" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Major Events Hosted
          </h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="p-2">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="p-2">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
              <div className={`h-48 ${event.bgColor} relative flex items-center justify-center text-white`}>
                <div className="text-center">
                  <h3 className="text-4xl font-bold mb-2">{event.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{event.subtitle}</p>
                  <div className="bg-white/20 px-4 py-2 rounded-full text-sm">
                    MEET OUR HOST
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-right text-sm">
                  <div>{event.location}</div>
                  <div className="font-semibold">{event.date}</div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">{event.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>
                <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;