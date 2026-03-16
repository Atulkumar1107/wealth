"use client";

import Link from "next/link";
import { FileSearch, FileEdit, CalendarClock, ShieldCheck } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: FileSearch,
    title: "Assessment & Route Finalization",
    desc: "We identify whether it's IEPF, transmission, demat, tracing, or a combination.",
  },
  {
    id: "02",
    icon: FileEdit,
    title: "Checklist & Document Planning",
    desc: "You receive a clear case-specific checklist. We prepare formats and drafts wherever required.",
  },
  {
    id: "03",
    icon: CalendarClock,
    title: "Submission + follow-ups",
    desc: "We coordinate with Company / RTA / IEPF and track progress.",
  },
  {
    id: "04",
    icon: ShieldCheck,
    title: "Resolution & Closure",
    desc: "Recovery is completed with confirmation and closure communication.",
  },
];

export default function How() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-20 px-16">

      {/* ── Blue radial spotlight — top center ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 0%, #dce3ff 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1888px] mx-auto flex flex-col items-center gap-16">

        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-4 text-center">

          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#03159D]" />
            <span className="font-[Poppins] font-medium text-[12px] text-[#03159D] tracking-wide">
              Work Process
            </span>
            <span className="w-6 h-[2px] bg-[#03159D]" />
          </div>

          {/* Heading */}
          <h2
            className="
              font-[Poppins] font-bold
              text-[clamp(32px,4vw,52px)] leading-[1.2] tracking-[-0.02em]
              text-[#020E6A]
            "
          >
            How We Work
          </h2>

          {/* Subtitle */}
          <p className="font-[Poppins] font-normal text-[15px] leading-[24px] text-[#4B5563]">
            A simple, transparent process from assessment to recovery
          </p>

        </div>

        {/* ── Steps Row ── */}
        <div className="w-full flex items-start justify-center">

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.id} className="flex items-start flex-1">

                {/* ── Step ── */}
                <div className="flex flex-col items-center text-center gap-4 flex-1">

                  {/* Icon card */}
                  <div className="relative">
                    {/* Card */}
                    <div
                      className="w-[120px] h-[120px] rounded-2xl flex items-center justify-center shadow-sm"
                      style={{
                        background: "linear-gradient(145deg, #f0f3ff 0%, #e4e9ff 100%)",
                      }}
                    >
                      {/* Inner gradient icon circle */}
                      <div
                        className="w-[72px] h-[72px] rounded-xl flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(145deg, #03159D 0%, #4A63FD 100%)",
                        }}
                      >
                        <Icon className="w-8 h-8 text-white" strokeWidth={1.6} />
                      </div>
                    </div>

                    {/* Number badge — bottom center */}
                    <div
                      className="
                        absolute -bottom-3 left-1/2 -translate-x-1/2
                        w-7 h-7 rounded-full
                        flex items-center justify-center
                        font-[Poppins] font-semibold text-[11px] text-white
                        shadow-md
                      "
                      style={{
                        background:
                          "linear-gradient(135deg, #03159D 0%, #4A63FD 100%)",
                      }}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      font-[Poppins] font-semibold
                      text-[15px] leading-[1.35]
                      text-[#020E6A]
                      max-w-[160px]
                      mt-3
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      font-[Poppins] font-normal
                      text-[13px] leading-[20px]
                      text-[#4B5563]
                      max-w-[180px]
                    "
                  >
                    {step.desc}
                  </p>

                </div>

                {/* ── Dashed connector + blue dot (between steps) ── */}
                {!isLast && (
                  <div className="flex items-center mt-[52px] w-full flex-1 max-w-[80px]">
                    {/* Left dashes */}
                    <div
                      className="flex-1 border-t-2 border-dashed border-gray-300"
                    />
                    {/* Blue dot */}
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4A63FD] shrink-0 mx-1" />
                    {/* Right dashes */}
                    <div
                      className="flex-1 border-t-2 border-dashed border-gray-300"
                    />
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}