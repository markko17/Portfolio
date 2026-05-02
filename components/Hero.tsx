"use client";

import { motion } from "framer-motion";
import DinoClip from "./DinoClip";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-fallback.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-neon-teal font-medium tracking-wide mb-2 text-sm md:text-base">
            WELCOME TO MY WORLD
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Mark <span className="text-neon-teal text-glow">Lagdaan</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
            Computer Engineering Student | Full-Stack Developer | IoT Systems Builder
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
            A detail-oriented Computer Engineering student specializing in full-stack development,
            embedded systems, and network engineering. Focused on building practical, real-world
            systems that combine software, hardware, and automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-black bg-neon-teal rounded-full overflow-hidden transition-all hover:box-glow">
              <span className="relative z-10 flex items-center gap-2">
                View Projects <span>→</span>
              </span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
              Contact Me <span>→</span>
            </a>
            <a href="/CV.pdf" download="Mark_Lagdaan_CV.pdf" className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white border border-neon-teal/50 rounded-full hover:bg-neon-teal/10 hover:border-neon-teal transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              Download CV <span></span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-neon-teal absolute top-0"
          />
        </div>
      </motion.div>

      <DinoClip />
    </section>
  );
}
