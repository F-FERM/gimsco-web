"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const solutions = [
  "Customized Solutions",
  "Reliability",
  "Deep Expertise",
  "Operational Efficiency",
  "Peace of Mind",
];

export default function MaritimeRequirements() {
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

  const sectionPadding = isSmallMobile
    ? "40px 16px"
    : isMobile
      ? "55px 20px"
      : isTablet
        ? "70px 30px"
        : "90px 5vw";

  const headingSize = isSmallMobile
    ? "clamp(30px, 10vw, 38px)"
    : isMobile
      ? "clamp(34px, 10vw, 46px)"
      : isTablet
        ? "clamp(40px, 7vw, 52px)"
        : "clamp(42px, 4.5vw, 68px)";

  const gridColumns = isMobile ? "1fr" : "minmax(0, 0.9fr) minmax(0, 1.1fr)";

  const gridGap = isSmallMobile
    ? "24px"
    : isMobile
      ? "32px"
      : isTablet
        ? "45px"
        : "clamp(30px, 4vw, 70px)";

  const imageAspectRatio = isSmallMobile
    ? "1 / 0.9"
    : isMobile
      ? "1.1 / 1"
      : "1 / 1";

  const imageBorderRadius = isSmallMobile ? "14px" : isMobile ? "18px" : "22px";

  const tagSize = isSmallMobile ? "9px" : isMobile ? "11px" : "12px";

  const tagPadding = isSmallMobile
    ? "5px 10px"
    : isMobile
      ? "7px 13px"
      : "7px 15px";

  return (
    <section
      className="requirements-section"
      style={{ padding: sectionPadding }}
    >
      <div className="requirements-container" style={{ gap: gridGap }}>
        {/* Left Image */}
        <div
          className="requirements-image-wrapper"
          style={{ aspectRatio: imageAspectRatio }}
        >
          <Image
            src="/images/maritime-requirements.jpg"
            alt="Maritime cargo ship"
            fill
            priority={false}
            sizes="(max-width: 480px) 100vw, (max-width: 767px) 100vw, (max-width: 1023px) 100vw, 42vw"
            className="requirements-image"
          />
        </div>

        {/* Right Content */}
        <div className="requirements-content">
          {/* Small Label */}
          <div
            className="requirements-label"
            style={{ fontSize: isSmallMobile ? "8px" : "11px" }}
          >
            <span className="requirements-label-dot" />
            <span>What Makes Us Unique</span>
          </div>

          {/* Heading */}
          <h2
            className="requirements-heading"
            style={{ fontSize: headingSize }}
          >
            Built Around Your
            <br />
            Maritime
            <br />
            <span>Requirements</span>
          </h2>

          {/* Description */}
          <div className="requirements-description">
            <p
              style={{
                fontSize: isSmallMobile
                  ? "10px"
                  : isMobile
                    ? "12px"
                    : "clamp(12px, 0.9vw, 15px)",
              }}
            >
              At GIMSCO, we don&apos;t just serve clients — we build lasting
              relationships. Every vessel and operation is unique, which is why
              we offer customized solutions designed for efficiency,
              cost-effectiveness and peace of mind.
            </p>

            <p
              style={{
                fontSize: isSmallMobile
                  ? "10px"
                  : isMobile
                    ? "12px"
                    : "clamp(12px, 0.9vw, 15px)",
              }}
            >
              Our commitment to quality and service means that once you&apos;ve
              worked with GIMSCO, you&apos;ll never need to look elsewhere.
            </p>
          </div>

          {/* Solution Pills */}
          <div
            className="requirements-tags"
            style={{ gap: isSmallMobile ? "6px" : "8px" }}
          >
            {solutions.map((solution) => (
              <div
                key={solution}
                className="requirements-tag"
                style={{
                  fontSize: tagSize,
                  padding: tagPadding,
                  minHeight: isSmallMobile
                    ? "28px"
                    : isMobile
                      ? "35px"
                      : "37px",
                }}
              >
                {solution}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .requirements-section {
          width: 100%;
          background: #ffffff;
          box-sizing: border-box;
        }

        .requirements-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: ${gridColumns};
          align-items: center;
        }

        /* =========================
           IMAGE
        ========================= */

        .requirements-image-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: ${imageBorderRadius};
          background: #e9edf2;
        }

        .requirements-image {
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s ease;
        }

        .requirements-image-wrapper:hover .requirements-image {
          transform: scale(1.025);
        }

        /* =========================
           CONTENT
        ========================= */

        .requirements-content {
          width: 100%;
          max-width: 720px;
        }

        /* =========================
           LABEL
        ========================= */

        .requirements-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          padding: 4px 11px 4px 7px;

          border-radius: 999px;
          border: 1px solid #d3d4dc;
          background: #eeeef2;

          color: #777777;

          font-family: var(--font-poppins), Poppins, sans-serif;

          font-weight: 400;
          line-height: 1;
        }

        .requirements-label-dot {
          width: 7px;
          height: 7px;
          flex-shrink: 0;

          border-radius: 50%;
          background: #303a96;

          box-shadow: 0 0 0 2px rgba(48, 58, 150, 0.12);
        }

        /* =========================
           HEADING
        ========================= */

        .requirements-heading {
          margin: ${isSmallMobile
            ? "12px 0 16px"
            : isMobile
              ? "18px 0 20px"
              : "18px 0 25px"};

          font-family: var(--font-poppins), Poppins, sans-serif;

          font-weight: 300;
          line-height: ${isSmallMobile ? 1.08 : isMobile ? 1.08 : 1.06};
          letter-spacing: ${isSmallMobile
            ? "-1.2px"
            : isMobile
              ? "-1.5px"
              : "-2.5px"};

          color: #050505;
        }

        .requirements-heading span {
          color: #6264c5;
          font-weight: 500;
        }

        /* =========================
           DESCRIPTION
        ========================= */

        .requirements-description {
          max-width: 680px;

          font-family: var(--font-poppins), Poppins, sans-serif;

          color: #737373;
        }

        .requirements-description p {
          margin: 0 0 ${isSmallMobile ? "10px" : "15px"};

          font-weight: 400;
          line-height: ${isSmallMobile ? 1.4 : isMobile ? 1.45 : 1.45};
        }

        .requirements-description p:last-child {
          margin-bottom: 0;
        }

        /* =========================
           TAGS
        ========================= */

        .requirements-tags {
          display: flex;
          flex-wrap: wrap;

          margin-top: ${isSmallMobile ? "12px" : isMobile ? "16px" : "18px"};
        }

        .requirements-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          border: ${isSmallMobile
            ? "1px solid #303eae"
            : "1.5px solid #303eae"};
          border-radius: 999px;

          box-sizing: border-box;

          font-family: var(--font-poppins), Poppins, sans-serif;

          font-weight: 500;
          line-height: 1;

          color: #3d4baa;
          background: #ffffff;

          transition:
            background-color 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .requirements-tag:hover {
          background: #303eae;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(48, 62, 174, 0.18);
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {
          .requirements-container {
            grid-template-columns: 1fr;
          }

          .requirements-image-wrapper {
            max-width: 620px;
            margin: 0 auto;
          }

          .requirements-content {
            max-width: 700px;
            margin: 0 auto;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .requirements-image-wrapper {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
