"use client";

import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: "1990",
    description:
      "Founded with a clear vision to deliver high-quality maritime services and products meeting the highest industry standards.",
  },
  {
    year: "Regional",
    description:
      "Grew from a local ship chandling company into a trusted regional supplier across the GCC.",
  },
  {
    year: "Global",
    description:
      "Expanded into a globally recognized marine services provider through a network of trusted associates worldwide.",
  },
  {
    year: "Today",
    description:
      "35+ years of maritime experience, serving clients across 15+ countries with 10,000+ products.",
  },
];

export default function CompanyHistory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const hasStartedRef = useRef(false);

  const [progress, setProgress] = useState(0);

  const [viewport, setViewport] = useState({
    width: 1440,
    height: 900,
  });

  const isMobile = viewport.width <= 767;
  const isSmallMobile = viewport.width <= 480;
  const isTablet = viewport.width >= 768 && viewport.width <= 1023;

  /* =====================================================
     VIEWPORT
  ===================================================== */

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

  /* =====================================================
     TIMELINE ANIMATION
     STARTS IMMEDIATELY WHEN SECTION ENTERS VIEWPORT
  ===================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const startTimelineAnimation = () => {
      if (hasStartedRef.current) return;

      hasStartedRef.current = true;

      /*
       * Start from completely empty.
       */
      setProgress(0);

      /*
       * EXACTLY 2 SECONDS
       */
      const duration = 2000;

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;

        const rawProgress = Math.min(elapsed / duration, 1);

        /*
         * Smooth ease-out.
         *
         * 0   -> 0%
         * 0.5 -> ~87.5%
         * 1   -> 100%
         */
        const easedProgress = 1 - Math.pow(1 - rawProgress, 3);

        setProgress(easedProgress);

        if (rawProgress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          /*
           * Guarantee EXACTLY 100%.
           */
          setProgress(1);
          animationFrameRef.current = null;
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    /*
     * Start when even a small portion of the section
     * enters the viewport.
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();

          /*
           * IMPORTANT:
           * Start immediately.
           */
          startTimelineAnimation();
        }
      },
      {
        threshold: 0.05,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  /* =====================================================
     MILESTONE ACTIVE STATE
  ===================================================== */

  const isMilestoneActive = (index: number) => {
    /*
     * 1990     = 0%
     * Regional = 33.33%
     * Global   = 66.66%
     * Today    = 100%
     */
    const milestoneProgress = index / (milestones.length - 1);

    return progress >= milestoneProgress;
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        background: "#FFFFFF",
        boxSizing: "border-box",
        overflow: "hidden",

        padding: isSmallMobile
          ? "65px 18px 70px"
          : isMobile
            ? "75px 24px 80px"
            : isTablet
              ? "90px 40px 95px"
              : "110px 60px 120px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        {/* =================================================
            BADGE
        ================================================= */}

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",

            padding: isSmallMobile ? "7px 14px" : "8px 17px",

            borderRadius: "30px",

            background: "#F1F1FF",
            color: "#6265C4",

            fontSize: isSmallMobile ? "10px" : "12px",

            fontWeight: 500,

            letterSpacing: "0.3px",

            marginBottom: isSmallMobile ? "14px" : "18px",

            fontFamily: "var(--font-poppins), Poppins, sans-serif",
          }}
        >
          Company History
        </div>

        {/* =================================================
            HEADING
        ================================================= */}

        <h2
          style={{
            margin: 0,

            fontSize: isSmallMobile
              ? "32px"
              : isMobile
                ? "38px"
                : isTablet
                  ? "46px"
                  : "56px",

            lineHeight: 1.1,

            fontWeight: 600,

            letterSpacing: "-1.5px",

            color: "#151515",

            fontFamily: "var(--font-poppins), Poppins, sans-serif",
          }}
        >
          A Journey of{" "}
          <span
            style={{
              color: "#6265C4",
            }}
          >
            Experience
          </span>
        </h2>

        {/* =================================================
            TIMELINE
        ================================================= */}

        <div
          style={{
            position: "relative",

            marginTop: isSmallMobile ? "55px" : isMobile ? "65px" : "85px",

            width: "100%",
          }}
        >
          {/* =================================================
              DESKTOP + TABLET
          ================================================= */}

          {!isMobile && (
            <>
              {/* -------------------------------------------
                  GRAY BASE LINE
              ------------------------------------------- */}

              <div
                style={{
                  position: "absolute",

                  left: "0",
                  right: "0",

                  top: "9px",

                  height: "4px",

                  background: "#E2E3EA",

                  borderRadius: "10px",

                  zIndex: 0,
                }}
              />

              {/* -------------------------------------------
                  BLUE ANIMATED LINE
              ------------------------------------------- */}

              <div
                style={{
                  position: "absolute",

                  left: "0",

                  top: "9px",

                  height: "4px",

                  /*
                   * THIS IS THE IMPORTANT PART
                   *
                   * progress goes:
                   *
                   * 0 -> 0%
                   * 0.25 -> 25%
                   * 0.50 -> 50%
                   * 0.75 -> 75%
                   * 1 -> 100%
                   */
                  width: `${progress * 100}%`,

                  background:
                    "linear-gradient(90deg, #34439D 0%, #6265C4 100%)",

                  borderRadius: "10px",

                  boxShadow:
                    progress > 0 ? "0 0 10px rgba(52,67,157,0.35)" : "none",

                  zIndex: 1,

                  /*
                   * requestAnimationFrame controls
                   * the animation, so no CSS transition
                   * is needed here.
                   */
                }}
              />

              {/* -------------------------------------------
                  TIMELINE ITEMS
              ------------------------------------------- */}

              <div
                style={{
                  display: "grid",

                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",

                  gap: isTablet ? "25px" : "40px",

                  position: "relative",

                  width: "100%",

                  zIndex: 2,
                }}
              >
                {milestones.map((milestone, index) => {
                  const active = isMilestoneActive(index);

                  return (
                    <div
                      key={milestone.year}
                      style={{
                        position: "relative",

                        paddingTop: "38px",

                        minWidth: 0,
                      }}
                    >
                      {/* ---------------------------------
                            DOT
                        --------------------------------- */}

                      <div
                        style={{
                          position: "absolute",

                          top: "0",
                          left: "0",

                          width: "20px",
                          height: "20px",

                          borderRadius: "50%",

                          background: active ? "#34439D" : "#E2E3EA",

                          border: "4px solid #FFFFFF",

                          boxSizing: "border-box",

                          boxShadow: active
                            ? "0 0 0 2px #34439D, 0 0 15px rgba(52,67,157,0.35)"
                            : "0 0 0 1px #E2E3EA",

                          transition:
                            "background 0.25s ease, box-shadow 0.25s ease",

                          zIndex: 3,
                        }}
                      />

                      {/* ---------------------------------
                            YEAR
                        --------------------------------- */}

                      <div
                        style={{
                          fontSize: isTablet ? "20px" : "24px",

                          fontWeight: 600,

                          lineHeight: 1.2,

                          color: active ? "#34439D" : "#B8B8C0",

                          marginBottom: "12px",

                          transition: "color 0.3s ease",

                          fontFamily:
                            "var(--font-poppins), Poppins, sans-serif",
                        }}
                      >
                        {milestone.year}
                      </div>

                      {/* ---------------------------------
                            DESCRIPTION
                        --------------------------------- */}

                      <p
                        style={{
                          margin: 0,

                          maxWidth: "260px",

                          fontSize: isTablet ? "12px" : "13px",

                          lineHeight: 1.7,

                          color: active ? "#666666" : "#B8B8C0",

                          transition: "color 0.4s ease",

                          fontFamily:
                            "var(--font-poppins), Poppins, sans-serif",
                        }}
                      >
                        {milestone.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* =================================================
              MOBILE + SMALL MOBILE
          ================================================= */}

          {isMobile && (
            <div
              style={{
                position: "relative",

                paddingLeft: isSmallMobile ? "36px" : "42px",
              }}
            >
              {/* -------------------------------------------
                  GRAY VERTICAL LINE
              ------------------------------------------- */}

              <div
                style={{
                  position: "absolute",

                  left: isSmallMobile ? "8px" : "10px",

                  top: "8px",

                  bottom: "8px",

                  width: "4px",

                  background: "#E2E3EA",

                  borderRadius: "20px",

                  zIndex: 0,
                }}
              />

              {/* -------------------------------------------
                  BLUE VERTICAL ANIMATED LINE
              ------------------------------------------- */}

              <div
                style={{
                  position: "absolute",

                  left: isSmallMobile ? "8px" : "10px",

                  top: "8px",

                  width: "4px",

                  height: `${progress * 100}%`,

                  background:
                    "linear-gradient(180deg, #34439D 0%, #6265C4 100%)",

                  borderRadius: "20px",

                  boxShadow:
                    progress > 0 ? "0 0 10px rgba(52,67,157,0.35)" : "none",

                  zIndex: 1,
                }}
              />

              {/* -------------------------------------------
                  MOBILE ITEMS
              ------------------------------------------- */}

              {milestones.map((milestone, index) => {
                const active = isMilestoneActive(index);

                return (
                  <div
                    key={milestone.year}
                    style={{
                      position: "relative",

                      minHeight:
                        index === milestones.length - 1
                          ? "auto"
                          : isSmallMobile
                            ? "165px"
                            : "175px",

                      paddingBottom:
                        index === milestones.length - 1 ? "0" : "25px",

                      zIndex: 2,
                    }}
                  >
                    {/* ---------------------------------
                          DOT
                      --------------------------------- */}

                    <div
                      style={{
                        position: "absolute",

                        left: isSmallMobile ? "-36px" : "-42px",

                        top: "0",

                        width: "20px",
                        height: "20px",

                        borderRadius: "50%",

                        background: active ? "#34439D" : "#E2E3EA",

                        border: "4px solid #FFFFFF",

                        boxSizing: "border-box",

                        boxShadow: active
                          ? "0 0 0 2px #34439D, 0 0 15px rgba(52,67,157,0.35)"
                          : "0 0 0 1px #E2E3EA",

                        transition:
                          "background 0.25s ease, box-shadow 0.25s ease",

                        zIndex: 3,
                      }}
                    />

                    {/* ---------------------------------
                          YEAR
                      --------------------------------- */}

                    <div
                      style={{
                        fontSize: isSmallMobile ? "21px" : "24px",

                        fontWeight: 600,

                        lineHeight: 1.2,

                        color: active ? "#34439D" : "#B8B8C0",

                        marginBottom: "9px",

                        transition: "color 0.3s ease",

                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      }}
                    >
                      {milestone.year}
                    </div>

                    {/* ---------------------------------
                          DESCRIPTION
                      --------------------------------- */}

                    <p
                      style={{
                        margin: 0,

                        fontSize: isSmallMobile ? "12px" : "13px",

                        lineHeight: 1.7,

                        color: active ? "#666666" : "#B8B8C0",

                        transition: "color 0.4s ease",

                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      }}
                    >
                      {milestone.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
