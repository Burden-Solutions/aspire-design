import { useState } from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const ORANGE = "#FF5C00" as const;
const BG = "#0E0D0B" as const;
const BG2 = "#161410" as const;
const BG3 = "#0A0908" as const;
const WHITE = "#FFFFFF" as const;
const WHITE60 = "#999690" as const;
const WHITE40 = "#7a7774" as const;
const WHITE20 = "#3d3c3a" as const;
const WHITE10 = "#252422" as const;
const BORDER = "#2a2826" as const;

// ─── Data ─────────────────────────────────────────────────────────────────────
interface Product {
  id: number;
  name: string;
  finish: string;
  price: string;
  tag: string | null;
  rating: number;
}

interface Finish {
  label: string;
  name: string;
  desc: string;
  color: string;
}

interface Testimonial {
  name: string;
  loc: string;
  text: string;
}

const products: Product[] = [
  { id: 1, name: "Within 750mm Double Towel Rail", finish: "Matte Black", price: "$119.90", tag: "BESTSELLER", rating: 5 },
  { id: 2, name: "Within 600mm Double Towel Rail", finish: "Matte Black", price: "$100.10", tag: null, rating: 5 },
  { id: 3, name: "Within Robe Hook", finish: "Matte Black", price: "$33.00", tag: "NEW", rating: 4 },
  { id: 4, name: "Within Toilet Roll Holder", finish: "Matte Black", price: "$49.00", tag: null, rating: 5 },
  { id: 5, name: "Wall Mounted Basin Mixer", finish: "Brushed Brass", price: "$245.00", tag: "NEW", rating: 5 },
  { id: 6, name: "Round Ceiling Shower Arm", finish: "Brushed Nickel", price: "$88.00", tag: null, rating: 4 },
];

const finishData: Finish[] = [
  { label: "01", name: "Matte Black", desc: "Bold. Dramatic. Timeless.", color: "#111010" },
  { label: "02", name: "Brushed Brass", desc: "Warm. Luxurious. Striking.", color: "#C9A84C" },
  { label: "03", name: "Brushed Nickel", desc: "Cool. Modern. Refined.", color: "#9BA4AE" },
  { label: "04", name: "Chrome", desc: "Classic. Clean. Enduring.", color: "#D8DCE0" },
];

const testimonials: Testimonial[] = [
  { name: "Sarah M.", loc: "Sydney, NSW", text: "Fitted our entire renovation through Aspire. The matte black range is stunning and quality is exceptional. Delivery was fast and stress-free." },
  { name: "James T.", loc: "Melbourne, VIC", text: "Used Aspire for kitchen and both bathrooms. The brushed brass finishes look incredible — so many compliments. Highly recommend to anyone renovating!" },
  { name: "Claire R.", loc: "Brisbane, QLD", text: "The design team helped pick the perfect tapware. Incredible service and the products are exactly as described. Five stars all round." },
];

const NAV_ROOMS = ["Bathroom", "Kitchen", "Laundry", "Outdoor", "Finishes", "Trade"] as const;
type NavRoom = typeof NAV_ROOMS[number];

const SOCIAL_LINKS = ["IG", "PI", "FB", "YT"] as const;

const FOOTER_LINKS: [string, string[]][] = [
  ["Shop", ["Bathroom", "Kitchen", "Laundry", "Accessories", "All Products"]],
  ["Company", ["About Us", "Gallery", "Blog", "Trade", "Stockists"]],
  ["Support", ["FAQ", "Delivery", "Returns", "Contact Us", "Downloads"]],
];

const LEGAL_LINKS = ["Privacy Policy", "Terms & Conditions", "Accessibility"] as const;

const STATS: [string, string][] = [
  ["12,000+", "Renovations"],
  ["4.9 / 5", "Google Rating"],
  ["AUS", "Ships Nationwide"],
];

// ─── Sub-components ───────────────────────────────────────────────────────────
interface StarsProps {
  count: number;
  size?: number;
}

function Stars({ count, size = 14 }: StarsProps) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill={i <= count ? ORANGE : WHITE20}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

interface ImgBoxProps {
  label?: string;
  bg?: string;
  h?: string | number;
}

function ImgBox({ label, bg = "#1a1916", h }: ImgBoxProps) {
  return (
    <div style={{ width: "100%", height: h ?? "100%", background: bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
      <svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke={WHITE20} strokeWidth={1}>
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      {label && (
        <span style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: WHITE20 }}>
          {label}
        </span>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function DesignTwo() {
  const [activeFinish, setActiveFinish] = useState<number>(0);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [activeRoom, setActiveRoom] = useState<number>(0);

  return (
    <div style={{ background: BG, color: WHITE, fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .pf { font-family: 'Playfair Display', serif; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-track { display: inline-block; animation: ticker 24s linear infinite; white-space: nowrap; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        .fu { animation: fadeUp 0.7s ease both; }
        .fu1 { animation-delay: 0.05s; } .fu2 { animation-delay: 0.2s; } .fu3 { animation-delay: 0.35s; } .fu4 { animation-delay: 0.5s; }
        .prod-card .add-btn { transform: translateY(100%); transition: transform 0.3s ease; }
        .prod-card:hover .add-btn { transform: translateY(0); }
        .prod-card .wish { opacity: 0; transition: opacity 0.25s; }
        .prod-card:hover .wish { opacity: 1; }
        .prod-card .hover-tint { opacity: 0; transition: opacity 0.3s; }
        .prod-card:hover .hover-tint { opacity: 1; }
        .fin-card { transition: border-color 0.25s; }
        .fin-card:hover { border-color: ${ORANGE} !important; }
        .nav-link { transition: color 0.2s; }
        .nav-link:hover { color: ${WHITE} !important; }
        a:hover { opacity: 0.85; }
      `}</style>

      {/* TICKER */}
      <div style={{ background: ORANGE, overflow: "hidden", padding: "10px 0" }}>
        <div
          className="ticker-track"
          style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, color: WHITE }}
        >
          {Array(6).fill("  Free Shipping on orders over $1,000  ·  Premium Tapware  ·  Bathroom  ·  Kitchen  ·  Laundry  ·  Australian Owned  ·  ").join("")}
        </div>
      </div>

      {/* NAV */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 60px", height: 70, borderBottom: `1px solid ${BORDER}`, position: "sticky", top: 0, zIndex: 100, background: BG }}>
        <div className="pf" style={{ fontSize: 26, fontWeight: 900, color: WHITE, letterSpacing: "-0.01em" }}>
          ASPIRE<span style={{ color: ORANGE }}>.</span>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {NAV_ROOMS.map((room: NavRoom, i) => (
            <button
              key={room}
              onClick={() => setActiveRoom(i)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                fontWeight: 600, fontFamily: "'DM Sans', sans-serif", padding: "4px 0",
                color: activeRoom === i ? ORANGE : WHITE60,
                borderBottom: activeRoom === i ? `1px solid ${ORANGE}` : "1px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              {room}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={WHITE60} strokeWidth={1.5} style={{ cursor: "pointer" }}>
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={WHITE60} strokeWidth={1.5} style={{ cursor: "pointer" }}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <button
            style={{ border: `1.5px solid ${ORANGE}`, background: "none", color: ORANGE, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, fontFamily: "'DM Sans', sans-serif", padding: "10px 22px", cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = ORANGE; e.currentTarget.style.color = WHITE; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = ORANGE; }}
          >
            Cart (0)
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ display: "grid", gridTemplateColumns: "7fr 5fr", minHeight: "88vh" }}>
        {/* Left text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 60px", borderRight: `1px solid ${BORDER}` }}>
          <div>
            <div className="fu fu1" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
              <span style={{ color: ORANGE, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700 }}>2026 Collection</span>
              <span style={{ height: 1, width: 50, background: ORANGE, display: "block", opacity: 0.5 }} />
            </div>
            <h1 className="pf fu fu2" style={{ lineHeight: 0.92, fontWeight: 900, margin: 0 }}>
              <span style={{ display: "block", fontSize: "clamp(64px,8vw,112px)", color: WHITE }}>ELEVATE</span>
              <span style={{ display: "block", fontSize: "clamp(64px,8vw,112px)", color: WHITE20, marginTop: -2 }}>YOUR</span>
              <span style={{ display: "block", fontSize: "clamp(64px,8vw,112px)", color: ORANGE, fontStyle: "italic", marginTop: -2 }}>SPACE.</span>
            </h1>
            <p className="fu fu3" style={{ color: WHITE60, fontSize: 15, lineHeight: 1.8, maxWidth: 400, marginTop: 36, fontWeight: 300 }}>
              Premium tapware for bathrooms, kitchens, and laundries. Curated for quality. Backed by Australia's best service.
            </p>
            <div className="fu fu4" style={{ display: "flex", gap: 14, marginTop: 44 }}>
              <button
                style={{ background: ORANGE, color: WHITE, border: "none", padding: "15px 44px", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", transition: "background 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#e04f00")}
                onMouseLeave={(e) => (e.currentTarget.style.background = ORANGE)}
              >
                Shop Now
              </button>
              <button
                style={{ background: "none", color: WHITE, border: `1px solid ${BORDER}`, padding: "15px 36px", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = WHITE60)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = BORDER)}
              >
                View Collections
              </button>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: `1px solid ${BORDER}` }}>
            {STATS.map(([value, label], i) => (
              <div key={label} style={{ padding: "22px 24px", borderRight: i < 2 ? `1px solid ${BORDER}` : "none" }}>
                <div className="pf" style={{ fontSize: 30, fontWeight: 700, color: WHITE, lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: WHITE40, marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div style={{ position: "relative" }}>
          <ImgBox label="Hero Lifestyle Photography" />
          <div style={{ position: "absolute", top: 36, left: 0, background: ORANGE, padding: "12px 20px" }}>
            <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: 3 }}>Now Trending</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: WHITE }}>Midnight Matte Black</div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(10,9,8,0.82)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 28px" }}>
            <div>
              <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: WHITE40, marginBottom: 4 }}>Featured Range</div>
              <div className="pf" style={{ fontSize: 20, fontWeight: 700, fontStyle: "italic", color: WHITE }}>Within Collection</div>
            </div>
            <button style={{ background: ORANGE, color: WHITE, border: "none", padding: "12px 24px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, fontFamily: "'DM Sans', sans-serif", cursor: "pointer" }}>
              Shop Now →
            </button>
          </div>
        </div>
      </section>

      {/* MARQUEE DIVIDER */}
      <div style={{ background: BG2, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "13px 0", overflow: "hidden" }}>
        <div className="ticker-track" style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: WHITE20, fontWeight: 500 }}>
          {Array(6).fill("  Bathroom  ·  Kitchen  ·  Laundry  ·  Matte Black  ·  Brushed Brass  ·  Brushed Nickel  ·  Chrome  ·  Premium Tapware  ·  Free Shipping  ·  ").join("")}
        </div>
      </div>

      {/* PRODUCTS */}
      <section style={{ padding: "80px 60px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
          <div>
            <div style={{ color: ORANGE, fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Top Sellers</div>
            <h2 className="pf" style={{ fontSize: 50, fontWeight: 900, lineHeight: 1.0, color: WHITE }}>
              Most Wanted<br />
              <em style={{ fontStyle: "italic", fontWeight: 400, color: WHITE40 }}>Products</em>
            </h2>
          </div>
          <a href="#" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, color: WHITE40, textDecoration: "none", borderBottom: `1px solid ${WHITE20}`, paddingBottom: 2 }}>
            View All Products →
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: BORDER }}>
          {products.map((product) => (
            <div
              key={product.id}
              className="prod-card"
              style={{ background: BG, cursor: "pointer", position: "relative" }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div style={{ position: "relative", aspectRatio: "1.1", overflow: "hidden" }}>
                <ImgBox label="" />
                <div className="hover-tint" style={{ position: "absolute", inset: 0, background: "rgba(255,92,0,0.07)" }} />
                {product.tag && (
                  <div style={{ position: "absolute", top: 14, left: 14, background: ORANGE, color: WHITE, fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 800, padding: "5px 11px" }}>
                    {product.tag}
                  </div>
                )}
                <div className="wish" style={{ position: "absolute", top: 14, right: 14, width: 34, height: 34, background: BG, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke={WHITE} strokeWidth={1.5}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <button
                  className="add-btn"
                  style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: ORANGE, color: WHITE, border: "none", padding: "14px", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 800, fontFamily: "'DM Sans', sans-serif", cursor: "pointer" }}
                >
                  Add to Cart
                </button>
              </div>
              <div style={{ padding: "18px 20px", borderTop: `1px solid ${BORDER}` }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 10 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: WHITE, lineHeight: 1.4, marginBottom: 3 }}>{product.name}</div>
                    <div style={{ fontSize: 11, color: WHITE40, letterSpacing: "0.04em" }}>{product.finish}</div>
                  </div>
                  <div className="pf" style={{ fontSize: 22, fontWeight: 700, color: ORANGE, whiteSpace: "nowrap" }}>{product.price}</div>
                </div>
                <Stars count={product.rating} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINISHES */}
      <section style={{ padding: "0 60px 80px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
          <div>
            <div style={{ color: ORANGE, fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Explore</div>
            <h2 className="pf" style={{ fontSize: 50, fontWeight: 900, lineHeight: 1.0, color: WHITE }}>
              Choose Your<br />
              <em style={{ fontStyle: "italic", fontWeight: 400, color: WHITE40 }}>Finish</em>
            </h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {finishData.map((finish, i) => (
            <div
              key={finish.name}
              className="fin-card"
              onClick={() => setActiveFinish(i)}
              style={{ position: "relative", border: `1px solid ${activeFinish === i ? ORANGE : BORDER}`, cursor: "pointer" }}
            >
              <div style={{ height: 180, background: finish.color }} />
              <div style={{ padding: "18px 20px", background: BG2 }}>
                <div style={{ fontSize: 11, fontFamily: "monospace", fontWeight: 700, color: ORANGE, marginBottom: 8, letterSpacing: "0.05em" }}>{finish.label}</div>
                <div className="pf" style={{ fontSize: 20, fontWeight: 700, color: WHITE, marginBottom: 4 }}>{finish.name}</div>
                <div style={{ fontSize: 12, color: WHITE40 }}>{finish.desc}</div>
              </div>
              {activeFinish === i && (
                <div style={{ position: "absolute", top: 12, right: 12, width: 26, height: 26, background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke={WHITE} strokeWidth={3}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CAMPAIGN BANNER */}
      <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #1a1612 0%, #0e0d0b 60%, #1c1008 100%)", minHeight: 520, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="pf" style={{ position: "absolute", fontSize: "clamp(100px,18vw,240px)", fontWeight: 900, color: "#1a1916", lineHeight: 0.9, userSelect: "none", letterSpacing: "-0.02em" }}>
          MIDNIGHT
        </div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "80px 40px" }}>
          <div style={{ color: ORANGE, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700, marginBottom: 20 }}>New Season</div>
          <h2 className="pf" style={{ fontSize: "clamp(52px,7vw,88px)", fontWeight: 900, color: WHITE, lineHeight: 0.92, marginBottom: 24 }}>
            MIDNIGHT<br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: WHITE40 }}>Collection</em>
          </h2>
          <p style={{ color: WHITE60, fontSize: 15, maxWidth: 440, lineHeight: 1.8, fontWeight: 300, marginBottom: 40 }}>
            Dramatic matte black finishes for the space that makes a statement. Engineered in Australia. Built to last a lifetime.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <button
              style={{ background: ORANGE, color: WHITE, border: "none", padding: "16px 48px", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e04f00")}
              onMouseLeave={(e) => (e.currentTarget.style.background = ORANGE)}
            >
              Shop the Range
            </button>
            <button
              style={{ background: "none", color: WHITE, border: `1px solid ${WHITE20}`, padding: "16px 40px", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", transition: "border-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = WHITE60)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = WHITE20)}
            >
              View Lookbook
            </button>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section style={{ padding: "80px 60px", background: BG3 }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ color: ORANGE, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700, marginBottom: 16 }}>Reviews</div>
          <h2 className="pf" style={{ fontSize: 50, fontWeight: 900, color: WHITE }}>
            What They're <em style={{ fontStyle: "italic", fontWeight: 400, color: WHITE40 }}>Saying</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: BORDER }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} style={{ background: BG, padding: "36px 32px" }}>
              <Stars count={5} size={16} />
              <p style={{ color: WHITE60, fontSize: 14, lineHeight: 1.85, fontWeight: 300, margin: "20px 0 28px" }}>{testimonial.text}</p>
              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 18 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: WHITE }}>{testimonial.name}</div>
                <div style={{ fontSize: 11, color: WHITE40, letterSpacing: "0.08em", marginTop: 3 }}>{testimonial.loc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <div style={{ background: BG2, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "72px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <div style={{ color: ORANGE, fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700, marginBottom: 16 }}>Stay in the loop</div>
          <h2 className="pf" style={{ fontSize: 44, fontWeight: 900, color: WHITE, lineHeight: 1.1 }}>
            Join the <em style={{ fontStyle: "italic", fontWeight: 400, color: WHITE40 }}>Aspire</em> club
          </h2>
          <p style={{ color: WHITE40, fontSize: 14, marginTop: 14, fontWeight: 300, lineHeight: 1.75 }}>
            New arrivals, renovation inspiration, and exclusive member offers — delivered to your inbox.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <input
            style={{ background: "#1d1b18", border: `1px solid ${BORDER}`, color: WHITE, fontFamily: "'DM Sans', sans-serif", fontSize: 14, padding: "16px 20px", outline: "none" }}
            placeholder="Enter your email address"
            onFocus={(e) => (e.target.style.borderColor = ORANGE)}
            onBlur={(e) => (e.target.style.borderColor = BORDER)}
          />
          <button
            style={{ background: ORANGE, color: WHITE, border: "none", padding: "16px", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", transition: "background 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e04f00")}
            onMouseLeave={(e) => (e.currentTarget.style.background = ORANGE)}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: BG3, padding: "64px 60px 40px", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1.4fr", gap: 48, paddingBottom: 48, borderBottom: `1px solid ${BORDER}`, marginBottom: 32 }}>
          <div>
            <div className="pf" style={{ fontSize: 28, fontWeight: 900, color: WHITE, marginBottom: 16 }}>
              ASPIRE<span style={{ color: ORANGE }}>.</span>
            </div>
            <p style={{ fontSize: 13, color: WHITE40, fontWeight: 300, lineHeight: 1.8, maxWidth: 250 }}>
              Premium tapware and fixtures for Australian homes. Quality-first, service-always.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
              {SOCIAL_LINKS.map((handle) => (
                <a
                  key={handle}
                  href="#"
                  style={{ width: 36, height: 36, border: `1px solid ${WHITE10}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: WHITE40, textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = ORANGE; e.currentTarget.style.color = ORANGE; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = WHITE10; e.currentTarget.style.color = WHITE40; }}
                >
                  {handle}
                </a>
              ))}
            </div>
          </div>
          {FOOTER_LINKS.map(([title, links]) => (
            <div key={title}>
              <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, color: WHITE, marginBottom: 20 }}>{title}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, padding: 0 }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{ fontSize: 13, fontWeight: 300, color: WHITE40, textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = ORANGE)}
                      onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = WHITE40)}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, color: WHITE, marginBottom: 20 }}>Newsletter</div>
            <p style={{ fontSize: 12, color: WHITE40, lineHeight: 1.75, marginBottom: 16, fontWeight: 300 }}>New arrivals and exclusive offers.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <input
                style={{ background: "#1d1b18", border: `1px solid ${BORDER}`, color: WHITE, fontFamily: "'DM Sans', sans-serif", fontSize: 12, padding: "12px 14px", outline: "none" }}
                placeholder="Email address"
                onFocus={(e) => (e.target.style.borderColor = ORANGE)}
                onBlur={(e) => (e.target.style.borderColor = BORDER)}
              />
              <button
                style={{ background: ORANGE, color: WHITE, border: "none", padding: "12px", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, fontFamily: "'DM Sans', sans-serif", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#e04f00")}
                onMouseLeave={(e) => (e.currentTarget.style.background = ORANGE)}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, color: WHITE20 }}>
          <span>© 2026 Aspire Bathrooms Pty Ltd. All rights reserved. All prices in AUD.</span>
          <div style={{ display: "flex", gap: 24 }}>
            {LEGAL_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                style={{ color: WHITE20, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = ORANGE)}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = WHITE20)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}