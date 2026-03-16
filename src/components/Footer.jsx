"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Phone, Mail, MapPin, ArrowRight,
  Facebook, Instagram, Linkedin, Twitter, Youtube,
} from "lucide-react";

const quickLinks = [
  { label: "Who We Are",          href: "/about"   },
  { label: "What We Do",          href: "/services" },
  { label: "Become Our Associate",href: "/partner"  },
  { label: "Articles",            href: "/blogs"    },
  { label: "FAQs",                href: "/faqs"     },
  { label: "Sitemap",             href: "/sitemap"  },
];

const serviceLinks = [
  { label: "Recovery Of Unclaimed Shares & Dividends From IEPF", href: "/services/iepf"        },
  { label: "Search & Tracing Of Lost Shares",                     href: "/services/tracing"     },
  { label: "Demat Of Physical Shares",                            href: "/services/demat"       },
  { label: "IEPF Claims",                                         href: "/services/iepf-claims" },
  { label: "Legal Support",                                       href: "/services/legal"       },
  { label: "NRI Assistance",                                      href: "/services/nri"         },
];

const contactInfo = [
  { icon: Phone,   text: "+91-9315656754",  href: "tel:+919315656754"           },
  { icon: Mail,    text: "info@indiacp.com", href: "mailto:info@indiacp.com"    },
  { icon: MapPin,  text: "info@indiacp.com", href: "mailto:info@indiacp.com"    },
];

const socials = [
  { icon: Facebook,  href: "#", label: "Facebook"  },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin,  href: "#", label: "LinkedIn"  },
  { icon: Twitter,   href: "#", label: "Twitter"   },
  { icon: Youtube,   href: "#", label: "YouTube"   },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative w-full bg-[#080c2e] overflow-hidden">

      {/* ── Main footer content ── */}
      <div className="relative z-10 max-w-[1888px] mx-auto px-16 pt-16 pb-10">

        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">

          {/* Col 1: Logo + description */}
          <div className="flex flex-col gap-5">
            <Link href="/">
              {/* Logo placeholder — swap with your actual logo */}
              <Image
                src="/logo-placeholder.png"
                alt="The Wealth Finder"
                width={120}
                height={48}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="font-[Poppins] font-normal text-[13px] leading-[22px] text-white/60">
              The Wealth Finder, the most reliable investment retrieval advisory
              in India assists in recovering the unclaimed shares and dividends
              of investors.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-[Poppins] font-semibold text-[15px] text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="
                      font-[Poppins] font-normal text-[13px]
                      text-white/60 hover:text-white
                      transition-colors duration-200
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Area of Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-[Poppins] font-semibold text-[15px] text-white">
              Area of Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="
                      font-[Poppins] font-normal text-[13px]
                      text-white/60 hover:text-white
                      transition-colors duration-200
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-[Poppins] font-semibold text-[15px] text-white">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="
                        flex items-center gap-2.5
                        font-[Poppins] font-normal text-[13px]
                        text-white/60 hover:text-white
                        transition-colors duration-200
                      "
                    >
                      <Icon className="w-4 h-4 shrink-0 text-white/50" />
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* ── Bottom bar: Subscribe left | Socials right ── */}
        <div className="flex items-center justify-between gap-8 pt-8 flex-wrap">

          {/* Email subscribe */}
          <div className="flex items-end gap-4">
            <div className="flex flex-col gap-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="
                  bg-transparent
                  font-[Poppins] font-normal text-[13px]
                  text-white placeholder-white/40
                  border-b border-white/30
                  focus:border-white/70 focus:outline-none
                  pb-1.5 w-[260px]
                  transition-colors duration-200
                "
              />
            </div>
            <button
              className="
                inline-flex items-center gap-1.5
                font-[Poppins] font-medium text-[13px] text-white
                hover:text-white/70
                transition-colors duration-200
                pb-1.5 border-b border-transparent
                whitespace-nowrap
              "
            >
              Subscribe <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="
                    w-9 h-9 rounded-full
                    flex items-center justify-center
                    bg-white/10 hover:bg-white/20
                    text-white/70 hover:text-white
                    transition-all duration-200
                  "
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

        </div>

        {/* ── Copyright ── */}
        <div className="pt-6 text-center">
          <p className="font-[Poppins] font-normal text-[12px] text-white/40">
            TWF Advisory Services LLP | © 2022 All Rights Reserved |{" "}
            <Link href="/privacy" className="hover:text-white/70 underline transition-colors duration-200">
              Privacy Policy
            </Link>
          </p>
        </div>

      </div>

      {/* ── Large watermark text at bottom ── */}
      <div
        className="
          relative z-0 w-full
          flex items-end justify-start
          overflow-hidden
          h-[180px] -mt-4
          pointer-events-none select-none
        "
        aria-hidden="true"
      >
        <span
          className="
            font-[Poppins] font-bold
            whitespace-nowrap
            text-[clamp(80px,14vw,180px)] leading-none
            tracking-[-0.02em]
            text-white/[0.05]
            pl-8 pb-2
          "
        >
          THE WEALTH FINDER
        </span>
      </div>

    </footer>
  );
}