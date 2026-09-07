// components/Footer.tsx

import React from "react";

const navigation = ["Home", "About", "Services", "Certification", "Contact Us"];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        width: "100%",
        minHeight: "430px",
        overflow: "hidden",
        background: "#03083D",
        color: "#010738",
        fontFamily: "var(--font-poppins), Poppins, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Large background GIMCSO logo */}
      <img
        src="/images/gimsco-logo.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "480px",
          height: "480px",
          objectFit: "contain",
          left: "205px",
          bottom: "-265px",
          opacity: 0.12,
          pointerEvents: "none",
          userSelect: "none",
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
          padding: "30px 38px 0",
          boxSizing: "border-box",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1.45fr",
            columnGap: "70px",
            alignItems: "start",
          }}
        >
          {/* Logo */}
          <div>
            <img
              src="/images/gimsco-logo.png"
              alt="GIMSCO"
              style={{
                display: "block",
                width: "345px",
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Company description */}
          <div
            style={{
              paddingTop: "12px",
            }}
          >
            <p
              style={{
                margin: 0,
                maxWidth: "390px",
                fontSize: "12px",
                lineHeight: 1.35,
                fontWeight: 400,
                color: "rgba(255,255,255,0.68)",
              }}
            >
              Gulf International Marine Services Co. has served the maritime
              industry since 1990, offering comprehensive ship chandling for
              vessels operating worldwide.
            </p>
          </div>

          {/* CTA heading */}
          <div
            style={{
              paddingTop: "112px",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                height: "20px",
                padding: "0 10px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxSizing: "border-box",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#6568C9",
                  display: "block",
                  boxShadow: "0 0 6px rgba(101,104,201,0.8)",
                }}
              />

              <span
                style={{
                  fontSize: "10px",
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.65)",
                  whiteSpace: "nowrap",
                }}
              >
                Get Start With Us
              </span>
            </div>

            <h2
              style={{
                margin: 0,
                maxWidth: "470px",
                fontSize: "31px",
                lineHeight: 1.2,
                fontWeight: 300,
                letterSpacing: "-0.8px",
                color: "#FFFFFF",
              }}
            >
              Maritime Operations Never
              <br />
              Stop. Neither Do We.
            </h2>

            <a
              href="#contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "165px",
                height: "36px",
                marginTop: "12px",
                borderRadius: "999px",
                background: "#353FA5",
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: "10px",
                fontWeight: 500,
                boxSizing: "border-box",
              }}
            >
              REQUEST A QUOTE
            </a>
          </div>
        </div>

        {/* Lower content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1.45fr",
            columnGap: "70px",
            marginTop: "35px",
          }}
        >
          {/* Navigation */}
          <div>
            <h3
              style={{
                margin: "0 0 9px",
                fontSize: "14px",
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
                gap: "7px",
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
                    fontSize: "12px",
                    lineHeight: 1.25,
                    fontWeight: 400,
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                margin: "0 0 9px",
                fontSize: "14px",
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
                gap: "7px",
                fontSize: "12px",
                lineHeight: 1.25,
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

          {/* Empty area to maintain Figma layout */}
          <div />
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "calc(100% - 48px)",
          maxWidth: "1088px",
          height: "1px",
          margin: "0 auto",
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
          minHeight: "88px",
          margin: "0 auto",
          padding: "14px 12px 10px",
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
          }}
        >
          {/* Social links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#6568C9",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              Facebook
            </a>

            <a
              href="#"
              style={{
                color: "#6568C9",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              Instagram
            </a>

            <a
              href="#"
              style={{
                color: "#6568C9",
                textDecoration: "none",
                fontSize: "12px",
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
              gap: "28px",
            }}
          >
            <a
              href="#"
              style={{
                color: "rgba(255,255,255,0.38)",
                textDecoration: "none",
                fontSize: "12px",
              }}
            >
              Privacy Policy
            </a>

            <a
              href="#"
              style={{
                color: "rgba(255,255,255,0.38)",
                textDecoration: "none",
                fontSize: "12px",
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
            fontSize: "11px",
            lineHeight: 1.3,
            color: "rgba(255,255,255,0.32)",
          }}
        >
          © 2026 GIMSCO — Gulf International Marine Services Co. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
