import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const societies = [
  {
    logo: "/societies/pes.svg",
    name: "Power & Energy Society",
    description: "Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus",
  },
  {
    logo: "/societies/ras.svg",
    name: "Robotics & Automation Society",
    description: "Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus",
  },
  {
    logo: "/societies/cs.svg",
    name: "Computer Society",
    description: "Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus",
  },
  {
    logo: "/societies/sight.svg",
    name: "SIGHT",
    description: "Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus",
  },
  {
    logo: "/societies/ias.png",
    name: "Industry Applications Society",
    description: "Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus",
  },
  {
    logo: "/societies/sps.svg",
    name: "Signal Processing Society",
    description: "Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus Consequat lectus",
  },
];

const SocietiesSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Societies</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {societies.map((society) => (
            <Card key={society.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-4 flex items-center justify-center">
                  <img src={society.logo} alt={`${society.name} Logo`} className="max-w-full max-h-full object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{society.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{society.description}</p>
                <Button className="mt-auto bg-blue-600 text-white hover:bg-blue-700">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocietiesSection;
