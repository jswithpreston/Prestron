import type { Metadata } from "next";
import { FadeIn } from "@/components/MotionWrapper";
import PrinciplesMoment from "@/components/PrinciplesMoment";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Prestron decides what to build, and what it holds itself to.",
};

export default function Approach() {
  return (
    <>
      <section className="hero" aria-label="Approach">
        <div className="container">
          <FadeIn delay={0.1} direction="none">
            <p className="hero__brand">Prestron</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <h1 className="hero__headline">Approach</h1>
          </FadeIn>
        </div>
      </section>

      <section className="container content-section">
        <hr className="hairline" aria-hidden="true" />
        <FadeIn>
          <h2 className="content-section__title">Purpose</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="content-section__body">
            <p>
              Prestron exists to build technology products worth owning — proof
              that valuable, lasting products can be built from Africa, not just
              for it.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="container content-section">
        <FadeIn>
          <h2 className="content-section__title">Mission</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="content-section__body">
            <p>
              Prestron builds and owns technology products, starting in Uganda.
              Each one carries its own name, its own market, and stands on its
              own.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="container content-section">
        <FadeIn>
          <h2 className="content-section__title">Vision</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="content-section__body">
            <p>
              A quiet, trusted house of technology products built from Africa —
              the kind of name that doesn&apos;t need to explain itself. Prestron
              begins in Uganda, with the ambition to serve markets across Africa
              and eventually globally.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="container">
        <hr className="hairline" aria-hidden="true" />
        <PrinciplesMoment />
      </section>

      <section className="container content-section">
        <hr className="hairline" aria-hidden="true" />
        <FadeIn>
          <h2 className="content-section__title">How Prestron starts</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="content-section__body">
            <p>
              Prestron starts with the problem, not the technology. A build
              begins by asking what is worth solving — then whether technology
              can solve it well, and whether the result can stand as something
              lasting.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="container content-section">
        <FadeIn>
          <h2 className="content-section__title">Services and products</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="content-section__body">
            <p>
              Services fund and inform the company. Custom engagements generate
              early revenue and surface real problems worth solving. What
              Prestron learns from that work is where its owned products
              eventually come from.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
