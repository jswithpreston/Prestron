import type { Metadata } from "next";
import { FadeIn } from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Prestron's terms of service — the rules governing your use of our website.",
  alternates: {
    canonical: "/terms",
  },
};

export default function Terms() {
  return (
    <>
      <section className="hero" aria-label="Terms of Service">
        <div className="container">
          <FadeIn delay={0.1} direction="none">
            <p className="hero__brand">Prestron</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <h1 className="hero__headline" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
              Terms of Service
            </h1>
          </FadeIn>
          <FadeIn delay={0.3} direction="up">
            <p style={{ color: "var(--color-ink-55)", marginTop: "var(--spacing-md)" }}>
              Last updated: September 2026
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container content-section">
        <hr className="hairline" aria-hidden="true" />
        <FadeIn>
          <div className="content-section__body" style={{ maxWidth: 720 }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--spacing-lg)" }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Prestron website, you accept and agree
              to be bound by these terms. If you do not agree to these terms,
              please do not use our website.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--spacing-lg)", marginTop: "var(--spacing-2xl)" }}>
              2. Use of Website
            </h2>
            <p>
              You may use our website for lawful purposes only. You must not use
              our website in any way that causes, or may cause, damage to the
              website or impairment of its availability.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--spacing-lg)", marginTop: "var(--spacing-2xl)" }}>
              3. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos, and
              software, is the property of Prestron and is protected by
              applicable intellectual property laws.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--spacing-lg)", marginTop: "var(--spacing-2xl)" }}>
              4. Limitation of Liability
            </h2>
            <p>
              Prestron shall not be liable for any indirect, incidental,
              special, or consequential damages arising out of or in connection
              with your use of our website.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--spacing-lg)", marginTop: "var(--spacing-2xl)" }}>
              5. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting to this page.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--spacing-lg)", marginTop: "var(--spacing-2xl)" }}>
              6. Contact
            </h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href="mailto:contact@prestron.com" style={{ color: "var(--color-dusk-blue)" }}>
                contact@prestron.com
              </a>.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
