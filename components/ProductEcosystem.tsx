"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    title: "Deck Supplies",
    icon: "/images/icons/deck-supplies.png",
  },
  {
    title: "Engine Supplies",
    icon: "/images/icons/engine-supplies.png",
  },
  {
    title: "Electrical Products",
    icon: "/images/icons/electrical-products.png",
  },
  {
    title: "Safety Equipment",
    icon: "/images/icons/safety-equipment.png",
  },
  {
    title: "Cabin Supplies",
    icon: "/images/icons/cabin-supplies.png",
  },
  {
    title: "Provisions",
    icon: "/images/icons/provisions.png",
  },
  {
    title: "Spare Parts",
    icon: "/images/icons/spare-parts.png",
  },
  {
    title: "Galley Equipment",
    icon: "/images/icons/galley-equipment.png",
  },
  {
    title: "Bonded Stores",
    icon: "/images/icons/bonded-stores.png",
  },
];

export default function ProductEcosystem() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        width: "100%",
        background: "#FFFFFF",
        paddingTop: "clamp(80px, 8vw, 125px)",
        paddingBottom: "clamp(90px, 9vw, 140px)",
        paddingLeft: "24px",
        paddingRight: "24px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        style={{
          width: "100%",
          maxWidth: "1040px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          boxSizing: "border-box",
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
            marginBottom: "20px",
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
              flexShrink: 0,
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
            Product Ecosystem
          </span>
        </div>

        {/* Heading */}

        <h2
          style={{
            margin: 0,
            padding: 0,
            color: "#090909",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "clamp(38px, 4.25vw, 66px)",
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "-2.8px",
          }}
        >
          <span
            style={{
              color: "#6265C4",
              fontWeight: 500,
            }}
          >
            10,000+
          </span>{" "}
          Products.{" "}
          <span
            style={{
              color: "#6265C4",
              fontWeight: 500,
            }}
          >
            250+
          </span>
          <br />
          Leading Brands.
        </h2>
      </div>

      {/* =====================================================
          PRODUCT GRID
      ===================================================== */}

      <div
        style={{
          width: "100%",
          maxWidth: "1040px",
          margin: "clamp(42px, 4.5vw, 60px) auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "14px",
          boxSizing: "border-box",
        }}
      >
        {products.map((product, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={product.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(190px, 15vw, 240px)",
                borderRadius: "15px",

                /* Normal / Hover border */
                border: isHovered ? "1px solid #D7D7D7" : "1px solid #E3E3E3",

                background: "#FFFFFF",

                /*
                  This is the important hover effect
                  matching your screenshot.
                */
                boxShadow: isHovered
                  ? "0 14px 28px rgba(0, 0, 0, 0.16), 0 5px 12px rgba(0, 0, 0, 0.08)"
                  : "0 2px 8px rgba(0, 0, 0, 0.035)",

                /*
                  Very small movement.
                  The card does NOT become larger.
                */
                transform: isHovered ? "translateY(-2px)" : "translateY(0)",

                transition:
                  "box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease",

                overflow: "hidden",
                boxSizing: "border-box",
                cursor: "default",
              }}
            >
              {/* =================================================
                  ICON
              ================================================= */}

              <div
                style={{
                  position: "absolute",
                  top: "clamp(27px, 2.2vw, 40px)",
                  left: "clamp(27px, 2.2vw, 40px)",
                  width: "clamp(45px, 3.6vw, 58px)",
                  height: "clamp(45px, 3.6vw, 58px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxSizing: "border-box",

                  /*
                    Slight icon movement only.
                    No excessive zoom.
                  */
                  transform: isHovered ? "scale(1.04)" : "scale(1)",

                  transition: "transform 0.3s ease",
                }}
              >
                <Image
                  src={product.icon}
                  alt={product.title}
                  width={60}
                  height={60}
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* =================================================
                  TITLE
              ================================================= */}

              <div
                style={{
                  position: "absolute",
                  left: "clamp(27px, 2.2vw, 40px)",
                  right: "20px",
                  bottom: "clamp(27px, 2.2vw, 36px)",

                  color: "#111111",

                  fontFamily: "var(--font-poppins), Poppins, sans-serif",

                  fontSize: "clamp(18px, 1.55vw, 25px)",

                  fontWeight: 500,

                  lineHeight: 1.2,

                  letterSpacing: "-0.4px",

                  transition: "transform 0.3s ease",

                  transform: isHovered ? "translateX(1px)" : "translateX(0)",
                }}
              >
                {product.title}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
