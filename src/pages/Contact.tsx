import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "+91 98765 43211"],
    action: "tel:+919876543210",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+91 98765 43210"],
    action: "https://wa.me/919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@sarathisafeway.com", "support@sarathisafeway.com"],
    action: "mailto:info@sarathisafeway.com",
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: ["123, MG Road, Andheri West", "Mumbai, Maharashtra 400058"],
    action: "#",
  },
];

const workingHours = [
  { day: "Monday - Friday", time: "24 Hours" },
  { day: "Saturday", time: "24 Hours" },
  { day: "Sunday", time: "24 Hours" },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

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
              Contact Us
              <span className="w-8 h-[2px] bg-primary"></span>
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-secondary-foreground/70 text-lg">
              Have questions or need to book a ride? We're here to help 24/7. Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.action}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-tour-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-tour-blue transition-colors">
                  <info.icon className="w-7 h-7 text-tour-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{info.title}</h3>
                {info.details.map((detail, dIndex) => (
                  <p key={dIndex} className="text-muted-foreground text-sm">{detail}</p>
                ))}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input placeholder="Your name" className="bg-background" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input type="tel" placeholder="+91 98765 43210" className="bg-background" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="your@email.com" className="bg-background" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Type *
                  </label>
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="local">Local Taxi Service</SelectItem>
                      <SelectItem value="outstation">Outstation Taxi</SelectItem>
                      <SelectItem value="airport">Airport Pickup & Drop</SelectItem>
                      <SelectItem value="tour">Tour Packages</SelectItem>
                      <SelectItem value="other">Other Enquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your travel requirements..." 
                    className="bg-background min-h-[120px]" 
                    required 
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-tour-blue hover:bg-tour-blue/90 text-white">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Working Hours & Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Working Hours Card */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-tour-green/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-tour-green" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">Working Hours</h3>
                </div>
                <div className="space-y-4">
                  {workingHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b border-border/50 last:border-0 last:pb-0">
                      <span className="text-foreground">{item.day}</span>
                      <span className="text-tour-green font-semibold">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-tour-blue rounded-2xl p-8 text-white">
                <h3 className="font-heading text-2xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-white/80 mb-6">
                  For urgent bookings or immediate assistance, call us directly or send a WhatsApp message.
                </p>
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-white text-tour-blue hover:bg-white/90">
                    <Phone className="w-5 h-5 mr-2" />
                    +91 98765 43210
                  </Button>
                  <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-tour-blue">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-2xl h-[250px] flex items-center justify-center border border-border/50">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground/70">Mumbai, Maharashtra</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
