import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label mb-4 block">Contact Us</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch With Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a question or want to book a ride? Fill out the form below or contact us directly. 
            We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Phone */}
            <div className="bg-card rounded-2xl p-6 shadow-lg flex items-start gap-4">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-primary font-heading font-bold text-lg">+91 98765 43210</p>
                <p className="text-muted-foreground text-sm">Mon-Sun, 24/7</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-card rounded-2xl p-6 shadow-lg flex items-start gap-4">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-foreground font-medium">info@sarathisafeway.com</p>
                <p className="text-muted-foreground text-sm">We reply within 2 hours</p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-card rounded-2xl p-6 shadow-lg flex items-start gap-4">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Office</h3>
                <p className="text-foreground">123 Transport Hub, Main Road</p>
                <p className="text-muted-foreground text-sm">Delhi, India - 110001</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-taxi-dark-gray">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-foreground font-medium text-sm mb-2 block">Full Name</label>
                  <Input
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label className="text-foreground font-medium text-sm mb-2 block">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label className="text-foreground font-medium text-sm mb-2 block">Email (Optional)</label>
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label className="text-foreground font-medium text-sm mb-2 block">Service Type</label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50">
                      <SelectItem value="local">Local Taxi</SelectItem>
                      <SelectItem value="outstation">Outstation</SelectItem>
                      <SelectItem value="airport">Airport Transfer</SelectItem>
                      <SelectItem value="tour">Tour Package</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-foreground font-medium text-sm mb-2 block">Your Message</label>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted border-border resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-taxi-gold">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
