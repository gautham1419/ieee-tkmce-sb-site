import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Vision & Mission */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Exercise & adapt their knowledge for the common good</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Develop their managerial and organizational skills</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Celebrate the spirit of working together</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide a platform for the members to:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Exercise & adapt their knowledge for the common good</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Develop their managerial and organizational skills</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Celebrate the spirit of working together</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-4">
                <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Team Photo</span>
                </div>
                <p className="text-sm text-muted-foreground">Genius is one percent inspiration and ninety-nine percent perspiration.</p>
                <p className="text-xs text-muted-foreground mt-2 font-medium">- Thomas Edison, Scientist</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 mt-8">
              <CardContent className="p-4">
                <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Innovation</span>
                </div>
                <p className="text-sm text-muted-foreground">A car won't something smart like a man, it you want something done, ask a woman.</p>
                <p className="text-xs text-muted-foreground mt-2 font-medium">- Thomas Edison, Scientist</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 -mt-4">
              <CardContent className="p-4">
                <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Workshop</span>
                </div>
                <p className="text-sm text-muted-foreground">Genius is one percent inspiration and ninety-nine percent perspiration.</p>
                <p className="text-xs text-muted-foreground mt-2 font-medium">- Thomas Edison, Scientist</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-4">
                <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Community</span>
                </div>
                <p className="text-sm text-muted-foreground">Genius is one percent inspiration and ninety-nine percent perspiration.</p>
                <p className="text-xs text-muted-foreground mt-2 font-medium">- Thomas Edison, Scientist</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;