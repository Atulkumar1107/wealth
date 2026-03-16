"use client";

const stats = [
  { value: "100 +", label: "Associates Network:" },
  { value: "50 +",  label: "Team Size:"           },
  { value: "350 +", label: "Clients Handling"     },
  { value: "₹500Cr +", label: "Value of Shares Recovered" },
];

export default function Impact() {
  return (
    <section className="w-full bg-[#F5F5F5] py-16 px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-12">

        {/* ── Section Title ── */}
        <h2
          className="
            font-[Poppins] font-bold
            text-[28px] leading-[1.3] tracking-[-0.01em]
            text-[#020E6A] text-center
          "
        >
          Our Impact &amp; Reach
        </h2>

        {/* ── Stats Row ── */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                group
                relative
                flex flex-col items-start gap-2
                bg-[#F5F5F5] rounded-xl
                px-6 py-5
                border-b-2 border-transparent
                hover:border-[#03159D]
                transition-all duration-300 ease-in-out
                cursor-default
              "
            >
              {/* ── Stat Number ── */}
              <span
                className="
                  font-[Poppins] font-semibold
                  text-[clamp(32px,3.5vw,52px)] leading-[1.1]
                  text-[#020E6A]
                "
              >
                {stat.value}
              </span>

              {/* ── Label ── */}
              <span
                className="
                  font-[Poppins] font-normal
                  text-[13px] leading-[20px] tracking-[0]
                  text-[#6B7280]
                "
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}