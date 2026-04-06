import Navigation from "@/components/showcase/Navigation";
import HeroSection from "@/components/showcase/HeroSection";
import SystemArchitecture from "@/components/showcase/SystemArchitecture";
import ModuleShowcase from "@/components/showcase/ModuleShowcase";
import BenefitsSection from "@/components/showcase/BenefitsSection";
import IndustryStandards from "@/components/showcase/IndustryStandards";
import Footer from "@/components/showcase/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground scrollbar-thin">
      <Navigation />
      <HeroSection />
      <SystemArchitecture />
      <ModuleShowcase />
      <BenefitsSection />
      <IndustryStandards />
      <Footer />
    </div>
  );
};

export default Index;
