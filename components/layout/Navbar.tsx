"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Home",
    sectionId: "home",
  },
  {
    label: "About",
    sectionId: "about",
  },
  {
    label: "Services",
    sectionId: "services",
  },
  {
    label: "Global Network",
    sectionId: "global-network",
  },
  {
    label: "Certifications",
    sectionId: "certifications",
  },
  {
    label: "Contact",
    sectionId: "contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;

      setIsMobile(mobile);

      // Automatically close mobile menu when switching to desktop
      if (!mobile) {
        setMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * Smooth scroll to a section without changing the URL.
   */
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      console.warn(`Section with id="${sectionId}" was not found.`);
      return;
    }

    const navbarHeight = isMobile ? 76 : 86;

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: Math.max(0, sectionTop),
      behavior: "smooth",
    });

    // Close mobile menu
    setMenuOpen(false);
  };

  /*
   * Handle navbar item click.
   */
  const handleNavClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    sectionId: string,
  ) => {
    event.preventDefault();

    scrollToSection(sectionId);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        height: isMobile ? "76px" : "86px",
        marginBottom: isMobile ? "-76px" : "-86px",
        zIndex: 1000,

        background: "rgba(255, 255, 255, 0.17)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",

        borderBottom: "1px solid rgba(255, 255, 255, 0.18)",

        boxSizing: "border-box",

        transition: "height 0.25s ease, margin-bottom 0.25s ease",
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

          padding: isMobile ? "0 20px" : "0 32px",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          boxSizing: "border-box",
        }}
      >
        {/* ===================================================
            LOGO
        =================================================== */}

        <button
          type="button"
          onClick={(event) => handleNavClick(event, "home")}
          aria-label="Go to home"
          style={{
            display: "flex",
            alignItems: "center",

            flexShrink: 0,

            padding: 0,
            margin: 0,

            border: "none",
            background: "transparent",

            cursor: "pointer",

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
              width: isMobile ? "150px" : "195px",
              height: "auto",

              display: "block",

              objectFit: "contain",
            }}
          />
        </button>

        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        {!isMobile && (
          <nav
            aria-label="Main navigation"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              gap: "clamp(18px, 2.2vw, 34px)",

              marginLeft: "auto",
              marginRight: "clamp(24px, 3.5vw, 58px)",
            }}
          >
            {navItems.map((item, index) => {
              const isHome = index === 0;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={(event) => handleNavClick(event, item.sectionId)}
                  style={{
                    position: "relative",

                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",

                    minHeight: "44px",

                    padding: "0",

                    border: "none",
                    background: "transparent",

                    color: isHome ? "#293C9D" : "#FFFFFF",

                    fontFamily: "var(--font-poppins), Poppins, sans-serif",

                    fontSize: "clamp(12px, 0.9vw, 14px)",

                    fontWeight: isHome ? 600 : 400,

                    lineHeight: 1.2,

                    letterSpacing: "0.1px",

                    whiteSpace: "nowrap",

                    cursor: "pointer",

                    transition: "color 0.2s ease, opacity 0.2s ease",
                  }}
                  onMouseEnter={(event) => {
                    if (!isHome) {
                      event.currentTarget.style.color = "#293C9D";
                    }
                  }}
                  onMouseLeave={(event) => {
                    if (!isHome) {
                      event.currentTarget.style.color = "#FFFFFF";
                    }
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        )}

        {/* ===================================================
            DESKTOP QUOTE BUTTON
        =================================================== */}

        {!isMobile && (
          <button
            type="button"
            onClick={(event) => handleNavClick(event, "contact")}
            style={{
              width: "185px",
              height: "46px",

              flexShrink: 0,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              border: "none",
              borderRadius: "30px",

              background: "#293C9D",
              color: "#FFFFFF",

              fontFamily: "var(--font-poppins), Poppins, sans-serif",

              fontSize: "12px",
              fontWeight: 600,

              lineHeight: 1,
              letterSpacing: "0.25px",

              cursor: "pointer",

              boxSizing: "border-box",

              transition: "background 0.25s ease, transform 0.25s ease",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.background = "#222F83";
              event.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.background = "#293C9D";
              event.currentTarget.style.transform = "translateY(0)";
            }}
          >
            REQUEST A QUOTE
          </button>
        )}

        {/* ===================================================
            MOBILE MENU BUTTON
        =================================================== */}

        {isMobile && (
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((previous) => !previous)}
            style={{
              width: "46px",
              height: "46px",

              padding: "8px",

              border: "none",
              borderRadius: "10px",

              background: "rgba(255,255,255,0.45)",

              display: "flex",
              flexDirection: "column",

              alignItems: "center",
              justifyContent: "center",

              gap: "5px",

              cursor: "pointer",

              flexShrink: 0,

              boxSizing: "border-box",
            }}
          >
            {/* Top line */}
            <span
              style={{
                display: "block",

                width: "24px",
                height: "2px",

                background: "#293C9D",

                borderRadius: "2px",

                transform: menuOpen
                  ? "translateY(7px) rotate(45deg)"
                  : "translateY(0) rotate(0)",

                transition: "transform 0.25s ease",
              }}
            />

            {/* Middle line */}
            <span
              style={{
                display: "block",

                width: "24px",
                height: "2px",

                background: "#293C9D",

                borderRadius: "2px",

                opacity: menuOpen ? 0 : 1,

                transform: menuOpen ? "scaleX(0)" : "scaleX(1)",

                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
            />

            {/* Bottom line */}
            <span
              style={{
                display: "block",

                width: "24px",
                height: "2px",

                background: "#293C9D",

                borderRadius: "2px",

                transform: menuOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "translateY(0) rotate(0)",

                transition: "transform 0.25s ease",
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
            position: "absolute",

            top: "76px",
            left: 0,

            width: "100%",

            background: "rgba(255,255,255,0.94)",

            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",

            borderTop: "1px solid rgba(255,255,255,0.4)",

            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",

            padding: "10px 20px 20px",

            boxSizing: "border-box",
          }}
        >
          <nav
            aria-label="Mobile navigation"
            style={{
              width: "100%",

              display: "flex",
              flexDirection: "column",
            }}
          >
            {navItems.map((item, index) => {
              const isHome = index === 0;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={(event) => handleNavClick(event, item.sectionId)}
                  style={{
                    display: "flex",
                    alignItems: "center",

                    width: "100%",
                    minHeight: "50px",

                    padding: "0 4px",

                    border: "none",
                    borderBottom: "1px solid rgba(0,0,0,0.07)",

                    background: "transparent",

                    color: isHome ? "#293C9D" : "#222222",

                    textAlign: "left",

                    fontFamily: "var(--font-poppins), Poppins, sans-serif",

                    fontSize: "15px",

                    fontWeight: isHome ? 600 : 400,

                    cursor: "pointer",

                    boxSizing: "border-box",
                  }}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Mobile Quote Button */}
            <button
              type="button"
              onClick={(event) => handleNavClick(event, "contact")}
              style={{
                width: "100%",
                height: "48px",

                marginTop: "18px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                border: "none",
                borderRadius: "28px",

                background: "#293C9D",
                color: "#FFFFFF",

                fontFamily: "var(--font-poppins), Poppins, sans-serif",

                fontSize: "12px",
                fontWeight: 600,

                letterSpacing: "0.25px",

                cursor: "pointer",
              }}
            >
              REQUEST A QUOTE
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
