import { useState } from "react";

const products = [
  { id: 1, name: "Within 750mm Double Towel Rail", finish: "Matte Black", price: "$119.90", badge: "Bestseller", stars: 5, colors: ["#1a1612", "#c8b89c", "#d8d4cc"] },
  { id: 2, name: "Within 600mm Double Towel Rail", finish: "Matte Black", price: "$100.10", badge: null, stars: 5, colors: ["#1a1612", "#c8b89c"] },
  { id: 3, name: "Within Robe Hook", finish: "Matte Black", price: "$33.00", badge: "New", stars: 4, colors: ["#1a1612", "#d0c8c0", "#c8b89c"] },
  { id: 4, name: "Within Toilet Roll Holder", finish: "Matte Black", price: "$49.00", badge: null, stars: 5, colors: ["#1a1612", "#d8d4cc"] },
];

const categories = [
  { name: "Bathroom Tapware", bg: "from-stone-300 to-stone-400" },
  { name: "Kitchen Sinks & Taps", bg: "from-teal-200 to-teal-400" },
  { name: "Laundry Tapware", bg: "from-amber-200 to-amber-300" },
  { name: "Basin Mixers", bg: "from-zinc-300 to-zinc-400" },
  { name: "Accessories", bg: "from-stone-200 to-stone-300" },
];

const finishes = [
  { name: "Matte Black", bg: "from-zinc-800 to-zinc-950", text: "text-zinc-300" },
  { name: "Brushed Brass", bg: "from-amber-300 to-amber-500", text: "text-amber-900" },
  { name: "Brushed Nickel", bg: "from-slate-300 to-slate-400", text: "text-slate-800" },
  { name: "Chrome", bg: "from-slate-100 to-slate-300", text: "text-slate-700" },
];

const testimonials = [
  { name: "Sarah M.", text: "Fitted our entire renovation through Aspire. The matte black range is stunning and quality is exceptional. Delivery was fast and stress-free.", stars: 5 },
  { name: "James T.", text: "Used Aspire for kitchen and both bathrooms. The brushed brass finishes look incredible — so many compliments. Highly recommend!", stars: 5 },
  { name: "Claire R.", text: "The team helped us pick the perfect tapware. Incredible customer service and the products are exactly as described.", stars: 5 },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className={`w-3 h-3 ${i <= count ? "fill-amber-500" : "fill-stone-200"}`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 bg-stone-200 ${className}`}>
      <svg className="w-10 h-10 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <rect x="3" y="3" width="18" height="18" rx="1"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span className="text-xs tracking-widest uppercase text-stone-400">{label}</span>
    </div>
  );
}

export default function DesignThree() {
  const [activeFinish, setActiveFinish] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="font-sans bg-[#FDFAF5] text-[#2C2820] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .animate-fadeUp { animation: fadeUp 0.7s ease both; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.25s; }
        .delay-3 { animation-delay: 0.4s; }
        .delay-4 { animation-delay: 0.55s; }
      `}</style>

      {/* Announcement */}
      <div className="bg-[#E8600A] text-white text-center py-2.5 text-xs font-medium tracking-widest uppercase font-body">
        Free Shipping on orders over $1,000 — Australia wide
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#FDFAF5] border-b border-stone-200 flex items-center justify-between px-16 h-16">
        <a href="#" className="font-display text-2xl font-light tracking-[0.14em] uppercase">
          <span className="text-[#E8600A]">A</span>SPIRE
        </a>
        <ul className="flex gap-8 list-none">
          {["Bathroom","Kitchen","Laundry","Finishes","Design Help","Stockists"].map(item => (
            <li key={item}>
              <a href="#" className="text-xs tracking-widest uppercase text-[#2C2820] hover:text-[#E8600A] transition-colors duration-200 font-body font-medium">{item}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <svg className="w-5 h-5 stroke-[#2C2820] hover:stroke-[#E8600A] transition-colors cursor-pointer fill-none" viewBox="0 0 24 24" strokeWidth={1.5}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <svg className="w-5 h-5 stroke-[#2C2820] hover:stroke-[#E8600A] transition-colors cursor-pointer fill-none" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <button className="bg-[#2C2820] hover:bg-[#E8600A] text-[#FDFAF5] text-xs tracking-widest uppercase font-medium px-5 py-2.5 transition-colors duration-200 font-body">
            Cart (0)
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid grid-cols-2 min-h-[88vh]">
        <div className="flex flex-col justify-center px-20 py-20 bg-[#F5F0E8] relative">
          <div className="animate-fadeUp delay-1 flex items-center gap-3 text-[#E8600A] text-xs tracking-[0.2em] uppercase font-medium mb-7 font-body">
            <span className="w-8 h-px bg-[#E8600A]" />
            New Collection 2026
          </div>
          <h1 className="animate-fadeUp delay-2 font-display text-7xl font-light leading-[1.07] text-[#1A1612] mb-7">
            Your bathroom<br/>
            should feel<br/>
            like <em className="italic text-[#C96B3A]">home.</em>
          </h1>
          <p className="animate-fadeUp delay-3 text-sm text-[#6B5F54] leading-relaxed max-w-sm mb-12 font-light font-body">
            Premium tapware, fixtures, and accessories for bathrooms, kitchens, and laundries — curated for quality, delivered to your door.
          </p>
          <div className="animate-fadeUp delay-4 flex items-center gap-6">
            <button className="bg-[#2C2820] hover:bg-[#E8600A] text-[#F5F0E8] text-xs tracking-widest uppercase font-medium px-9 py-4 transition-colors duration-200 font-body">
              Shop Now
            </button>
            <a href="#" className="text-sm text-[#2C2820] hover:text-[#E8600A] border-b border-[#2C2820] hover:border-[#E8600A] pb-0.5 transition-colors duration-200 font-body">
              View Collections →
            </a>
          </div>

          {/* Stats */}
          <div className="absolute bottom-10 left-20 flex gap-10">
            {[["12k+","Happy Customers"],["4.9★","Google Rating"],["AUS","Free Ship $1k+"]].map(([num,label]) => (
              <div key={label}>
                <div className="font-display text-3xl font-light text-[#1A1612]">{num}</div>
                <div className="text-xs tracking-widest uppercase text-[#A89D94] mt-1 font-body">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <ImagePlaceholder label="Lifestyle Photography" className="w-full h-full" />
          {/* Floating card */}
          <div className="absolute bottom-10 right-10 bg-white p-5 max-w-[190px] shadow-lg">
            <div className="text-xs tracking-widest uppercase text-[#A89D94] mb-1.5 font-body">Featured</div>
            <div className="font-display text-base font-light text-[#1A1612] leading-snug mb-2">Within Matte Black Towel Rail 750mm</div>
            <div className="text-sm font-medium text-[#E8600A] font-body">$119.90</div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-20 pt-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display text-4xl font-light">Shop by Room</h2>
          <a href="#" className="text-xs tracking-widest uppercase text-[#6B5F54] border-b border-[#A89D94] pb-0.5 hover:text-[#E8600A] hover:border-[#E8600A] transition-colors font-body">View All →</a>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {categories.map(cat => (
            <div key={cat.name} className="relative overflow-hidden cursor-pointer group" style={{aspectRatio:"3/4"}}>
              <div className={`w-full h-full bg-gradient-to-b ${cat.bg} transition-transform duration-500 group-hover:scale-105`} />
              <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/50 to-transparent">
                <div className="text-white text-sm font-light mb-1 font-body">{cat.name}</div>
                <div className="text-white/70 text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">→</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="px-20 py-24">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display text-4xl font-light">Top Selling Products</h2>
          <a href="#" className="text-xs tracking-widest uppercase text-[#6B5F54] border-b border-[#A89D94] pb-0.5 hover:text-[#E8600A] hover:border-[#E8600A] transition-colors font-body">See All →</a>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {products.map(p => (
            <div key={p.id} className="cursor-pointer group" onMouseEnter={() => setHoveredProduct(p.id)} onMouseLeave={() => setHoveredProduct(null)}>
              <div className="relative overflow-hidden bg-[#F0EBE3] mb-4" style={{aspectRatio:"1"}}>
                <ImagePlaceholder label="" className="w-full h-full" />
                {p.badge && (
                  <div className="absolute top-3.5 left-3.5 bg-[#E8600A] text-white text-xs tracking-widest uppercase px-2.5 py-1 font-body font-medium">{p.badge}</div>
                )}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 stroke-[#2C2820] fill-none" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <button className="absolute bottom-0 left-0 right-0 bg-[#2C2820] text-white text-xs tracking-widest uppercase font-medium py-3 font-body translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Add to Cart
                </button>
              </div>
              <StarRating count={p.stars} />
              <div className="text-sm text-[#2C2820] mt-1.5 mb-1.5 leading-snug font-body">{p.name} — {p.finish}</div>
              <div className="text-base font-medium text-[#1A1612] font-body">{p.price}</div>
              <div className="flex gap-1.5 mt-2">
                {p.colors.map((c,i) => (
                  <div key={i} className="w-3.5 h-3.5 rounded-full border-2 border-transparent hover:border-[#2C2820] cursor-pointer transition-all duration-200" style={{background:c}} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lifestyle Banner */}
      <div className="mx-20 grid grid-cols-2 min-h-[480px] overflow-hidden">
        <ImagePlaceholder label="Midnight Collection" className="w-full h-full bg-zinc-800" />
        <div className="flex flex-col justify-center px-16 py-16 bg-[#2C2820]">
          <div className="flex items-center gap-3 text-[#E8600A] text-xs tracking-[0.2em] uppercase font-medium mb-6 font-body">
            <span className="w-6 h-px bg-[#E8600A]" />
            The Midnight Collection
          </div>
          <h2 className="font-display text-5xl font-light text-[#F5F0E8] leading-tight mb-5">
            Tapware that<br/>
            <em className="italic text-[#E8DDD0]">makes a statement</em>
          </h2>
          <p className="text-sm text-[#A89D94] leading-loose mb-10 font-light font-body">
            Our signature matte black and brushed brass finishes bring drama and sophistication to any space. Engineered to last — designed to impress.
          </p>
          <button className="self-start bg-[#E8600A] hover:bg-[#F5F0E8] hover:text-[#2C2820] text-white text-xs tracking-widest uppercase font-medium px-9 py-4 transition-colors duration-200 font-body">
            Explore Midnight →
          </button>
        </div>
      </div>

      {/* Finishes */}
      <section className="px-20 py-24 bg-[#F5F0E8]">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-display text-4xl font-light">Shop by Finish</h2>
          <a href="#" className="text-xs tracking-widest uppercase text-[#6B5F54] border-b border-[#A89D94] pb-0.5 hover:text-[#E8600A] hover:border-[#E8600A] transition-colors font-body">All Finishes →</a>
        </div>
        <div className="grid grid-cols-4 gap-0.5">
          {finishes.map((f,i) => (
            <div key={f.name} className="relative overflow-hidden cursor-pointer group" style={{aspectRatio:"2/3"}}
              onClick={() => setActiveFinish(i)}>
              <div className={`w-full h-full bg-gradient-to-b ${f.bg} transition-transform duration-500 group-hover:scale-[1.03]`} />
              <div className="absolute bottom-0 left-0 right-0 bg-[#F5F0E8]/95 px-5 py-4 flex items-center justify-between">
                <span className="text-sm text-[#2C2820] font-body">{f.name}</span>
                <svg className="w-5 h-5 stroke-[#2C2820] fill-none transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-20 py-24">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-display text-4xl font-light">From Our Community</h2>
          <a href="#" className="text-xs tracking-widest uppercase text-[#6B5F54] border-b border-[#A89D94] pb-0.5 hover:text-[#E8600A] hover:border-[#E8600A] transition-colors font-body">Read All Reviews →</a>
        </div>
        <div className="grid grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-5">
            {testimonials.map(t => (
              <div key={t.name} className="border border-stone-200 hover:border-[#E8600A] hover:shadow-[4px_4px_0_#E8600A] px-8 py-7 transition-all duration-300 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-sm text-[#1A1612] font-body">{t.name}</span>
                  <StarRating count={t.stars} />
                </div>
                <p className="text-sm text-[#6B5F54] leading-[1.8] font-light font-body">{t.text}</p>
              </div>
            ))}
          </div>
          <div className="relative" style={{aspectRatio:"4/5"}}>
            <ImagePlaceholder label="Community Photo" className="w-full h-full" />
            <div className="absolute top-8 -left-5 bg-[#E8600A] text-white px-6 py-3 font-display text-lg font-light italic">
              Real renovations, real results
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <div className="bg-[#2C2820] px-20 py-20 grid grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-display text-4xl font-light text-[#F5F0E8] leading-tight">
            Join the <em className="italic text-[#E8DDD0]">Aspire</em> community
          </h2>
          <p className="text-sm text-[#A89D94] mt-3 font-light leading-relaxed font-body">Get renovation inspiration, new arrivals, and exclusive offers delivered to your inbox.</p>
        </div>
        <div className="flex">
          <input className="flex-1 bg-white/8 border border-white/15 focus:border-[#E8600A] text-white placeholder-[#A89D94] px-5 py-4 text-sm outline-none font-body" placeholder="Enter your email address" />
          <button className="bg-[#E8600A] hover:bg-[#d4561e] text-white text-xs tracking-widest uppercase font-medium px-8 py-4 font-body whitespace-nowrap transition-colors duration-200">Subscribe</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A1612] text-[#A89D94] px-20 py-16">
        <div className="grid grid-cols-4 gap-16 pb-12 border-b border-white/8 mb-8">
          <div>
            <div className="font-display text-2xl font-light tracking-[0.12em] uppercase text-[#F5F0E8] mb-4">
              <span className="text-[#E8600A]">A</span>SPIRE
            </div>
            <p className="text-sm font-light leading-relaxed max-w-[240px] font-body">Premium bathroom, kitchen, and laundry products — curated for quality, backed by service.</p>
          </div>
          {[
            ["Quick Links", ["Search","Stockists","Downloads","Contact Us"]],
            ["Categories", ["Bathroom","Kitchen","Laundry","Accessories"]],
            ["Help", ["FAQ","Delivery","Returns","Terms","Privacy"]],
          ].map(([title, links]) => (
            <div key={title as string}>
              <div className="text-xs tracking-[0.15em] uppercase text-[#F5F0E8] font-medium mb-5 font-body">{title}</div>
              <ul className="flex flex-col gap-2.5">
                {(links as string[]).map(l => <li key={l}><a href="#" className="text-sm font-light hover:text-[#E8600A] transition-colors font-body">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-xs font-light font-body">
          <span>© 2026 Aspire Bathrooms. All rights reserved. All prices in AUD.</span>
          <div className="flex gap-4">
            {["Instagram","Pinterest","Facebook"].map(s => <a key={s} href="#" className="hover:text-[#E8600A] transition-colors">{s}</a>)}
          </div>
        </div>
      </footer>
    </div>
  );
}