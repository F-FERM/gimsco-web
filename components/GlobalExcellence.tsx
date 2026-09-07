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
  const isSmallDesktop = width >= 1024 && width <= 1279;
  const isDesktop = width >= 1280;

  // ============================================================
  // RESPONSIVE VALUES
  // ============================================================

  const sectionPadding = isSmallMobile
    ? "40px 16px"
    : isMobile
      ? "55px 20px"
      : isTablet
        ? "70px 32px"
        : isSmallDesktop
          ? "80px 32px"
          : "80px 32px";

  const imageHeight = isSmallMobile
    ? "220px"
    : isMobile
      ? "320px"
      : isTablet
        ? "420px"
        : isSmallDesktop
          ? "430px"
          : "430px";

  const headingSize = isSmallMobile
    ? "clamp(28px, 8vw, 36px)"
    : isMobile
      ? "clamp(36px, 6vw, 44px)"
      : isTablet
        ? "clamp(40px, 5vw, 48px)"
        : isSmallDesktop
          ? "clamp(44px, 4vw, 52px)"
          : "clamp(48px, 4.5vw, 56px)";

  const descriptionSize = isSmallMobile
    ? "clamp(11px, 2.5vw, 13px)"
    : isMobile
      ? "clamp(12px, 2vw, 14px)"
      : isTablet
        ? "clamp(12px, 1.2vw, 14px)"
        : isSmallDesktop
          ? "clamp(12px, 1vw, 14px)"
          : "clamp(13px, 1.1vw, 15px)";

  const regionTitleSize = isSmallMobile
    ? "clamp(11px, 2.5vw, 13px)"
    : isMobile
      ? "clamp(12px, 2vw, 14px)"
      : isTablet
        ? "clamp(12px, 1.2vw, 14px)"
        : isSmallDesktop
          ? "clamp(12px, 1vw, 14px)"
          : "clamp(13px, 1.1vw, 15px)";

  const regionDescSize = isSmallMobile
    ? "clamp(10px, 2vw, 11px)"
    : isMobile
      ? "clamp(11px, 1.8vw, 12px)"
      : isTablet
        ? "clamp(11px, 1vw, 12px)"
        : isSmallDesktop
          ? "clamp(11px, 0.9vw, 12px)"
          : "clamp(12px, 1vw, 13px)";

  const featurePillSize = isSmallMobile
    ? "clamp(9px, 2vw, 10px)"
    : isMobile
      ? "clamp(10px, 1.8vw, 12px)"
      : isTablet
        ? "clamp(11px, 1vw, 12px)"
        : isSmallDesktop
          ? "clamp(11px, 0.9vw, 12px)"
          : "clamp(12px, 1vw, 13px)";

  const labelSize = isSmallMobile
    ? "clamp(8px, 2vw, 9px)"
    : isMobile
      ? "clamp(9px, 1.8vw, 10px)"
      : isTablet
        ? "clamp(9px, 1vw, 10px)"
        : isSmallDesktop
          ? "clamp(9px, 0.8vw, 10px)"
          : "clamp(10px, 0.9vw, 11px)";

  const gridColumns = isMobile
    ? "1fr"
    : isTablet
      ? "42% 58%"
      : isSmallDesktop
        ? "43% 57%"
        : "43% 57%";

  const gridGap = isSmallMobile
    ? "20px"
    : isMobile
      ? "30px"
      : isTablet
        ? "40px"
        : isSmallDesktop
          ? "50px"
          : "60px";

  const imageBorderRadius = isSmallMobile
    ? "14px"
    : isMobile
      ? "20px"
      : isTablet
        ? "22px"
        : isSmallDesktop
          ? "24px"
          : "24px";

  const regionsGridColumns = isSmallMobile
    ? "1fr 1fr"
    : isMobile
      ? "1fr"
      : isTablet
        ? "1fr 1fr"
        : isSmallDesktop
          ? "1fr 1fr"
          : "1fr 1fr";

  const regionsGap = isSmallMobile
    ? "10px"
    : isMobile
      ? "14px"
      : isTablet
        ? "18px"
        : isSmallDesktop
          ? "18px"
          : "18px";

  const featuresGap = isSmallMobile
    ? "6px"
    : isMobile
      ? "8px"
      : isTablet
        ? "10px"
        : isSmallDesktop
          ? "10px"
          : "10px";

  const featureMinHeight = isSmallMobile
    ? "28px"
    : isMobile
      ? "34px"
      : isTablet
        ? "36px"
        : isSmallDesktop
          ? "36px"
          : "38px";

  const featurePadding = isSmallMobile
    ? "5px 8px"
    : isMobile
      ? "6px 12px"
      : isTablet
        ? "8px 14px"
        : isSmallDesktop
          ? "8px 14px"
          : "8px 16px";

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
          padding: sectionPadding,
          boxSizing: "border-box",

          display: "grid",
          gridTemplateColumns: gridColumns,
          alignItems: "center",
          gap: gridGap,
        }}
      >
        {/* =====================================================
            LEFT IMAGE
        ===================================================== */}

        <div
          style={{
            width: "100%",
            height: imageHeight,
            borderRadius: imageBorderRadius,
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
            paddingLeft: isMobile
              ? "0"
              : isTablet
                ? "12px"
                : isSmallDesktop
                  ? "16px"
                  : "0",
          }}
        >
          {/* Small Label */}

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              height: isSmallMobile ? "18px" : isMobile ? "20px" : "22px",
              padding: isSmallMobile ? "0 6px" : isMobile ? "0 8px" : "0 10px",
              marginBottom: isSmallMobile
                ? "6px"
                : isMobile
                  ? "8px"
                  : isTablet
                    ? "10px"
                    : "10px",
              borderRadius: "20px",
              background: "#E7E7E7",
              boxSizing: "border-box",

              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: labelSize,
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
              fontSize: headingSize,
              fontWeight: 300,
              lineHeight: 1.12,
              letterSpacing: isSmallMobile
                ? "-1px"
                : isMobile
                  ? "-1.5px"
                  : isTablet
                    ? "-1.8px"
                    : isSmallDesktop
                      ? "-2px"
                      : "-2.2px",
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
              margin: isSmallMobile
                ? "10px 0 0"
                : isMobile
                  ? "14px 0 0"
                  : isTablet
                    ? "16px 0 0"
                    : isSmallDesktop
                      ? "18px 0 0"
                      : "20px 0 0",
              maxWidth: "610px",

              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: descriptionSize,
              fontWeight: 400,
              lineHeight: isSmallMobile
                ? 1.5
                : isMobile
                  ? 1.5
                  : isTablet
                    ? 1.5
                    : 1.6,
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
              marginTop: isSmallMobile
                ? "12px"
                : isMobile
                  ? "16px"
                  : isTablet
                    ? "18px"
                    : isSmallDesktop
                      ? "20px"
                      : "22px",

              display: "grid",
              gridTemplateColumns: regionsGridColumns,
              columnGap: regionsGap,
              rowGap: regionsGap,
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
                    marginBottom: isSmallMobile
                      ? "2px"
                      : isMobile
                        ? "3px"
                        : isTablet
                          ? "4px"
                          : "5px",

                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: regionTitleSize,
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: "#293C9D",
                  }}
                >
                  {region.title}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: regionDescSize,
                    fontWeight: 400,
                    lineHeight: isSmallMobile
                      ? 1.4
                      : isMobile
                        ? 1.4
                        : isTablet
                          ? 1.4
                          : 1.5,
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
              marginTop: isSmallMobile
                ? "14px"
                : isMobile
                  ? "18px"
                  : isTablet
                    ? "20px"
                    : isSmallDesktop
                      ? "22px"
                      : "24px",

              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: featuresGap,
            }}
          >
            {features.map((feature) => (
              <div
                key={feature}
                style={{
                  minHeight: featureMinHeight,
                  padding: featurePadding,

                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",

                  border: isSmallMobile
                    ? "1px solid #293C9D"
                    : isMobile
                      ? "1px solid #293C9D"
                      : "1.5px solid #293C9D",
                  borderRadius: "22px",
                  boxSizing: "border-box",

                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: featurePillSize,
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
