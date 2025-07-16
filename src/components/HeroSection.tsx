import { Button } from "@/components/ui/button";
import heroImage from "@/assets/church-building.png";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Power In The Word Christian Church Building" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-spiritual-blue/70 via-spiritual-blue/50 to-spiritual-blue/80"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-heavenly-light mb-6 leading-tight">
            POWER IN THE WORD
            <span className="block text-divine-gold font-serif text-3xl md:text-4xl font-normal mt-2">
              CHRISTIAN CHURCH
            </span>
          </h1>
        </div>
        
        <div className="bg-card/10 backdrop-blur-sm border border-divine-gold/30 rounded-2xl p-8 mb-8 shadow-divine">
          <p className="text-heavenly-light text-lg md:text-xl font-medium mb-4">
            Frere Town, Mombasa – Kenya
          </p>
          <blockquote className="font-serif text-xl md:text-2xl text-divine-gold italic leading-relaxed">
            "Where we preach the truth for if you know the truth, 
            the truth will set you free indeed"
          </blockquote>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-divine-gold hover:bg-divine-gold/90 text-spiritual-blue font-semibold px-8 py-6 text-lg shadow-divine transition-divine">
            Join Our Services
          </Button>
          <Button variant="outline" size="lg" className="border-divine-gold text-divine-gold hover:bg-divine-gold hover:text-spiritual-blue px-8 py-6 text-lg transition-divine">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-divine-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-divine-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;