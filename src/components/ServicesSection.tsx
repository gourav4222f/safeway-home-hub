import { MapPin, Phone, MessageCircle, Compass, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import serviceTaxi from "@/assets/service-taxi.jpg";
import serviceOutstation from "@/assets/service-outstation.jpg";
import serviceAirport from "@/assets/service-airport.jpg";
import serviceTour from "@/assets/service-tour.jpg";

const services = [
  {
    images: [serviceTaxi],
    title: "Local Taxi Service",
    location: "Mumbai, India",
    hasHotSale: false,
    features: ["Hourly Rates", "AC Available"],
  },
  {
    images: [serviceOutstation],
    title: "Outstation Taxi",
    location: "Pan India",
    hasHotSale: true,
    features: ["One-way Trip", "Round Trip"],
  },
  {
    images: [serviceAirport],
    title: "Airport Pickup & Drop",
    location: "All Major Airports",
    hasHotSale: false,
    features: ["Flight Tracking", "24/7 Available"],
  },
  {
    images: [serviceTour],
    title: "Tour Packages",
    location: "Popular Destinations",
    hasHotSale: true,
    features: ["Experience", "All Inclusive"],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border/50"
    >
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.images[currentImageIndex]}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Hot Sale Badge */}
        {service.hasHotSale && (
          <span className="absolute top-3 right-3 bg-tour-orange text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            Hot Sale!
          </span>
        )}

        {/* Image Carousel Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {[0, 1, 2].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentImageIndex(dotIndex % service.images.length)}
              className={`w-2 h-2 rounded-full transition-all ${
                dotIndex === currentImageIndex 
                  ? "bg-tour-blue w-5" 
                  : "bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-heading text-lg font-bold text-foreground mb-1.5 line-clamp-1">
          {service.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
          <MapPin className="w-3.5 h-3.5 text-tour-teal" />
          <span>{service.location}</span>
        </div>

        {/* CTA Row */}
        <div className="flex items-center gap-2 mb-4">
          <Button 
            size="sm" 
            className="bg-tour-blue hover:bg-tour-blue/90 text-white font-medium px-3 flex-1"
            asChild
          >
            <a href="tel:+919876543210">
              <Phone className="w-4 h-4 mr-1" />
              Call
            </a>
          </Button>
          <Button 
            size="sm" 
            className="bg-tour-green hover:bg-tour-green/90 text-white font-medium px-3 flex-1"
            asChild
          >
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
          {service.features.map((feature, fIndex) => (
            <div key={fIndex} className="flex items-center gap-1.5 text-sm text-muted-foreground">
              {fIndex === 0 ? (
                <Compass className="w-4 h-4 text-tour-green" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-tour-teal" />
              )}
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-tour-blue mb-4">
            <span className="w-8 h-[2px] bg-tour-blue"></span>
            Our Services
            <span className="w-8 h-[2px] bg-tour-blue"></span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium Taxi Services For Every Need
          </h2>
          <p className="text-muted-foreground text-lg">
            From quick city rides to long-distance travel, we've got you covered with our comprehensive 
            range of transportation services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
