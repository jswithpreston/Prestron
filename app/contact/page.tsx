import type { Metadata } from "next";
import { FadeIn } from "@/components/MotionWrapper";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "For product inquiries, custom systems, or general questions, reach out directly.",
};

export default function Contact() {
  return (
    <>
      <section className="hero" aria-label="Contact">
        <div className="container">
          <FadeIn delay={0.1} direction="none">
            <p className="hero__brand">Prestron</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <h1 className="hero__headline">Contact</h1>
          </FadeIn>
        </div>
      </section>

      <section className="container content-section">
        <hr className="hairline" aria-hidden="true" />
        <FadeIn>
          <div className="content-section__body" style={{ marginBottom: "var(--spacing-2xl)" }}>
            <p>
              For product inquiries, custom systems, or general questions, reach
              out directly.
            </p>
            <p>
              <a
                href="mailto:contact@prestron.com"
                style={{ color: "var(--color-dusk-blue)", textDecoration: "none" }}
              >
                contact@prestron.com
              </a>
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <ContactForm />
        </FadeIn>
      </section>
    </>
  );
}
