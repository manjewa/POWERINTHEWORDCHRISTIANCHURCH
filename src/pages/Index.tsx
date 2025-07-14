import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LeadershipSection from "@/components/LeadershipSection";
import MissionSection from "@/components/MissionSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <LeadershipSection />
      <MissionSection />
      <ContactSection />
    </div>
  );
};

export default Index;
