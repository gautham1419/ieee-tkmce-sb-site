import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Code, Users, Trophy, Calendar, UserCheck, Briefcase, GraduationCap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Technical Publications",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Numquam temporibus consectetur",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Code,
      title: "Professional development",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Numquam temporibus consectetur",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Networking opportunities",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Numquam temporibus consectetur",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Trophy,
      title: "Technical workshop and seminars",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Numquam temporibus consectetur",
      color: "text-gray-600",
      bgColor: "bg-gray-50"
    },
    {
      icon: Calendar,
      title: "Project competition",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Numquam temporibus consectetur",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: UserCheck,
      title: "Hackathons and coding challenges",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Numquam temporibus consectetur",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Briefcase,
      title: "Career Support",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Numquam temporibus consectetur",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: GraduationCap,
      title: "Leadership opportunities",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Numquam temporibus consectetur",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;