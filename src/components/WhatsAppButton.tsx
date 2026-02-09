import { motion } from 'framer-motion';

interface WhatsAppButtonProps {
  onClick: () => void;
}

export function WhatsAppButton({ onClick }: WhatsAppButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <motion.div
        animate={{ 
          rotate: [0, -10, 10, -10, 10, 0],
          scale: [1, 1.1, 1.1, 1.1, 1.1, 1]
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 5
        }}
      >
        <img 
          src="/whatsapp-icon.png" 
          alt="WhatsApp" 
          className="w-8 h-8 md:w-10 md:h-10 brightness-0 invert" 
        />
      </motion.div>
      
      {/* Tooltip text on hover */}
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-white text-[#2c273e] px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale conosco agora!
      </span>
    </motion.button>
  );
}
