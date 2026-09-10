import { ImageResponse } from "next/og";

export const alt = "Prestron — Technology Product House";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F7F7F7",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 56,
            height: 56,
            display: "flex",
          }}
        >
          <svg viewBox="0 0 56 56" width="56" height="56">
            <path d="M1 1 H34" stroke="#2E4A66" strokeWidth="2" fill="none" />
            <path d="M1 1 V34" stroke="#2E4A66" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#010B13",
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          Built to matter.
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 400,
            color: "#010B13",
            marginTop: 24,
            display: "flex",
          }}
        >
          Prestron
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#2E4A66",
            marginTop: 48,
            display: "flex",
          }}
        >
          A technology product house built from Uganda.
        </div>
      </div>
    ),
    { ...size }
  );
}