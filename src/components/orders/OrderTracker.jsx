import { Check, Clock, Package, Truck, Home, XCircle } from "lucide-react";

// The normal forward journey of an order. CANCELLED is handled separately.
const STEPS = [
  { key: "PENDING", label: "Order Placed", Icon: Clock },
  { key: "PROCESSING", label: "Processing", Icon: Package },
  { key: "SHIPPED", label: "Shipped", Icon: Truck },
  { key: "DELIVERED", label: "Delivered", Icon: Home },
];

export default function OrderTracker({ status }) {
  if (status === "CANCELLED") {
    return (
      <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
        <XCircle size={18} />
        This order was cancelled.
      </div>
    );
  }

  const currentIndex = STEPS.findIndex((s) => s.key === status);

  return (
    <div className="flex items-center">
      {STEPS.map((step, i) => {
        const done = i < currentIndex;
        const active = i === currentIndex;
        const Icon = step.Icon;
        return (
          <div key={step.key} className="flex flex-1 items-center last:flex-none">
            {/* Node */}
            <div className="flex flex-col items-center">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition-colors ${
                  done
                    ? "border-royal bg-royal text-white"
                    : active
                      ? "border-royal bg-white text-royal ring-4 ring-royal/15"
                      : "border-silver-light bg-white text-silver-dark"
                }`}
              >
                {done ? <Check size={18} /> : <Icon size={16} />}
              </div>
              <span
                className={`mt-1.5 w-20 text-center text-[11px] font-medium leading-tight ${
                  done || active ? "text-navy" : "text-silver-dark"
                }`}
              >
                {step.label}
              </span>
            </div>
            {/* Connector line (not after the last node) */}
            {i < STEPS.length - 1 && (
              <div
                className={`-mt-5 h-0.5 flex-1 ${
                  i < currentIndex ? "bg-royal" : "bg-silver-light"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
