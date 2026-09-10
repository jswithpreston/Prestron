"use client";

import { useEffect, useState } from "react";
import posthog from "posthog-js";

const CONSENT_KEY = "prestron-consent";

export default function CookieConsent() {
  const [consent, setConsent] = useState<"idle" | "accepted" | "declined">("idle");

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored as "accepted" | "declined");
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    posthog.capture("cookie_consent_accepted");
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsent("declined");
    posthog.reset();
  };

  if (consent !== "idle") return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: "var(--color-ink-black)",
        color: "white",
        padding: "var(--spacing-lg)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-lg)",
          flexWrap: "wrap",
        }}
      >
        <p style={{ margin: 0, flex: 1, minWidth: 260, fontSize: "0.875rem", lineHeight: 1.6 }}>
          We use cookies to understand how our site is used.{" "}
          <a href="/privacy" style={{ color: "white", textDecoration: "underline" }}>
            Learn more
          </a>
        </p>
        <div style={{ display: "flex", gap: "var(--spacing-sm)" }}>
          <button
            onClick={decline}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "white",
              padding: "var(--spacing-sm) var(--spacing-lg)",
              cursor: "pointer",
              fontSize: "0.875rem",
            }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            style={{
              background: "white",
              border: "none",
              color: "var(--color-ink-black)",
              padding: "var(--spacing-sm) var(--spacing-lg)",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.875rem",
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}