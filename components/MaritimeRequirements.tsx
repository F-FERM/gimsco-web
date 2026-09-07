"use client";

import React from "react";
import Image from "next/image";

const solutions = [
  "Customized Solutions",
  "Reliability",
  "Deep Expertise",
  "Operational Efficiency",
  "Peace of Mind",
];

export default function MaritimeRequirements() {
  return (
    <section className="requirements-section">
      <div className="requirements-container">
        {/* Left Image */}
        <div className="requirements-image-wrapper">
          <Image
            src="/images/maritime-requirements.jpg"
            alt="Maritime cargo ship"
            fill
            priority={false}
            sizes="(max-width: 900px) 100vw, 42vw"
            className="requirements-image"
          />
        </div>

        {/* Right Content */}
        <div className="requirements-content">
          {/* Small Label */}
          <div className="requirements-label">
            <span className="requirements-label-dot" />
            <span>What Makes Us Unique</span>
          </div>

          {/* Heading */}
          <h2 className="requirements-heading">
            Built Around Your
            <br />
            Maritime
            <br />
            <span>Requirements</span>
          </h2>

          {/* Description */}
          <div className="requirements-description">
            <p>
              At GIMSCO, we don&apos;t just serve clients — we build lasting
              relationships. Every vessel and operation is unique, which is why
              we offer customized solutions designed for efficiency,
              cost-effectiveness and peace of mind.
            </p>

            <p>
              Our commitment to quality and service means that once you&apos;ve
              worked with GIMSCO, you&apos;ll never need to look elsewhere.
            </p>
          </div>

          {/* Solution Pills */}
          <div className="requirements-tags">
            {solutions.map((solution) => (
              <div key={solution} className="requirements-tag">
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
          padding: 90px 5vw;
          box-sizing: border-box;
        }

        .requirements-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          align-items: center;
          gap: clamp(30px, 4vw, 70px);
        }

        /* =========================
           IMAGE
        ========================= */

        .requirements-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 22px;
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

          font-size: 11px;
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
          margin: 18px 0 25px;

          font-family: var(--font-poppins), Poppins, sans-serif;

          font-size: clamp(42px, 4.5vw, 68px);
          font-weight: 300;
          line-height: 1.06;
          letter-spacing: -2.5px;

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
          margin: 0 0 15px;

          font-size: clamp(12px, 0.9vw, 15px);
          font-weight: 400;
          line-height: 1.45;
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
          gap: 10px;

          margin-top: 18px;
        }

        .requirements-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-height: 37px;
          padding: 7px 15px;

          border: 1.5px solid #303eae;
          border-radius: 999px;

          box-sizing: border-box;

          font-family: var(--font-poppins), Poppins, sans-serif;

          font-size: 12px;
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
          .requirements-section {
            padding: 70px 30px;
          }

          .requirements-container {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .requirements-image-wrapper {
            max-width: 620px;
            margin: 0 auto;
            aspect-ratio: 1.1 / 1;
          }

          .requirements-content {
            max-width: 700px;
            margin: 0 auto;
          }

          .requirements-heading {
            font-size: clamp(40px, 7vw, 58px);
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .requirements-section {
            padding: 55px 20px;
          }

          .requirements-container {
            gap: 32px;
          }

          .requirements-image-wrapper {
            aspect-ratio: 1 / 1;
            border-radius: 18px;
          }

          .requirements-label {
            font-size: 10px;
          }

          .requirements-heading {
            margin-top: 15px;
            margin-bottom: 20px;

            font-size: clamp(34px, 10vw, 46px);
            line-height: 1.08;
            letter-spacing: -1.5px;
          }

          .requirements-description p {
            font-size: 12px;
            line-height: 1.5;
          }

          .requirements-tags {
            gap: 8px;
            margin-top: 16px;
          }

          .requirements-tag {
            min-height: 35px;
            padding: 7px 13px;
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}
