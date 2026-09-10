import type { Metadata } from "next";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/MotionWrapper";
import Link from "next/link";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Prestron — our products, services, and how we work.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    q: "What does Prestron do?",
    a: "Prestron is a technology product house built from Uganda. We build and own our own technology products, and we partner selectively with organizations to build custom systems where we can bring exceptional value.",
  },
  {
    q: "Is Prestron an agency or outsourcing shop?",
    a: "No. Prestron builds and owns its own products. Custom system work is selective — chosen for fit, not availability. Every engagement runs on the same principles we apply to our own products.",
  },
  {
    q: "How does Prestron decide what to build?",
    a: "Every product starts with a real, specific problem. We ask whether the problem is painful enough that people already pay to solve it, whether technology can solve it meaningfully better, and whether the result can stand as something lasting and scalable.",
  },
  {
    q: "Where is Prestron based?",
    a: "Prestron is based in Kampala, Uganda. Uganda is the starting point — the ambition is to build technology that can stand in any market.",
  },
  {
    q: "How can I contact Prestron?",
    a: "You can reach us at contact@prestron.com or through our contact form. We respond to product inquiries, custom systems questions, and general questions.",
  },
  {
    q: "Does Prestron accept all custom projects?",
    a: "No. Custom engagements are chosen for fit, not availability. We partner with organizations that have meaningful problems and the standards to match.",
  },
];

export default function FAQ() {
  return (
    <>
      <section className="hero" aria-label="FAQ">
        <div className="container">
          <FadeIn delay={0.1} direction="none">
            <p className="hero__brand">Prestron</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <h1 className="hero__headline" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
              Frequently Asked Questions
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="container content-section">
        <hr className="hairline" aria-hidden="true" />
        <StaggerChildren staggerDelay={0.1}>
          {faqs.map((faq, i) => (
            <StaggerItem key={i}>
              <div style={{ marginBottom: "var(--spacing-2xl)", maxWidth: 720 }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "var(--spacing-md)" }}>
                  {faq.q}
                </h2>
                <p style={{ color: "var(--color-ink-70)", lineHeight: 1.7, margin: 0 }}>
                  {faq.a}
                </p>
                {i < faqs.length - 1 && <hr className="hairline" aria-hidden="true" style={{ marginTop: "var(--spacing-2xl)" }} />}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      <section className="container content-section">
        <hr className="hairline" aria-hidden="true" />
        <FadeIn>
          <div className="content-section__body">
            <p>
              Still have questions?{" "}
              <Link href="/contact" style={{ color: "var(--color-dusk-blue)" }}>
                Get in touch →
              </Link>
            </p>
          </div>
        </FadeIn>
      </section>

      <CTA text="The fastest way to an answer is a question. Send it through and we'll respond." />
    </>
  );
}
