"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Network, Wrench } from "lucide-react";
import DinoClip from "./DinoClip";

export default function Skills() {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Code2 className="w-6 h-6 text-neon-teal" />,
      skills: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "Embedded Systems",
      icon: <Cpu className="w-6 h-6 text-neon-teal" />,
      skills: ["Arduino IDE", "Sensors", "Circuit Prototyping", "IoT Integration"],
    },
    {
      title: "Networking & Hardware",
      icon: <Network className="w-6 h-6 text-neon-teal" />,
      skills: ["RJ45 Crimping", "LAN Setup", "Cisco Packet Tracer"],
    },
    {
      title: "Tools & Software",
      icon: <Wrench className="w-6 h-6 text-neon-teal" />,
      skills: ["VS Code", "Git", "Microsoft Office"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 relative w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical <span className="text-neon-teal">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning software development, hardware integration, and network architecture.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-black/50 flex items-center justify-center mb-6 group-hover:box-glow transition-all">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-400 flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-teal/50"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <DinoClip />
    </section>
  );
}
