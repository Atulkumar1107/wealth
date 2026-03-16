"use client";

import Link from "next/link";
import { useState } from "react";

/* ── Icon components (simple SVG line icons) ── */
const IconTrend   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
const IconSearch  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const IconFile    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/></svg>;
const IconChart   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>;
const IconGlobe   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const IconScale   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><line x1="12" y1="3" x2="12" y2="21"/><path d="M3 9l9-6 9 6"/><path d="M3 15h6m6 0h6"/><path d="M3 15a6 6 0 0 0 6 6"/><path d="M21 15a6 6 0 0 1-6 6"/></svg>;
const IconBuilding = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="8" y1="12" x2="8" y2="16"/><line x1="16" y1="12" x2="16" y2="16"/></svg>;
const IconShield  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconUsers   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconRefresh = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>;

/* ── Card data ── */
const investorCards = [
  {
    id: "01",
    icon: <IconTrend />,
    title: "Recovery of Unclaimed Shares & Dividends from IEPF",
    desc: "Recover shares/dividends that became unclaimed due to missed communication, address change, lost papers, or family not knowing about investments.",
  },
  {
    id: "02",
    icon: <IconSearch />,
    title: "Search & Tracing of Lost Shares",
    desc: "We trace forgotten/lost investments (often of parents/grandparents) even when you have minimum information—using our database and investigation approach.",
  },
  {
    id: "03",
    icon: <IconFile />,
    title: "IEPF Claim Support",
    desc: "Complete support for claiming shares/dividends back from IEPF, including coordination with Company/RTA and the required verification flow.",
  },
  {
    id: "04",
    icon: <IconChart />,
    title: "DEMAT of Physical Shares",
    desc: "Support for converting physical certificates into demat, including solving common blockers like name/signature mismatch, address change, and joint holder issues.",
  },
  {
    id: "05",
    icon: <IconGlobe />,
    title: "NRI Assistance",
    desc: "Support for NRIs to recover shares/dividends and complete related needs such as PAN support, NRE/NRO + demat setup guidance, and apostille support where required.",
  },
  {
    id: "06",
    icon: <IconScale />,
    title: "Legal Support",
    desc: "Support through legal steps linked to share recovery—like probate, succession certificate, legal heir certificate, and family dispute settlement through mediation support.",
  },
];

const companyCards = [
  {
    id: "01",
    icon: <IconBuilding />,
    title: "Corporate Unclaimed Dividend Management",
    desc: "End-to-end support for companies to manage unclaimed dividend obligations, IEPF transfers, and shareholder communication.",
  },
  {
    id: "02",
    icon: <IconShield />,
    title: "Compliance & Regulatory Support",
    desc: "Assistance with IEPF-1, IEPF-2, IEPF-4, IEPF-7 filings and all MCA/SEBI regulatory compliance related to unclaimed shares.",
  },
  {
    id: "03",
    icon: <IconUsers />,
    title: "Shareholder Tracing & KYC",
    desc: "Locate and update lost shareholders using our proprietary database, helping companies clean their shareholder register.",
  },
  {
    id: "04",
    icon: <IconRefresh />,
    title: "Dividend Reconciliation",
    desc: "Complete reconciliation of paid vs unpaid dividends, ledger cleanup and preparation of IEPF transfer records.",
  },
];

/* ── Service Card component ── */
function ServiceCard({ id, icon, title, desc }) {
  return (
    <div className="relative flex flex-col gap-4 bg-white border border-gray-100 rounded-2xl p-6 overflow-hidden group hover:shadow-md transition-shadow duration-300">

      {/* Ghost number — bottom right */}
      <span
        className="
          absolute -bottom-4 -right-2
          font-[Poppins] font-bold text-[96px] leading-none
          text-gray-100 select-none pointer-events-none
          transition-colors duration-300 group-hover:text-blue-50
        "
      >
        {id}
      </span>

      {/* Icon */}
      <div className="relative z-10 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#03159D]">
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
          relative z-10
          font-[Poppins] font-semibold text-[17px] leading-[1.35]
          text-[#020E6A]
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          relative z-10
          font-[Poppins] font-normal text-[13.5px] leading-[22px]
          text-[#4B5563]
        "
      >
        {desc}
      </p>

      {/* Learn More button */}
      <div className="relative z-10 mt-auto pt-2">
        <Link
          href="/services"
          className="
            inline-flex items-center gap-2
            font-[Poppins] font-medium text-[13.5px]
            text-[#03159D]
            border border-[#03159D] rounded-full
            px-4 py-2
            hover:bg-[#03159D] hover:text-white
            transition-colors duration-200
          "
        >
          Learn More <span aria-hidden="true">→</span>
        </Link>
      </div>

    </div>
  );
}

/* ── Main Section ── */
export default function Unclaim() {
  const [activeTab, setActiveTab] = useState("investors");

  const cards = activeTab === "investors" ? investorCards : companyCards;

  return (
    <section className="w-full bg-[#F5F5F5] py-20 px-16">
      <div className="max-w-[1888px] mx-auto flex gap-16 items-start">

        {/* ── LEFT: Sticky content ── */}
        <div className="sticky top-24 flex flex-col gap-6 w-[320px] shrink-0">

          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#03159D]" />
            <span className="font-[Poppins] font-medium text-[12px] text-[#03159D] tracking-wide whitespace-nowrap">
              Our Services
            </span>
            <span className="w-6 h-[2px] bg-[#03159D]" />
          </div>

          {/* Heading */}
          <h2
            className="
              font-[Poppins] font-bold
              text-[clamp(28px,2.8vw,42px)] leading-[1.2] tracking-[-0.02em]
              text-[#020E6A]
            "
          >
            Unclaimed Wealth Recovery Services
          </h2>

          {/* Description */}
          <p
            className="
              font-[Poppins] font-normal
              text-[14px] leading-[22px]
              text-[#4B5563]
            "
          >
            Comprehensive support to help investors, NRIs, and businesses
            recover unclaimed investments.
          </p>

          {/* CTA */}
          <Link
            href="/services"
            className="
              self-start inline-flex items-center gap-2
              font-[Poppins] font-medium text-[14px]
              text-[#03159D]
              border border-[#03159D] rounded-full
              px-5 py-2.5
              hover:bg-[#03159D] hover:text-white
              transition-colors duration-200
            "
          >
            Learn More <span aria-hidden="true">→</span>
          </Link>

        </div>

        {/* ── RIGHT: Tabs + Cards ── */}
        <div className="flex-1 flex flex-col gap-8 min-w-0">

          {/* Tabs */}
          <div className="flex border-b border-gray-200 w-full">
            {[
              { key: "investors", label: "For Investors & Families" },
              { key: "companies", label: "For Companies" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  w-1/2 text-center
                  font-[Poppins] font-medium text-[14px] px-6 pb-3 pt-1
                  border-b-2 transition-all duration-200 whitespace-nowrap
                  ${
                    activeTab === tab.key
                      ? "border-[#03159D] text-[#03159D]"
                      : "border-transparent text-gray-400 hover:text-[#03159D]"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards grid — 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cards.map((card) => (
              <ServiceCard key={card.id} {...card} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}