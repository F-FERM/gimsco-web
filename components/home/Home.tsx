"use client";

import { useEffect, useState } from "react";

export default function Home() {
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

  /*
   * ============================================================
   * RESPONSIVE VALUES
   * ============================================================
   */

  const heroMinHeight = isSmallMobile
    ? "760px"
    : isMobile
      ? "800px"
      : isTablet
        ? "720px"
        : "100vh";

  const heroPaddingTop = isSmallMobile
    ? "125px"
    : isMobile
      ? "135px"
      : isTablet
        ? "150px"
        : isSmallDesktop
          ? "150px"
          : "175px";

  const heroPaddingBottom = isSmallMobile
    ? "55px"
    : isMobile
      ? "60px"
      : isTablet
        ? "65px"
        : "80px";

  const horizontalPadding = isSmallMobile
    ? "20px"
    : isMobile
      ? "24px"
      : isTablet
        ? "42px"
        : isSmallDesktop
          ? "48px"
          : "64px";

  const headingSize = isSmallMobile
    ? "44px"
    : isMobile
      ? "clamp(46px, 10vw, 58px)"
      : isTablet
        ? "clamp(52px, 7vw, 66px)"
        : isSmallDesktop
          ? "clamp(56px, 5.2vw, 70px)"
          : "clamp(58px, 5vw, 76px)";

  const descriptionSize = isSmallMobile
    ? "12.5px"
    : isMobile
      ? "13px"
      : isTablet
        ? "13px"
        : "clamp(13px, 0.95vw, 15px)";

  const contentGap = isMobile
    ? "40px"
    : isTablet
      ? "55px"
      : isSmallDesktop
        ? "65px"
        : "90px";

  const backgroundPosition = isSmallMobile
    ? "65% center"
    : isMobile
      ? "63% center"
      : isTablet
        ? "60% center"
        : "center center";

  /*
   * ============================================================
   * HERO GRID
   * ============================================================
   */

  const gridColumns = isMobile
    ? "1fr"
    : isTablet
      ? "minmax(0, 1fr) minmax(0, 0.9fr)"
      : "minmax(0, 1.05fr) minmax(0, 0.95fr)";

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        fontFamily: "var(--font-poppins), Poppins, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section
        id="home"
        style={{
          position: "relative",
          width: "100%",
          minHeight: heroMinHeight,
          height: isMobile ? "auto" : "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          boxSizing: "border-box",
        }}
      >
        {/* =======================================================
            BACKGROUND IMAGE
        ======================================================= */}

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition,
            backgroundRepeat: "no-repeat",
            zIndex: 0,
            transform: "scale(1.001)",
          }}
        />

        {/* =======================================================
            DARK OVERLAY
        ======================================================= */}

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            background: isMobile
              ? "linear-gradient(90deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.42) 55%, rgba(0,0,0,0.48) 100%)"
              : "linear-gradient(90deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.40) 45%, rgba(0,0,0,0.52) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* =======================================================
            HERO CONTENT
        ======================================================= */}

        <div
          style={{
            position: "relative",
            zIndex: 5,
            width: "100%",
            maxWidth: "1360px",
            margin: "0 auto",
            padding: `${heroPaddingTop} ${horizontalPadding} ${heroPaddingBottom}`,
            boxSizing: "border-box",
          }}
        >
          {/* =====================================================
              HERO GRID
          ===================================================== */}

          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: gridColumns,
              alignItems: "end",
              columnGap: isMobile ? "0" : contentGap,
              rowGap: isSmallMobile
                ? "36px"
                : isMobile
                  ? "42px"
                  : isTablet
                    ? "30px"
                    : "0",
              boxSizing: "border-box",
            }}
          >
            {/* ===================================================
                LEFT CONTENT
            =================================================== */}

            <div
              style={{
                width: "100%",
                maxWidth: isMobile ? "620px" : "670px",
                minWidth: 0,
                boxSizing: "border-box",
              }}
            >
              {/* =================================================
                  BADGE
              ================================================= */}

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  maxWidth: "100%",
                  padding: isSmallMobile
                    ? "6px 11px 6px 8px"
                    : "7px 14px 7px 9px",
                  marginBottom: isSmallMobile ? "16px" : "20px",
                  borderRadius: "30px",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  color: "rgba(255,255,255,0.94)",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: isSmallMobile ? "9px" : "11px",
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "0.1px",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  boxSizing: "border-box",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    width: isSmallMobile ? "7px" : "9px",
                    height: isSmallMobile ? "7px" : "9px",
                    flexShrink: 0,
                    borderRadius: "50%",
                    background: "#AEB8FF",
                    boxShadow: "0 0 10px rgba(174,184,255,0.65)",
                  }}
                />

                <span>35 Years of Industry Leadership</span>
              </div>

              {/* =================================================
                  HERO HEADING
              ================================================= */}

              <h1
                style={{
                  margin: 0,
                  padding: 0,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: headingSize,
                  lineHeight: isSmallMobile ? 1.08 : 1.06,
                  fontWeight: 300,
                  letterSpacing: isSmallMobile
                    ? "-1.8px"
                    : isMobile
                      ? "-2px"
                      : "-2.8px",
                  maxWidth: "100%",
                  wordBreak: "normal",
                  overflowWrap: "normal",
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

            {/* ===================================================
                RIGHT CONTENT
            =================================================== */}

            <div
              style={{
                width: "100%",
                maxWidth: isMobile ? "620px" : isTablet ? "470px" : "525px",
                minWidth: 0,
                paddingBottom: isMobile ? "0" : "6px",
                boxSizing: "border-box",
              }}
            >
              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p
                style={{
                  margin: "0 0 24px",
                  padding: 0,
                  color: "rgba(255,255,255,0.92)",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: descriptionSize,
                  lineHeight: isMobile ? 1.65 : 1.6,
                  fontWeight: 400,
                  maxWidth: "100%",
                }}
              >
                Gulf International Marine Services Co. (GIMSCO) has established
                its reputation as the best ship chandler in the UAE for more
                than 35 years offering comprehensive dispatch chandling for the
                maritime industry, globally.
              </p>

              {/* =================================================
                  BUTTONS
              ================================================= */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: isSmallMobile ? "10px" : "13px",
                  width: "100%",
                }}
              >
                {/* REQUEST QUOTE */}

                <a
                  href="/contact"
                  style={{
                    minWidth: isSmallMobile
                      ? "100%"
                      : isMobile
                        ? "165px"
                        : "185px",
                    height: isSmallMobile ? "46px" : isMobile ? "44px" : "48px",
                    padding: "0 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "30px",
                    background: "#293C9D",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: isSmallMobile ? "11px" : "12px",
                    fontWeight: 600,
                    letterSpacing: "0.2px",
                    boxSizing: "border-box",
                    transition: "transform 0.25s ease, background 0.25s ease",
                  }}
                >
                  REQUEST A QUOTE
                </a>

                {/* EXPLORE SERVICE */}

                <a
                  href="/services"
                  style={{
                    minWidth: isSmallMobile
                      ? "100%"
                      : isMobile
                        ? "165px"
                        : "175px",
                    height: isSmallMobile ? "46px" : isMobile ? "44px" : "48px",
                    padding: "0 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "30px",
                    border: "1px solid rgba(255,255,255,0.85)",
                    background: "rgba(255,255,255,0.04)",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: isSmallMobile ? "11px" : "12px",
                    fontWeight: 500,
                    letterSpacing: "0.2px",
                    boxSizing: "border-box",
                    transition: "background 0.25s ease, transform 0.25s ease",
                  }}
                >
                  EXPLORE SERVICE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM GRADIENT
        ======================================================= */}

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: isMobile ? "140px" : "180px",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.34))",
            zIndex: 3,
            pointerEvents: "none",
          }}
        />
      </section>
    </main>
  );
}
