"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Diagnostic Insights Platform for Insurance Underwriters",
    description: "AI-powered platform that analyzes medical diagnostic data to provide actionable insights for insurance underwriters, streamlining the underwriting process and reducing manual review time.",
    tech: ["Python", "Machine Learning", "Data Analytics", "Flask", "PostgreSQL"],
    period: "2024",
    highlights: [
      "Automated extraction and analysis of diagnostic reports",
      "Reduced underwriting review time by 65%",
      "Improved accuracy in risk assessment through ML models",
      "Streamlined workflow for insurance underwriters",
    ],
  },
  {
    title: "Fraud Detection System",
    description: "Advanced fraud detection system using machine learning algorithms to identify suspicious patterns and anomalies in insurance claims, preventing fraudulent activities.",
    tech: ["Python", "PyTorch", "Scikit-learn", "Feature Engineering", "Anomaly Detection"],
    period: "2024",
    highlights: [
      "Real-time fraud detection with high accuracy",
      "Reduced false positives through advanced ML models",
      "Automated flagging of suspicious claims",
      "Significant cost savings for insurance companies",
    ],
  },
  {
    title: "Real-time Anomaly Detection System",
    description: "Neural network-based intrusion detection system with high anomaly detection accuracy. Captures and processes live network traffic, performing multi-class classification for diverse attack types.",
    tech: ["PyShark", "PyTorch", "Scikit-learn"],
    period: "May 2024 - Nov 2024",
    highlights: [
      "Real-time alerting and automatic model retraining",
      "Adaptive cybersecurity response",
      "Multi-class classification for diverse attack types",
    ],
  },
  {
    title: "Patient Management System Web App",
    description: "Web-based hospital management system handling appointments, EMR, and billing workflows. Secured backend with JWT-based multi-factor authentication.",
    tech: ["React.js", "Node.js", "Express", "MySQL"],
    period: "Feb 2024 - Apr 2024",
    highlights: [
      "Digitized hospital records",
      "60% boost in staff efficiency",
      "JWT-based multi-factor authentication",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-16 gradient-text text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <Github size={18} />
                  </button>
                  <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 mt-4">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-purple-600 dark:text-purple-400 mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

