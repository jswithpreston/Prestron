"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

const CONSENT_KEY = "prestron-consent";

export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    // Only initialize PostHog if the visitor has accepted cookies.
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent !== "accepted" || !key || posthog.__loaded) return;

    posthog.init(key, {
      api_host: host || "https://us.i.posthog.com",
      person_profiles: "identified_only",
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}