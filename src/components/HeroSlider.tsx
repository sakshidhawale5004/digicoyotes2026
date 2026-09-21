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
      className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* 3D Black Hole scene */}
      <FloatingShapes className="absolute inset-0 lg:left-[40%] lg:w-[60%]" />

      {/* Content */}
      <motion.div
        className="container mx-auto px-6 relative z-10 text-center lg:text-left lg:flex lg:items-center pt-20"
        style={{ y: contentY }}
      >
        <div className="w-full mx-auto lg:mx-0 lg:max-w-2xl xl:max-w-[800px]">
          <motion.div
            className="inline-flex items-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#ff5a1f] animate-pulse" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/70">
              {label}
            </span>
          </motion.div>

          <motion.h1
            className="font-display font-bold text-white leading-[1.0] tracking-[-0.04em] text-balance text-6xl md:text-7xl lg:text-[5.5rem]"
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
                  className="inline-block text-[#ff5a1f]"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {rotatingWords[currentWord]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 text-white/70 text-lg md:text-xl max-w-xl leading-relaxed text-balance mx-auto lg:mx-0"
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
            <Link to={ctaLink} className="inline-flex items-center gap-2 bg-[#ff5a1f] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#0a0a0a] transition-colors duration-300">
              {ctaText} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold text-lg hover:border-white transition-colors duration-300"
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
