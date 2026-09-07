"use client";

import React from "react";

const milestones = [
  {
    year: "1990",
    description:
      "Founded with a clear vision to deliver high-quality maritime services and products meeting the highest industry standards.",
  },
  {
    year: "Regional",
    description:
      "Grew from a local ship chandling company into a trusted regional supplier across the GCC.",
  },
  {
    year: "Global",
    description:
      "Expanded into a globally recognized marine services provider through a network of trusted associates worldwide.",
  },
  {
    year: "Today",
    description:
      "35+ years of maritime experience, serving clients across 15+ countries with 10,000+ products.",
  },
];

export default function CompanyHistory() {
  return (
    <section
      style={{
        width: "100%",
        background: "#FFFFFF",
        padding: "clamp(70px, 8vw, 125px) 24px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1160px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            height: "25px",
            padding: "0 11px 0 6px",
            marginBottom: "14px",
            borderRadius: "20px",
            background: "#E8E8EC",
            border: "1px solid #D2D2D8",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#35459F",
              display: "block",
              flexShrink: 0,
            }}
          />

          <span
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "10px",
              fontWeight: 400,
              lineHeight: 1,
              color: "#747474",
              whiteSpace: "nowrap",
            }}
          >
            Company History
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            margin: 0,
            maxWidth: "470px",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "clamp(44px, 5.2vw, 68px)",
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "-2.5px",
            color: "#080808",
          }}
        >
          A Journey of
          <br />
          <span
            style={{
              color: "#6265C4",
              fontWeight: 500,
            }}
          >
            Experience
          </span>
        </h2>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginTop: "48px",
            boxSizing: "border-box",
          }}
        >
          {/* Horizontal Line */}
          <div
            style={{
              position: "absolute",
              left: "9px",
              right: "9px",
              top: "9px",
              height: "3px",
              background: "#34439D",
              zIndex: 0,
            }}
          />

          {/* Milestones */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              columnGap: "clamp(25px, 4vw, 55px)",
            }}
          >
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                style={{
                  minWidth: 0,
                  boxSizing: "border-box",
                }}
              >
                {/* Timeline Dot */}
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "#35459F",
                    marginBottom: "16px",
                    boxSizing: "border-box",
                  }}
                />

                {/* Year */}
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: "clamp(20px, 1.8vw, 25px)",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    letterSpacing: "-0.5px",
                    color: "#111111",
                  }}
                >
                  {milestone.year}
                </h3>

                {/* Description */}
                <p
                  style={{
                    margin: "7px 0 0",
                    maxWidth: "245px",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: "clamp(11px, 0.95vw, 13px)",
                    fontWeight: 400,
                    lineHeight: 1.35,
                    color: "#777777",
                  }}
                >
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .timeline {
            margin-top: 40px;
          }
        }

        @media (max-width: 640px) {
          .timeline {
            position: relative;
          }
        }
      `}</style>
    </section>
  );
}
