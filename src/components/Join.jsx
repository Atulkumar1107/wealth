"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Expand Your Network",
    desc: "Connect with a nationwide ecosystem of professionals and investors",
  },
  {
    title: "Grow Your Practice",
    desc: "Access training, resources, and ongoing support for your cases",
  },
  {
    title: "Build Credibility",
    desc: "Associate with a trusted brand known for compliance and results",
  },
];

export default function Join() {
  return (
    <section className="w-full bg-white overflow-hidden">

      {/* ── TOP: Left / Right split header ── */}
      <div className="relative px-16 pt-16 pb-12">

        {/* Blue radial spotlight — top center */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 75% at 50% 0%, #dce3ff 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[1888px] mx-auto flex items-start justify-between gap-8 flex-wrap">

          {/* Left */}
          <div className="flex flex-col gap-3 max-w-[520px]">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#03159D]" />
              <span className="font-[Poppins] font-medium text-[12px] text-[#03159D] tracking-wide">
                Associate Model
              </span>
              <span className="w-6 h-[2px] bg-[#03159D]" />
            </div>

            {/* Heading */}
            <h2
              className="
                font-[Poppins] font-bold
                text-[clamp(28px,3.5vw,48px)] leading-[1.2] tracking-[-0.02em]
                text-[#020E6A]
              "
            >
              Join Our Associate Network
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 max-w-[320px]">
            <p className="font-[Poppins] font-normal text-[13.5px] leading-[22px] text-[#4B5563]">
              Partner with us to grow your practice and serve investors across India
            </p>
            <Link
              href="/partner"
              className="
                self-start inline-flex items-center gap-2
                font-[Poppins] font-medium text-[13.5px]
                text-[#03159D]
                border border-[#03159D] rounded-full
                px-5 py-2
                hover:bg-[#03159D] hover:text-white
                transition-colors duration-200
              "
            >
              Become an Associate <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

      {/* ── BOTTOM: Full-width bg image + glassmorphism cards ── */}
      <div className="relative w-full h-[520px] overflow-hidden">

        {/* Background image */}
        <Image
          src="https://picsum.photos/seed/handshake/1888/520"
          alt="Associate network"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30 z-[1]" />

        {/* ── 3 Glassmorphism cards — bottom of image ── */}
        <div className="absolute bottom-0 left-0 right-0 z-[2] px-16 pb-0">
          <div
            className="
              max-w-[1888px] mx-auto
              grid grid-cols-3
              divide-x divide-white/20
              backdrop-blur-md
              bg-white/10
              border-t border-white/20
              rounded-t-2xl
              overflow-hidden
            "
          >
            {features.map((feature, i) => (
              <div
                key={i}
                className="
                  flex flex-col items-center justify-center text-center
                  gap-3 px-12 py-10
                  hover:bg-white/10 transition-colors duration-300
                "
              >
                {/* Title */}
                <h3
                  className="
                    font-[Poppins] font-semibold
                    text-[clamp(20px,2.2vw,30px)] leading-[1.2]
                    text-white
                  "
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    font-[Poppins] font-normal
                    text-[13.5px] leading-[22px]
                    text-white/80
                    max-w-[240px]
                  "
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}