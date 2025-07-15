import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#mission" },
    { name: "Order of Service", href: "#services" },
    { name: "Photo Album", href: "#gallery" },
    { name: "Contacts", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-spiritual-blue/95 backdrop-blur-sm border-b border-divine-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Site Name */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1">
              <img 
                src="/lovable-uploads/76c7d4cf-4cb5-45ce-93b9-95a4757ad6e9.png" 
                alt="Power in the Word Christian Church Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-heavenly-light">
              <h1 className="font-serif text-lg font-bold leading-tight">
                POWER IN THE WORD
                <span className="block text-divine-gold text-sm">
                  CHRISTIAN CHURCH
                </span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-heavenly-light hover:text-divine-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-heavenly-light hover:text-divine-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-divine-gold/20">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-heavenly-light hover:text-divine-gold hover:bg-divine-gold/10 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;