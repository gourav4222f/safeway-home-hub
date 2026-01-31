import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-tour-green hover:bg-tour-green/90 rounded-full flex items-center justify-center shadow-lg shadow-tour-green/30"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>
      <motion.a
        href="tel:+919876543210"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-tour-blue hover:bg-tour-blue/90 rounded-full flex items-center justify-center shadow-lg shadow-tour-blue/30"
      >
        <Phone className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
};

export default FloatingCTA;
