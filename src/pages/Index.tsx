import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import AlumniTestimonials from "@/components/AlumniTestimonials";
import TrustedOrganizations from "@/components/TrustedOrganizations";
import ExuroSection from "@/components/ExuroSection";
import EventsSection from "@/components/EventsSection";
import NewsSection from "@/components/NewsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <AlumniTestimonials />
        <TrustedOrganizations />
        <ExuroSection />
        <EventsSection />
        <NewsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
