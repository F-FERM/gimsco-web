"use client";

import React, { useEffect, useState } from "react";

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
    ? "clamp(50px, 7vw, 65px) 16px"
    : isMobile
      ? "clamp(65px, 7vw, 80px) 20px"
      : "clamp(65px, 7vw, 95px) 24px";

  const headingSize = isSmallMobile
    ? "clamp(32px, 5vw, 42px)"
    : isMobile
      ? "clamp(42px, 5vw, 52px)"
      : "clamp(42px, 5vw, 64px)";

  const statValueSize = isSmallMobile
    ? "clamp(26px, 3.2vw, 34px)"
    : isMobile
      ? "clamp(32px, 3.2vw, 40px)"
      : "clamp(32px, 3.2vw, 44px)";

  const statLabelSize = isSmallMobile
    ? "clamp(9px, 0.9vw, 11px)"
    : isMobile
      ? "clamp(11px, 0.9vw, 12px)"
      : "clamp(11px, 0.9vw, 14px)";

  const statsMarginTop = isSmallMobile ? "32px" : isMobile ? "40px" : "58px";

  const statsGridColumns = isSmallMobile
    ? "repeat(2, minmax(0, 1fr))"
    : isMobile
      ? "repeat(2, minmax(0, 1fr))"
      : isTablet
        ? "repeat(3, minmax(0, 1fr))"
        : "repeat(3, minmax(0, 1fr))";

  const statMinHeight = isSmallMobile ? "80px" : isMobile ? "90px" : "110px";

  const statPadding = isSmallMobile
    ? "12px 12px 12px 0"
    : isMobile
      ? "16px 16px 14px 0"
      : "18px 28px 16px 0";

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: isSmallMobile ? "auto" : "520px",
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
          backgroundImage: "url('/images/quality-value-bg.png')",
          backgroundSize: isSmallMobile ? "cover" : "100% 100%",
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
          minHeight: isSmallMobile ? "auto" : "520px",
          margin: "0 auto",
          padding: sectionPadding,
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
            fontSize: headingSize,
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: isSmallMobile ? "-1px" : "-2px",
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
            marginTop: statsMarginTop,
            display: "grid",
            gridTemplateColumns: statsGridColumns,
            boxSizing: "border-box",
          }}
        >
          {stats.map((stat, index) => {
            const itemsPerRow = isSmallMobile ? 2 : isMobile ? 2 : 3;
            const isTopRow = index < itemsPerRow;

            return (
              <div
                key={stat.label}
                style={{
                  minWidth: 0,
                  minHeight: statMinHeight,
                  padding: statPadding,
                  boxSizing: "border-box",

                  borderTop: isTopRow
                    ? "1px solid rgba(255,255,255,0.25)"
                    : "none",

                  borderBottom: !isTopRow
                    ? "1px solid rgba(255,255,255,0.25)"
                    : "none",

                  borderRight:
                    index % itemsPerRow !== itemsPerRow - 1
                      ? "1px solid rgba(255,255,255,0.10)"
                      : "none",
                }}
              >
                {/* Value */}
                <div
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: statValueSize,
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
                    marginTop: isSmallMobile ? "4px" : "7px",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: statLabelSize,
                    fontWeight: 400,
                    lineHeight: isSmallMobile ? 1.2 : 1.3,
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
