"use client";

import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroMark() {
  return (
    <svg
      className="corner-mark"
      viewBox="0 0 56 56"
      width="56"
      height="56"
      aria-hidden="true"
    >
      <motion.path
        className="corner-mark__h"
        d="M1 1 H34"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
      />
      <motion.path
        className="corner-mark__v"
        d="M1 1 V34"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
      />
    </svg>
  );
}
