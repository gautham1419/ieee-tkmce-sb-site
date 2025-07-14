import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react"; 
import { Link } from "react-router-dom"; 
import { Users, Briefcase, Mic, Book, Rocket } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Exemplary Performance",
    description: "Recognized as the Outstanding Student Branch in the Kerala Section for three consecutive years.",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    description: "A growing family of over 300 passionate student members and volunteers.",
  },
  {
    icon: Briefcase,
    title: "Career Success",
    description: "Our members have secured prestigious internships and placements at leading tech companies.",
  },
  {
    icon: Mic,
    title: "Inspiring Events",
    description: "Successfully hosted over 50 technical workshops, seminars, and webinars in the last year.",
  },
  {
    icon: Book,
    title: "Research Excellence",
    description: "Published over 20 technical papers in international IEEE conferences and journals.",
  },
  {
    icon: Rocket,
    title: "Innovation Hub",
    description: "Fostered over 10 student-led projects from ideation to successful implementation.",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Achievements</h2>
          <Link to="#" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
