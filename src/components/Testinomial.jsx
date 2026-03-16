"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "After my father's passing, I found unclaimed shares worth ₹45 lakhs. Living in the US, I thought it would be impossible,",
    highlight: "but The Wealth Finder managed everything remotely—documentation, liaising with authorities, and obtaining the legal heir certificate. I received the full amount in my NRE account within 6 months, thanks to their exceptional professionalism and transparency.",
    name: "Rajesh Kumar",
    role: "NRI, Software Engineer",
    rating: 4.5,
    avatar: "https://picsum.photos/seed/avatar1/40/40",
  },
  {
    id: 2,
    text: "I had forgotten about some old mutual fund investments from 15 years ago.",
    highlight: "The Wealth Finder not only traced them but also recovered ₹12 lakhs that had been transferred to IEPF. The success-based fee model gave me confidence — I paid only after recovery. Highly recommended for anyone with dormant investments.",
    name: "Priya Sharma",
    role: "Investor",
    rating: 4.5,
    avatar: "https://picsum.photos/seed/avatar2/40/40",
  },
  {
    id: 3,
    text: "Our family business faced compliance issues and was struck off,",
    highlight: "but The Wealth Finder stepped in. They expertly managed the ROC process and restored our company in just 4 months.",
    name: "Sunita Reddy",
    role: "Business Owner",
    rating: 4.5,
    avatar: "https://picsum.photos/seed/avatar3/40/40",
  },
  {
    id: 4,
    text: "The Wealth Finder team traced my mother's old share certificates",
    highlight: "from the 1990s, navigating name changes and mergers to recover ₹28 lakhs.",
    name: "Dr. Amit Patel",
    role: "NRI, Medical Practitioner",
    rating: 4.5,
    avatar: "https://picsum.photos/seed/avatar4/40/40",
  },
  {
    id: 5,
    text: "After retirement, I consolidated my investments and the Wealth Finder recovered",
    highlight: "₹8.5 lakhs in unclaimed dividends from 6 forgotten companies.",
    name: "Kavita Desai",
    role: "Retired Government Officer",
    rating: 4.5,
    avatar: "https://picsum.photos/seed/avatar5/40/40",
  },
  {
    id: 6,
    text: "We needed a shell company for our venture, and The Wealth Finder managed due diligence and documentation expertly.",
    highlight: "They addressed potential issues we hadn't even considered.",
    name: "Vikram Singh",
    role: "Entrepreneur",
    rating: 4.5,
    avatar: "https://picsum.photos/seed/avatar6/40/40",
  },
];

const photos = [
  "https://picsum.photos/seed/p1/400/500",
  "https://picsum.photos/seed/p2/400/500",
  "https://picsum.photos/seed/p3/400/500",
  "https://picsum.photos/seed/p4/400/500",
  "https://picsum.photos/seed/p5/400/500",
  "https://picsum.photos/seed/p6/400/500",
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      <Star className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]" />
      <span className="font-[Poppins] font-medium text-[12px] text-[#4B5563]">
        {rating}
      </span>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col justify-between gap-4 h-full">
      {/* Review text */}
      <p className="font-[Poppins] font-normal text-[13.5px] leading-[22px] text-[#374151]">
        {testimonial.text}{" "}
        <span className="text-[#03159D] font-medium">{testimonial.highlight}</span>
      </p>

      {/* Footer: avatar + name + rating */}
      <div className="flex items-center justify-between gap-3 mt-auto">
        <div className="flex items-center gap-2">
          <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="36px"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-[Poppins] font-semibold text-[13px] text-[#020E6A]">
              {testimonial.name}
            </span>
            <span className="font-[Poppins] font-normal text-[11px] text-[#6B7280]">
              {testimonial.role}
            </span>
          </div>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>
    </div>
  );
}

function PhotoCard({ src, alt }) {
  return (
    <div className="relative rounded-2xl overflow-hidden h-full min-h-[240px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 25vw"
      />
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-20 px-16">
      <div className="max-w-[1888px] mx-auto flex flex-col items-center gap-12">

        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#03159D]" />
            <span className="font-[Poppins] font-medium text-[12px] text-[#03159D] tracking-wide">
              Client Success Stories
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
            What Clients Say
          </h2>
        </div>

        {/* ── Bento Grid ── */}
        <div className="w-full grid grid-cols-4 gap-4 auto-rows-[260px]">

          {/* ── Row 1: text | photo | text | photo ── */}
          <TestimonialCard testimonial={testimonials[0]} />
          <PhotoCard src={photos[0]} alt="Client 1" />
          <TestimonialCard testimonial={testimonials[1]} />
          <PhotoCard src={photos[1]} alt="Client 2" />

          {/* ── Row 2: text | photo | photo | text ── */}
          <TestimonialCard testimonial={testimonials[2]} />
          <PhotoCard src={photos[2]} alt="Client 3" />
          <PhotoCard src={photos[3]} alt="Client 4" />
          <TestimonialCard testimonial={testimonials[3]} />

          {/* ── Row 3: photo | text | text | photo ── */}
          <PhotoCard src={photos[4]} alt="Client 5" />
          <TestimonialCard testimonial={testimonials[4]} />
          <TestimonialCard testimonial={testimonials[5]} />
          <PhotoCard src={photos[5]} alt="Client 6" />

        </div>

      </div>
    </section>
  );
}