"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        /* Multi-stop radial bg — Tailwind can't do this */
        .hero-bg {
          background:
            radial-gradient(ellipse 65% 70% at -5%  100%, #4d5df5 0%, #6b7bff 25%, transparent 65%),
            radial-gradient(ellipse 65% 70% at 105% 100%, #4d5df5 0%, #6b7bff 25%, transparent 65%),
            radial-gradient(ellipse 80% 80% at 50%  30%,  #ffffff 0%, #f0f2ff 60%, transparent 85%),
            #eef0ff;
        }

        /* Gradient border for outline button */
        .btn-outline {
          background-image: linear-gradient(135deg, #03159D 0%, #4A63FD 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .btn-outline::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          padding: 1.5px;
          background: linear-gradient(135deg, #03159D 0%, #4A63FD 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* GD watermark — bottom-center absolute */
        .hero-union {
          left: 50%;
          transform: translateX(-50%);
          width: min(889.86px, 88%);
          aspect-ratio: 889.86 / 486;
        }
      `}</style>

      {/* ── Outer: Neutral/100 (#F5F5F5) page bg ── */}
      <div className="w-full bg-[#F5F5F5] p-8">

        {/* ── Section 02
              min-h-screen so blue corners are visible on first load
              rounded-[32px] | overflow-hidden | relative
              flex col | items-center | pt-24 px-8 pb-[260px]
        ── */}
        <div
          className="
            relative w-full max-w-[1888px] mx-auto
            min-h-screen rounded-[32px] overflow-hidden
            flex flex-col items-center
            pt-24 px-8 pb-[260px]
          "
        >

          {/* ── Radial bg layer ── */}
          <div className="hero-bg absolute inset-0 rounded-[32px] z-0" />

          {/* ── Text + CTA ── */}
          <div className="relative z-10 flex flex-col items-center text-center w-full">

            {/* H1 — Poppins 600 | 72px | lh 1.25 | -2% tracking | #020E6A */}
            <h1
              className="
                max-w-[1300px] w-full mb-12
                font-[Poppins] font-semibold
                text-[clamp(36px,5.5vw,65px)] leading-[1.25] tracking-[-0.02em]
                text-[#020E6A]
              "
            >
              Recover Unclaimed Shares &amp; Dividends
              <br />— With End-to-End Support
            </h1>

            {/* Body — Poppins 400 | 18px | lh 28px | #020E6A */}
            <p
              className="
                max-w-[590px] w-full mb-10
                font-[Poppins] font-normal
                text-[18px] leading-[28px]
                text-[#020E6A] text-center
              "
            >
              Many families still have shares and dividends they don't even know
              about—especially from the physical share era. Start with a quick
              check and we'll guide the right route:{" "}
              <span className="font-semibold">
                IEPF, transmission, demat, or tracing.
              </span>
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">

              {/* Primary — gradient fill */}
              <Link
                href="/search"
                className="
                  inline-flex items-center justify-center gap-[10px]
                  font-[Poppins] font-medium text-[16px] leading-[24px]
                  text-white
                  bg-gradient-to-br from-[#03159D] to-[#4A63FD]
                  rounded-full px-6 py-3 h-12 min-w-[200px]
                  whitespace-nowrap
                  transition-opacity duration-200 hover:opacity-[0.85]
                "
              >
                Search Your Wealth <span aria-hidden="true">→</span>
              </Link>

              {/* Outline — gradient border + gradient text */}
              <Link
                href="/book-a-call"
                className="
                  btn-outline
                  relative inline-flex items-center justify-center gap-[10px]
                  font-[Poppins] font-medium text-[16px] leading-[24px]
                  rounded-full px-6 py-3 h-12
                  whitespace-nowrap
                  transition-opacity duration-200 hover:opacity-80
                "
              >
                Book a Call <span aria-hidden="true">→</span>
              </Link>

            </div>
          </div>

          {/* ── GD Union Watermark — absolute bottom-center ── */}
          <div
            className="hero-union absolute bottom-12 z-[2] pointer-events-none"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 890 486"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="pillFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0.90" />
                  <stop offset="55%"  stopColor="#FFFFFF" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.00" />
                </linearGradient>
                <linearGradient id="barFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.00" />
                </linearGradient>
                <clipPath id="lClip">
                  <rect x="0" y="0" width="435" height="486" />
                </clipPath>
                <clipPath id="rClip">
                  <rect x="455" y="0" width="435" height="486" />
                </clipPath>
              </defs>

              {/* Left pill — G shape */}
              <g clipPath="url(#lClip)">
                <rect x="14" y="10" width="406" height="406" rx="203"
                  fill="none" stroke="url(#pillFade)" strokeWidth="64" />
                <rect x="214" y="176" width="206" height="64" rx="32"
                  fill="url(#barFade)" />
              </g>

              {/* Right pill — D shape */}
              <g clipPath="url(#rClip)">
                <rect x="470" y="10" width="406" height="406" rx="203"
                  fill="none" stroke="url(#pillFade)" strokeWidth="64" />
              </g>
            </svg>
          </div>

        </div>
      </div>
    </>
  );
}