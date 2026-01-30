import { Shield, Clock, Users, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";

const features = [
  { icon: Shield, text: "Reliable & Safe Rides" },
  { icon: Users, text: "Professional Drivers" },
  { icon: Clock, text: "24/7 Support" },
  { icon: Award, text: "Affordable Pricing" },
];

const highlights = [
  "Easy & Emergency Solutions",
  "More Reliable & Experienced",
  "100% Satisfaction Guarantee",
  "Getting Affordable Price",
  "Award Winning Company",
  "Many Pickup Locations",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Sarathi SafeWay Team"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-secondary/95 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl lg:text-3xl font-heading font-bold text-primary">10+</div>
                    <div className="text-secondary-foreground/70 text-sm">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-heading font-bold text-primary">50K+</div>
                    <div className="text-secondary-foreground/70 text-sm">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-heading font-bold text-primary">100+</div>
                    <div className="text-secondary-foreground/70 text-sm">Expert Drivers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4 block">Why Choose Us</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Most Trusted Taxi Company in Town
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              At Sarathi SafeWay, we believe in providing more than just a ride. We offer peace of mind, 
              reliability, and exceptional service that makes every journey memorable. Our professional 
              drivers and well-maintained fleet ensure your safety and comfort at all times.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-taxi-gold">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
