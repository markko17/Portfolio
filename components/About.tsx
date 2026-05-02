"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DinoClip from "./DinoClip";

export default function About() {
  return (
    <section id="about" className="py-24 relative w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12"
        >
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <div className="w-full">
              <h2 className="text-4xl font-bold text-white mb-4">
                About <span className="text-neon-teal">Me</span>
              </h2>
              <div className="w-20 h-1 bg-neon-teal rounded-full mb-8"></div>
            </div>
            
            {/* Professional Picture */}
            <div className="relative w-full max-w-[280px] aspect-[4/5] mx-auto md:mx-0 rounded-2xl overflow-hidden border border-white/10 group mt-4">
              <div className="absolute inset-0 bg-neon-teal/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-500 z-10"></div>
              <Image 
                src="/images/me.jpg" 
                alt="Mark Lagdaan" 
                fill
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
              />
              {/* Glow Behind Image */}
              <div className="absolute -inset-1 bg-neon-teal/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 flex flex-col justify-center">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a driven Computer Engineering student with a passion for integrating software and hardware. 
              My journey involves diving deep into full-stack web development, mastering embedded systems, 
              and understanding intricate network designs.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I believe in building practical, real-world systems. Whether it's a responsive data dashboard 
              or an IoT-based early warning system, I enjoy turning complex problems into elegant, 
              automated solutions.
            </p>
          </div>
        </motion.div>
      </div>
      <DinoClip />
    </section>
  );
}
