"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is IEPF and why were my shares transferred to it?",
    answer:
      "The Investor Education and Protection Fund (IEPF) is a government fund managed by the Ministry of Corporate Affairs. Shares and dividends that remain unclaimed for seven consecutive years are transferred to IEPF. This includes unpaid dividends, matured deposits, and shares where dividends have not been claimed.",
  },
  {
    id: 2,
    question: "How long does the IEPF claim recovery process take?",
    answer:
      "The IEPF claim process typically takes 3 to 6 months from the date of filing, depending on the company's RTA responsiveness and completeness of documents. Our team actively follows up to ensure the fastest possible turnaround.",
  },
  {
    id: 3,
    question: "Can NRIs recover their unclaimed wealth without visiting India?",
    answer:
      "Yes, NRIs can recover their unclaimed shares and dividends entirely remotely. We handle all documentation, coordination with authorities, and legal heir processes on your behalf. An apostille-verified power of attorney may be required in some cases.",
  },
  {
    id: 4,
    question: "What documents are required for wealth recovery claims?",
    answer:
      "Documents typically required include: PAN card, Aadhaar card, cancelled cheque (NRE/NRO for NRIs), demat account details, original share certificates (if available), death certificate and legal heir documents (for transmission cases), and a duly filled IEPF-5 form.",
  },
  {
    id: 5,
    question: "How much does your service cost?",
    answer:
      "We operate on a success-based fee model — you pay only after the recovery is completed. There are no upfront charges. Our fee is a percentage of the recovered amount, agreed upon before we begin the process.",
  },
  {
    id: 6,
    question: "Can I track the status of my claim?",
    answer:
      "Yes. Once your case is registered with us, you receive regular updates at every stage — from document submission to RTA coordination and final credit. You can also reach out to your dedicated case manager at any time.",
  },
  {
    id: 7,
    question: "What if I don't have the original share certificates?",
    answer:
      "No problem. We can initiate a duplicate share certificate process before or alongside the IEPF recovery. Our team coordinates with the company's RTA to obtain duplicate certificates through an affidavit and indemnity bond process.",
  },
  {
    id: 8,
    question: "Is the recovery process legal and safe?",
    answer:
      "Absolutely. All recovery processes we handle are governed by MCA/SEBI regulations and follow the official IEPF-5 claim procedure. We are fully compliant and work transparently with companies, RTAs, and government authorities.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className="
        border border-gray-200 rounded-xl overflow-hidden
        transition-all duration-200
      "
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        className="
          w-full flex items-center justify-between gap-4
          px-6 py-5 text-left
          bg-white hover:bg-gray-50
          transition-colors duration-200
        "
      >
        <span
          className="
            font-[Poppins] font-medium text-[15px] leading-[24px]
            text-[#020E6A]
          "
        >
          {faq.question}
        </span>

        {/* Plus / Minus icon */}
        <span className="shrink-0 text-[#03159D]">
          {isOpen
            ? <Minus className="w-5 h-5" />
            : <Plus className="w-5 h-5" />
          }
        </span>
      </button>

      {/* Answer — animated expand */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 pb-5 bg-white">
          <p
            className="
              font-[Poppins] font-normal text-[13.5px] leading-[22px]
              text-[#4B5563]
            "
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(1); // first open by default

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section className="w-full bg-white py-20 px-16">
      <div className="max-w-[1888px] mx-auto flex gap-16 items-start">

        {/* ── LEFT: Sticky content ── */}
        <div className="sticky top-24 flex flex-col gap-5 w-[320px] shrink-0">

          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#03159D]" />
            <span className="font-[Poppins] font-medium text-[12px] text-[#03159D] tracking-wide">
              FAQ
            </span>
            <span className="w-6 h-[2px] bg-[#03159D]" />
          </div>

          {/* Heading */}
          <h2
            className="
              font-[Poppins] font-bold
              text-[clamp(28px,3vw,42px)] leading-[1.2] tracking-[-0.02em]
              text-[#020E6A]
            "
          >
            Frequently Asked
            <br />Questions
          </h2>

          {/* Subtitle */}
          <p
            className="
              font-[Poppins] font-normal
              text-[13.5px] leading-[22px]
              text-[#4B5563]
            "
          >
            Get answers to common questions about wealth recovery and IEPF claims.
          </p>

        </div>

        {/* ── RIGHT: Accordion ── */}
        <div className="flex-1 flex flex-col gap-3 min-w-0">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}