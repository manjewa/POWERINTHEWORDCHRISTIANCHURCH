import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, Users, Heart } from "lucide-react";

const ServicesSection = () => {
  const sundayServices = [
    {
      title: "Morning Glory",
      time: "6:00 AM – 9:00 AM",
      description: "Start your day in powerful prayer and worship",
      icon: "🌅"
    },
    {
      title: "English–Swahili Service",
      time: "9:30 AM – 11:00 AM", 
      description: "A blended service that reaches all generations and cultures",
      icon: "🌍"
    },
    {
      title: "Main Celebration Service",
      time: "11:00 AM – 2:00 PM",
      description: "A dynamic time of praise, Word, and breakthrough",
      icon: "🔥"
    }
  ];

  const weekdayPrograms = [
    {
      day: "Monday",
      title: "Prayer Vigil",
      time: "9:00 PM to 11:00 PM",
      icon: "🙏"
    },
    {
      day: "Tuesday", 
      title: "Meet with the Bishop",
      time: "11:00 AM to 4:00 PM",
      icon: "🤝"
    },
    {
      day: "Wednesday",
      title: "Midweek Revival Service", 
      time: "5:00 PM to 7:00 PM",
      icon: "🔥"
    },
    {
      day: "Thursday",
      title: "Women's Fellowship",
      time: "5:00 PM to 7:00 PM", 
      icon: "👩"
    },
    {
      day: "Friday",
      title: "Overnight Kesha",
      time: "from 9:00 PM until the Spirit leads",
      icon: "🌙"
    },
    {
      day: "Saturday",
      title: "Children's Activity Day",
      time: "Fun, learning & growth for our future generation",
      icon: "👧👦"
    }
  ];

  return (
    <section className="py-20 bg-gradient-heavenly">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-spiritual-blue mb-6">
            Our Weekly Services
          </h2>
          <div className="w-24 h-1 bg-divine-gold mx-auto mb-6"></div>
          <p className="text-lg text-prayer-gray max-w-2xl mx-auto">
            Join us for powerful times of worship, prayer, and the Word of God throughout the week
          </p>
        </div>

        {/* Sunday Services */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-12">
            <Calendar className="w-8 h-8 text-divine-gold mr-3" />
            <h3 className="font-serif text-3xl font-bold text-spiritual-blue">
              Sundays – A Day of Divine Encounter
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {sundayServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-divine transition-divine border-divine-gold/20 hover:border-divine-gold/50">
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <CardTitle className="font-serif text-xl text-spiritual-blue group-hover:text-divine-gold transition-divine">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5 text-divine-gold mr-2" />
                    <span className="font-semibold text-spiritual-blue">{service.time}</span>
                  </div>
                  <p className="text-prayer-gray italic">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Weekday Programs */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <Users className="w-8 h-8 text-divine-gold mr-3" />
            <h3 className="font-serif text-3xl font-bold text-spiritual-blue">
              Weekday Ministry Programs
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weekdayPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-gentle transition-divine hover:bg-card/80">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{program.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-divine-gold text-sm uppercase tracking-wider mb-1">
                        {program.day}
                      </div>
                      <h4 className="font-semibold text-spiritual-blue mb-2 group-hover:text-divine-gold transition-divine">
                        {program.title}
                      </h4>
                      <p className="text-prayer-gray text-sm">{program.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-spiritual-blue text-heavenly-light rounded-2xl p-8 shadow-spiritual max-w-2xl mx-auto">
            <Heart className="w-12 h-12 text-divine-gold mx-auto mb-4" />
            <h4 className="font-serif text-2xl font-bold mb-4">Come and Be Transformed</h4>
            <p className="text-lg opacity-90">
              Whether you are seeking healing, direction, spiritual growth, or a deeper walk with God — 
              there's a place for you here. Come expectant. Leave empowered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;