"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Cabin Stores",
    image: "/images/store-cabin.jpg",
  },
  {
    number: "02",
    title: "Deck Stores",
    image: "/images/store-deck.jpg",
  },
  {
    number: "03",
    title: "Electrical Stores",
    image: "/images/store-electrical.jpg",
  },
  {
    number: "04",
    title: "Engine Stores",
    image: "/images/store-engine.jpg",
  },
  {
    number: "05",
    title: "Provision Stores",
    image: "/images/store-provision.jpg",
  },
  {
    number: "06",
    title: "Safety Stores",
    image: "/images/store-safety.jpg",
  },
  {
    number: "07",
    title: "Spare Parts",
    image: "/images/store-spare-parts.jpg",
  },
  {
    number: "08",
    title: "Bonded Stores",
    image: "/images/store-bonded.jpg",
  },
  {
    number: "09",
    title: "Galley Stores",
    image: "/images/store-galley.jpg",
  },
];

export default function StoreSolutions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;

    if (!slider) return;

    isDragging.current = true;

    startX.current = event.clientX;
    startScrollLeft.current = slider.scrollLeft;

    slider.style.cursor = "grabbing";

    slider.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;

    if (!slider || !isDragging.current) return;

    const distance = event.clientX - startX.current;

    slider.scrollLeft = startScrollLeft.current - distance;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;

    if (!slider) return;

    isDragging.current = false;

    slider.style.cursor = "grab";

    if (slider.hasPointerCapture(event.pointerId)) {
      slider.releasePointerCapture(event.pointerId);
    }
  };

  const handlePointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;

    if (!slider) return;

    isDragging.current = false;

    slider.style.cursor = "grab";

    if (slider.hasPointerCapture(event.pointerId)) {
      slider.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section
      style={{
        width: "100%",
        background: "#FFFFFF",
        paddingTop: "clamp(95px, 10vw, 150px)",
        paddingBottom: "clamp(90px, 9vw, 135px)",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        style={{
          width: "100%",
          paddingLeft: "clamp(34px, 11.8vw, 196px)",
          paddingRight: "clamp(34px, 11.8vw, 196px)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            boxSizing: "border-box",
          }}
        >
          {/* =================================================
              TITLE
          ================================================= */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {/* Badge */}

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                height: "23px",
                padding: "0 10px 0 6px",
                marginBottom: "13px",
                borderRadius: "20px",
                background: "#F0F1F5",
                border: "1px solid #D9DAE2",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#5863C4",
                  display: "block",
                }}
              />

              <span
                style={{
                  color: "#777777",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: "9px",
                  fontWeight: 400,
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                What We Offer
              </span>
            </div>

            {/* Heading */}

            <h2
              style={{
                margin: 0,
                padding: 0,
                color: "#080808",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: "clamp(50px, 5.25vw, 82px)",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-3.8px",
              }}
            >
              Complete{" "}
              <span
                style={{
                  color: "#6265C4",
                  fontWeight: 500,
                }}
              >
                Maritime
              </span>
              <br />
              <span
                style={{
                  color: "#6265C4",
                  fontWeight: 500,
                }}
              >
                Store
              </span>{" "}
              Solutions
            </h2>
          </div>

          {/* =================================================
              DRAG INDICATOR
          ================================================= */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
              paddingBottom: "13px",
              color: "#777777",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(13px, 1vw, 16px)",
              fontWeight: 400,
              whiteSpace: "nowrap",
            }}
          >
            <span>Drag to explore</span>

            <span
              style={{
                fontSize: "21px",
                lineHeight: 1,
                color: "#777777",
              }}
            >
              →
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          SERVICES SLIDER
      ===================================================== */}

      <div
        ref={sliderRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onPointerLeave={(event) => {
          if (isDragging.current) {
            handlePointerUp(event);
          }
        }}
        style={{
          width: "100%",
          marginTop: "clamp(30px, 3vw, 40px)",
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: "grab",
          paddingLeft: "clamp(34px, 11.8vw, 196px)",
          paddingRight: "0",
          paddingBottom: "12px",
          boxSizing: "border-box",

          /*
            Important for mouse/touch dragging.
            Prevents the browser from taking over
            the horizontal gesture.
          */
          touchAction: "pan-y",
          userSelect: "none",
        }}
      >
        <div
          style={{
            width: "max-content",
            display: "flex",
            gap: "11px",
            boxSizing: "border-box",
          }}
        >
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: "relative",
                  display: "block",
                  width: "clamp(270px, 24vw, 395px)",
                  height: "clamp(350px, 32vw, 510px)",
                  flexShrink: 0,
                  overflow: "hidden",
                  borderRadius: "17px",
                  background: "#333333",
                  boxSizing: "border-box",
                  cursor: "grab",
                }}
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority={index < 4}
                  sizes="395px"
                  draggable={false}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    transform: isHovered ? "scale(1.07)" : "scale(1)",
                    transition:
                      "transform 0.65s cubic-bezier(0.2, 0.7, 0.2, 1)",
                    pointerEvents: "none",
                  }}
                />

                {/* =================================================
                    DEFAULT GRAY EFFECT
                ================================================= */}

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(35, 39, 46, 0.43)",
                    opacity: isHovered ? 0 : 1,
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  }}
                />

                {/* =================================================
                    BOTTOM GRADIENT
                ================================================= */}

                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "48%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    opacity: isHovered ? 1 : 0.7,
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  }}
                />

                {/* =================================================
                    NUMBER
                ================================================= */}

                <div
                  style={{
                    position: "absolute",
                    top: "clamp(22px, 1.8vw, 29px)",
                    left: "clamp(22px, 1.8vw, 29px)",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: "clamp(12px, 0.9vw, 15px)",
                    fontWeight: 400,
                    lineHeight: 1,
                    zIndex: 3,
                    pointerEvents: "none",
                  }}
                >
                  {service.number}
                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <div
                  style={{
                    position: "absolute",
                    left: "clamp(22px, 1.8vw, 29px)",
                    right: "20px",
                    bottom: isHovered ? "72px" : "31px",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: "clamp(18px, 1.4vw, 23px)",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    letterSpacing: "-0.4px",
                    zIndex: 3,
                    transition: "bottom 0.35s ease",
                    pointerEvents: "none",
                  }}
                >
                  {service.title}
                </div>

                {/* =================================================
                    EXPLORE SERVICES
                ================================================= */}

                <div
                  style={{
                    position: "absolute",
                    left: "clamp(22px, 1.8vw, 29px)",
                    bottom: "30px",
                    display: "flex",
                    alignItems: "center",
                    gap: "9px",
                    color: "#6268D1",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: "clamp(13px, 1vw, 16px)",
                    fontWeight: 500,
                    lineHeight: 1,
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(10px)",
                    transition: "opacity 0.35s ease, transform 0.35s ease",
                    zIndex: 4,
                    pointerEvents: "none",
                  }}
                >
                  <span>Explore Services</span>

                  <span
                    style={{
                      fontSize: "21px",
                      lineHeight: 1,
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
