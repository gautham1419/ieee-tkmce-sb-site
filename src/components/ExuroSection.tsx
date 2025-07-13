import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ExuroSection = () => {
  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              EXURO
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur. Sapien suspendisse cursus vestibulum cursus eget ultricies habitasse. At enim mauris aliquam potenti amet pharetra consectetur adipiscing. Quis in euismod sit consequat molestie enim. Tristique sem eut ut orci sed bibendum. Fames vestibulum convallis risus sem non nullam urna bibendum.
            </p>
            <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              View Last year EXURO
            </Button>
          </div>

          {/* Right Logo/Visual */}
          <div className="flex justify-center">
            <Card className="shadow-glow hover:shadow-cosmic transition-all duration-500 hover:scale-105">
              <CardContent className="p-12">
                <div className="text-center">
                  {/* EXURO Logo Placeholder */}
                  <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center border-4 border-accent/30">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">exuro'20</div>
                      <div className="text-sm text-muted-foreground">Inter Student Branch Virtual Tech Summit</div>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-accent">
                    Inter Student Branch Virtual Tech Summit
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExuroSection;