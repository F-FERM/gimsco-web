"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutSection() {
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

  const sectionPadding = isSmallMobile
    ? "50px 18px"
    : isMobile
      ? "60px 24px"
      : isTablet
        ? "75px 35px"
        : "85px 50px";

  const gridGap = isSmallMobile
    ? "35px"
    : isMobile
      ? "50px"
      : isTablet
        ? "45px"
        : "70px";

  const headingSize = isSmallMobile
    ? "clamp(32px, 10vw, 42px)"
    : isMobile
      ? "clamp(38px, 10vw, 52px)"
      : isTablet
        ? "clamp(42px, 6vw, 58px)"
        : "clamp(48px, 4.4vw, 66px)";

  const descriptionSize = isSmallMobile
    ? "11px"
    : isMobile
      ? "12px"
      : "clamp(11px, 0.85vw, 13px)";

  const statSize = isSmallMobile
    ? "28px"
    : isMobile
      ? "34px"
      : "clamp(38px, 3.2vw, 48px)";

  const statLabelSize = isSmallMobile ? "9px" : isMobile ? "10px" : "11px";

  const lineWidth = isSmallMobile ? "18px" : isMobile ? "25px" : "70px";

  return (
    <section
      id="about"
      style={{
        width: "100%",
        background: "#FFFFFF",
        boxSizing: "border-box",
        padding: sectionPadding,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "minmax(0, 1.45fr) minmax(300px, 0.9fr)",
          alignItems: "center",
          gap: gridGap,
          boxSizing: "border-box",
        }}
      >
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div
          style={{
            width: "100%",
            minWidth: 0,
          }}
        >
          {/* Since 1990 Badge */}

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              height: "20px",
              padding: "0 8px 0 5px",
              marginBottom: "10px",
              borderRadius: "20px",
              background: "#F2F3FA",
              border: "1px solid #D8DBE9",
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                flexShrink: 0,
                borderRadius: "50%",
                background: "#3C4AB1",
                boxShadow: "0 0 0 2px rgba(60, 74, 177, 0.12)",
              }}
            />

            <span
              style={{
                color: "#777777",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: isSmallMobile ? "7px" : "8px",
                fontWeight: 400,
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              Since 1990
            </span>
          </div>

          {/* ===================================================
              HEADING
          =================================================== */}

          <h2
            style={{
              margin: 0,
              padding: 0,
              maxWidth: "760px",
              color: "#090909",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: headingSize,
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: isSmallMobile
                ? "-1.2px"
                : isMobile
                  ? "-1.5px"
                  : "-2.2px",
            }}
          >
            35 Years of{" "}
            <span
              style={{
                color: "#6063C4",
                fontWeight: 500,
              }}
            >
              Maritime
            </span>
            <br />
            <span
              style={{
                color: "#6063C4",
                fontWeight: 500,
              }}
            >
              Excellence
            </span>
          </h2>

          {/* ===================================================
              DESCRIPTION
          =================================================== */}

          <div
            style={{
              maxWidth: "760px",
              marginTop: isSmallMobile ? "16px" : isMobile ? "20px" : "18px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#777777",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: descriptionSize,
                fontWeight: 400,
                lineHeight: isSmallMobile ? 1.5 : 1.5,
              }}
            >
              Gulf International Marine Services Co. (GIMSCO) has proudly served
              the maritime industry since 1990. Over the past 35 years, we have
              grown from a trusted regional supplier in the GCC into a globally
              recognized marine services provider.
            </p>

            <p
              style={{
                margin: isSmallMobile ? "10px 0 0" : "14px 0 0",
                color: "#777777",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: descriptionSize,
                fontWeight: 400,
                lineHeight: isSmallMobile ? 1.5 : 1.5,
              }}
            >
              Our success is built on delivering quality products, reliable
              solutions, and exceptional customer support — with a strong
              commitment to integrity and customer satisfaction that continues
              to support the evolving needs of the marine industry worldwide.
            </p>
          </div>

          {/* =====================================================
              BOTTOM COMPANY STATS
          ===================================================== */}

          <div
            style={{
              width: "100%",
              maxWidth: "760px",
              marginTop: isSmallMobile ? "24px" : isMobile ? "32px" : "30px",
              display: "flex",
              alignItems: "flex-start",
              boxSizing: "border-box",
              flexWrap: isSmallMobile ? "wrap" : "nowrap",
              gap: isSmallMobile ? "12px" : "0",
            }}
          >
            {/* ===================================================
                1990
            =================================================== */}

            <div
              style={{
                flex: isSmallMobile ? "1 1 30%" : 1,
                minWidth: isSmallMobile ? "60px" : 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  color: "#000000",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: statSize,
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: isSmallMobile ? "-1px" : "-2px",
                  whiteSpace: "nowrap",
                }}
              >
                1990
              </div>

              <div
                style={{
                  marginTop: isSmallMobile ? "4px" : "7px",
                  color: "#777777",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: statLabelSize,
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                Founded
              </div>
            </div>

            {/* ===================================================
                FIRST CONNECTING LINE
            =================================================== */}

            {!isSmallMobile && (
              <div
                style={{
                  width: lineWidth,
                  flexShrink: 0,
                  marginTop: isMobile ? "18px" : "24px",
                  marginLeft: isSmallMobile ? "3px" : isMobile ? "5px" : "8px",
                  marginRight: isSmallMobile ? "3px" : isMobile ? "5px" : "8px",
                  borderTop: isSmallMobile
                    ? "3px solid #000000"
                    : "5px solid #000000",
                  boxSizing: "border-box",
                }}
              />
            )}

            {/* ===================================================
                35+
            =================================================== */}

            <div
              style={{
                flex: isSmallMobile ? "1 1 30%" : 1,
                minWidth: isSmallMobile ? "60px" : 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  color: "#000000",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: statSize,
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: isSmallMobile ? "-1px" : "-2px",
                  whiteSpace: "nowrap",
                }}
              >
                35<span style={{ fontSize: "0.62em" }}>+</span>
              </div>

              <div
                style={{
                  marginTop: isSmallMobile ? "4px" : "7px",
                  color: "#777777",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: statLabelSize,
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                Years Strong
              </div>
            </div>

            {/* ===================================================
                SECOND CONNECTING LINE
            =================================================== */}

            {!isSmallMobile && (
              <div
                style={{
                  width: lineWidth,
                  flexShrink: 0,
                  marginTop: isMobile ? "18px" : "24px",
                  marginLeft: isSmallMobile ? "3px" : isMobile ? "5px" : "8px",
                  marginRight: isSmallMobile ? "3px" : isMobile ? "5px" : "8px",
                  borderTop: isSmallMobile
                    ? "3px solid #000000"
                    : "5px solid #000000",
                  boxSizing: "border-box",
                }}
              />
            )}

            {/* ===================================================
                GLOBAL
            =================================================== */}

            <div
              style={{
                flex: isSmallMobile ? "1 1 30%" : 1,
                minWidth: isSmallMobile ? "60px" : 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  color: "#000000",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: statSize,
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: isSmallMobile ? "-1px" : "-2px",
                  whiteSpace: "nowrap",
                }}
              >
                Global
              </div>

              <div
                style={{
                  marginTop: isSmallMobile ? "4px" : "7px",
                  color: "#777777",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: statLabelSize,
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                Operations
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT IMAGE
        ===================================================== */}

        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: isMobile ? "100%" : "470px",
            justifySelf: isMobile ? "center" : "end",
            aspectRatio: isSmallMobile ? "1 / 0.9" : "1 / 0.91",
            borderRadius: isSmallMobile ? "18px" : isMobile ? "22px" : "20px",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          <Image
            src="/images/about-ship.jpg"
            alt="GIMSCO maritime operations"
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 767px) 100vw, 470px"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          {/* Image Overlay */}

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(20, 30, 60, 0.08) 0%, rgba(0, 0, 0, 0.08) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* =================================================
              CLIENTS CARD
          ================================================= */}

          <div
            style={{
              position: "absolute",
              top: isSmallMobile ? "14px" : isMobile ? "18px" : "15px",
              left: isSmallMobile ? "14px" : isMobile ? "18px" : "15px",
              width: isSmallMobile ? "120px" : isMobile ? "150px" : "145px",
              padding: isSmallMobile ? "10px" : isMobile ? "12px" : "11px",
              borderRadius: isSmallMobile ? "10px" : "12px",
              background: "rgba(125, 140, 158, 0.42)",
              border: "1px solid rgba(255, 255, 255, 0.28)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                color: "#FFFFFF",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: isSmallMobile ? "22px" : isMobile ? "28px" : "25px",
                fontWeight: 300,
                lineHeight: 1,
                letterSpacing: "-1px",
              }}
            >
              <span
                style={{
                  color: "#FFFFFF",
                  marginRight: "2px",
                }}
              >
                +
              </span>

              <span>1,000</span>
            </div>

            <div
              style={{
                marginTop: isSmallMobile ? "3px" : "5px",
                color: "rgba(255, 255, 255, 0.82)",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: isSmallMobile ? "6.5px" : isMobile ? "8px" : "7px",
                fontWeight: 400,
                lineHeight: isSmallMobile ? 1.2 : 1.35,
              }}
            >
              Satisfied clients served
              <br />
              across the maritime
              <br />
              industry
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
