import { Phone, MessageCircle, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Local Taxi Service", href: "#services" },
    { name: "Outstation Taxi", href: "#services" },
    { name: "Airport Pickup & Drop", href: "#services" },
    { name: "Tour Packages", href: "#services" },
  ];

  return (
    <footer className="bg-secondary">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">S</span>
              </div>
              <div>
                <span className="font-heading font-bold text-secondary-foreground text-lg">
                  Sarathi <span className="text-primary">SafeWay</span>
                </span>
              </div>
            </div>
            <p className="text-secondary-foreground/70 mb-6">
              Your trusted partner for safe, comfortable, and affordable taxi and travel services. Available 24/7 for all your transportation needs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-secondary-foreground/70">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-foreground/70">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@sarathisafeway.com</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-secondary-foreground text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-secondary-foreground text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading font-bold text-secondary-foreground text-lg mb-6">Connect With Us</h3>
            <p className="text-secondary-foreground/70 mb-6">
              Follow us on social media for updates, offers, and travel tips!
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 text-secondary-foreground/70 group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-5 h-5 text-secondary-foreground/70 group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-secondary-foreground/70 group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
              >
                <Youtube className="w-5 h-5 text-secondary-foreground/70 group-hover:text-primary-foreground" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-taxi-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-secondary-foreground/10 text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary-foreground/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Taxi Pattern */}
      <div className="taxi-pattern" />

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} Sarathi SafeWay. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-secondary-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
