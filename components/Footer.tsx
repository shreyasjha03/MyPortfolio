"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding bg-gray-900 dark:bg-black text-gray-400">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm"
        >
          © {currentYear} Shreyas Jha. Built with Next.js, TypeScript, and Tailwind CSS.
        </motion.p>
      </div>
    </footer>
  );
}

