"use client";

import { motion } from "framer-motion";

const VARIANTS = {
  up: { opacity: 0, y: 24 },
  down: { opacity: 0, y: -24 },
  left: { opacity: 0, x: 24 },
  right: { opacity: 0, x: -24 },
  fade: { opacity: 0 },
  scale: { opacity: 0, scale: 0.96 },
};

export default function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}) {
  const initial = VARIANTS[variant] || VARIANTS.up;

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
