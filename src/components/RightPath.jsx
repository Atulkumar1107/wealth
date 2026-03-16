"use client";

import Link from "next/link";

const paths = [
  {
    title: "I'm an NRI",
    desc: "Recover shares/dividends from outside India with a remote-friendly process. Start with route clarity and a simple checklist.",
    href: "/situation/nri",
  },
  {
    title: "I'm a Legal Heir / Family Member",
    desc: "Handling recovery after a death case? Understand transmission, IEPF, and ownership steps in the right sequence.",
    href: "/situation/legal-heir",
  },
  {
    title: "I'm an Individual Investor",
    desc: "Lost track of old shares or dividends? We'll help you trace, claim, and dematerialise them with end-to-end support.",
    href: "/situation/individual",
  },
  {
    title: "I Represent a Company",
    desc: "Managing unclaimed dividends, IEPF compliance, or shareholder tracing at a corporate level? We've got you covered.",
    href: "/situation/company",
  },
];

export default function RightPath() {
  return (
    <section className="w-full bg-white py-20 px-16">
      <div className="max-w-[1888px] mx-auto flex flex-col items-center gap-16">

        {/* ── Top: Badge + Heading ── */}
        <div className="flex flex-col items-center gap-5 text-center">

          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#03159D]" />
            <span className="font-[Poppins] font-medium text-[12px] text-[#03159D] tracking-wide">
              Your Situation
            </span>
            <span className="w-6 h-[2px] bg-[#03159D]" />
          </div>

          {/* Heading */}
          <h2
            className="
              font-[Poppins] font-bold
              text-[clamp(32px,4vw,52px)] leading-[1.2] tracking-[-0.02em]
              text-[#020E6A] text-center
            "
          >
            Find the Right
            <br />Path for You
          </h2>

        </div>

        {/* ── Cards Grid: 2 columns ── */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {paths.map((path) => (
            <PathCard key={path.title} {...path} />
          ))}
        </div>

      </div>
    </section>
  );
}

function PathCard({ title, desc, href }) {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-2xl border border-gray-100
        bg-white
        p-8 flex flex-col gap-5
        min-h-[220px]
        group
      "
    >
      {/* ── Blue-purple gradient: bottom-right ── */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 100% 100%, #c7d0ff 0%, #e8ebff 40%, transparent 70%)",
        }}
      />

      {/* ── Dot grid pattern ── */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #a0aaf8 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col gap-4 flex-1">

        {/* Title */}
        <h3
          className="
            font-[Poppins] font-semibold
            text-[20px] leading-[1.3]
            text-[#020E6A]
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            font-[Poppins] font-normal
            text-[13.5px] leading-[22px]
            text-[#4B5563]
          "
        >
          {desc}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Explore More button */}
        <div className="mt-2">
          <Link
            href={href}
            className="
              inline-flex items-center gap-2
              font-[Poppins] font-medium text-[13.5px]
              text-[#03159D]
              border border-[#03159D] rounded-full
              px-5 py-2
              hover:bg-[#03159D] hover:text-white
              transition-colors duration-200
            "
          >
            Explore More <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </div>
  );
}