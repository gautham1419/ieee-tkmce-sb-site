import { Card, CardContent } from "@/components/ui/card";

const VisionMissionSection = () => {
  const quotes = [
    { quote: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison" },
    { quote: "If you want something said, ask a man; if you want something done, ask a woman.", author: "Margaret Thatcher" },
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Vision & Mission */}
          <div className="space-y-12 text-gray-800">
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To provide a platform for the members to:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Exercise & adapt their knowledge for the common good.</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Develop their managerial and organizational skills.</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Celebrate the spirit of working together.</li>
              </ul>
            </div>
          </div>

          {/* Quotes Grid */}
          <div className="grid grid-cols-2 gap-4">
            {quotes.map((item, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-full flex flex-col justify-center">
                <CardContent className="p-6">
                  <blockquote className="space-y-2">
                    <p className="text-gray-700 italic">"{item.quote}"</p>
                    <footer className="text-sm text-gray-800 font-medium">- {item.author}</footer>
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
