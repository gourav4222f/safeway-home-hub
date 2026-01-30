import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import serviceTaxi from "@/assets/service-taxi.jpg";
import serviceOutstation from "@/assets/service-outstation.jpg";
import serviceAirport from "@/assets/service-airport.jpg";
import serviceTour from "@/assets/service-tour.jpg";

const services = [
  {
    image: serviceTaxi,
    title: "Local Taxi Service",
    description: "Reliable city rides for daily commute, shopping, and local travel. Available 24/7 with professional drivers.",
    features: ["Hourly & Daily Rates", "AC & Non-AC Options", "GPS Tracked"],
  },
  {
    image: serviceOutstation,
    title: "Outstation Taxi",
    description: "Comfortable long-distance travel with experienced drivers. One-way and round-trip options for inter-city journeys.",
    features: ["One-way & Round Trip", "Multiple Cities", "Package Deals"],
  },
  {
    image: serviceAirport,
    title: "Airport Pickup & Drop",
    description: "Never miss a flight with our punctual airport transfer service. We track your flight for timely pickup.",
    features: ["Flight Tracking", "Meet & Greet", "24/7 Available"],
  },
  {
    image: serviceTour,
    title: "Tour Packages",
    description: "Explore popular destinations with our curated tour packages. Experienced drivers who double as local guides.",
    features: ["Popular Destinations", "Custom Itineraries", "Group Discounts"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label mb-4 block">Our Services</span>
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 font-heading text-xl font-bold text-secondary-foreground">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-taxi-gold">
                    <Phone className="w-4 h-4 mr-1" />
                    Call
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
