import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-24"
    >
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
          Empowering with Skills,<br className="hidden sm:block" /> Confidence & Sense of Purpose
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          IEEE SB TKMCE WELCOMES YOU
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="https://www.ieee.org/membership/join?WT_mc_id=hc_join" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-transparent border-white/50 text-white hover:bg-white/10 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300"
            >
              JOIN IEEE
            </Button>
          </a>
          <a href="#about" className="w-full sm:w-auto">
            <Button 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300"
            >
              LEARN MORE
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;