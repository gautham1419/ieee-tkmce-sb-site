import { Card, CardContent } from "@/components/ui/card";

const TrustedOrganizations = () => {
  const organizations = [
    { name: "IEEE FES", logo: "IEEE FES" },
    { name: "IEEE Computer Society", logo: "CS" },
    { name: "IEEE SIGHT", logo: "SIGHT" },
    { name: "IEEE Signal Processing", logo: "SP" },
    { name: "IEEE Young Professionals", logo: "YP" },
    { name: "CAS", logo: "CAS" },
    { name: "Industrial Electronics", logo: "IE" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Trusted
              <br />
              <span className="text-foreground">Among Global Organizations</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sapien suspendisse cursus vestibulum cursus eget ultricies habitasse. At enim mauris aliquam potenti amet pharetra consectetur adipiscing. Quis in euismod sit consequat molestie enim. Tristique sem eut ut orci sed bibendum. Fames vestibulum convallis risus sem non nullam urna interum blandit ut vestibulum molestie aurum. Tristique sem ut ut orci sed bibendum.
            </p>
          </div>

          {/* Right Organizations Grid */}
          <div className="grid grid-cols-2 gap-4">
            {organizations.map((org, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 flex items-center justify-center min-h-24">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-xs font-bold text-primary">{org.logo}</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{org.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedOrganizations;