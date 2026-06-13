import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, Headphones } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy via-navy-light to-royal-dark text-white">
      <div className="container-page grid items-center gap-8 py-14 md:grid-cols-2 md:py-20">
        <div>
          <span className="inline-block rounded-full bg-royal/30 px-3 py-1 text-xs font-semibold text-royal-light">
            New arrivals every week
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Your Ideas,{" "}
            <span className="text-royal-light">Our Parts!</span>
          </h1>
          <p className="mt-4 max-w-md text-silver-light">
            India&apos;s largest robotics &amp; engineering products store —
            robot kits, drone parts, electronic components, 3D printing,
            batteries, motors, microcontrollers and more, with start-to-end
            technical support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-royal px-6 py-3 font-semibold text-white hover:bg-royal-light"
            >
              Shop Now <ArrowRight size={18} />
            </Link>
            <Link
              href="/products?category=arduino"
              className="inline-flex items-center gap-2 rounded-lg border border-silver/40 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Explore Boards
            </Link>
          </div>
        </div>
        <div className="hidden justify-self-end md:block">
          <div className="grid grid-cols-2 gap-4">
            {[Truck, ShieldCheck, Headphones].map((Icon, i) => (
              <div
                key={i}
                className={`rounded-2xl bg-white/10 p-6 backdrop-blur ${
                  i === 0 ? "col-span-2" : ""
                }`}
              >
                <Icon size={28} className="text-royal-light" />
                <p className="mt-2 text-sm font-semibold">
                  {["Fast Delivery", "Genuine Parts", "Expert Support"][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
