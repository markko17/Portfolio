"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import DinoClip from "./DinoClip";

export default function Projects() {
  const projects = [
    {
      title: "Web-Based Registration & Payment System",
      description: "Full-stack PHP + MySQL system featuring secure user registration and automated payment logging. Designed to streamline administrative workflows.",
      tags: ["PHP", "MySQL", "Full-Stack"],
      featured: true,
    },
    {
      title: "IoT Landslide Monitoring System",
      description: "Arduino-based early warning system with soil instability detection, LCD real-time monitoring, and buzzer alerts for disaster prevention.",
      tags: ["Arduino", "Sensors", "C++"],
      featured: false,
    },
    {
      title: "Admin Data Monitoring Dashboard",
      description: "Centralized system monitoring dashboard with a responsive UI built in JavaScript. Provides real-time insights into system metrics.",
      tags: ["JavaScript", "HTML/CSS", "UI/UX"],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 relative w-full bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-neon-teal">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-neon-teal rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-white/5 border ${project.featured ? 'border-neon-teal/50' : 'border-white/10'} rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 hover:box-glow overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-teal/10 blur-3xl rounded-full group-hover:bg-neon-teal/20 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border border-white/10">
                  <span className="text-neon-teal font-bold">{index + 1}</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Code2 className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-neon-teal transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-teal transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <DinoClip />
    </section>
  );
}
