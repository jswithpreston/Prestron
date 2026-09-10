import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/MotionWrapper";
import HeroMark from "@/components/HeroMark";

export const metadata: Metadata = {
  title: "Prestron — Technology Product House, Kampala",
  description:
    "A technology product house built from Uganda — building and owning its own products, and partnering selectively to build custom systems where it can bring exceptional value.",
};

export default function Home() {
  return (
    <>
      <section className="hero" aria-label="Introduction">
        <HeroMark />
        <div className="container">
          <FadeIn delay={0.1} direction="none">
            <p className="hero__brand">Prestron</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <h1 className="hero__headline">Built to matter.</h1>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <p className="hero__lede">
              A technology product house built from Uganda — building and owning
              its own products, and partnering selectively to build custom systems
              where it can bring exceptional value. Not a general agency or an
              outsourcing shop.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container" aria-label="Explore">
        <hr className="hairline" aria-hidden="true" />
        <StaggerChildren className="explore" staggerDelay={0.15}>
          <StaggerItem>
            <div className="explore__half">
              <Link href="/what-we-build" className="explore__title">
                What We Build
              </Link>
              <p className="explore__desc">
                The products Prestron owns, and the custom systems it builds for
                selective partners.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="explore__half">
              <Link href="/approach" className="explore__title">
                Approach
              </Link>
              <p className="explore__desc">
                How Prestron decides what to build, and what it holds itself to.
              </p>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </section>

      <section className="container content-section">
        <hr className="hairline" aria-hidden="true" />
        <FadeIn>
          <h2 className="content-section__title">Two ways Prestron works</h2>
        </FadeIn>
        <div className="explore">
          <FadeIn delay={0.1}>
            <div className="content-section__body">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "var(--spacing-md)" }}>
                Owned Products
              </h3>
              <p>
                Prestron builds technology products it owns outright. Each carries
                its own name, serves its own market, and stands on its own. A
                product gets built because the problem behind it is real — not
                because a technology made it possible.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="content-section__body">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "var(--spacing-md)" }}>
                Custom Systems
              </h3>
              <p>
                Prestron partners selectively with organizations that have
                meaningful problems and the standards to match. Engagements are
                chosen for fit, not availability, and run on the same principles as
                everything Prestron builds for itself.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container content-section">
        <hr className="hairline" aria-hidden="true" />
        <FadeIn>
          <h2 className="content-section__title">Built from Uganda</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="content-section__body">
            <p>
              Prestron starts in Uganda. Uganda is the starting point, not the
              limit — the ambition is to build technology that can stand in any
              market, starting with the one closest to home.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="container content-section">
        <hr className="hairline" aria-hidden="true" />
        <StaggerChildren className="explore" staggerDelay={0.1}>
          <StaggerItem>
            <div className="explore__half">
              <Link href="/what-we-build" className="explore__title">
                See what Prestron builds →
              </Link>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="explore__half">
              <Link href="/contact" className="explore__title">
                Get in touch →
              </Link>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </section>
    </>
  );
}
