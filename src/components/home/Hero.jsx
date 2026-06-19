import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const quickLinks = [
  { label: "Arduino & Boards", slug: "dev-boards" },
  { label: "Sensors", slug: "sensors" },
  { label: "Motors", slug: "motors" },
  { label: "Drone Parts", slug: "drones" },
  { label: "3D Printing", slug: "3d-printers" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1f44] via-[#13315c] to-royal">
      {/* Subtle dotted grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-royal-light/30 blur-3xl" />

      <div className="container-page relative grid items-center gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        {/* Left: copy + search + quick links */}
        <div className="animate-fade-up text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
            <Star size={13} className="fill-yellow-400 text-yellow-400" />
            Trusted by 50,000+ makers across India
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Build anything.
            <br />
            <span className="bg-gradient-to-r from-royal-light to-white bg-clip-text text-transparent">
              We&apos;ve got the parts.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-silver-light">
            India&apos;s store for robotics, electronics &amp; DIY engineering —
            boards, sensors, motors, drones, 3D printing and more, shipped fast
            with real technical support.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-navy shadow-lg transition-all hover:bg-silver-light active:scale-[0.98]"
            >
              Shop All Products <ArrowRight size={18} />
            </Link>
            <Link
              href="/b2b"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Bulk &amp; B2B
            </Link>
          </div>

          {/* Quick category links */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-silver">
              Popular:
            </span>
            {quickLinks.map((q) => (
              <Link
                key={q.slug}
                href={`/products?category=${q.slug}`}
                className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/15 transition-colors hover:bg-white/20"
              >
                {q.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: stat panel */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-2xl bg-white p-6 shadow-2xl">
              <p className="text-sm font-semibold text-silver-dark">
                This week&apos;s deals
              </p>
              <p className="mt-1 text-2xl font-extrabold text-navy">
                Up to 40% off
              </p>
              <p className="mt-1 text-sm text-silver-dark">
                on starter kits, sensors &amp; modules
              </p>
              <Link
                href="/products"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-royal hover:gap-2 hover:underline"
              >
                Grab the deals <ArrowRight size={15} />
              </Link>
            </div>
            {[
              ["10,000+", "Products in stock"],
              ["4.7★", "Average rating"],
            ].map(([v, l]) => (
              <div
                key={l}
                className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur"
              >
                <p className="text-2xl font-extrabold text-white">{v}</p>
                <p className="mt-1 text-xs text-silver-light">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
