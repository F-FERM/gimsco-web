"use client";

import React, { useEffect, useState } from "react";

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
  const [viewport, setViewport] = useState({
    width: 1440,
    height: 900,
  });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();

    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  const width = viewport.width;

  const isSmallMobile = width <= 480;
  const isMobile = width <= 767;
  const isTablet = width >= 768 && width <= 1023;

  const sectionPadding = isSmallMobile
    ? "50px 16px"
    : isMobile
      ? "clamp(70px, 8vw, 100px) 20px"
      : "clamp(70px, 8vw, 125px) 24px";

  const headingSize = isSmallMobile
    ? "clamp(34px, 10vw, 44px)"
    : isMobile
      ? "clamp(44px, 5.2vw, 52px)"
      : "clamp(44px, 5.2vw, 68px)";

  const yearSize = isSmallMobile
    ? "clamp(16px, 1.8vw, 20px)"
    : isMobile
      ? "clamp(20px, 1.8vw, 22px)"
      : "clamp(20px, 1.8vw, 25px)";

  const descSize = isSmallMobile
    ? "clamp(10px, 0.95vw, 11px)"
    : "clamp(11px, 0.95vw, 13px)";

  const gridColumns = isMobile
    ? "repeat(1, minmax(0, 1fr))"
    : isTablet
      ? "repeat(2, minmax(0, 1fr))"
      : "repeat(4, minmax(0, 1fr))";

  const dotSize = isSmallMobile ? "14px" : "18px";

  const timelineMargin = isSmallMobile ? "30px" : isMobile ? "40px" : "48px";

  return (
    <section
      style={{
        width: "100%",
        background: "#FFFFFF",
        padding: sectionPadding,
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
            height: isSmallMobile ? "22px" : "25px",
            padding: isSmallMobile ? "0 8px 0 5px" : "0 11px 0 6px",
            marginBottom: isSmallMobile ? "10px" : "14px",
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
              fontSize: isSmallMobile ? "8px" : "10px",
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
            fontSize: headingSize,
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: isSmallMobile
              ? "-1.5px"
              : isMobile
                ? "-2px"
                : "-2.5px",
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
            marginTop: timelineMargin,
            boxSizing: "border-box",
          }}
        >
          {/* Horizontal Line */}
          {!isMobile && (
            <div
              style={{
                position: "absolute",
                left: isSmallMobile ? "6px" : "9px",
                right: isSmallMobile ? "6px" : "9px",
                top: isSmallMobile ? "6px" : "9px",
                height: isSmallMobile ? "2px" : "3px",
                background: "#34439D",
                zIndex: 0,
              }}
            />
          )}

          {/* Milestones */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              display: "grid",
              gridTemplateColumns: gridColumns,
              columnGap: isSmallMobile
                ? "16px"
                : isMobile
                  ? "clamp(16px, 4vw, 25px)"
                  : "clamp(25px, 4vw, 55px)",
              rowGap: isMobile ? "28px" : "0",
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
                    width: dotSize,
                    height: dotSize,
                    borderRadius: "50%",
                    background: "#35459F",
                    marginBottom: isSmallMobile ? "12px" : "16px",
                    boxSizing: "border-box",
                  }}
                />

                {/* Year */}
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: yearSize,
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
                    margin: isSmallMobile ? "4px 0 0" : "7px 0 0",
                    maxWidth: "245px",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: descSize,
                    fontWeight: 400,
                    lineHeight: isSmallMobile ? 1.3 : 1.35,
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
    </section>
  );
}
