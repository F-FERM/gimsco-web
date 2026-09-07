"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        fontFamily: "var(--font-poppins), Poppins, sans-serif",
      }}
    >
      {/* =====================================================
          HERO SECTION

          IMPORTANT:
          Hero starts at top: 0.
          Navbar from layout is positioned over it.
      ===================================================== */}

      <section
        id="home"
        style={{
          position: "relative",
          width: "100%",
          minHeight: isMobile ? "760px" : "100vh",
          height: isMobile ? "auto" : "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          boxSizing: "border-box",
        }}
      >
        {/* ===================================================
            HERO BACKGROUND

            Replace this image later.
        =================================================== */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        />

        {/* ===================================================
            HERO OVERLAY
        =================================================== */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.40) 45%, rgba(0, 0, 0, 0.52) 100%)",
            zIndex: 1,
          }}
        />

        {/* ===================================================
            HERO CONTENT
        =================================================== */}

        <div
          style={{
            position: "relative",
            zIndex: 5,
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: isMobile ? "150px 24px 70px" : "180px 32px 85px",
            boxSizing: "border-box",
          }}
        >
          {/* =================================================
              HERO GRID
          ================================================= */}

          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "minmax(0, 1.05fr) minmax(0, 0.95fr)",
              alignItems: "end",
              columnGap: isMobile ? "0" : "clamp(50px, 7vw, 105px)",
              rowGap: isMobile ? "45px" : "0",
            }}
          >
            {/* ===============================================
                LEFT CONTENT
            =============================================== */}

            <div
              style={{
                width: "100%",
                maxWidth: isMobile ? "600px" : "650px",
              }}
            >
              {/* Experience Badge */}

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  padding: "7px 14px 7px 9px",
                  marginBottom: "18px",
                  borderRadius: "30px",
                  background: "rgba(255, 255, 255, 0.16)",
                  border: "1px solid rgba(255, 255, 255, 0.22)",
                  color: "rgba(255, 255, 255, 0.92)",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "0.1px",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    flexShrink: 0,
                    borderRadius: "50%",
                    background: "#AEB8FF",
                    boxShadow: "0 0 10px rgba(174, 184, 255, 0.65)",
                  }}
                />

                <span>35 Years of Industry Leadership</span>
              </div>

              {/* Hero Heading */}

              <h1
                style={{
                  margin: 0,
                  padding: 0,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: isMobile
                    ? "clamp(42px, 11vw, 62px)"
                    : "clamp(52px, 5.2vw, 74px)",
                  lineHeight: 1.07,
                  fontWeight: 300,
                  letterSpacing: isMobile ? "-1.5px" : "-2.5px",
                }}
              >
                <span
                  style={{
                    color: "#FFFFFF",
                    fontWeight: 300,
                  }}
                >
                  Your Trusted{" "}
                </span>

                <span
                  style={{
                    color: "#5356C1",
                    fontWeight: 500,
                  }}
                >
                  Ship
                </span>

                <br />

                <span
                  style={{
                    color: "#5356C1",
                    fontWeight: 500,
                  }}
                >
                  Chandling
                </span>

                <br />

                <span
                  style={{
                    color: "#FFFFFF",
                    fontWeight: 300,
                  }}
                >
                  Partner
                </span>
              </h1>
            </div>

            {/* ===============================================
                RIGHT CONTENT
            =============================================== */}

            <div
              style={{
                width: "100%",
                maxWidth: isMobile ? "600px" : "510px",
                paddingBottom: isMobile ? "0" : "8px",
              }}
            >
              {/* Description */}

              <p
                style={{
                  margin: "0 0 24px",
                  padding: 0,
                  color: "rgba(255, 255, 255, 0.92)",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: isMobile ? "13px" : "clamp(13px, 1vw, 15px)",
                  lineHeight: 1.65,
                  fontWeight: 400,
                }}
              >
                Gulf International Marine Services Co. (GIMSCO) has established
                its reputation as the best ship chandler in the UAE for more
                than 35 years offering comprehensive dispatch chandling for the
                maritime industry, globally.
              </p>

              {/* Buttons */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "13px",
                }}
              >
                {/* Request Quote */}

                <a
                  href="/contact"
                  style={{
                    minWidth: isMobile ? "165px" : "185px",
                    height: isMobile ? "44px" : "48px",
                    padding: "0 26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "30px",
                    background: "#293C9D",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: isMobile ? "11px" : "12px",
                    fontWeight: 600,
                    letterSpacing: "0.2px",
                    boxSizing: "border-box",
                  }}
                >
                  REQUEST A QUOTE
                </a>

                {/* Explore Service */}

                <a
                  href="/services"
                  style={{
                    minWidth: isMobile ? "165px" : "175px",
                    height: isMobile ? "44px" : "48px",
                    padding: "0 26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "30px",
                    border: "1px solid rgba(255, 255, 255, 0.85)",
                    background: "rgba(255, 255, 255, 0.04)",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: isMobile ? "11px" : "12px",
                    fontWeight: 500,
                    letterSpacing: "0.2px",
                    boxSizing: "border-box",
                  }}
                >
                  EXPLORE SERVICE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM GRADIENT
        =================================================== */}

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: isMobile ? "120px" : "170px",
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.32))",
            zIndex: 3,
            pointerEvents: "none",
          }}
        />
      </section>
    </main>
  );
}
