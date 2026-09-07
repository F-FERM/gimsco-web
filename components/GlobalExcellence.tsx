"use client";

import React, { useEffect, useState } from "react";

const regions = [
  {
    title: "Middle East & Gulf",
    description: "UAE (headquarters) and the wider GCC region",
  },
  {
    title: "North Europe",
    description:
      "Denmark, Germany, Netherlands, Norway, Greece, Cyprus, United Kingdom",
  },
  {
    title: "Asia-Pacific",
    description: "Singapore, Hong Kong, China, South Korea",
  },
  {
    title: "Africa",
    description: "Served through GIMSCO's regional network",
  },
];

const features = [
  "Consistent Service Quality",
  "Faster Response Times",
  "Seamless Logistics",
  "End-to-End Solutions",
  "Local Expertise",
];

export default function GlobalExcellence() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1100);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="global-network"
      style={{
        width: "100%",
        background: "#FFFFFF",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1150px",
          margin: "0 auto",
          padding: isMobile
            ? "55px 20px"
            : isTablet
              ? "70px 32px"
              : "80px 32px",
          boxSizing: "border-box",

          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
              ? "42% 58%"
              : "43% 57%",
          alignItems: "center",
          gap: isMobile ? "38px" : "14px",
        }}
      >
        {/* =====================================================
            LEFT IMAGE
        ===================================================== */}

        <div
          style={{
            width: "100%",
            height: isMobile ? "360px" : isTablet ? "470px" : "430px",
            borderRadius: isMobile ? "24px" : "24px",
            overflow: "hidden",
            position: "relative",
            boxSizing: "border-box",
          }}
        >
          <img
            src="/images/global-excellence.jpg"
            alt="Global Excellence in Ship Chandling"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        {/* =====================================================
            RIGHT CONTENT
        ===================================================== */}

        <div
          style={{
            width: "100%",
            minWidth: 0,
            boxSizing: "border-box",
            paddingLeft: isMobile ? "0" : isTablet ? "18px" : "0",
          }}
        >
          {/* Small Label */}

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              height: "20px",
              padding: "0 10px",
              marginBottom: isMobile ? "10px" : "8px",
              borderRadius: "20px",
              background: "#E7E7E7",
              boxSizing: "border-box",

              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: isMobile ? "10px" : "9px",
              fontWeight: 400,
              lineHeight: 1,
              color: "#777777",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                flexShrink: 0,
                borderRadius: "50%",
                background: "#293C9D",
                boxShadow: "0 0 0 2px rgba(41,60,157,0.12)",
              }}
            />
            What Makes Us Unique
          </div>

          {/* Heading */}

          <h2
            style={{
              margin: 0,
              padding: 0,

              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: isMobile ? "42px" : isTablet ? "43px" : "50px",
              fontWeight: 300,
              lineHeight: 1.12,
              letterSpacing: "-1.8px",
              color: "#080808",
            }}
          >
            Global{" "}
            <span
              style={{
                color: "#6568C9",
                fontWeight: 500,
              }}
            >
              Excellence
            </span>
            <br />
            in Ship Chandling
          </h2>

          {/* Description */}

          <p
            style={{
              margin: isMobile ? "18px 0 0" : "17px 0 0",
              maxWidth: "610px",

              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: isMobile ? "12px" : "11px",
              fontWeight: 400,
              lineHeight: 1.42,
              color: "#777777",
            }}
          >
            Wherever your vessel docks, GIMSCO provides consistent, high-quality
            service through its global network — operating in key maritime hubs
            across North Europe, Asia, the Middle East and Africa, and serving
            clients in 15+ countries.
          </p>

          {/* =================================================
              REGIONS
          ================================================= */}

          <div
            style={{
              width: "100%",
              marginTop: isMobile ? "20px" : "13px",

              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(2, minmax(0, 1fr))",
              columnGap: isMobile ? "0" : "34px",
              rowGap: isMobile ? "18px" : "18px",
            }}
          >
            {regions.map((region) => (
              <div
                key={region.title}
                style={{
                  minWidth: 0,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    marginBottom: "5px",

                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: isMobile ? "12px" : "11px",
                    fontWeight: 600,
                    lineHeight: 1.25,
                    color: "#293C9D",
                  }}
                >
                  {region.title}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: isMobile ? "11px" : "10.5px",
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: "#777777",
                  }}
                >
                  {region.description}
                </div>
              </div>
            ))}
          </div>

          {/* =================================================
              FEATURE PILLS
          ================================================= */}

          <div
            style={{
              width: "100%",
              marginTop: isMobile ? "24px" : "16px",

              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: isMobile ? "10px" : "10px",
            }}
          >
            {features.map((feature) => (
              <div
                key={feature}
                style={{
                  minHeight: isMobile ? "38px" : "36px",
                  padding: isMobile ? "8px 15px" : "8px 14px",

                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",

                  border: "1.5px solid #293C9D",
                  borderRadius: "22px",
                  boxSizing: "border-box",

                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: isMobile ? "11px" : "10.5px",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: "#293C9D",
                  whiteSpace: "nowrap",

                  transition:
                    "background 0.25s ease, color 0.25s ease, transform 0.25s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#293C9D";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#293C9D";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
