"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const certifications = [
  {
    title: "ISO 45001:2018",
    description:
      "Occupational health & safety management certification, reflecting a commitment to a safe working environment for employees and partners.",
    image: "/images/certifications/iso-45001.jpg",
  },
  {
    title: "ISO 14001:2015",
    description:
      "Environmental management certification, verifying an effective system that minimizes environmental impact and promotes sustainable practice.",
    image: "/images/certifications/iso-14001.jpg",
  },
  {
    title: "Bureau Veritas Accreditation",
    description:
      "Accreditation from one of the world's leading certification bodies, reflecting adherence to stringent quality management systems.",
    image: "/images/certifications/bureau-veritas.jpg",
  },
  {
    title: "International Marine Purchasing Association (IMPA)",
    description:
      "Membership aligning GIMSCO's procurement practices with recognized best practice across the global marine industry.",
    image: "/images/certifications/impa.jpg",
  },
  {
    title: "International Ship Supply Association (ISSA)",
    description:
      "Membership in the leading organization representing ship suppliers worldwide, upholding high standards of service and reliability.",
    image: "/images/certifications/issa.png",
  },
  {
    title: "In-Country Value (ICV) Certification",
    description:
      "Recognition of GIMSCO's contribution to local economic development and content in the regions where it operates.",
    image: "/images/certifications/icv.png",
  },
];

export default function Certifications() {
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

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sectionPadding = isSmallMobile
    ? "50px 16px"
    : isMobile
      ? "clamp(70px, 7vw, 110px) 20px"
      : "clamp(70px, 7vw, 110px) 24px";

  const headingSize = isSmallMobile
    ? "clamp(32px, 10vw, 42px)"
    : isMobile
      ? "clamp(42px, 5vw, 52px)"
      : "clamp(42px, 5vw, 70px)";

  const gridColumns = isMobile
    ? "repeat(1, minmax(0, 1fr))"
    : isTablet
      ? "repeat(2, minmax(0, 1fr))"
      : "repeat(3, minmax(0, 1fr))";

  const cellMinHeight = isSmallMobile ? "200px" : isMobile ? "220px" : "265px";

  const cellPadding = isSmallMobile
    ? "clamp(18px, 2.2vw, 22px) clamp(14px, 2vw, 18px)"
    : isMobile
      ? "clamp(25px, 2.2vw, 30px) clamp(18px, 2vw, 22px)"
      : "clamp(25px, 2.2vw, 33px) clamp(18px, 2vw, 24px)";

  const titleSize = isSmallMobile
    ? "clamp(15px, 1.5vw, 18px)"
    : isMobile
      ? "clamp(18px, 1.5vw, 20px)"
      : "clamp(18px, 1.5vw, 23px)";

  const descSize = isSmallMobile
    ? "clamp(10px, 0.9vw, 11px)"
    : "clamp(11px, 0.9vw, 13px)";

  const starSize = isSmallMobile ? "30px" : "42px";

  return (
    <section
      id="certifications"
      style={{
        width: "100%",
        background: "#F1F1FA",
        padding: sectionPadding,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1160px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* Badge */}

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            height: isSmallMobile ? "22px" : "25px",
            padding: isSmallMobile ? "0 8px 0 5px" : "0 11px 0 6px",
            marginBottom: isSmallMobile ? "10px" : "14px",
            borderRadius: "20px",
            background: "#E5E5EB",
            border: "1px solid #D0D0D8",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#3E4CA8",
              display: "block",
              flexShrink: 0,
            }}
          />

          <span
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: isSmallMobile ? "8px" : "10px",
              fontWeight: 400,
              color: "#747474",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            Certified Excellence
          </span>
        </div>

        {/* Heading */}

        <h2
          style={{
            margin: 0,
            maxWidth: "850px",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: headingSize,
            fontWeight: 300,
            lineHeight: 1.12,
            letterSpacing: isSmallMobile
              ? "-1.5px"
              : isMobile
                ? "-2px"
                : "-2.5px",
            color: "#080808",
          }}
        >
          Quality, safety and
          <br />
          environmental standards
          <br />
          you{" "}
          <span
            style={{
              color: "#6265C4",
              fontWeight: 500,
            }}
          >
            can rely on
          </span>
        </h2>

        {/* Description */}

        <p
          style={{
            margin: isSmallMobile ? "14px 0 28px" : "20px 0 42px",
            maxWidth: "760px",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: isSmallMobile
              ? "11px"
              : isMobile
                ? "12px"
                : "clamp(12px, 1vw, 15px)",
            fontWeight: 400,
            lineHeight: isSmallMobile ? 1.4 : 1.45,
            color: "#777777",
          }}
        >
          GIMSCO&apos;s accreditations and industry memberships reflect a
          continued commitment to quality, safety, environmental responsibility
          and operational excellence in marine procurement.
        </p>

        {/* =====================================================
            CERTIFICATION GRID
        ===================================================== */}

        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: gridColumns,
            border: "1px solid #9C9C9C",
            borderRadius: isSmallMobile ? "12px" : "20px",
            overflow: "hidden",
            background: "#FFFFFF",
            boxSizing: "border-box",
          }}
        >
          {certifications.map((certification, index) => {
            const isHovered = hoveredIndex === index;
            const cols = isMobile ? 1 : isTablet ? 2 : 3;

            return (
              <div
                key={certification.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: "relative",
                  minHeight: cellMinHeight,
                  padding: cellPadding,
                  boxSizing: "border-box",
                  borderRight:
                    index % cols !== cols - 1 ? "1px solid #A5A5A5" : "none",
                  borderBottom:
                    index < certifications.length - cols
                      ? "1px solid #A5A5A5"
                      : "none",
                  overflow: "hidden",
                  background: isHovered ? "#BDBDFF4D" : "#FFFFFF",
                  transition: "background 0.35s ease, box-shadow 0.35s ease",
                  boxShadow: isHovered ? "inset 0 0 0 1px #808080" : "none",
                }}
              >
                {/* =================================================
                    HOVER BACKGROUND IMAGE
                ================================================= */}

                {isHovered && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 0,
                      pointerEvents: "none",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={certification.image}
                      alt=""
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        opacity: 0.22,
                      }}
                    />

                    {/* Purple translucent overlay */}

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "#BDBDFF4D",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                )}

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Star Icon */}

                  <div
                    style={{
                      width: starSize,
                      height: starSize,
                      minWidth: starSize,
                      borderRadius: "50%",
                      border: isSmallMobile
                        ? "1.5px solid #5360BC"
                        : "2px solid #5360BC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: isSmallMobile ? "10px" : "15px",
                      boxSizing: "border-box",
                      background: isHovered
                        ? "rgba(255,255,255,0.12)"
                        : "#FFFFFF",
                      transition: "background 0.3s ease",
                    }}
                  >
                    <svg
                      width={isSmallMobile ? "16" : "20"}
                      height={isSmallMobile ? "16" : "20"}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3.5L14.63 8.82L20.5 9.67L16.25 13.81L17.25 19.66L12 16.9L6.75 19.66L7.75 13.81L3.5 9.67L9.37 8.82L12 3.5Z"
                        stroke="#5360BC"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Title */}

                  <h3
                    style={{
                      margin: 0,
                      maxWidth: "100%",
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontSize: titleSize,
                      fontWeight: 500,
                      lineHeight: 1.25,
                      letterSpacing: "-0.4px",
                      color: "#111111",
                      transition: "font-size 0.3s ease",
                    }}
                  >
                    {certification.title}
                  </h3>

                  {/* Description */}

                  <p
                    style={{
                      margin: isSmallMobile ? "5px 0 0" : "7px 0 0",
                      maxWidth: "100%",
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontSize: descSize,
                      fontWeight: 400,
                      lineHeight: isSmallMobile ? 1.3 : 1.3,
                      color: isHovered ? "#666666" : "#777777",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {certification.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
