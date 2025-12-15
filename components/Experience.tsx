"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company: "NeuralKart Technologies Pvt Ltd",
    period: "Feb 2025 - May 2025",
    achievements: [
      "Architected and deployed scalable full-stack AI applications across web and mobile platforms using React, Next.js, FastAPI, and PostgreSQL",
      "Engineered machine learning models with real-time inference capabilities for automated, data-driven insights",
      "Optimized CI/CD workflows with Docker, achieving a 50% reduction in deployment time",
      "Designed distributed architecture with RabbitMQ and Celery for async tasks, enhancing scalability",
      "Automated cloud infrastructure provisioning with Terraform & AWS Lambda, reducing operational overhead",
    ],
  },
  {
    title: "Technical Project Lead",
    company: "Student Project - DronAid",
    period: "Jan 2025 - Sep 2025",
    achievements: [
      "Led DronAid team to participate in the prestigious UAS Challenge 2024 (Buckminster, UK), representing the project on an international stage",
      "Developed a real-time telemetry system using Firebase and RESTful APIs for live drone monitoring",
      "Optimized web and mobile applications, achieving 40% faster load times via caching and lazy loading",
      "Implemented AI-powered autonomous route planning, enhancing drone navigation and obstacle avoidance",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-16 gradient-text text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400" />
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1.5">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

