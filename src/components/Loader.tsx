import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/loader-logo.png";

export default function Loader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Fake loading delay
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onLoadingComplete, 600); // Wait for fade out animation
    }, 2000);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.img 
              src={logo} 
              alt="Digital Coyotes Loader" 
              className="w-32 h-auto md:w-48 object-contain drop-shadow-2xl"
              animate={{ 
                scale: [1, 1.05, 1],
                filter: ["drop-shadow(0px 0px 0px #ff5a1f)", "drop-shadow(0px 0px 20px #ff5a1f)", "drop-shadow(0px 0px 0px #ff5a1f)"]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div 
            className="mt-8 overflow-hidden h-1 w-48 bg-white/10 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div 
              className="h-full bg-[#ff5a1f] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
