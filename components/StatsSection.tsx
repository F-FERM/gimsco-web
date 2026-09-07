"use client";

import { useEffect, useState } from "react";

const stats = [
  {
    value: "35+",
    label: "Years of Experience",
  },
  {
    value: "15+",
    label: "Countries Served",
  },
  {
    value: "98",
    suffix: "%",
    label: "On-Time Delivery",
  },
  {
    value: "10,000",
    suffix: "+",
    label: "Products",
  },
  {
    value: "250+",
    label: "Leading Brands",
  },
];

export default function StatsSection() {
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
  const isMobile = width <= 600;
  const isTablet = width > 600 && width <= 900;

  const sectionPadding = isSmallMobile
    ? "40px 16px"
    : isMobile
      ? "48px 24px"
      : isTablet
        ? "55px 30px"
        : "58px 40px";

  const gridColumns = isSmallMobile
    ? "repeat(2, minmax(0, 1fr))"
    : isMobile
      ? "repeat(2, minmax(0, 1fr))"
      : isTablet
        ? "repeat(3, minmax(0, 1fr))"
        : "repeat(5, minmax(0, 1fr))";

  const gridGap = isSmallMobile
    ? "12px"
    : isMobile
      ? "20px"
      : isTablet
        ? "30px"
        : "45px";

  const rowGap = isSmallMobile
    ? "28px"
    : isMobile
      ? "42px"
      : isTablet
        ? "45px"
        : "0";

  const valueSize = isSmallMobile
    ? "clamp(32px, 11vw, 42px)"
    : isMobile
      ? "clamp(40px, 11vw, 54px)"
      : isTablet
        ? "clamp(42px, 7vw, 58px)"
        : "clamp(48px, 4.8vw, 68px)";

  const labelSize = isSmallMobile
    ? "10px"
    : isMobile
      ? "12px"
      : isTablet
        ? "13px"
        : "14px";

  const labelMargin = isSmallMobile ? "6px" : isMobile ? "12px" : "12px";

  const alignItems = isMobile ? "center" : "flex-start";

  return (
    <section
      style={{
        width: "100%",
        background: "#2D3893",
        boxSizing: "border-box",
        padding: sectionPadding,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: gridColumns,
          alignItems: "center",
          justifyContent: "center",
          columnGap: gridGap,
          rowGap: rowGap,
          boxSizing: "border-box",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: alignItems,
              justifyContent: "center",
              minWidth: 0,
            }}
          >
            {/* Number */}

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                margin: 0,
                padding: 0,
                color: "#FFFFFF",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: valueSize,
                fontWeight: 300,
                lineHeight: 1,
                letterSpacing: isSmallMobile
                  ? "-1px"
                  : isMobile
                    ? "-1.5px"
                    : "-2px",
                whiteSpace: "nowrap",
              }}
            >
              <span>{stat.value}</span>

              {stat.suffix && (
                <span
                  style={{
                    fontSize: "0.62em",
                    fontWeight: 300,
                    marginLeft: "2px",
                    letterSpacing: "-1px",
                  }}
                >
                  {stat.suffix}
                </span>
              )}
            </div>

            {/* Label */}

            <div
              style={{
                marginTop: labelMargin,
                color: "rgba(255, 255, 255, 0.78)",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: labelSize,
                fontWeight: 400,
                lineHeight: 1.4,
                letterSpacing: "0",
                whiteSpace: isSmallMobile ? "normal" : "nowrap",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
