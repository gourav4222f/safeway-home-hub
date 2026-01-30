import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you provide 24/7 taxi service?",
    answer: "Yes, Sarathi SafeWay operates 24 hours a day, 7 days a week. Whether you need an early morning airport pickup or a late-night ride home, we're always available for your transportation needs.",
  },
  {
    question: "Are your drivers verified and trained?",
    answer: "Absolutely! All our drivers undergo thorough background checks, driving tests, and customer service training. They are licensed, experienced, and committed to providing safe and professional service.",
  },
  {
    question: "Do you offer outstation trips?",
    answer: "Yes, we specialize in outstation travel! We offer both one-way and round-trip options to various destinations. Our drivers are experienced in long-distance travel and know the best routes.",
  },
  {
    question: "How can I book a taxi?",
    answer: "Booking is easy! You can call us directly, send a WhatsApp message, or fill out the quick enquiry form on our website. We'll confirm your booking within minutes and send you driver details.",
  },
  {
    question: "Is airport pickup available at night?",
    answer: "Yes, we offer airport pickup and drop services round the clock. We track your flight to ensure timely pickup, even if your flight is delayed. Our drivers will be waiting for you regardless of the time.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, UPI payments (Google Pay, PhonePe, Paytm), and bank transfers for corporate clients. Payment is collected at the end of your journey for maximum convenience.",
  },
  {
    question: "Can I book a taxi in advance?",
    answer: "Yes, we encourage advance bookings! You can book your ride up to 30 days in advance. This is especially recommended for airport transfers and outstation trips to ensure vehicle availability.",
  },
  {
    question: "Do you offer corporate accounts?",
    answer: "Yes, we have special corporate packages with monthly billing, dedicated account managers, and discounted rates. Contact us to set up a corporate account for your organization.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label mb-4 block">FAQ</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have questions? We've got answers! Here are some of the most common questions our customers ask. 
              If you don't find what you're looking for, feel free to contact us.
            </p>
            <div className="bg-primary rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold text-primary-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Can't find the answer you're looking for? Please reach out to our friendly team.
              </p>
              <div className="text-2xl font-heading font-bold text-secondary">
                +91 98765 43210
              </div>
            </div>
          </motion.div>

          {/* Right Side - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border-none shadow-sm px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
