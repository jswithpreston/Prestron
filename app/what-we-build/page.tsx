import type { Metadata } from "next";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/MotionWrapper";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "What We Build",
  description:
    "The products Prestron owns, and the custom systems it builds for selective partners.",
  alternates: {
    canonical: "/what-we-build",
  },
};

export default function WhatWeBuild() {
  return (
    <>
      <section className="hero" aria-label="What We Build">
        <div className="container">
          <FadeIn delay={0.1} direction="none">
            <p className="hero__brand">Prestron</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <h1 className="hero__headline">What We Build</h1>
          </FadeIn>
        </div>
      </section>

      <section className="container content-section">
        <hr className="hairline" aria-hidden="true" />
        <FadeIn>
          <h2 className="content-section__title">Products</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="content-section__body">
            <p>
              Prestron builds technology products it owns outright. Each carries
              its own name, serves its own market, and stands on its own —
              separate from Prestron at the surface, connected to it in ownership
              and standard.
            </p>
            <p>
              Before Prestron builds a product, it has to hold up against a few
              questions:
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <ul className="question-list">
            <li>— Does it solve a real, specific problem?</li>
            <li>
              — Is the problem painful enough that people already pay to solve
              it, one way or another?
            </li>
            <li>— Can technology solve it meaningfully better?</li>
            <li>— Can it sustain itself as a business?</li>
            <li>— Can it scale beyond its first customers?</li>
            <li>
              — Does building it result in something Prestron owns outright?
            </li>
          </ul>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="content-section__body">
            <p>
              If the answer is consistently no, it doesn&apos;t get built —
              regardless of whether it&apos;s technically interesting.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="container content-section">
        <hr className="hairline" aria-hidden="true" />
        <FadeIn>
          <h2 className="content-section__title">Custom Systems</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="content-section__body">
            <p>
              Prestron partners selectively with organizations and institutions
              that have meaningful problems and the standards to match. This is
              not general development work. Engagements are chosen for fit, not
              availability.
            </p>
            <p>
              A custom engagement typically starts where an organization is
              already running real operations, and the software is expected to
              hold up under that weight — not a prototype, a system.
            </p>
          </div>
        </FadeIn>
      </section>

      <CTA
        title="Have a problem worth solving?"
        text="If you have a real, specific problem that technology could solve meaningfully better, we want to hear about it."
        label="Start the conversation →"
      />
    </>
  );
}
