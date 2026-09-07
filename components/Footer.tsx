"use client";

// components/Footer.tsx

import React, { useEffect, useState } from "react";

const navigation = ["Home", "About", "Services", "Certification", "Contact Us"];

export default function Footer() {
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

  const logoWidth = isSmallMobile ? "200px" : isMobile ? "250px" : "345px";

  const backgroundLogoSize = isSmallMobile
    ? "260px"
    : isMobile
      ? "370px"
      : "520px";

  // In Figma: bg logo is center-bottom, partially cut off
  const backgroundLogoLeft = "50%";
  const backgroundLogoBottom = isSmallMobile
    ? "-100px"
    : isMobile
      ? "-130px"
      : "-160px";

  const topGridColumns = isMobile
    ? "1fr"
    : isTablet
      ? "1fr 1fr"
      : "1fr 1fr 1.45fr";

  const bottomGridColumns = isMobile
    ? "1fr"
    : isTablet
      ? "1fr 1fr"
      : "1fr 1fr 1.45fr";

  const topGridGap = isSmallMobile ? "24px" : isMobile ? "32px" : "70px";
  const bottomGridGap = isSmallMobile ? "24px" : isMobile ? "32px" : "70px";

  const headingSize = isSmallMobile ? "22px" : isMobile ? "26px" : "31px";

  const mainPadding = isSmallMobile
    ? "20px 16px 0"
    : isMobile
      ? "25px 20px 0"
      : "30px 38px 0";

  const bottomPadding = isSmallMobile ? "10px 8px 8px" : "14px 12px 10px";

  return (
    <footer
      style={{
        position: "relative",
        width: "100%",
        minHeight: isSmallMobile ? "auto" : isMobile ? "auto" : "430px",
        overflow: "hidden",
        background: "#03083D",
        color: "#010738",
        fontFamily: "var(--font-poppins), Poppins, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Large background GIMSCO G-mark watermark — separate asset */}
      <img
        src="/images/gimsco-bg-logo.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          width: backgroundLogoSize,
          height: backgroundLogoSize,
          objectFit: "contain",
          left: backgroundLogoLeft,
          bottom: backgroundLogoBottom,
          opacity: 0.55,
          pointerEvents: "none",
          userSelect: "none",
          transform: "translateX(-50%)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1140px",
          minHeight: "330px",
          margin: "0 auto",
          padding: mainPadding,
          boxSizing: "border-box",
        }}
      >
        {/* Top row: Logo | Description | (empty) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: topGridColumns,
            columnGap: topGridGap,
            rowGap: isMobile ? "20px" : "0",
            alignItems: "start",
          }}
        >
          {/* Col 1 — Logo */}
          <div>
            <img
              src="/images/gimsco-logo.png"
              alt="GIMSCO"
              style={{
                display: "block",
                width: logoWidth,
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Col 2 — Company description */}
          <div
            style={{
              paddingTop: isMobile ? "0" : "4px",
            }}
          >
            <p
              style={{
                margin: 0,
                maxWidth: "390px",
                fontSize: isSmallMobile ? "10px" : isMobile ? "11px" : "12px",
                lineHeight: isSmallMobile ? 1.3 : 1.5,
                fontWeight: 400,
                color: "rgba(255,255,255,0.68)",
              }}
            >
              Gulf International Marine Services Co. has served the maritime
              industry since 1990, offering comprehensive ship chandling for
              vessels operating worldwide.
            </p>
          </div>

          {/* Col 3 — Empty on top row (matches Figma: description is top-right, CTA is bottom-right) */}
          {!isMobile && <div />}
        </div>

        {/* Bottom row: Navigate | Contact | CTA */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: bottomGridColumns,
            columnGap: bottomGridGap,
            rowGap: isMobile ? "24px" : "0",
            marginTop: isSmallMobile ? "24px" : isMobile ? "28px" : "40px",
            alignItems: "start",
          }}
        >
          {/* Col 1 — Navigation */}
          <div>
            <h3
              style={{
                margin: "0 0 9px",
                fontSize: isSmallMobile ? "12px" : "14px",
                lineHeight: 1.2,
                fontWeight: 500,
                color: "#6568C9",
              }}
            >
              Navigate
            </h3>

            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: isSmallMobile ? "5px" : "7px",
              }}
            >
              {navigation.map((item) => (
                <a
                  key={item}
                  href={
                    item === "Home"
                      ? "#"
                      : `#${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  style={{
                    color: "rgba(255,255,255,0.62)",
                    textDecoration: "none",
                    fontSize: isSmallMobile ? "10px" : "12px",
                    lineHeight: 1.25,
                    fontWeight: 400,
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 2 — Contact */}
          <div>
            <h3
              style={{
                margin: "0 0 9px",
                fontSize: isSmallMobile ? "12px" : "14px",
                lineHeight: 1.2,
                fontWeight: 500,
                color: "#6568C9",
              }}
            >
              Contact
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: isSmallMobile ? "5px" : "7px",
                fontSize: isSmallMobile ? "10px" : "12px",
                lineHeight: isSmallMobile ? 1.2 : 1.25,
                color: "rgba(255,255,255,0.62)",
              }}
            >
              <div>
                Office No. 105, 1st Floor,
                <br />
                Emaar Square, Bldg. 2,
                <br />
                Downtown, Dubai, UAE
              </div>

              <div>+971 4 442 0575</div>

              <div>gimsco@emirates.net.ae</div>
            </div>
          </div>

          {/* Col 3 — CTA (bottom-right, matches Figma) */}
          <div>
            {/* "Get Start With Us" pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                height: "22px",
                padding: "0 12px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxSizing: "border-box",
                marginBottom: isSmallMobile ? "8px" : "10px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#6568C9",
                  display: "block",
                  flexShrink: 0,
                  boxShadow: "0 0 6px rgba(101,104,201,0.8)",
                }}
              />

              <span
                style={{
                  fontSize: isSmallMobile ? "8px" : "10px",
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.65)",
                  whiteSpace: "nowrap",
                }}
              >
                Get Start With Us
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                margin: 0,
                maxWidth: "470px",
                fontSize: headingSize,
                lineHeight: 1.2,
                fontWeight: 300,
                letterSpacing: isSmallMobile ? "-0.4px" : "-0.8px",
                color: "#FFFFFF",
              }}
            >
              Maritime Operations Never
              <br />
              Stop. Neither Do We.
            </h2>

            {/* CTA Button */}
            <a
              href="#contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: isSmallMobile ? "140px" : "165px",
                height: isSmallMobile ? "34px" : "38px",
                marginTop: isSmallMobile ? "10px" : "16px",
                borderRadius: "999px",
                background: "#353FA5",
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: isSmallMobile ? "8px" : "10px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                boxSizing: "border-box",
              }}
            >
              REQUEST A QUOTE
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: isSmallMobile ? "calc(100% - 32px)" : "calc(100% - 48px)",
          maxWidth: "1088px",
          height: "1px",
          margin: isSmallMobile
            ? "20px auto 0"
            : isMobile
              ? "24px auto 0"
              : "28px auto 0",
          background: "rgba(255,255,255,0.16)",
        }}
      />

      {/* Bottom bar */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: "1088px",
          minHeight: isSmallMobile ? "70px" : isMobile ? "80px" : "88px",
          margin: "0 auto",
          padding: bottomPadding,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Social + legal */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: isSmallMobile ? "wrap" : "nowrap",
            gap: isSmallMobile ? "8px" : "0",
          }}
        >
          {/* Social links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: isSmallMobile ? "16px" : "24px",
            }}
          >
            <a
              href="https://www.facebook.com/share/1D1eK8Bkjc/?mibextid=wwXIfr"
              style={{
                color: "#6568C9",
                textDecoration: "none",
                fontSize: isSmallMobile ? "10px" : "12px",
                fontWeight: 500,
              }}
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/gimsco.uae"
              style={{
                color: "#6568C9",
                textDecoration: "none",
                fontSize: isSmallMobile ? "10px" : "12px",
                fontWeight: 500,
              }}
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/company/gimscouae"
              style={{
                color: "#6568C9",
                textDecoration: "none",
                fontSize: isSmallMobile ? "10px" : "12px",
                fontWeight: 500,
              }}
            >
              LinkedIn
            </a>
          </div>

          {/* Legal */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: isSmallMobile ? "16px" : "28px",
            }}
          >
            <a
              href="#"
              style={{
                color: "rgba(255,255,255,0.38)",
                textDecoration: "none",
                fontSize: isSmallMobile ? "9px" : "12px",
              }}
            >
              Privacy Policy
            </a>

            <a
              href="#"
              style={{
                color: "rgba(255,255,255,0.38)",
                textDecoration: "none",
                fontSize: isSmallMobile ? "9px" : "12px",
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: isSmallMobile ? "9px" : "11px",
            lineHeight: 1.3,
            color: "rgba(255,255,255,0.32)",
            marginTop: isSmallMobile ? "6px" : "0",
          }}
        >
          © 2026 GIMSCO — Gulf International Marine Services Co. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
