import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn } from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="hero" aria-label="404">
      <div className="container">
        <FadeIn delay={0.1} direction="none">
          <p className="hero__brand">Prestron</p>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <h1 className="hero__headline" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
            404 — Page not found
          </h1>
        </FadeIn>
        <FadeIn delay={0.3} direction="up">
          <p className="hero__lede" style={{ marginBottom: "var(--spacing-2xl)" }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </FadeIn>
        <FadeIn delay={0.4} direction="up">
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "var(--spacing-md) var(--spacing-xl)",
              background: "var(--color-ink-black)",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Back to home
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
