import Link from "next/link";
import {
  Cpu,
  CircuitBoard,
  Radio,
  Cog,
  Plane,
  Box,
  Boxes,
  BatteryCharging,
  Wrench,
  Bike,
  Gauge,
  RotateCcw,
  MonitorSmartphone,
} from "lucide-react";
import { categories } from "@/lib/data";

const iconMap = {
  Cpu,
  CircuitBoard,
  Radio,
  Cog,
  Plane,
  Box,
  Boxes,
  BatteryCharging,
  Wrench,
  Bike,
  Gauge,
  RotateCcw,
  MonitorSmartphone,
};

export default function CategoryTiles() {
  return (
    <section className="container-page py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="heading-accent">Shop by Category</h2>
        <Link
          href="/products"
          className="text-sm font-semibold text-royal hover:underline"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {categories.map((c) => {
          const Icon = iconMap[c.icon] ?? Box;
          return (
            <Link
              key={c.slug}
              href={`/products?category=${c.slug}`}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-silver-light bg-white p-5 text-center transition-all hover:-translate-y-1 hover:border-royal/40 hover:shadow-card-hover"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cloud to-silver-light text-royal transition-all group-hover:from-royal group-hover:to-royal-dark group-hover:text-white">
                <Icon size={28} />
              </span>
              <span className="text-xs font-semibold leading-tight text-navy">
                {c.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
