import { Shield, Clock, Users, Award, CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAStrip from "@/components/CTAStrip";
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

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide safe, reliable, and affordable transportation services that exceed customer expectations while maintaining the highest standards of professionalism.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become the most trusted and preferred taxi service provider, known for exceptional service quality and customer satisfaction across India.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Safety first, customer satisfaction, integrity, professionalism, and continuous improvement drive everything we do at Sarathi SafeWay.",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50K+", label: "Happy Customers" },
  { value: "100+", label: "Expert Drivers" },
  { value: "500+", label: "Vehicles" },
];

const About = () => {
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
              About Us
              <span className="w-8 h-[2px] bg-primary"></span>
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6">
              Your Trusted Travel Partner
            </h1>
            <p className="text-secondary-foreground/70 text-lg">
              Learn more about Sarathi SafeWay and our commitment to providing exceptional taxi and travel services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 lg:py-28 bg-background">
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
              </div>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-tour-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-tour-blue mb-4">
              <span className="w-8 h-[2px] bg-tour-blue"></span>
              What Drives Us
              <span className="w-8 h-[2px] bg-tour-blue"></span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Our Core Principles
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-md border border-border/50 text-center"
              >
                <div className="w-16 h-16 bg-tour-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-tour-blue" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
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

export default About;
