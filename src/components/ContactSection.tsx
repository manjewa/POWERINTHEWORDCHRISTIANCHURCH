import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Facebook, Youtube, Phone } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["POWER IN THE WORD CHRISTIAN CHURCH", "Frere Town, Mombasa – Kenya"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["powerintheword@gmail.com"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["0721753637", "+254792118358", "0714904078"]
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      handle: "@POWER IN THE WORD CHRISTIAN CHURCH"
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      name: "YouTube", 
      handle: "@POWER IN THE WORD CHRISTIAN CHURCH"
    }
  ];

  return (
    <section className="py-20 bg-spiritual-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-heavenly-light mb-6">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-divine-gold mx-auto mb-6"></div>
          <p className="text-lg text-heavenly-light/80 max-w-2xl mx-auto">
            We would love to welcome you into our church family. Come and experience the love of God with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="font-serif text-2xl font-bold text-heavenly-light mb-8">
              Get in Touch
            </h3>
            
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-card/10 backdrop-blur-sm border-divine-gold/30 hover:bg-card/20 transition-divine">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-divine-gold mt-1">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-heavenly-light mb-2">
                        {contact.title}
                      </h4>
                      {contact.details.map((detail, idx) => (
                        <p key={idx} className="text-heavenly-light/80">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-heavenly-light mb-4">Follow Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
                     onClick={() => window.open('https://www.facebook.com/PowerInTheWordChristianChurch', '_blank')}>
                  <div className="text-divine-gold">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <span className="text-heavenly-light/80">
                    Facebook: @POWER IN THE WORD CHRISTIAN CHURCH
                  </span>
                </div>
                <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
                     onClick={() => window.open('https://www.youtube.com/@powerinthewordchristianchu2171', '_blank')}>
                  <div className="text-divine-gold">
                    <Youtube className="w-6 h-6" />
                  </div>
                  <span className="text-heavenly-light/80">
                    YouTube: @POWER IN THE WORD CHRISTIAN CHURCH
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Location */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-heavenly-light mb-8">
              Find Us
            </h3>
            <Card className="bg-card/10 backdrop-blur-sm border-divine-gold/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8087849665355!2d39.661369!3d-4.055556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012d4f3e6e6e7%3A0x1234567890123456!2sPower%20In%20The%20Word%20Christian%20Church!5e0!3m2!1sen!2ske!4v1639123456789!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Power In The Word Christian Church Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            <div className="mt-4 text-center">
              <Button 
                size="sm"
                className="bg-divine-gold hover:bg-divine-gold/90 text-spiritual-blue font-semibold transition-divine"
                onClick={() => window.open('https://maps.app.goo.gl/q3sChJEuTccn2s8q7', '_blank')}
              >
                Open in Google Maps
              </Button>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="lg:col-span-1">
            <Card className="bg-divine-gold/10 backdrop-blur-sm border-divine-gold/30 h-full">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-6">🙏</div>
                  <h3 className="font-serif text-2xl font-bold text-heavenly-light mb-6">
                    You Are Welcome Here
                  </h3>
                  <p className="text-heavenly-light/90 leading-relaxed mb-8">
                    No matter where you are in your spiritual journey, we invite you to come as you are. 
                    Experience the warmth of our community, the power of worship, and the truth of God's Word.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-heavenly-light/10 rounded-lg p-4">
                      <h4 className="font-semibold text-divine-gold mb-2">First Time Visitor?</h4>
                      <p className="text-heavenly-light/80 text-sm">
                        We'd love to meet you! Look for our welcome team who will help you feel at home.
                      </p>
                    </div>
                    
                    <Button 
                      size="lg"
                      className="w-full bg-divine-gold hover:bg-divine-gold/90 text-spiritual-blue font-semibold shadow-divine transition-divine"
                    >
                      Plan Your Visit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h4 className="font-serif text-2xl font-bold text-heavenly-light mb-4">
              Ready to Join Our Church Family?
            </h4>
            <p className="text-heavenly-light/80 mb-8">
              Take the next step in your spiritual journey. We're here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-divine-gold hover:bg-divine-gold/90 text-spiritual-blue font-semibold px-8 shadow-divine transition-divine"
                onClick={() => {
                  const phoneSection = document.querySelector('[title="Call Us"]')?.closest('.space-y-8');
                  phoneSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Us Today
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="border-divine-gold text-divine-gold hover:bg-divine-gold hover:text-spiritual-blue px-8 transition-divine"
                onClick={() => {
                  const phoneSection = document.querySelector('[title="Call Us"]')?.closest('.space-y-8');
                  phoneSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Prayer Request
              </Button>
            </div>
          </div>
        </div>

        {/* Luke 1:37 Quote */}
        <div className="text-center mt-16">
          <div className="bg-card/10 backdrop-blur-sm border border-divine-gold/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <blockquote className="font-serif text-xl md:text-2xl text-divine-gold italic leading-relaxed">
              "For with God nothing is impossible" - Luke 1:37
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;