import type { Metadata } from "next";
import { FadeIn } from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Prestron's privacy policy — how we collect, use, and protect your data.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function Privacy() {
  return (
    <>
      <section className="hero" aria-label="Privacy Policy">
        <div className="container">
          <FadeIn delay={0.1} direction="none">
            <p className="hero__brand">Prestron</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <h1 className="hero__headline" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
              Privacy Policy
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
              1. Information We Collect
            </h2>
            <p>
              Prestron collects information you provide directly and information
              collected automatically through your use of our website.
            </p>
            <p>
              <strong>Information you provide:</strong> When you contact us through
              our form, we collect your name, email address, and message content.
            </p>
            <p>
              <strong>Information collected automatically:</strong> We use PostHog
              analytics to collect anonymous usage data including page views,
              browser type, device type, and referral source. This data is
              aggregated and does not personally identify you.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--spacing-lg)", marginTop: "var(--spacing-2xl)" }}>
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to operate and improve our
              website, respond to your inquiries, and understand how visitors
              interact with our content.
            </p>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--spacing-lg)", marginTop: "var(--spacing-2xl)" }}>
              3. Cookies
            </h2>
            <p>
              Our website uses essential cookies for functionality and analytics
              cookies (via PostHog) to understand usage patterns. You can control
              cookie settings through our cookie consent banner.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--spacing-lg)", marginTop: "var(--spacing-2xl)" }}>
              4. Data Security
            </h2>
            <p>
              We implement appropriate security measures to protect your personal
              information. However, no method of transmission over the Internet
              is 100% secure.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--spacing-lg)", marginTop: "var(--spacing-2xl)" }}>
              5. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. To exercise these rights, contact us at{" "}
              <a href="mailto:contact@prestron.com" style={{ color: "var(--color-dusk-blue)" }}>
                contact@prestron.com
              </a>.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--spacing-lg)", marginTop: "var(--spacing-2xl)" }}>
              6. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Changes will
              be posted on this page with an updated revision date.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "var(--spacing-lg)", marginTop: "var(--spacing-2xl)" }}>
              7. Contact
            </h2>
            <p>
              For questions about this policy, contact us at{" "}
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
