import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AgentsSection } from "@/components/sections/AgentsSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { FormationsSection } from "@/components/sections/FormationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AgentsSection />
      <DifferentiatorsSection />
      <FormationsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
