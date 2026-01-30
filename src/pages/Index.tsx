import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickEnquiryForm from "@/components/QuickEnquiryForm";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CTAStrip from "@/components/CTAStrip";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <QuickEnquiryForm />
      <AboutSection />
      <ServicesSection />
      <CTAStrip />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
