import { Card, CardContent } from "@/components/ui/card";

const AlumniTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      position: "Software Engineer at ABC Tech Solutions",
      image: "/placeholder.svg",
      testimonial: "Born on June 15, 1995, resides at 123 Main Street, Anytown, USA. He works as a software engineer at ABC Tech Solutions and enjoys hiking and photography in his free time. Please note that the information provided above is entirely fictional and generated for illustrative purposes."
    }
  ];

  const alumniProfiles = [
    { id: 1, image: "/placeholder.svg", name: "Alumni 1" },
    { id: 2, image: "/placeholder.svg", name: "Alumni 2" },
    { id: 3, image: "/placeholder.svg", name: "Alumni 3" },
    { id: 4, image: "/placeholder.svg", name: "Alumni 4" },
    { id: 5, image: "/placeholder.svg", name: "Alumni 5" },
    { id: 6, image: "/placeholder.svg", name: "Alumni 6" },
    { id: 7, image: "/placeholder.svg", name: "Alumni 7" },
    { id: 8, image: "/placeholder.svg", name: "Alumni 8" },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Alumni Circles */}
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center lg:text-left">
              What our Alumni Says
            </h2>
            
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Central circles with connecting dots */}
              <div className="relative flex justify-center items-center h-96">
                {/* Blue dots scattered around */}
                <div className="absolute w-4 h-4 bg-primary rounded-full top-12 left-8"></div>
                <div className="absolute w-3 h-3 bg-accent rounded-full top-20 right-12"></div>
                <div className="absolute w-2 h-2 bg-primary rounded-full bottom-16 left-16"></div>
                <div className="absolute w-5 h-5 bg-accent rounded-full bottom-20 right-8"></div>
                <div className="absolute w-3 h-3 bg-primary rounded-full top-32 left-32"></div>
                <div className="absolute w-4 h-4 bg-accent rounded-full bottom-32 right-20"></div>
                
                {/* Alumni profile circles */}
                {alumniProfiles.map((profile, index) => {
                  const angle = (index * 45) * (Math.PI / 180);
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={profile.id}
                      className="absolute w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden bg-muted hover:scale-110 transition-transform duration-300"
                      style={{
                        left: `calc(50% + ${x}px - 32px)`,
                        top: `calc(50% + ${y}px - 32px)`,
                      }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <span className="text-xs font-semibold text-muted-foreground">
                          {profile.name.slice(-1)}
                        </span>
                      </div>
                    </div>
                  );
                })}
                
                {/* Center profile */}
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-muted z-10">
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                    <span className="text-sm font-bold text-foreground">JS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div>
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8">
                <div className="text-6xl text-muted-foreground/20 mb-4 font-serif">"</div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  {testimonials[0].testimonial}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                    <span className="text-sm font-bold text-foreground">JS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[0].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[0].position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniTestimonials;