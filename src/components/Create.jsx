"use client";

import Image from "next/image";
import Link from "next/link";

export default function StartSearch() {
  return (
    <section className="w-full bg-white py-16 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-12">

        {/* ── LEFT: Content ── */}
        <div className="flex flex-col items-start gap-5 max-w-[460px] w-full">

          {/* Start Here label */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-[#03159D]" />
            <span className="font-[Poppins] font-medium text-[13px] text-[#03159D] tracking-wide">
              Start Here
            </span>
            <span className="w-8 h-[2px] bg-[#03159D]" />
          </div>

          {/* Heading */}
          <h2
            className="
              font-[Poppins] font-bold
              text-[clamp(28px,3vw,40px)] leading-[1.2] tracking-[-0.02em]
              text-[#020E6A]
            "
          >
            Start With a Free Search
          </h2>

          {/* Body */}
          <p
            className="
              font-[Poppins] font-normal
              text-[15px] leading-[24px]
              text-[#4B5563]
            "
          >
            Share basic details like investor name, father's name, and address.
            We'll help identify the likely route and next steps.
          </p>

          {/* CTA Button */}
          <Link
            href="/search"
            className="
              inline-flex items-center gap-[10px]
              font-[Poppins] font-medium text-[15px] leading-[24px]
              text-white
              bg-gradient-to-br from-[#03159D] to-[#4A63FD]
              rounded-full px-6 py-3 h-12
              whitespace-nowrap
              transition-opacity duration-200 hover:opacity-85
            "
          >
            Find Your Wealth <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* ── RIGHT: 4 half-circles ── */}
        <div className="flex items-center justify-end flex-1">
          {/*
            4 D-shaped half circles side by side, slightly overlapping
            Each is a full circle clipped to show only the left half (D shape)
            1 & 2 → blue gradients
            3 & 4 → real images clipped into D shape
          */}
          <div className="flex items-center -space-x-10">

            {/* Half-circle 1 — solid blue */}
            <div
              className="
                relative shrink-0
                w-[200px] h-[280px]
                rounded-r-full overflow-hidden
              "
              style={{
                background: "linear-gradient(160deg, #3b4fd8 0%, #4A63FD 100%)",
                clipPath: "inset(0 0 0 50%)",
                marginLeft: 0,
              }}
            >
              {/* Full circle div, clipped to right half = D shape */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(160deg, #3b4fd8 0%, #4A63FD 100%)",
                }}
              />
            </div>

            {/* Half-circle 2 — lighter blue gradient */}
            <div
              className="relative shrink-0 w-[200px] h-[280px]"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(160deg, #6b7bff 0%, #a5b4fc 100%)",
                }}
              />
            </div>

            {/* Half-circle 3 — real photo */}
            <div
              className="relative shrink-0 w-[200px] h-[280px]"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            >
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/search1/400/560"
                  alt="Wealth search illustration"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>

            {/* Half-circle 4 — real photo (partially cropped by viewport edge) */}
            <div
              className="relative shrink-0 w-[200px] h-[280px]"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            >
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/search2/400/560"
                  alt="Financial documents"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}