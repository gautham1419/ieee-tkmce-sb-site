import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Rocket, Briefcase, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface ChapterDetailProps {
  chapter: {
    name: string;
    logo: string;
    website: string;
    about: string;
    vision: string;
    mission: string;
    quote: {
      text: string;
      author: string;
      title: string;
    };
    aboutChapter: {
      image: string;
      text: string;
    };
    benefits: {
      title: string;
      text: string;
    }[];
    activities: {
      image: string;
      title: string;
      text: string;
    }[];
  };
}

const ChapterDetail = ({ chapter }: ChapterDetailProps) => {
  if (!chapter) {
    return null;
  }

  const benefitIcons = [<Briefcase />, <Users />, <BookOpen />];

  return (
    <div className="bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-16">{chapter.name}</h1>

      <div className="grid lg:grid-cols-2 gap-16 items-start mb-24 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          <img src={chapter.logo} alt={`${chapter.name} Logo`} className="h-24 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">About IEEE {chapter.name}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{chapter.about}</p>
          <Link to={chapter.website} target="_blank" rel="noopener noreferrer">
            <Button>Visit Website</Button>
          </Link>
        </div>
        <div className="space-y-8">
          <Card className="bg-blue-600 text-white rounded-3xl p-6">
            <CardContent>
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Eye className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                  <p className="opacity-90">{chapter.vision}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-blue-600 text-white rounded-3xl p-6">
            <CardContent>
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Rocket className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="opacity-90">{chapter.mission}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-blue-900 text-white rounded-3xl p-12 my-24 max-w-5xl mx-auto text-center relative">
        <p className="text-4xl font-serif italic mb-6">"{chapter.quote.text}"</p>
        <p className="text-xl font-bold">{chapter.quote.author}</p>
        <p className="text-lg opacity-80">{chapter.quote.title}</p>
      </div>

      <div className="my-24 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Our Chapter!</h2>
        <p className="text-gray-600 leading-relaxed">{chapter.aboutChapter.text}</p>
      </div>

      <div className="my-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits of joining {chapter.name}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {chapter.benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-block bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                {benefitIcons[index]}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What We Do?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chapter.activities.map((activity, index) => (
            <Card key={index} className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterDetail;
