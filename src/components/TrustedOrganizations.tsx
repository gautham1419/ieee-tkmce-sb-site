import { Card, CardContent } from "@/components/ui/card";

const TrustedOrganizations = () => {
  const organizations = [
    { name: "IEEE PES", logoUrl: "/societies/pes.svg" },
    { name: "IEEE RAS", logoUrl: "/societies/ras.svg" },
    { name: "IEEE Computer Society", logoUrl: "/societies/cs.svg" },
    { name: "IEEE SIGHT", logoUrl: "/societies/sight.svg" },
    { name: "IEEE IAS", logoUrl: "/societies/ias.png" },
    { name: "IEEE IES", logoUrl: "/societies/ies.svg" },
    { name: "IEEE SPS", logoUrl: "/societies/sps.svg" },
    { name: "IEEE WIE", logoUrl: "/societies/wie.svg" },
    { name: "IEEE CAS", logoUrl: "/societies/cas.svg" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted Among Global Organizations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are proud to collaborate with a diverse range of esteemed organizations, from leading technology corporations and academic institutions to government bodies and non-profits. These partnerships are fundamental to our mission, enabling us to foster innovation, share knowledge, and create opportunities for our members worldwide. Together, we are shaping the future of technology.
            </p>
          </div>

          {/* Right Organizations Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {organizations.map((org) => (
              <Card key={org.name} className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4 flex items-center justify-center h-24">
                  <img src={org.logoUrl} alt={`${org.name} logo`} className="max-h-16 w-auto object-contain" />
                </CardContent>
              </Card>
            ))}
            <div className="bg-blue-600 rounded-lg shadow-md flex items-center justify-center h-24"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedOrganizations;