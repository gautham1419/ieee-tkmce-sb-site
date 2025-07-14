import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import StatsSection from "@/components/StatsSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import ServicesSection from "@/components/ServicesSection";
import AlumniTestimonials from "@/components/AlumniTestimonials";
import TrustedOrganizations from "@/components/TrustedOrganizations";
import ExuroSection from "@/components/ExuroSection";
import EventsSection from "@/components/EventsSection";
import NewsSection from "@/components/NewsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/particle/ParticleBackground";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-black"
      style={{
        backgroundImage: `url('/galaxy.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <NewsSection />
          <AboutSection />
          <VisionMissionSection />
          <StatsSection />
          <WhatWeOfferSection />
          <ServicesSection />
          <AlumniTestimonials />
          <TrustedOrganizations />
          <ExuroSection />
          <EventsSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
