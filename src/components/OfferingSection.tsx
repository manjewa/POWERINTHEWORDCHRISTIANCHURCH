import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OfferingSection = () => {
  return (
    <section id="offering" className="py-20 bg-gradient-to-b from-heavenly-light/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-spiritual-blue mb-6">
            Give <span className="text-divine-gold">Generously</span>
          </h2>
          <p className="text-xl text-spiritual-blue/80 max-w-3xl mx-auto leading-relaxed">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Regular Offering */}
          <Card className="border-divine-gold/20 shadow-divine hover:shadow-divine-glow transition-all duration-300">
            <CardHeader className="text-center bg-divine-gold/10">
              <CardTitle className="text-2xl text-spiritual-blue font-serif">Church Offering</CardTitle>
              <p className="text-spiritual-blue/70">Regular Sunday Offering</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <img 
                  src="/lovable-uploads/160163b3-7103-4989-a0db-6a4572082a19.png" 
                  alt="Church Offering M-Pesa Details" 
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                />
              </div>
            </CardContent>
          </Card>

          {/* Tithe, Sacrificial Giving & Prophetic Seed */}
          <Card className="border-divine-gold/20 shadow-divine hover:shadow-divine-glow transition-all duration-300">
            <CardHeader className="text-center bg-divine-gold/10">
              <CardTitle className="text-2xl text-spiritual-blue font-serif">Tithe & Special Giving</CardTitle>
              <p className="text-spiritual-blue/70">Tithe, Sacrificial Giving & Prophetic Seed</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <img 
                  src="/lovable-uploads/146fa617-5b50-4a36-ae42-b687ac871c00.png" 
                  alt="Tithe and Special Giving M-Pesa Details" 
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="bg-card/10 backdrop-blur-sm border border-divine-gold/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <blockquote className="font-serif text-xl md:text-2xl text-divine-gold italic leading-relaxed">
              "For nothing will be impossible with God" - Luke 1:37
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingSection;