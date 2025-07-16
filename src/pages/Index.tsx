import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LeadershipSection from "@/components/LeadershipSection";
import PhotoAlbum from "@/components/PhotoAlbum";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <LeadershipSection />
      </div>
      <PhotoAlbum />
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
