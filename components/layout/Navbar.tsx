"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Global Network",
    href: "/global-network",
  },
  {
    label: "Certifications",
    href: "/certifications",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const navbarHeight = isMobile ? 76 : 86;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        height: `${navbarHeight}px`,
        marginBottom: `-${navbarHeight}px`,
        zIndex: 1000,
        background: "#FFFFFF2B",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.16)",
        boxSizing: "border-box",
      }}
    >
      {/* =====================================================
          NAVBAR CONTAINER
      ===================================================== */}

      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          height: "100%",
          margin: "0 auto",
          padding: isMobile ? "0 24px" : "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* ===================================================
            LOGO
        =================================================== */}

        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            textDecoration: "none",
            lineHeight: 0,
          }}
        >
          <Image
            src="/images/gimsco-logo.png"
            alt="GIMSCO"
            width={210}
            height={70}
            priority
            style={{
              width: isMobile ? "155px" : "195px",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        {!isMobile && (
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(22px, 2.3vw, 36px)",
              marginLeft: "auto",
              marginRight: "clamp(30px, 4vw, 64px)",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  color: item.label === "Home" ? "#293C9D" : "#FFFFFF",
                  textDecoration: "none",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: "clamp(12px, 0.9vw, 14px)",
                  fontWeight: item.label === "Home" ? 600 : 400,
                  lineHeight: 1.2,
                  whiteSpace: "nowrap",
                  letterSpacing: "0.1px",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {/* ===================================================
            QUOTE BUTTON
        =================================================== */}

        {!isMobile && (
          <Link
            href="/contact"
            style={{
              width: "185px",
              height: "46px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "30px",
              background: "#293C9D",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "0.25px",
              boxSizing: "border-box",
            }}
          >
            REQUEST A QUOTE
          </Link>
        )}

        {/* ===================================================
            MOBILE MENU BUTTON
        =================================================== */}

        {isMobile && (
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: "46px",
              height: "46px",
              padding: "8px",
              border: "none",
              borderRadius: "8px",
              background: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                display: "block",
                width: "25px",
                height: "2px",
                background: "#293C9D",
                borderRadius: "2px",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
                transition: "all 0.25s ease",
              }}
            />

            <span
              style={{
                display: "block",
                width: "25px",
                height: "2px",
                background: "#293C9D",
                borderRadius: "2px",
                opacity: menuOpen ? 0 : 1,
                transition: "all 0.25s ease",
              }}
            />

            <span
              style={{
                display: "block",
                width: "25px",
                height: "2px",
                background: "#293C9D",
                borderRadius: "2px",
                transform: menuOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
                transition: "all 0.25s ease",
              }}
            />
          </button>
        )}
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      {isMobile && menuOpen && (
        <div
          style={{
            width: "100%",
            background: "#FFFFFFE8",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            padding: "12px 24px 24px",
            boxSizing: "border-box",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                minHeight: "52px",
                color: item.label === "Home" ? "#293C9D" : "#222222",
                textDecoration: "none",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: "15px",
                fontWeight: item.label === "Home" ? 600 : 400,
                borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
              }}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              width: "100%",
              height: "48px",
              marginTop: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "28px",
              background: "#293C9D",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.25px",
            }}
          >
            REQUEST A QUOTE
          </Link>
        </div>
      )}
    </header>
  );
}
