"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Understanding IEPF: A Comprehensive Guide for Investors",
    date: "Jan 15, 2026",
    image: "https://picsum.photos/seed/blog1/400/560",
    href: "/blogs/iepf-guide",
    featured: true,
  },
  {
    id: 2,
    title: "How to Recover Lost Shares in 5 Simple Steps",
    date: "Jan 10, 2026",
    image: "https://picsum.photos/seed/blog2/400/560",
    href: "/blogs/recover-lost-shares",
    featured: false,
  },
  {
    id: 3,
    title: "NRI Guide to Reclaiming Unclaimed Dividends from India",
    date: "Jan 5, 2026",
    image: "https://picsum.photos/seed/blog3/400/560",
    href: "/blogs/nri-dividend-guide",
    featured: false,
  },
  {
    id: 4,
    title: "Step-by-Step: Dematerialising Physical Share Certificates",
    date: "Dec 28, 2025",
    image: "https://picsum.photos/seed/blog4/400/560",
    href: "/blogs/demat-physical-shares",
    featured: false,
  },
  {
    id: 5,
    title: "Legal Heir Certificate: Everything You Need to Know",
    date: "Dec 20, 2025",
    image: "https://picsum.photos/seed/blog5/400/560",
    href: "/blogs/legal-heir-certificate",
    featured: false,
  },
  {
    id: 6,
    title: "Transmission of Shares After Death: A Complete Walkthrough",
    date: "Dec 12, 2025",
    image: "https://picsum.photos/seed/blog6/400/560",
    href: "/blogs/transmission-shares",
    featured: false,
  },
];

export default function Blogs() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#F5F5F5] py-20 px-16 overflow-hidden">
      <div className="max-w-[1888px] mx-auto flex flex-col gap-10">

        {/* ── Top row: heading left, description right ── */}
        <div className="flex items-start justify-between gap-8 flex-wrap">

          {/* Left */}
          <div className="flex flex-col gap-3 max-w-[520px]">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#03159D]" />
              <span className="font-[Poppins] font-medium text-[12px] text-[#03159D] tracking-wide">
                Blogs
              </span>
              <span className="w-6 h-[2px] bg-[#03159D]" />
            </div>

            {/* Heading */}
            <h2
              className="
                font-[Poppins] font-bold
                text-[clamp(26px,3vw,42px)] leading-[1.2] tracking-[-0.02em]
                text-[#020E6A]
              "
            >
              Insights on Unclaimed Wealth &amp;
              <br />Investor Awareness
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 max-w-[320px]">
            <p className="font-[Poppins] font-normal text-[13.5px] leading-[22px] text-[#4B5563]">
              Expert articles, updates, and guidance to help you understand
              unclaimed investments, IEPF processes, and recovery best practices.
            </p>
            <Link
              href="/blogs"
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
              Explore More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* ── Scrollable cards row + nav arrows ── */}
        <div className="relative">

          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10
              w-10 h-10 rounded-full bg-white shadow-md border border-gray-100
              flex items-center justify-center
              text-[#03159D] hover:bg-[#03159D] hover:text-white
              transition-colors duration-200
            "
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10
              w-10 h-10 rounded-full bg-white shadow-md border border-gray-100
              flex items-center justify-center
              text-[#03159D] hover:bg-[#03159D] hover:text-white
              transition-colors duration-200
            "
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="
              flex gap-4
              overflow-x-auto scroll-smooth
              pb-2
              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            "
          >
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function BlogCard({ blog }) {
  return (
    <Link
      href={blog.href}
      className="
        relative shrink-0
        w-[300px] h-[420px]
        rounded-2xl overflow-hidden
        group cursor-pointer
      "
    >
      {/* Image */}
      <Image
        src={blog.image}
        alt={blog.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="300px"
      />

      {/* Dark overlay always slightly present, stronger on featured */}
      <div
        className={`
          absolute inset-0 rounded-2xl transition-opacity duration-300
          ${blog.featured
            ? "bg-gradient-to-t from-black/80 via-black/30 to-transparent"
            : "bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/50"
          }
        `}
      />

      {/* Top-right arrow button */}
      <div
        className="
          absolute top-3 right-3 z-10
          w-9 h-9 rounded-full bg-white/90
          flex items-center justify-center
          shadow-sm
          group-hover:bg-white transition-colors duration-200
        "
      >
        <ArrowUpRight className="w-4 h-4 text-[#03159D]" />
      </div>

      {/* Featured card: title + date + Learn More */}
      {blog.featured && (
        <div className="absolute bottom-0 left-0 right-0 z-10 p-5 flex flex-col gap-2">
          <h3
            className="
              font-[Poppins] font-semibold text-[15px] leading-[22px]
              text-white
            "
          >
            {blog.title}
          </h3>
          <p className="font-[Poppins] font-normal text-[11px] text-white/70">
            {blog.date}
          </p>
          <div
            className="
              mt-1 inline-flex items-center justify-between
              bg-white/15 backdrop-blur-sm border border-white/30
              rounded-full px-4 py-2
              font-[Poppins] font-medium text-[12px] text-white
            "
          >
            Learn More
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </div>
        </div>
      )}
    </Link>
  );
}