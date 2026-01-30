import { Phone, MessageCircle, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-full mb-8">
            <Car className="w-10 h-10 text-secondary-foreground" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Book Your Safe Ride?
          </h2>
          <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto mb-10">
            Experience the comfort and reliability of Sarathi SafeWay. Book now and join thousands of satisfied customers who trust us for all their travel needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="text-center">
              <div className="text-secondary font-heading text-4xl lg:text-5xl font-bold mb-2">
                +91 98765 43210
              </div>
              <div className="text-primary-foreground/60">Available 24/7</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-taxi-dark-gray text-lg px-10 cta-pulse">
              <Phone className="w-6 h-6 mr-2" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-10">
              <MessageCircle className="w-6 h-6 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
