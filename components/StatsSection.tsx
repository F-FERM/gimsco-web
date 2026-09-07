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
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setIsMobile(width <= 600);
      setIsTablet(width > 600 && width <= 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      style={{
        width: "100%",
        background: "#2D3893",
        boxSizing: "border-box",
        padding: isMobile ? "48px 24px" : isTablet ? "55px 30px" : "58px 40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile
            ? "repeat(2, minmax(0, 1fr))"
            : isTablet
              ? "repeat(3, minmax(0, 1fr))"
              : "repeat(5, minmax(0, 1fr))",
          alignItems: "center",
          justifyContent: "center",
          columnGap: isMobile ? "20px" : isTablet ? "30px" : "45px",
          rowGap: isMobile ? "42px" : isTablet ? "45px" : "0",
          boxSizing: "border-box",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "center" : "flex-start",
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
                fontSize: isMobile
                  ? "clamp(40px, 11vw, 54px)"
                  : isTablet
                    ? "clamp(42px, 7vw, 58px)"
                    : "clamp(48px, 4.8vw, 68px)",
                fontWeight: 300,
                lineHeight: 1,
                letterSpacing: isMobile ? "-1.5px" : "-2px",
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
                marginTop: "12px",
                color: "rgba(255, 255, 255, 0.78)",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: isMobile ? "12px" : isTablet ? "13px" : "14px",
                fontWeight: 400,
                lineHeight: 1.4,
                letterSpacing: "0",
                whiteSpace: "nowrap",
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
