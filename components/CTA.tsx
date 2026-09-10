import Link from "next/link";

interface CTAProps {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
}

export default function CTA({
  title = "Ready to build something that matters?",
  text = "If you have a problem worth solving — or a question about what Prestron builds — start the conversation.",
  href = "/contact",
  label = "Get in touch →",
}: CTAProps) {
  return (
    <section className="container content-section" aria-label="Call to action">
      <hr className="hairline" aria-hidden="true" />
      <div style={{ textAlign: "left", maxWidth: 640 }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 700, margin: 0, marginBottom: "var(--spacing-lg)" }}>
          {title}
        </h2>
        <p style={{ color: "var(--color-ink-70)", lineHeight: 1.6, margin: 0, marginBottom: "var(--spacing-xl)" }}>
          {text}
        </p>
        <Link
          href={href}
          style={{
            display: "inline-block",
            padding: "var(--spacing-md) var(--spacing-xl)",
            background: "var(--color-ink-black)",
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
            transition: "background 0.2s",
          }}
        >
          {label}
        </Link>
      </div>
    </section>
  );
}