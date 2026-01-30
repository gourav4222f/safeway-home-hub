import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTAStrip = () => {
  return (
    <section className="relative py-16 lg:py-20 bg-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
              Need a Ride? <span className="text-primary">We're Here 24/7!</span>
            </h2>
            <p className="text-secondary-foreground/70 text-lg max-w-xl">
              Just one call away from your safe and comfortable journey. Book now and experience the Sarathi SafeWay difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="text-center">
              <div className="text-primary font-heading text-3xl lg:text-4xl font-bold mb-1">
                +91 98765 43210
              </div>
              <div className="text-secondary-foreground/60 text-sm">Call us anytime</div>
            </div>
            
            <div className="flex gap-3">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-taxi-gold cta-pulse">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Taxi Pattern Bottom */}
      <div className="absolute bottom-0 left-0 right-0 taxi-pattern" />
    </section>
  );
};

export default CTAStrip;
