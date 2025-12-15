"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 gradient-text text-center"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.a
            href="mailto:shreyasjha16@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">shreyasjha16@gmail.com</p>
            </div>
          </motion.a>

          <motion.a
            href="tel:+917970423955"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">+91 7970423955</p>
            </div>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/shreyas-jha"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <Linkedin size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">LinkedIn</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">linkedin.com/in/shreyas-jha</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Mumbai, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

