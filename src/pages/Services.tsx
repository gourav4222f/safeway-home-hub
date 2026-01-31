import { MapPin, ArrowUpRight, Compass, CheckCircle2, Phone, MessageCircle, Clock, Shield, Car, Plane, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAStrip from "@/components/CTAStrip";
import serviceTaxi from "@/assets/service-taxi.jpg";
import serviceOutstation from "@/assets/service-outstation.jpg";
import serviceAirport from "@/assets/service-airport.jpg";
import serviceTour from "@/assets/service-tour.jpg";

const services = [
  {
    id: "local-taxi",
    image: serviceTaxi,
    icon: Car,
    title: "Local Taxi Service",
    location: "Mumbai, India",
    description: "Quick and reliable city rides for all your local transportation needs. Available 24/7 with comfortable, AC-equipped vehicles.",
    features: [
      "Hourly rental options",
      "AC & Non-AC vehicles",
      "Professional drivers",
      "Real-time tracking",
      "Multiple payment options",
      "Door-to-door service",
    ],
  },
  {
    id: "outstation",
    image: serviceOutstation,
    icon: Map,
    title: "Outstation Taxi",
    location: "Pan India",
    description: "Comfortable long-distance travel across cities with experienced drivers. One-way and round-trip options available for all destinations.",
    features: [
      "One-way & round trips",
      "Multi-city tours",
      "Experienced drivers",
      "Well-maintained vehicles",
      "Flexible pickup times",
      "24/7 roadside assistance",
    ],
  },
  {
    id: "airport",
    image: serviceAirport,
    icon: Plane,
    title: "Airport Pickup & Drop",
    location: "All Major Airports",
    description: "Never miss a flight with our punctual airport transfer service. Real-time flight tracking ensures we're always there when you land.",
    features: [
      "Flight tracking",
      "Meet & greet service",
      "24/7 availability",
      "Fixed pricing",
      "Free waiting time",
      "Luggage assistance",
    ],
  },
  {
    id: "tour",
    image: serviceTour,
    icon: Compass,
    title: "Tour Packages",
    location: "Popular Destinations",
    description: "Explore India's most beautiful destinations with our curated tour packages. All-inclusive trips with comfortable stays and guided tours.",
    features: [
      "All-inclusive packages",
      "Experienced tour guides",
      "Comfortable stays",
      "Sightseeing included",
      "Meal options",
      "Customizable itineraries",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Hero */}
      <section className="pt-24 lg:pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              Our Services
              <span className="w-8 h-[2px] bg-primary"></span>
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6">
              Premium Taxi Services
            </h1>
            <p className="text-secondary-foreground/70 text-lg">
              From quick city rides to long-distance travel, we've got you covered with our comprehensive range of transportation services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[350px] lg:h-[450px] object-cover"
                    />
                  </div>
                  {/* Service Icon Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-tour-blue text-white rounded-2xl p-4 shadow-lg">
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-tour-blue/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-tour-blue" />
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-tour-teal" />
                      <span>{service.location}</span>
                    </div>
                  </div>

                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-tour-green shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-tour-blue hover:bg-tour-blue/90 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="border-tour-green text-tour-green hover:bg-tour-green hover:text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Strip */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Safe & Secure", text: "Verified drivers & tracked rides" },
              { icon: Clock, title: "24/7 Available", text: "Round the clock service" },
              { icon: Car, title: "Clean Vehicles", text: "Well-maintained & sanitized" },
              { icon: CheckCircle2, title: "Best Prices", text: "Transparent & affordable" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 bg-tour-blue/10 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-tour-blue" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
      <Footer />
    </div>
  );
};

export default Services;
