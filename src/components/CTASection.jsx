"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="relative w-full overflow-hidden py-24 px-8"
      style={{
        background: `
          radial-gradient(ellipse 55% 90% at 0% 100%,   #f5a97a 0%, #f9c8a0 30%, transparent 65%),
          radial-gradient(ellipse 55% 90% at 100% 100%, #6b7bff 0%, #a5b4fc 30%, transparent 65%),
          #ffffff
        `,
      }}
    >
      {/* ── Centered content ── */}
      <div className="relative z-10 max-w-[1888px] mx-auto flex flex-col items-center text-center gap-6">

        {/* Heading */}
        <h2
          className="
            font-[Poppins] font-bold
            text-[clamp(28px,3.5vw,48px)] leading-[1.2] tracking-[-0.02em]
            text-[#020E6A]
            max-w-[600px]
          "
        >
          Unsure If You Have
          <br />Unclaimed Wealth?
        </h2>

        {/* Body */}
        <p
          className="
            font-[Poppins] font-normal
            text-[15px] leading-[24px]
            text-[#4B5563]
            max-w-[460px]
          "
        >
          Let our experts conduct a comprehensive assessment to identify any
          unclaimed shares, dividends, or investments that rightfully belong to you.
        </p>

        {/* CTA Button — filled gradient */}
        <Link
          href="/contact"
          className="
            inline-flex items-center justify-center gap-2
            font-[Poppins] font-medium text-[15px] leading-[24px]
            text-white
            bg-gradient-to-br from-[#03159D] to-[#4A63FD]
            rounded-full px-8 py-3 h-12
            mt-2
            whitespace-nowrap
            transition-opacity duration-200 hover:opacity-85
          "
        >
          Talk to an Expert <ArrowRight className="w-4 h-4" />
        </Link>

      </div>
    </section>
  );
}