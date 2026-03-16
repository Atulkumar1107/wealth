import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Our Services", href: "/our-services" },
  { label: "Your Situation", href: "/your-situation" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about-us" },
  { label: "Partner With Us", href: "/partner-with-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm">
      {/* 
        Figma specs:
          Width  : Fixed 1824px  → max-w-[1824px] mx-auto
          Height : Hug  64px     → h-16
          Layout : Horizontal, space-between
          Padding: 16px top/bottom, 16px left/right outer
      */}
      <div className="max-w-[1824px] mx-auto h-16 flex items-center justify-between px-4">

        {/* ── LEFT: Logo ── */}
        <Link href="/" className="flex-shrink-0">
          {/*
            Replace src with your actual logo asset.
            Width/height here match the placeholder shown in the Figma file.
          */}
          <Image
            src="/logo-placeholder.png"   /* ← swap with real logo path */
            alt="The Wealth Finder"
            width={120}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* ── CENTER: Navigation ── */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-gray-700 hover:text-[#2B2F8F] transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── RIGHT: CTA Buttons ── */}
        <div className="flex items-center gap-3">
          {/* Outlined "Book a Call" */}
          <Link
            href="/book-a-call"
            className="
              inline-flex items-center gap-1.5
              text-[13.5px] font-semibold text-[#2B2F8F]
              border border-[#2B2F8F] rounded-full
              px-5 py-[7px]
              hover:bg-[#2B2F8F] hover:text-white
              transition-colors duration-200
              whitespace-nowrap
            "
          >
            Book a Call
            <span aria-hidden="true">→</span>
          </Link>

          {/* Filled "Free Search" */}
          <Link
            href="/free-search"
            className="
              inline-flex items-center gap-1.5
              text-[13.5px] font-semibold text-white
              bg-[#2B2F8F] rounded-full
              px-5 py-[7px]
              hover:bg-[#1e2270]
              transition-colors duration-200
              whitespace-nowrap
            "
          >
            Free Search
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* ── MOBILE: Hamburger (visible below lg) ── */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#2B2F8F] transition-colors"
          aria-label="Open menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </header>
  );
}