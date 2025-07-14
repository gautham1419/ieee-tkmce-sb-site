import { Card, CardContent } from "@/components/ui/card";

const VisionMissionSection = () => {
  const teamImages = [
    { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887&auto=format&fit=crop", quote: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison" },
    { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop", quote: "If you want something said, ask a man; if you want something done, ask a woman.", author: "Margaret Thatcher", className: "mt-8" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", quote: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison", className: "-mt-4" },
    { src: "https://images.unsplash.com/photo-1600880292210-85938a0384d7?q=80&w=1887&auto=format&fit=crop", quote: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison" },
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

          {/* Team Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {teamImages.map((item, index) => (
              <Card key={index} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 ${item.className || ''}`}>
                <CardContent className="p-3">
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-3 overflow-hidden">
                    <img src={item.src} alt={`Team photo ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xs text-gray-600 italic">“{item.quote}”</p>
                  <p className="text-xs text-gray-800 font-semibold mt-2">- {item.author}</p>
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
