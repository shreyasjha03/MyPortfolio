"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 gradient-text text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-12"
        >
          <div className="flex items-start gap-4 mb-6">
            <MapPin className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={20} />
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Location:</span> Mumbai, India
            </p>
          </div>

          <div className="flex items-start gap-4 mb-8">
            <GraduationCap className="text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-semibold">Education:</span> B.Tech in Computer & Communication Engineering
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Manipal Institute of Technology, Manipal (Minor in Computational Intelligence)
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I'm a passionate Full-Stack Developer and AI/ML Engineer with expertise in building
            scalable applications using modern technologies. My journey includes developing
            AI-powered solutions, optimizing cloud infrastructure, and leading technical projects
            that have made a real impact.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I previously interned at NeuralKart Technologies, where I worked on cutting-edge AI
            applications, and led the DronAid project for the UAS Challenge 2024.
            I enjoy solving complex problems and turning ideas into reality through code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

