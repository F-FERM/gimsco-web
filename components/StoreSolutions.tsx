"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

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

  const sectionPadding = isSmallMobile
    ? "clamp(60px, 10vw, 80px) 0"
    : isMobile
      ? "clamp(80px, 10vw, 110px) 0"
      : "clamp(95px, 10vw, 150px) 0";

  const headingSize = isSmallMobile
    ? "clamp(36px, 5.25vw, 48px)"
    : isMobile
      ? "clamp(40px, 5.25vw, 55px)"
      : "clamp(50px, 5.25vw, 82px)";

  const horizontalPadding = isSmallMobile
    ? "clamp(16px, 11.8vw, 30px)"
    : isMobile
      ? "clamp(24px, 11.8vw, 50px)"
      : "clamp(34px, 11.8vw, 196px)";

  const cardWidth = isSmallMobile
    ? "clamp(200px, 24vw, 240px)"
    : isMobile
      ? "clamp(240px, 24vw, 280px)"
      : isTablet
        ? "clamp(270px, 24vw, 320px)"
        : "clamp(270px, 24vw, 395px)";

  const cardHeight = isSmallMobile
    ? "clamp(260px, 32vw, 300px)"
    : isMobile
      ? "clamp(300px, 32vw, 360px)"
      : isTablet
        ? "clamp(320px, 32vw, 400px)"
        : "clamp(350px, 32vw, 510px)";

  const numberSize = isSmallMobile
    ? "clamp(10px, 0.9vw, 12px)"
    : "clamp(12px, 0.9vw, 15px)";

  const titleSize = isSmallMobile
    ? "clamp(14px, 1.4vw, 16px)"
    : isMobile
      ? "clamp(16px, 1.4vw, 18px)"
      : "clamp(18px, 1.4vw, 23px)";

  const exploreSize = isSmallMobile
    ? "clamp(10px, 1vw, 12px)"
    : "clamp(13px, 1vw, 16px)";

  const numberTop = isSmallMobile
    ? "clamp(14px, 1.8vw, 18px)"
    : "clamp(22px, 1.8vw, 29px)";

  const numberLeft = isSmallMobile
    ? "clamp(14px, 1.8vw, 18px)"
    : "clamp(22px, 1.8vw, 29px)";

  const titleLeft = isSmallMobile
    ? "clamp(14px, 1.8vw, 18px)"
    : "clamp(22px, 1.8vw, 29px)";

  return (
    <section
      id="services"
      style={{
        width: "100%",
        background: "#FFFFFF",
        paddingTop: sectionPadding,
        paddingBottom: sectionPadding,
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
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
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
            flexWrap: isSmallMobile ? "wrap" : "nowrap",
            gap: isSmallMobile ? "12px" : "0",
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
                height: isSmallMobile ? "20px" : "23px",
                padding: isSmallMobile ? "0 8px 0 5px" : "0 10px 0 6px",
                marginBottom: isSmallMobile ? "10px" : "13px",
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
                  fontSize: isSmallMobile ? "7px" : "9px",
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
                fontSize: headingSize,
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: isSmallMobile
                  ? "-2px"
                  : isMobile
                    ? "-2.5px"
                    : "-3.8px",
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

          {!isSmallMobile && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                paddingBottom: "13px",
                color: "#777777",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: isMobile
                  ? "clamp(11px, 1vw, 13px)"
                  : "clamp(13px, 1vw, 16px)",
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
          )}
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
          marginTop: isSmallMobile
            ? "clamp(20px, 3vw, 24px)"
            : isMobile
              ? "clamp(24px, 3vw, 30px)"
              : "clamp(30px, 3vw, 40px)",
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: "grab",
          paddingLeft: horizontalPadding,
          paddingRight: "0",
          paddingBottom: isSmallMobile ? "8px" : "12px",
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
            gap: isSmallMobile ? "8px" : isMobile ? "10px" : "11px",
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
                  width: cardWidth,
                  height: cardHeight,
                  flexShrink: 0,
                  overflow: "hidden",
                  borderRadius: isSmallMobile ? "12px" : "17px",
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
                    top: numberTop,
                    left: numberLeft,
                    color: "#FFFFFF",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: numberSize,
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
                    left: titleLeft,
                    right: "20px",
                    bottom: isHovered
                      ? "56px"
                      : isSmallMobile
                        ? "24px"
                        : "31px",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: titleSize,
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
                    left: titleLeft,
                    bottom: isSmallMobile ? "18px" : "30px",
                    display: "flex",
                    alignItems: "center",
                    gap: isSmallMobile ? "6px" : "9px",
                    color: "#6268D1",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: exploreSize,
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
