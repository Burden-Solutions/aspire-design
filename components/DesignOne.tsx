"use client";

import { useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

interface Product {
  id: number;
  name: string;
  finish: string;
  price: string;
  badge?: string;
  stars: number;
  colors: string[];
}

interface Category {
  name: string;
  gradient: string;
}

interface Finish {
  name: string;
  gradient: string;
}

interface Testimonial {
  name: string;
  location: string;
  text: string;
  stars: number;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const products: Product[] = [
  {
    id: 1,
    name: "Within 750mm Double Towel Rail",
    finish: "Matte Black",
    price: "$119.90",
    badge: "Bestseller",
    stars: 5,
    colors: ["#1a1612", "#c8b89c", "#d8d4cc"],
  },
  {
    id: 2,
    name: "Within 600mm Double Towel Rail",
    finish: "Matte Black",
    price: "$100.10",
    stars: 5,
    colors: ["#1a1612", "#c8b89c"],
  },
  {
    id: 3,
    name: "Within Robe Hook",
    finish: "Matte Black",
    price: "$33.00",
    badge: "New",
    stars: 4,
    colors: ["#1a1612", "#d0c8c0", "#c8b89c"],
  },
  {
    id: 4,
    name: "Within Toilet Roll Holder",
    finish: "Matte Black",
    price: "$49.00",
    stars: 5,
    colors: ["#1a1612", "#d8d4cc"],
  },
];

const categories: Category[] = [
  { name: "Bathroom Tapware", gradient: "from-stone-300 to-stone-400" },
  { name: "Kitchen Sinks & Taps", gradient: "from-teal-200 to-teal-400" },
  { name: "Laundry Tapware", gradient: "from-amber-200 to-amber-300" },
  { name: "Basin Mixers", gradient: "from-zinc-300 to-zinc-400" },
  { name: "Accessories", gradient: "from-stone-200 to-stone-300" },
];

const finishes: Finish[] = [
  { name: "Matte Black", gradient: "from-zinc-800 to-zinc-950" },
  { name: "Brushed Brass", gradient: "from-amber-300 to-amber-500" },
  { name: "Brushed Nickel", gradient: "from-slate-300 to-slate-400" },
  { name: "Chrome", gradient: "from-slate-100 to-slate-300" },
];

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Sydney, NSW",
    text: "Fitted our entire renovation through Aspire and could not be happier. The matte black range is stunning and the quality is exceptional. Delivery was fast and stress-free.",
    stars: 5,
  },
  {
    name: "James T.",
    location: "Melbourne, VIC",
    text: "Used Aspire for our kitchen and both bathrooms. The brushed brass finishes look incredible and we've had so many compliments. Highly recommend to anyone building or renovating.",
    stars: 5,
  },
  {
    name: "Claire R.",
    location: "Brisbane, QLD",
    text: "The design team helped us pick the right tapware for our ensuite. Incredible customer service and the products are exactly as described. Five stars all round.",
    stars: 5,
  },
];

const navLinks = ["Bathroom", "Kitchen", "Laundry", "Finishes", "Design Help", "Stockists"];

// ── Sub-components ────────────────────────────────────────────────────────────

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-3 h-3 ${i <= count ? "fill-amber-500" : "fill-stone-200"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ImagePlaceholder({ label }: { label?: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-stone-200">
      <svg
        className="w-10 h-10 text-stone-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      {label && (
        <span className="text-xs tracking-widest uppercase text-stone-400">
          {label}
        </span>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function DesignOne() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [activeFinish, setActiveFinish] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif", background: "#FDFAF5", color: "#2C2820" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.75s ease both; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-250 { animation-delay: 0.25s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-550 { animation-delay: 0.55s; }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-inner { display: inline-block; animation: ticker 26s linear infinite; white-space: nowrap; }
        .product-add-btn { transform: translateY(100%); transition: transform 0.3s ease; }
        .product-card:hover .product-add-btn { transform: translateY(0); }
        .product-wish { opacity: 0; transition: opacity 0.25s; }
        .product-card:hover .product-wish { opacity: 1; }
        .product-img { transition: transform 0.55s ease; }
        .product-card:hover .product-img { transform: scale(1.05); }
        .cat-img { transition: transform 0.55s ease; }
        .cat-card:hover .cat-img { transform: scale(1.06); }
        .cat-arrow { transition: transform 0.3s; }
        .cat-card:hover .cat-arrow { transform: translateX(4px); }
        .finish-img { transition: transform 0.55s ease; }
        .finish-card:hover .finish-img { transform: scale(1.04); }
        .finish-arrow { transition: transform 0.3s; }
        .finish-card:hover .finish-arrow { transform: translateX(4px); }
        .t-card { transition: border-color 0.3s, box-shadow 0.3s; }
        .t-card:hover { border-color: #E8600A !important; box-shadow: 4px 4px 0 #E8600A; }
        .nav-link { position: relative; }
        .nav-link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1px; background: #E8600A; transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }
        .btn-primary:hover { background: #E8600A !important; }
        .btn-dark:hover { background: #E8600A !important; }
      `}</style>

      {/* ── ANNOUNCEMENT BAR ── */}
      <div className="overflow-hidden" style={{ background: "#E8600A" }}>
        <div
          className="ticker-inner py-2.5 text-xs font-medium text-white"
          style={{ letterSpacing: "0.06em" }}
        >
          {Array(6)
            .fill(
              "  FREE SHIPPING on orders over $1,000 (excluding bulky items)  ·  Australia Wide  ·  Premium Tapware for Bathroom, Kitchen & Laundry  ·  "
            )
            .join("")}
        </div>
      </div>

      {/* ── NAV ── */}
      <nav
        className="sticky top-0 z-49 flex items-center justify-between px-16 border-b"
        style={{
          height: 68,
          background: "#FDFAF5",
          borderColor: "#E8DDD0",
        }}
      >
        {/* Logo */}
        <a href="#" className="font-display text-2xl font-light uppercase tracking-[0.14em] no-underline" style={{ color: "#1A1612" }}>
          <span style={{ color: "#E8600A" }}>A</span>SPIRE
        </a>

        {/* Links */}
        <ul className="flex gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="nav-link text-xs font-medium uppercase no-underline transition-colors duration-200"
                style={{ letterSpacing: "0.08em", color: "#2C2820" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E8600A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#2C2820")}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-1 transition-opacity hover:opacity-70" style={{ background: "none", border: "none", cursor: "pointer" }}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#2C2820" strokeWidth={1.5}>
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button className="p-1 transition-opacity hover:opacity-70" style={{ background: "none", border: "none", cursor: "pointer" }}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#2C2820" strokeWidth={1.5}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <button
            className="btn-dark text-xs font-medium uppercase px-5 py-2.5 transition-colors duration-200"
            style={{
              letterSpacing: "0.08em",
              background: "#2C2820",
              color: "#FDFAF5",
              border: "none",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onClick={() => setCartOpen(!cartOpen)}
          >
            Cart (0)
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="grid" style={{ gridTemplateColumns: "1fr 1fr", minHeight: "88vh" }}>
        {/* Left — copy */}
        <div
          className="flex flex-col justify-center relative px-20 py-20"
          style={{ background: "#F5F0E8" }}
        >
          {/* Eyebrow */}
          <div
            className="animate-fade-up delay-100 flex items-center gap-3 mb-7 text-xs font-medium uppercase"
            style={{ letterSpacing: "0.2em", color: "#E8600A" }}
          >
            <span className="w-8 h-px block" style={{ background: "#E8600A" }} />
            New Collection 2026
          </div>

          {/* Headline */}
          <h1
            className="font-display animate-fade-up delay-250 mb-7"
            style={{ fontSize: "clamp(52px, 5.5vw, 80px)", fontWeight: 300, lineHeight: 1.07, color: "#1A1612" }}
          >
            Your bathroom<br />
            should feel<br />
            like{" "}
            <em className="italic" style={{ color: "#C96B3A" }}>
              home.
            </em>
          </h1>

          {/* Sub */}
          <p
            className="animate-fade-up delay-400 mb-12 font-light leading-relaxed"
            style={{ fontSize: 15, color: "#6B5F54", maxWidth: 380 }}
          >
            Premium tapware, fixtures, and accessories for bathrooms, kitchens,
            and laundries — curated for quality, delivered to your door.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-550 flex items-center gap-6">
            <button
              className="btn-primary text-xs font-medium uppercase px-9 py-4 transition-colors duration-200"
              style={{
                letterSpacing: "0.1em",
                background: "#2C2820",
                color: "#F5F0E8",
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Shop Now
            </button>
            <a
              href="#"
              className="text-sm no-underline pb-0.5 transition-colors duration-200"
              style={{ color: "#2C2820", borderBottom: "1px solid #2C2820" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#E8600A";
                e.currentTarget.style.borderBottomColor = "#E8600A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#2C2820";
                e.currentTarget.style.borderBottomColor = "#2C2820";
              }}
            >
              View Collections →
            </a>
          </div>

          {/* Stats */}
          <div className="absolute bottom-10 left-20 flex gap-10">
            {[
              ["12k+", "Happy Customers"],
              ["4.9★", "Google Rating"],
              ["AUS", "Free Ship $1k+"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-display" style={{ fontSize: 30, fontWeight: 400, color: "#1A1612", lineHeight: 1 }}>
                  {num}
                </div>
                <div
                  className="uppercase mt-1"
                  style={{ fontSize: 10, letterSpacing: "0.15em", color: "#A89D94" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="relative overflow-hidden" style={{ background: "#E8DDD0" }}>
          <ImagePlaceholder label="Lifestyle Photography" />

          {/* Floating product card */}
          <div
            className="absolute bottom-10 right-10 bg-white p-5"
            style={{ maxWidth: 200, boxShadow: "0 8px 32px rgba(44,40,32,0.12)" }}
          >
            <div
              className="uppercase mb-1.5"
              style={{ fontSize: 10, letterSpacing: "0.15em", color: "#A89D94" }}
            >
              Featured
            </div>
            <div
              className="font-display leading-snug mb-2"
              style={{ fontSize: 15, fontWeight: 400, color: "#1A1612" }}
            >
              Within Matte Black Towel Rail 750mm
            </div>
            <div style={{ fontSize: 14, fontWeight: 500, color: "#E8600A" }}>$119.90</div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="px-20 pt-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display" style={{ fontSize: 38, fontWeight: 300, color: "#1A1612" }}>
            Shop by Room
          </h2>
          <a
            href="#"
            className="text-xs uppercase no-underline pb-0.5 transition-colors duration-200"
            style={{ letterSpacing: "0.1em", color: "#6B5F54", borderBottom: "1px solid #A89D94" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#E8600A";
              e.currentTarget.style.borderBottomColor = "#E8600A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#6B5F54";
              e.currentTarget.style.borderBottomColor = "#A89D94";
            }}
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="cat-card relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: "3/4" }}
            >
              <div className={`cat-img w-full h-full bg-gradient-to-b ${cat.gradient}`} />
              <div
                className="absolute inset-0 flex flex-col justify-end p-5"
                style={{ background: "linear-gradient(to top, rgba(28,22,18,0.55) 0%, transparent 55%)" }}
              >
                <div className="text-white mb-1" style={{ fontSize: 14, fontWeight: 400 }}>
                  {cat.name}
                </div>
                <div className="cat-arrow text-white" style={{ fontSize: 18, opacity: 0.75 }}>
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="px-20 py-24">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display" style={{ fontSize: 38, fontWeight: 300, color: "#1A1612" }}>
            Top Selling Products
          </h2>
          <a
            href="#"
            className="text-xs uppercase no-underline pb-0.5 transition-colors duration-200"
            style={{ letterSpacing: "0.1em", color: "#6B5F54", borderBottom: "1px solid #A89D94" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#E8600A";
              e.currentTarget.style.borderBottomColor = "#E8600A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#6B5F54";
              e.currentTarget.style.borderBottomColor = "#A89D94";
            }}
          >
            See All →
          </a>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="product-card cursor-pointer"
              onMouseEnter={() => setHoveredProduct(p.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden mb-4"
                style={{ aspectRatio: "1", background: "#F0EBE3" }}
              >
                <div className="product-img w-full h-full">
                  <ImagePlaceholder />
                </div>

                {/* Badge */}
                {p.badge && (
                  <div
                    className="absolute top-3.5 left-3.5 text-white text-xs font-medium uppercase px-2.5 py-1"
                    style={{ letterSpacing: "0.1em", background: "#E8600A" }}
                  >
                    {p.badge}
                  </div>
                )}

                {/* Wishlist */}
                <button
                  className="product-wish absolute top-3.5 right-3.5 w-8 h-8 flex items-center justify-center bg-white"
                  style={{ border: "none", cursor: "pointer" }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#2C2820" strokeWidth={1.5}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>

                {/* Add to cart */}
                <button
                  className="product-add-btn absolute bottom-0 left-0 right-0 text-white text-xs font-medium uppercase py-3"
                  style={{
                    letterSpacing: "0.1em",
                    background: "#2C2820",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Add to Cart
                </button>
              </div>

              {/* Info */}
              <StarRating count={p.stars} />
              <div className="mt-1.5 mb-1.5 leading-snug" style={{ fontSize: 14, color: "#2C2820" }}>
                {p.name} — {p.finish}
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#1A1612" }}>{p.price}</div>

              {/* Color swatches */}
              <div className="flex gap-1.5 mt-2">
                {p.colors.map((c, i) => (
                  <div
                    key={i}
                    className="w-3.5 h-3.5 rounded-full cursor-pointer transition-all duration-200"
                    style={{
                      background: c,
                      border: i === 0 ? "2px solid #2C2820" : "2px solid transparent",
                      outline: i === 0 ? "1px solid #2C2820" : "none",
                      outlineOffset: 1,
                    }}
                    title={c}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIFESTYLE BANNER ── */}
      <div className="mx-20 grid overflow-hidden" style={{ gridTemplateColumns: "1fr 1fr", minHeight: 500 }}>
        {/* Image side */}
        <div className="relative overflow-hidden" style={{ background: "#2C2820" }}>
          <ImagePlaceholder label="Midnight Collection" />
        </div>

        {/* Copy side */}
        <div
          className="flex flex-col justify-center px-16 py-16"
          style={{ background: "#2C2820" }}
        >
          <div
            className="flex items-center gap-3 mb-6 text-xs font-medium uppercase"
            style={{ letterSpacing: "0.2em", color: "#E8600A" }}
          >
            <span className="w-6 h-px block" style={{ background: "#E8600A" }} />
            The Midnight Collection
          </div>
          <h2
            className="font-display mb-5 leading-tight"
            style={{ fontSize: 48, fontWeight: 300, color: "#F5F0E8" }}
          >
            Tapware that<br />
            <em className="italic" style={{ color: "#E8DDD0" }}>
              makes a statement
            </em>
          </h2>
          <p
            className="mb-10 font-light leading-loose"
            style={{ fontSize: 14, color: "#A89D94" }}
          >
            Our signature matte black and brushed brass finishes bring drama and
            sophistication to any space. Engineered to last — designed to impress.
          </p>
          <button
            className="self-start text-xs font-medium uppercase px-9 py-4 transition-colors duration-200"
            style={{
              letterSpacing: "0.1em",
              background: "#E8600A",
              color: "#FFFFFF",
              border: "none",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F5F0E8") && (e.currentTarget.style.color = "#2C2820")}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#E8600A"; e.currentTarget.style.color = "#FFFFFF"; }}
          >
            Explore Midnight →
          </button>
        </div>
      </div>

      {/* ── SHOP BY FINISH ── */}
      <section className="px-20 py-24" style={{ background: "#F5F0E8" }}>
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-display" style={{ fontSize: 38, fontWeight: 300, color: "#1A1612" }}>
            Shop by Finish
          </h2>
          <a
            href="#"
            className="text-xs uppercase no-underline pb-0.5 transition-colors duration-200"
            style={{ letterSpacing: "0.1em", color: "#6B5F54", borderBottom: "1px solid #A89D94" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#E8600A";
              e.currentTarget.style.borderBottomColor = "#E8600A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#6B5F54";
              e.currentTarget.style.borderBottomColor = "#A89D94";
            }}
          >
            All Finishes →
          </a>
        </div>

        <div className="grid grid-cols-4" style={{ gap: 2 }}>
          {finishes.map((f, i) => (
            <div
              key={f.name}
              className="finish-card relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: "2/3" }}
              onClick={() => setActiveFinish(i)}
            >
              <div className={`finish-img w-full h-full bg-gradient-to-b ${f.gradient}`} />

              {/* Label bar */}
              <div
                className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4"
                style={{ background: "rgba(245,240,232,0.95)" }}
              >
                <span style={{ fontSize: 13, color: "#2C2820" }}>{f.name}</span>
                <svg
                  className="finish-arrow w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#2C2820"
                  strokeWidth={1.5}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              {/* Active indicator */}
              {activeFinish === i && (
                <div
                  className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center"
                  style={{ background: "#E8600A" }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="px-20 py-24">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-display" style={{ fontSize: 38, fontWeight: 300, color: "#1A1612" }}>
            From Our Community
          </h2>
          <a
            href="#"
            className="text-xs uppercase no-underline pb-0.5 transition-colors duration-200"
            style={{ letterSpacing: "0.1em", color: "#6B5F54", borderBottom: "1px solid #A89D94" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#E8600A";
              e.currentTarget.style.borderBottomColor = "#E8600A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#6B5F54";
              e.currentTarget.style.borderBottomColor = "#A89D94";
            }}
          >
            Read All Reviews →
          </a>
        </div>

        <div className="grid gap-20 items-center" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {/* Cards */}
          <div className="flex flex-col gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="t-card bg-white px-8 py-7"
                style={{ border: "1px solid #E8DDD0" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#1A1612" }}>{t.name}</span>
                    <span className="ml-2" style={{ fontSize: 11, color: "#A89D94" }}>{t.location}</span>
                  </div>
                  <StarRating count={t.stars} />
                </div>
                <p style={{ fontSize: 13, color: "#6B5F54", lineHeight: 1.8, fontWeight: 300 }}>
                  {t.text}
                </p>
              </div>
            ))}
          </div>

          {/* Image + badge */}
          <div className="relative" style={{ aspectRatio: "4/5" }}>
            <div className="w-full h-full overflow-hidden">
              <ImagePlaceholder label="Community Photo" />
            </div>
            <div
              className="absolute top-8 font-display italic"
              style={{
                left: -20,
                background: "#E8600A",
                color: "white",
                padding: "14px 24px",
                fontSize: 18,
                fontWeight: 300,
              }}
            >
              Real renovations, real results
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <div
        className="px-20 py-20 grid items-center gap-20"
        style={{ background: "#2C2820", gridTemplateColumns: "1fr 1fr" }}
      >
        <div>
          <h2 className="font-display leading-tight" style={{ fontSize: 42, fontWeight: 300, color: "#F5F0E8" }}>
            Join the{" "}
            <em className="italic" style={{ color: "#E8DDD0" }}>
              Aspire
            </em>{" "}
            community
          </h2>
          <p className="mt-3 font-light leading-relaxed" style={{ fontSize: 14, color: "#A89D94" }}>
            Get renovation inspiration, new arrivals, and exclusive offers
            delivered straight to your inbox.
          </p>
        </div>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 outline-none"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRight: "none",
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              padding: "16px 20px",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#E8600A")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
          />
          <button
            className="text-xs font-medium uppercase whitespace-nowrap transition-colors duration-200"
            style={{
              letterSpacing: "0.1em",
              background: "#E8600A",
              color: "white",
              border: "none",
              padding: "16px 32px",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d4561e")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#E8600A")}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#1A1612", color: "#A89D94" }}>
        {/* Top grid */}
        <div
          className="grid gap-16 px-20 py-16 border-b"
          style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr", borderColor: "rgba(255,255,255,0.06)" }}
        >
          {/* Brand */}
          <div>
            <div className="font-display uppercase mb-4" style={{ fontSize: 24, fontWeight: 300, letterSpacing: "0.12em", color: "#F5F0E8" }}>
              <span style={{ color: "#E8600A" }}>A</span>SPIRE
            </div>
            <p className="font-light leading-relaxed" style={{ fontSize: 13, maxWidth: 250 }}>
              Premium bathroom, kitchen, and laundry products — curated for
              quality, backed by service. Australia's trusted tapware destination.
            </p>
          </div>

          {/* Link cols */}
          {[
            ["Quick Links", ["Search", "Stockists", "Downloads", "Contact Us"]],
            ["Categories", ["Bathroom", "Kitchen", "Laundry", "Accessories"]],
            ["Help", ["FAQ", "Delivery", "Returns", "Terms", "Privacy"]],
          ].map(([title, links]) => (
            <div key={title as string}>
              <div
                className="uppercase mb-5"
                style={{ fontSize: 11, letterSpacing: "0.15em", fontWeight: 500, color: "#F5F0E8" }}
              >
                {title}
              </div>
              <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
                {(links as string[]).map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="no-underline font-light transition-colors duration-200"
                      style={{ fontSize: 13, color: "#A89D94" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#E8600A")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#A89D94")}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between px-20 py-6">
          <span style={{ fontSize: 12, fontWeight: 300 }}>
            © 2026 Aspire Bathrooms. All rights reserved. All prices in AUD.
          </span>
          <div className="flex gap-5">
            {["Instagram", "Pinterest", "Facebook"].map((s) => (
              <a
                key={s}
                href="#"
                className="no-underline font-light transition-colors duration-200"
                style={{ fontSize: 12, color: "#A89D94" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E8600A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#A89D94")}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}