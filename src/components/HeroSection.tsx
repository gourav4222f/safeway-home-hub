import { useState, useEffect } from "react";
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "Welcome to Sarathi SafeWay",
    title: "Fast & Reliable\nTaxi Service",
    description: "Your trusted partner for safe, comfortable, and affordable transportation across the city and beyond.",
  },
  {
    image: hero2,
    subtitle: "Airport Transfers",
    title: "On-Time Airport\nPickup & Drop",
    description: "Never miss a flight again. Professional airport transfer service with flight tracking and 24/7 availability.",
  },
  {
    image: hero3,
    subtitle: "Outstation Travel",
    title: "Explore Beyond\nCity Limits",
    description: "Comfortable long-distance travel with experienced drivers. One-way and round-trip options available.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen min-h-[600px] max-h-[900px] pt-[76px] lg:pt-[92px]">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label mb-4 block">
                {slides[currentSlide].subtitle}
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-foreground leading-tight whitespace-pre-line mb-6">
                {slides[currentSlide].title}
              </h1>
              <p className="text-secondary-foreground/80 text-lg lg:text-xl max-w-xl mb-8">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-taxi-gold text-lg px-8 cta-pulse">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary text-lg px-8">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border-2 border-secondary-foreground/50 text-secondary-foreground/50 hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-primary w-8"
                  : "bg-secondary-foreground/50 hover:bg-secondary-foreground"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
