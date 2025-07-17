import { Card, CardContent } from "@/components/ui/card";
import { Crown, Heart } from "lucide-react";

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Bishop Samuel Ingói",
      title: "Founder",
      icon: "👑",
      description: "A visionary and anointed servant of God, Bishop Ingói carries a deep passion for revival and equipping the saints through prophetic teaching and apostolic leadership.",
      color: "divine-gold"
    },
    {
      name: "Pastor Everlyne Ingói", 
      title: "Senior Pastor",
      icon: "🙏",
      description: "A spiritual mother to many, Pastor Everlyne teaches and shepherds with grace, wisdom, and power, raising strong believers and nurturing women and families in faith.",
      color: "spiritual-blue"
    }
  ];

  return (
    <section className="py-20 bg-spiritual-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-heavenly-light mb-6">
            Our Leaders
          </h2>
          <div className="w-24 h-1 bg-divine-gold mx-auto mb-6"></div>
          <p className="text-lg text-heavenly-light/80 max-w-2xl mx-auto">
            Appointed by God to shepherd, teach, and lead His people with wisdom and love
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <Card key={index} className="bg-card/95 backdrop-blur-sm border-divine-gold/30 hover:shadow-divine transition-divine group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-divine-gold shadow-lg">
                    <img 
                      src={index === 0 ? "/lovable-uploads/f660baa5-3e2c-49f4-b38f-23682d4cfe62.png" : "/lovable-uploads/85f2e44e-80b3-4805-8c97-7ad1b2963ada.png"}
                      alt={`${leader.name} - ${leader.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-spiritual-blue group-hover:text-divine-gold transition-divine">
                      {leader.name}
                    </h3>
                    <div className="flex items-center justify-center">
                      {index === 0 ? (
                        <Crown className="w-5 h-5 text-divine-gold mr-2" />
                      ) : (
                        <Heart className="w-5 h-5 text-divine-gold mr-2" />
                      )}
                      <span className="text-divine-gold font-semibold tracking-wider">
                        {leader.title}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="w-16 h-1 bg-divine-gold mx-auto mb-6"></div>
                
                <p className="text-prayer-gray leading-relaxed italic">
                  {leader.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-heavenly-light mb-6">
              Our Mission & Vision
            </h3>
            <div className="w-24 h-1 bg-divine-gold mx-auto mb-8"></div>
          </div>

          {/* Vision Statement */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="bg-divine-gold/20 border-divine-gold/50 shadow-divine">
              <CardContent className="p-8 text-center">
                <h4 className="font-serif text-xl font-bold text-heavenly-light mb-4">OUR VISION</h4>
                <p className="font-serif text-lg md:text-xl text-heavenly-light font-semibold">
                  TO REACH THE REACHED AND UNREACHED
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-heavenly-light/10 border-divine-gold/30 shadow-divine">
              <CardContent className="p-8 text-center">
                <h4 className="font-serif text-xl font-bold text-heavenly-light mb-4">OUR MISSION</h4>
                <blockquote className="font-serif text-lg md:text-xl text-heavenly-light leading-relaxed font-semibold">
                  We preach and teach, make disciples, and equip them to raise up an army of the Lord and send them to the world to do the work of the Lord.
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* Leadership Values */}
          <div className="bg-divine-gold/10 backdrop-blur-sm border border-divine-gold/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="font-serif text-2xl font-bold text-heavenly-light text-center mb-6">
              Our Foundation
            </h4>
            <p className="text-heavenly-light/90 text-center leading-relaxed text-lg mb-4">
              Founded by Bishop Samuel Ingói and Senior Pastor Everlyne Ingói, we are a vibrant 
              Pentecostal ministry committed to preaching the uncompromised Word of God, empowering 
              believers through prayer, and nurturing a Spirit-filled community grounded in love, 
              faith, and truth.
            </p>
            <p className="text-heavenly-light/90 text-center leading-relaxed text-lg italic">
              Founded in faith, led by spirit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;