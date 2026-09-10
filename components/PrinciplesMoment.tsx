"use client";

import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PrinciplesMoment() {
  return (
    <div className="principles-moment">
      <div className="principles-moment__grid" aria-hidden="true" />
      <motion.h2
        className="principles-moment__title"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        Operating Principles
      </motion.h2>
      <motion.p
        style={{
          marginTop: "var(--spacing-xl)",
          fontSize: "1.25rem",
          color: "var(--color-ink-70)",
          maxWidth: 640,
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.6,
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
      >
        Build what&apos;s real. Own it, don&apos;t rent it. Let the product
        speak.
      </motion.p>
    </div>
  );
}
