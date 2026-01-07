import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AgentsSection } from "@/components/sections/AgentsSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { FormationsSection } from "@/components/sections/FormationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AgentsSection />
        <DifferentiatorsSection />
        <FormationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
