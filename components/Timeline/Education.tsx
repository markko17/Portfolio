"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      school: "Camarines Sur Polytechnic Colleges (CSPC)",
      degree: "Bachelor of Science in Computer Engineering",
      year: "2023 – Present",
      details: "Core: Computer Hardware, Data Structures, OOP, Network Design",
    },
    {
      school: "ACLC College of Iriga",
      degree: "Senior High School – TVL Programming Strand",
      year: "Graduated 2023",
      details: "Focus on fundamental programming concepts and technical logic.",
    },
  ];

  return (
    <section id="education" className="py-24 relative w-full bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <GraduationCap className="text-neon-teal w-8 h-8" />
            Education Timeline
          </h2>

          <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-black border-2 border-neon-teal box-glow"></div>
                
                <span className="text-neon-teal text-sm font-semibold tracking-wider uppercase mb-2 block">
                  {item.year}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {item.degree}
                </h3>
                <h4 className="text-lg text-gray-300 font-medium mb-3">
                  {item.school}
                </h4>
                <p className="text-gray-400">
                  {item.details}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
