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
                  <div className="text-6xl mb-4">{leader.icon}</div>
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

        {/* Leadership Values */}
        <div className="mt-16">
          <div className="bg-divine-gold/10 backdrop-blur-sm border border-divine-gold/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="font-serif text-2xl font-bold text-heavenly-light text-center mb-6">
              Founded in Faith, Led by the Spirit
            </h4>
            <p className="text-heavenly-light/90 text-center leading-relaxed text-lg">
              Founded by Bishop Samuel Ingói and Senior Pastor Everlyne Ingói, we are a vibrant 
              Pentecostal ministry committed to preaching the uncompromised Word of God, empowering 
              believers through prayer, and nurturing a Spirit-filled community grounded in love, 
              faith, and truth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;