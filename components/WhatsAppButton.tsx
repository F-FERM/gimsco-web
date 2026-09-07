"use client";

import React, { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [sparkle, setSparkle] = useState(false);

  const phoneNumber = "9710547965591";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkle(true);

      setTimeout(() => {
        setSparkle(false);
      }, 900);
    }, 2200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",

        width: "58px",
        height: "58px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        borderRadius: "50%",

        background: "#25D366",

        color: "#FFFFFF",

        textDecoration: "none",

        boxShadow: sparkle
          ? "0 0 0 6px rgba(37,211,102,0.12), 0 0 25px rgba(37,211,102,0.65), 0 10px 30px rgba(0,0,0,0.22)"
          : "0 8px 25px rgba(0,0,0,0.22)",

        zIndex: 9999,

        cursor: "pointer",

        transition: "transform 0.25s ease, box-shadow 0.45s ease",

        transform: sparkle ? "scale(1.06)" : "scale(1)",

        WebkitTapHighlightColor: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.12)";
        e.currentTarget.style.boxShadow =
          "0 0 0 7px rgba(37,211,102,0.12), 0 0 28px rgba(37,211,102,0.55), 0 12px 32px rgba(0,0,0,0.28)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.22)";
      }}
    >
      {/* =====================================================
          SPARKLE 1
      ===================================================== */}

      <span
        style={{
          position: "absolute",
          top: "-7px",
          right: "-4px",

          width: "11px",
          height: "11px",

          opacity: sparkle ? 1 : 0,

          transform: sparkle
            ? "scale(1) rotate(0deg)"
            : "scale(0.2) rotate(45deg)",

          transition: "opacity 0.25s ease, transform 0.55s ease",

          pointerEvents: "none",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "4px",
            left: 0,

            width: "11px",
            height: "2px",

            borderRadius: "2px",

            background: "#FFFFFF",
          }}
        />

        <span
          style={{
            position: "absolute",
            top: 0,
            left: "4px",

            width: "2px",
            height: "11px",

            borderRadius: "2px",

            background: "#FFFFFF",
          }}
        />
      </span>

      {/* =====================================================
          SPARKLE 2
      ===================================================== */}

      <span
        style={{
          position: "absolute",
          bottom: "-3px",
          left: "-7px",

          width: "8px",
          height: "8px",

          opacity: sparkle ? 1 : 0,

          transform: sparkle
            ? "scale(1) rotate(0deg)"
            : "scale(0.2) rotate(45deg)",

          transition: "opacity 0.3s ease 0.1s, transform 0.6s ease 0.1s",

          pointerEvents: "none",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "3px",
            left: 0,

            width: "8px",
            height: "1.5px",

            borderRadius: "2px",

            background: "#FFFFFF",
          }}
        />

        <span
          style={{
            position: "absolute",
            top: 0,
            left: "3px",

            width: "1.5px",
            height: "8px",

            borderRadius: "2px",

            background: "#FFFFFF",
          }}
        />
      </span>

      {/* =====================================================
          SPARKLE 3
      ===================================================== */}

      <span
        style={{
          position: "absolute",
          top: "7px",
          left: "-10px",

          width: "6px",
          height: "6px",

          opacity: sparkle ? 0.9 : 0,

          transform: sparkle
            ? "scale(1) rotate(0deg)"
            : "scale(0.1) rotate(45deg)",

          transition: "opacity 0.3s ease 0.2s, transform 0.5s ease 0.2s",

          pointerEvents: "none",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "2.5px",
            left: 0,

            width: "6px",
            height: "1px",

            background: "#FFFFFF",
            borderRadius: "2px",
          }}
        />

        <span
          style={{
            position: "absolute",
            top: 0,
            left: "2.5px",

            width: "1px",
            height: "6px",

            background: "#FFFFFF",
            borderRadius: "2px",
          }}
        />
      </span>

      {/* =====================================================
          WHATSAPP ICON
      ===================================================== */}

      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          position: "relative",
          zIndex: 2,
          display: "block",
        }}
      >
        <path
          d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.47 0 .11 5.36.11 11.95c0 2.1.55 4.15 1.59 5.96L.02 24l6.23-1.63a11.9 11.9 0 0 0 5.81 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.5-8.42ZM12.07 21.83h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.87 9.87 0 0 1-1.51-5.28C2.22 6.48 6.64 2.06 12.07 2.06c2.63 0 5.1 1.03 6.96 2.89a9.8 9.8 0 0 1 2.89 6.96c0 5.43-4.42 9.86-9.85 9.92Z"
          fill="currentColor"
        />

        <path
          d="M17.54 14.43c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
