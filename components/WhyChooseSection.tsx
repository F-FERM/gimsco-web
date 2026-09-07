"use client";

import Image from "next/image";
import { useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        width: "100%",
        background: "#F2F2FA",
        padding:
          "clamp(70px, 7vw, 105px) clamp(24px, 5vw, 70px) clamp(80px, 8vw, 115px)",
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
            marginBottom: "clamp(32px, 3vw, 45px)",
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
              fontSize: "clamp(42px, 5vw, 68px)",
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: "-2.8px",
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
              margin: "12px auto 0",
              color: "#777777",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(12px, 0.95vw, 14px)",
              fontWeight: 400,
              lineHeight: 1.55,
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
            gap: "11px",
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
                  borderRadius: "13px",
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
                    minHeight: isActive ? "125px" : "82px",
                    padding: isActive ? "25px 38px 20px" : "0 38px",
                    display: "grid",
                    gridTemplateColumns:
                      "80px minmax(280px, 1fr) minmax(390px, 1fr)",
                    alignItems: "center",
                    columnGap: "30px",
                    boxSizing: "border-box",
                    transition: "min-height 0.3s ease, padding 0.3s ease",
                  }}
                >
                  {/* NUMBER */}

                  <div
                    style={{
                      color: "#171717",
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontSize: "clamp(13px, 1vw, 15px)",
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
                      fontSize: "clamp(20px, 1.6vw, 25px)",
                      fontWeight: 500,
                      lineHeight: 1.25,
                      letterSpacing: "-0.5px",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {reason.title}
                  </div>

                  {/* DESCRIPTION */}

                  <div
                    style={{
                      color: "#777777",
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontSize: isActive
                        ? "clamp(13px, 1vw, 15px)"
                        : "clamp(11px, 0.82vw, 13px)",
                      fontWeight: 400,
                      lineHeight: 1.5,
                      maxWidth: "560px",
                      transition: "font-size 0.25s ease",
                    }}
                  >
                    {reason.description}
                  </div>
                </div>

                {/* =================================================
                    HOVER IMAGE
                ================================================= */}

                <div
                  style={{
                    width: "calc(100% - 112px)",
                    height: isActive ? "190px" : "0px",
                    margin: isActive ? "0 56px 25px" : "0 56px",
                    position: "relative",
                    borderRadius: "17px",
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
                    sizes="(max-width: 768px) 90vw, 1150px"
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
