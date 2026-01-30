import { useState } from "react";
import { MapPin, Calendar, Car, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

const QuickEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    service: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative z-20 -mt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-secondary px-6 py-4">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-secondary-foreground">
              Book Your Ride Now
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {/* Name */}
              <div className="relative">
                <label className="text-primary-foreground font-medium text-sm mb-2 block">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10 bg-card border-border"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="relative">
                <label className="text-primary-foreground font-medium text-sm mb-2 block">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-10 bg-card border-border"
                  />
                </div>
              </div>

              {/* Pickup Location */}
              <div className="relative">
                <label className="text-primary-foreground font-medium text-sm mb-2 block">Pick Up Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Pickup Location"
                    value={formData.pickup}
                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                    className="pl-10 bg-card border-border"
                  />
                </div>
              </div>

              {/* Drop Location */}
              <div className="relative">
                <label className="text-primary-foreground font-medium text-sm mb-2 block">Drop Off Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Drop Location"
                    value={formData.drop}
                    onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                    className="pl-10 bg-card border-border"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div className="relative">
                <label className="text-primary-foreground font-medium text-sm mb-2 block">Service Type</label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="bg-card border-border">
                    <Car className="w-4 h-4 mr-2 text-muted-foreground" />
                    <SelectValue placeholder="Choose Service" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border z-50">
                    <SelectItem value="local">Local Taxi</SelectItem>
                    <SelectItem value="outstation">Outstation</SelectItem>
                    <SelectItem value="airport">Airport Transfer</SelectItem>
                    <SelectItem value="tour">Tour Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="relative">
                <label className="text-primary-foreground font-medium text-sm mb-2 block">Pick Up Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="pl-10 bg-card border-border"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-center">
              <Button 
                type="submit" 
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-taxi-dark-gray px-12 text-lg font-semibold"
              >
                <Car className="w-5 h-5 mr-2" />
                Get Instant Callback
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickEnquiryForm;
