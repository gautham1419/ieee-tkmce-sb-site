import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Mic, Code, Briefcase, Rocket, Book, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Technical Workshops",
      description: "Hands-on workshops on the latest technologies to enhance your practical skills.",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Networking Events",
      description: "Connect with industry professionals, alumni, and peers at our networking sessions.",
      bgColor: "bg-green-50",
    },
    {
      icon: <Mic className="w-12 h-12 text-purple-600" />,
      title: "Guest Lectures",
      description: "Learn from experts and gain insights into current industry trends and research.",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Code className="w-12 h-12 text-red-600" />,
      title: "Coding Competitions",
      description: "Sharpen your problem-solving skills and compete in exciting hackathons and coding challenges.",
      bgColor: "bg-red-50",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-yellow-600" />,
      title: "Career Guidance",
      description: "Receive mentorship and guidance for your career, from resume building to interview prep.",
      bgColor: "bg-yellow-50",
    },
    {
      icon: <Rocket className="w-12 h-12 text-indigo-600" />,
      title: "Project Development",
      description: "Collaborate on innovative projects and turn your creative ideas into reality.",
      bgColor: "bg-indigo-50",
    },
    {
      icon: <Book className="w-12 h-12 text-pink-600" />,
      title: "Publication Support",
      description: "Get assistance and mentorship for writing and publishing technical papers.",
      bgColor: "bg-pink-50",
    },
    {
      icon: <Zap className="w-12 h-12 text-teal-600" />,
      title: "Leadership Training",
      description: "Develop your leadership and management skills by getting involved in organizational roles.",
      bgColor: "bg-teal-50",
    },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 ${service.bgColor}`}>
              <CardHeader className="flex items-center justify-center pt-6">
                {service.icon}
              </CardHeader>
              <CardContent className="text-center pb-6">
                <CardTitle className="text-lg font-semibold mb-2">{service.title}</CardTitle>
                <p className="text-sm text-gray-600 px-2">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;