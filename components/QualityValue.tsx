// components/home/QualityValue.tsx

import React from "react";

const stats = [
  {
    value: "35+",
    label: "Years of Experience",
  },
  {
    value: "98%",
    label: "On-Time Delivery Rate",
  },
  {
    value: "10,000+",
    label: "Products",
  },
  {
    value: "250+",
    label: "Leading Brands",
  },
  {
    value: "15+",
    label: "Countries, Global Reach",
  },
  {
    value: "24/7",
    label: "Round-the-Clock Support",
  },
];

export default function QualityValue() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "520px",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/images/quality-value-bg.jpg')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(15, 23, 30, 0.30)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1080px",
          minHeight: "520px",
          margin: "0 auto",
          padding: "clamp(65px, 7vw, 95px) 24px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "clamp(42px, 5vw, 64px)",
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: "-2px",
            color: "#FFFFFF",
          }}
        >
          Quality.{" "}
          <span
            style={{
              color: "#6568C9",
              fontWeight: 400,
            }}
          >
            Service.
          </span>{" "}
          Value.
        </h2>

        {/* Stats */}
        <div
          style={{
            width: "100%",
            marginTop: "58px",
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            boxSizing: "border-box",
          }}
        >
          {stats.map((stat, index) => {
            const isTopRow = index < 3;

            return (
              <div
                key={stat.label}
                style={{
                  minWidth: 0,
                  minHeight: "110px",
                  padding: "18px 28px 16px 0",
                  boxSizing: "border-box",

                  borderTop: isTopRow
                    ? "1px solid rgba(255,255,255,0.25)"
                    : "none",

                  borderBottom: !isTopRow
                    ? "1px solid rgba(255,255,255,0.25)"
                    : "none",

                  borderRight:
                    index % 3 !== 2
                      ? "1px solid rgba(255,255,255,0.10)"
                      : "none",
                }}
              >
                {/* Value */}
                <div
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: "clamp(32px, 3.2vw, 44px)",
                    fontWeight: 300,
                    lineHeight: 1.05,
                    letterSpacing: "-1.5px",
                    color: "#FFFFFF",
                    whiteSpace: "nowrap",
                  }}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div
                  style={{
                    marginTop: "7px",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: "clamp(11px, 0.9vw, 14px)",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    color: "rgba(255,255,255,0.82)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
