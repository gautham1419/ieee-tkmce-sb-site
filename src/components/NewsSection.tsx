import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "BAND",
      subtitle: "ALL KERALA STUDENT CONGRESS",
      date: "2023",
      bgColor: "bg-gradient-to-br from-purple-900 to-purple-700"
    },
    {
      id: 2,
      title: "CAPTION CLASH!",
      subtitle: "DAILY ONE CHALLENGE",
      date: "2023",
      bgColor: "bg-gradient-to-br from-yellow-600 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Latest News
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

            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Lorem Ipsum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet consectetur, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline">
                    More Details
                  </Button>
                  <Button>
                    Register NOW!
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right News Cards */}
          <div className="space-y-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden group">
                <div className={`h-32 ${item.bgColor} relative flex items-center justify-center text-white`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.subtitle}</p>
                  </div>
                  <div className="absolute top-4 right-4 text-sm font-semibold">
                    {item.date}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;