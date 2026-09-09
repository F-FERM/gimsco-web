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

const PHONE_NUMBER = "+971 054 796 5591";
const PHONE_LINK = "tel:+971547965591";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /*
   * =========================================================
   * RESPONSIVE NAVBAR
   * =========================================================
   */

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;

      setIsMobile(mobile);

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
   * =========================================================
   * DETECT ACTIVE SECTION WHILE SCROLLING
   * =========================================================
   */

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = isMobile ? 76 : 86;

      /*
       * Point slightly below the navbar.
       * The section closest to this point becomes active.
       */
      const scrollPosition = window.scrollY + navbarHeight + 120;

      let currentSection = "home";

      for (const item of navItems) {
        const section = document.getElementById(item.sectionId);

        if (!section) {
          continue;
        }

        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = item.sectionId;
        }
      }

      setActiveSection(currentSection);

      /*
       * Update URL while scrolling.
       *
       * This does NOT reload the page.
       */
      const currentHash = window.location.hash.replace("#", "");

      if (currentSection && currentSection !== currentHash) {
        window.history.replaceState(null, "", `#${currentSection}`);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  /*
   * =========================================================
   * HANDLE INITIAL URL HASH
   * =========================================================
   */

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (!hash) {
      return;
    }

    const validSection = navItems.some((item) => item.sectionId === hash);

    if (validSection) {
      setActiveSection(hash);

      /*
       * Wait for page sections to render
       * before scrolling to the hash.
       */
      const timer = window.setTimeout(() => {
        const section = document.getElementById(hash);

        if (!section) {
          return;
        }

        const navbarHeight = window.innerWidth <= 768 ? 76 : 86;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
          top: Math.max(0, sectionTop),
          behavior: "smooth",
        });
      }, 100);

      return () => {
        window.clearTimeout(timer);
      };
    }
  }, []);

  /*
   * =========================================================
   * SMOOTH SCROLL TO SECTION
   * =========================================================
   */

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      console.warn(`Section with id="${sectionId}" was not found.`);

      return;
    }

    /*
     * Immediately make clicked item active.
     */
    setActiveSection(sectionId);

    /*
     * Update URL hash without page reload.
     */
    window.history.pushState(null, "", `#${sectionId}`);

    const navbarHeight = isMobile ? 76 : 86;

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: Math.max(0, sectionTop),
      behavior: "smooth",
    });

    // Close mobile menu after navigation
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

  /*
   * Handle logo click.
   */

  const handleLogoClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    scrollToSection("home");
  };

  /*
   * =========================================================
   * RENDER
   * =========================================================
   */

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        left: 0,

        width: "100%",

        height: isMobile ? "76px" : "86px",

        /*
         * Keeps the hero starting at the same
         * position underneath the navbar.
         */
        marginBottom: isMobile ? "-76px" : "-86px",

        zIndex: 1000,

        background: "#FFFFFF2B",

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

          padding: isMobile ? "0 20px" : "0 clamp(24px, 3vw, 32px)",

          display: "flex",

          alignItems: "center",

          justifyContent: "space-between",

          boxSizing: "border-box",

          gap: "20px",
        }}
      >
        {/* ===================================================
            LOGO
        =================================================== */}

        <button
          type="button"
          onClick={handleLogoClick}
          aria-label="Go to home"
          style={{
            display: "flex",

            alignItems: "center",

            justifyContent: "flex-start",

            flexShrink: 0,

            width: "auto",

            padding: 0,

            margin: 0,

            border: "none",

            background: "transparent",

            cursor: "pointer",

            lineHeight: 0,

            WebkitTapHighlightColor: "transparent",
          }}
        >
          <Image
            src="/images/gimsco-logo.png"
            alt="GIMSCO"
            width={210}
            height={70}
            priority
            style={{
              width: isMobile ? "150px" : "clamp(165px, 15vw, 195px)",

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

              flex: 1,

              minWidth: 0,

              gap: "clamp(14px, 2vw, 32px)",

              marginLeft: "auto",

              marginRight: "clamp(20px, 2.5vw, 40px)",
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;

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

                    color: isActive ? "#293C9D" : "#FFFFFF",

                    fontFamily: "var(--font-poppins), Poppins, sans-serif",

                    fontSize: "clamp(11px, 0.9vw, 14px)",

                    fontWeight: isActive ? 600 : 400,

                    lineHeight: 1.2,

                    letterSpacing: "0.1px",

                    whiteSpace: "nowrap",

                    cursor: "pointer",

                    transition: "color 0.2s ease, transform 0.2s ease",

                    WebkitTapHighlightColor: "transparent",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.transform = "translateY(-1px)";

                    event.currentTarget.style.color = "#293C9D";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.transform = "translateY(0)";

                    event.currentTarget.style.color = isActive
                      ? "#293C9D"
                      : "#FFFFFF";
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        )}

        {/* ===================================================
            DESKTOP CALL BUTTON
        =================================================== */}

        {!isMobile && (
          <a
            href={PHONE_LINK}
            aria-label={`Call GIMSCO at ${PHONE_NUMBER}`}
            style={{
              width: "clamp(175px, 14vw, 205px)",

              height: "46px",

              flexShrink: 0,

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              gap: "8px",

              border: "none",

              borderRadius: "30px",

              background: "#293C9D",

              color: "#FFFFFF",

              fontFamily: "var(--font-poppins), Poppins, sans-serif",

              fontSize: "clamp(11px, 0.85vw, 13px)",

              fontWeight: 600,

              lineHeight: 1,

              letterSpacing: "0.1px",

              textDecoration: "none",

              cursor: "pointer",

              boxSizing: "border-box",

              transition:
                "background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",

              whiteSpace: "nowrap",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.background = "#222F83";

              event.currentTarget.style.transform = "translateY(-1px)";

              event.currentTarget.style.boxShadow =
                "0 8px 20px rgba(41,60,157,0.28)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.background = "#293C9D";

              event.currentTarget.style.transform = "translateY(0)";

              event.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Phone Icon */}
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{
                flexShrink: 0,
              }}
            >
              <path
                d="M22 16.92V20.92C22 21.47 21.55 21.92 21 21.92C10.51 21.92 2 13.41 2 2.92C2 2.37 2.45 1.92 3 1.92H7C7.55 1.92 8 2.37 8 2.92C8 4.17 8.2 5.37 8.58 6.5C8.67 6.78 8.6 7.1 8.39 7.31L6.67 9.03C8.18 12.01 10.91 14.74 13.89 16.25L15.61 14.53C15.82 14.32 16.14 14.25 16.42 14.34C17.55 14.72 18.75 14.92 20 14.92C20.55 14.92 21 15.37 21 15.92L22 16.92Z"
                fill="currentColor"
              />
            </svg>

            <span>{PHONE_NUMBER}</span>
          </a>
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

              background: "rgba(255,255,255,0.55)",

              display: "flex",

              flexDirection: "column",

              alignItems: "center",

              justifyContent: "center",

              gap: "5px",

              cursor: "pointer",

              flexShrink: 0,

              boxSizing: "border-box",

              boxShadow: "0 4px 15px rgba(0,0,0,0.06)",

              WebkitTapHighlightColor: "transparent",
            }}
          >
            {/* Top Line */}
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

            {/* Middle Line */}
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

            {/* Bottom Line */}
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

            background: "rgba(255,255,255,0.96)",

            backdropFilter: "blur(16px)",

            WebkitBackdropFilter: "blur(16px)",

            borderTop: "1px solid rgba(255,255,255,0.5)",

            boxShadow: "0 12px 30px rgba(0,0,0,0.10)",

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
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={(event) => handleNavClick(event, item.sectionId)}
                  style={{
                    display: "flex",

                    alignItems: "center",

                    justifyContent: "space-between",

                    width: "100%",

                    minHeight: "50px",

                    padding: "0 4px",

                    border: "none",

                    borderBottom: "1px solid rgba(0,0,0,0.07)",

                    background: "transparent",

                    color: isActive ? "#293C9D" : "#222222",

                    textAlign: "left",

                    fontFamily: "var(--font-poppins), Poppins, sans-serif",

                    fontSize: "15px",

                    fontWeight: isActive ? 600 : 400,

                    cursor: "pointer",

                    boxSizing: "border-box",

                    transition: "color 0.2s ease, padding-left 0.2s ease",

                    WebkitTapHighlightColor: "transparent",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = "#293C9D";

                    event.currentTarget.style.paddingLeft = "8px";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = isActive
                      ? "#293C9D"
                      : "#222222";

                    event.currentTarget.style.paddingLeft = "4px";
                  }}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* =================================================
                MOBILE CALL BUTTON
            ================================================= */}

            <a
              href={PHONE_LINK}
              aria-label={`Call GIMSCO at ${PHONE_NUMBER}`}
              style={{
                width: "100%",

                minHeight: "50px",

                marginTop: "18px",

                padding: "0 18px",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                gap: "9px",

                border: "none",

                borderRadius: "28px",

                background: "#293C9D",

                color: "#FFFFFF",

                fontFamily: "var(--font-poppins), Poppins, sans-serif",

                fontSize: "14px",

                fontWeight: 600,

                letterSpacing: "0.1px",

                textDecoration: "none",

                cursor: "pointer",

                boxSizing: "border-box",

                transition: "background 0.25s ease, transform 0.25s ease",

                whiteSpace: "nowrap",
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
              {/* Phone Icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                }}
              >
                <path
                  d="M22 16.92V20.92C22 21.47 21.55 21.92 21 21.92C10.51 21.92 2 13.41 2 2.92C2 2.37 2.45 1.92 3 1.92H7C7.55 1.92 8 2.37 8 2.92C8 4.17 8.2 5.37 8.58 6.5C8.67 6.78 8.6 7.1 8.39 7.31L6.67 9.03C8.18 12.01 10.91 14.74 13.89 16.25L15.61 14.53C15.82 14.32 16.14 14.25 16.42 14.34C17.55 14.72 18.75 14.92 20 14.92C20.55 14.92 21 15.37 21 15.92L22 16.92Z"
                  fill="currentColor"
                />
              </svg>

              <span>{PHONE_NUMBER}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
