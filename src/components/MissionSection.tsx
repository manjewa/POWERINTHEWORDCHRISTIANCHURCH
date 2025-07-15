import { Card, CardContent } from "@/components/ui/card";
import { Book, Users, Heart, Zap } from "lucide-react";

const MissionSection = () => {
  const values = [
    {
      icon: <Book className="w-8 h-8" />,
      title: "The Living Word",
      description: "Empowering lives through the transformative power of God's Word"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Spirit-Filled Believers",
      description: "Raising believers who walk in the gifts and power of the Holy Spirit"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Transformation",
      description: "Transforming communities for Christ through love and truth"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "All Ages Welcome",
      description: "Building a church that serves people of all ages with love and truth"
    }
  ];

  return (
    <section className="py-20 bg-gradient-heavenly">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-spiritual-blue mb-6">
            Our Mission & Vision
          </h2>
          <div className="w-24 h-1 bg-divine-gold mx-auto mb-8"></div>
        </div>

        {/* Vision Statement */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-divine-gold/10 border-divine-gold/30 shadow-spiritual">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-spiritual-blue mb-4">OUR VISION</h3>
              <p className="font-serif text-xl md:text-2xl text-spiritual-blue font-semibold">
                TO REACH THE REACHED AND UNREACHED
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-spiritual-blue border-divine-gold/30 shadow-spiritual">
            <CardContent className="p-12 text-center">
              <h3 className="font-serif text-2xl font-bold text-heavenly-light mb-6">OUR MISSION</h3>
              <blockquote className="font-serif text-xl md:text-2xl text-heavenly-light leading-relaxed mb-6 font-semibold">
                TO TEACH THE WORD AND MAKE DISCIPLES AROUND THE GLOBE
              </blockquote>
              <div className="w-20 h-1 bg-divine-gold mx-auto"></div>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-divine transition-divine border-divine-gold/20 hover:border-divine-gold/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-divine-gold mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-spiritual-blue mb-3 group-hover:text-divine-gold transition-divine">
                  {value.title}
                </h3>
                <p className="text-prayer-gray text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Beliefs Section */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-card/60 backdrop-blur-sm border-divine-gold/30">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold text-spiritual-blue text-center mb-6">
                What We Believe
              </h3>
              <div className="space-y-4 text-prayer-gray">
                <div className="flex items-start space-x-3">
                  <div className="text-divine-gold mt-1">✓</div>
                  <p>We believe in the full Gospel and the authority of Scripture</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-divine-gold mt-1">✓</div>
                  <p>We believe in the gifts of the Holy Spirit and His power in our daily lives</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-divine-gold mt-1">✓</div>
                  <p>We believe in building a church that serves people of all ages with love and truth</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-divine-gold mt-1">✓</div>
                  <p>We believe in the power of prayer and worship to transform lives and communities</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;