import { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

interface HeroSliderProps {
  label: string;
  title: string;
  rotatingWords: string[];
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const HeroSlider = forwardRef<HTMLElement, HeroSliderProps>(({
  label,
  title,
  rotatingWords,
  description,
  ctaText,
  ctaLink,
}, ref) => {
  const [currentWord, setCurrentWord] = useState(0);
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 600], [0, -60]);

  useEffect(() => {
    const id = setInterval(() => setCurrentWord((p) => (p + 1) % rotatingWords.length), 3000);
    return () => clearInterval(id);
  }, [rotatingWords.length]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#f8f7f5] text-[#0a0a0a] bg-grid-pattern"
    >
      {/* Soft orange glow on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff5a1f]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 3D Scene */}
      <FloatingShapes className="absolute inset-0 lg:left-1/2 lg:w-1/2 opacity-80" />

      {/* Content */}
      <motion.div
        className="container mx-auto px-6 relative z-10 text-center lg:text-left lg:flex lg:items-center pt-20"
        style={{ y: contentY }}
      >
        <div className="w-full mx-auto lg:mx-0 lg:w-1/2 lg:pr-12">
          <motion.div
            className="inline-flex items-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#ff5a1f] animate-pulse" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-600">
              {label}
            </span>
          </motion.div>

          <motion.h1
            className="font-display font-bold text-[#0a0a0a] leading-[1.0] tracking-[-0.04em] text-balance text-6xl md:text-7xl lg:text-[5.5rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {title}{" "}
            <br className="hidden md:block" />
            <span className="relative inline-block align-baseline mt-2 md:mt-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[currentWord]}
                  className="inline-block neon-block-text px-2 py-1"
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)", rotateX: 90 }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)", rotateX: 0 }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", rotateX: -90 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                >
                  {rotatingWords[currentWord]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed text-balance mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <Link to={ctaLink} className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 shadow-xl shadow-black/10">
              {ctaText} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 text-[#0a0a0a] font-semibold text-lg hover:border-gray-500 bg-white/50 backdrop-blur-sm transition-colors duration-300"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
});

HeroSlider.displayName = "HeroSlider";
export default HeroSlider;
