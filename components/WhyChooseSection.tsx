"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const reasons = [
  {
    number: "01",
    title: "Unrivaled Expertise",
    description:
      "With 35 years of experience, we have mastered the art of ship chandling — anticipating and meeting maritime needs with precision.",
    image: "/images/why-choose-01.jpg",
  },
  {
    number: "02",
    title: "Comprehensive Product Range",
    description:
      "Comprehensive ship chandling services ensuring vessels are fully equipped, ready for voyages, and meeting global standards.",
    image: "/images/why-choose-02.jpg",
  },
  {
    number: "03",
    title: "Top-Tier Brands",
    description:
      "We partner with 250+ of the most reputable brands in the industry, guaranteeing every item meets the highest standards.",
    image: "/images/why-choose-03.jpg",
  },
  {
    number: "04",
    title: "Global Reach, Local Touch",
    description:
      "Wherever your vessel docks, GIMSCO is there. Our network covers North Europe, Asia, the Middle East and Africa.",
    image: "/images/why-choose-04.jpg",
  },
  {
    number: "05",
    title: "Customer-Centric Approach",
    description:
      "We don't just serve clients — we build lasting relationships through quality and service that keeps them coming back.",
    image: "/images/why-choose-05.jpg",
  },
  {
    number: "08",
    title: "Reliable, Round-the-Clock Service",
    description:
      "Maritime operations never stop, and neither do we — GIMSCO is dedicated to providing 24/7 support.",
    image: "/images/why-choose-08.jpg",
  },
];

export default function WhyChooseSection() {
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

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const sectionPadding = isSmallMobile
    ? "50px 14px 55px"
    : isMobile
      ? "clamp(70px, 7vw, 80px) 20px clamp(80px, 8vw, 90px)"
      : "clamp(70px, 7vw, 105px) clamp(24px, 5vw, 70px) clamp(80px, 8vw, 115px)";

  const headingSize = isSmallMobile
    ? "clamp(32px, 5vw, 42px)"
    : isMobile
      ? "clamp(42px, 5vw, 52px)"
      : "clamp(42px, 5vw, 68px)";

  const reasonMinHeight = isSmallMobile ? "60px" : isMobile ? "70px" : "82px";

  const reasonPadding = isSmallMobile
    ? "16px 16px"
    : isMobile
      ? "0 20px"
      : "0 38px";

  const gridColumns = isSmallMobile
    ? "50px minmax(120px, 1fr)"
    : isMobile
      ? "60px minmax(150px, 1fr) minmax(200px, 1fr)"
      : "80px minmax(280px, 1fr) minmax(390px, 1fr)";

  const columnGap = isSmallMobile ? "12px" : isMobile ? "16px" : "30px";

  const titleSize = isSmallMobile
    ? "clamp(14px, 1.6vw, 17px)"
    : isMobile
      ? "clamp(17px, 1.6vw, 20px)"
      : "clamp(20px, 1.6vw, 25px)";

  const descSize = isSmallMobile
    ? "clamp(10px, 1vw, 11px)"
    : isMobile
      ? "clamp(11px, 0.82vw, 12px)"
      : "clamp(13px, 1vw, 15px)";

  const numberSize = isSmallMobile
    ? "clamp(10px, 1vw, 12px)"
    : "clamp(13px, 1vw, 15px)";

  const imageHeight = isSmallMobile ? "120px" : isMobile ? "150px" : "190px";

  const imageMargin = isSmallMobile
    ? "0 30px 16px"
    : isMobile
      ? "0 40px 20px"
      : "0 56px 25px";

  const imageWidth = isSmallMobile
    ? "calc(100% - 60px)"
    : isMobile
      ? "calc(100% - 80px)"
      : "calc(100% - 112px)";

  return (
    <section
      style={{
        width: "100%",
        background: "#F2F2FA",
        padding: sectionPadding,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginBottom: isSmallMobile
              ? "clamp(20px, 3vw, 24px)"
              : isMobile
                ? "clamp(32px, 3vw, 36px)"
                : "clamp(32px, 3vw, 45px)",
            padding: "0 15px",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              margin: 0,
              padding: 0,
              color: "#111111",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: headingSize,
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: isSmallMobile ? "-1.5px" : "-2.8px",
            }}
          >
            Why Choose{" "}
            <span
              style={{
                color: "#5D63C4",
                fontWeight: 500,
              }}
            >
              GIMSCO?
            </span>
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: isSmallMobile ? "8px auto 0" : "12px auto 0",
              color: "#777777",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: isSmallMobile
                ? "10px"
                : isMobile
                  ? "clamp(11px, 0.95vw, 12px)"
                  : "clamp(12px, 0.95vw, 14px)",
              fontWeight: 400,
              lineHeight: isSmallMobile ? 1.4 : 1.55,
            }}
          >
            Eight reasons ship owners, fleet managers and marine procurement
            teams choose GIMSCO as their chandling partner.
          </p>
        </div>

        {/* =====================================================
            REASONS
        ===================================================== */}

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: isSmallMobile ? "8px" : "11px",
          }}
        >
          {reasons.map((reason, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={reason.number}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{
                  width: "100%",
                  background: "#FFFFFF",
                  border: isActive
                    ? "1px solid rgba(93, 99, 196, 0.4)"
                    : "1px solid #DDDEE7",
                  borderRadius: isSmallMobile ? "10px" : "13px",
                  boxShadow: isActive
                    ? "0 8px 25px rgba(0, 0, 0, 0.07)"
                    : "0 2px 5px rgba(0, 0, 0, 0.035)",
                  overflow: "hidden",
                  boxSizing: "border-box",
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                }}
              >
                {/* =================================================
                    TOP CONTENT
                ================================================= */}

                <div
                  style={{
                    width: "100%",
                    minHeight: isActive
                      ? isSmallMobile
                        ? "80px"
                        : isMobile
                          ? "100px"
                          : "125px"
                      : reasonMinHeight,
                    padding: isActive
                      ? isSmallMobile
                        ? "16px 16px"
                        : isMobile
                          ? "20px 20px"
                          : "25px 38px 20px"
                      : reasonPadding,
                    display: "grid",
                    gridTemplateColumns: gridColumns,
                    alignItems: "center",
                    columnGap: columnGap,
                    rowGap: isSmallMobile ? "4px" : "0",
                    boxSizing: "border-box",
                    transition: "min-height 0.3s ease, padding 0.3s ease",
                  }}
                >
                  {/* NUMBER */}

                  <div
                    style={{
                      color: "#171717",
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontSize: numberSize,
                      fontWeight: 500,
                      lineHeight: 1,
                    }}
                  >
                    {reason.number}
                  </div>

                  {/* TITLE */}

                  <div
                    style={{
                      color: isActive ? "#5260D0" : "#151515",
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontSize: titleSize,
                      fontWeight: 500,
                      lineHeight: 1.25,
                      letterSpacing: "-0.5px",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {reason.title}
                  </div>

                  {/* DESCRIPTION */}

                  {!isSmallMobile && (
                    <div
                      style={{
                        color: "#777777",
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                        fontSize: isActive
                          ? descSize
                          : isMobile
                            ? "clamp(10px, 0.82vw, 11px)"
                            : "clamp(11px, 0.82vw, 13px)",
                        fontWeight: 400,
                        lineHeight: isSmallMobile ? 1.3 : 1.5,
                        maxWidth: "560px",
                        transition: "font-size 0.25s ease",
                      }}
                    >
                      {reason.description}
                    </div>
                  )}
                </div>

                {/* =================================================
                    HOVER IMAGE
                ================================================= */}

                <div
                  style={{
                    width: imageWidth,
                    height: isActive ? imageHeight : "0px",
                    margin: isActive
                      ? imageMargin
                      : `0 ${isSmallMobile ? "30px" : isMobile ? "40px" : "56px"}`,
                    position: "relative",
                    borderRadius: isSmallMobile ? "12px" : "17px",
                    overflow: "hidden",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(-10px)",
                    transition:
                      "height 0.4s ease, opacity 0.3s ease, transform 0.4s ease, margin 0.4s ease",
                    pointerEvents: "none",
                  }}
                >
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    sizes="(max-width: 480px) 90vw, (max-width: 767px) 90vw, 1150px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.14) 100%)",
                    }}
                  />
                </div>

                {/* Mobile description */}
                {isSmallMobile && isActive && (
                  <div
                    style={{
                      padding: "0 16px 16px",
                      color: "#777777",
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontSize: "10px",
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {reason.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
