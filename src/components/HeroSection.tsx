import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Empowering with Skills, Confidence & Sense of Purpose
        </h1>
        
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          IEEE SB TKMCE WELCOMES YOU
        </p>
        
        <div className="flex justify-center items-center">
          <a href="https://www.ieee.org/membership/join?WT_mc_id=hc_join" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline"
              size="lg"
              className="bg-transparent border-white/50 text-white hover:bg-white/10 px-8 py-3 text-base font-semibold transition-all duration-300"
            >
              JOIN IEEE
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;