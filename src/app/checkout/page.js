"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/formatPrice";
import Button from "@/components/ui/Button";

export default function CheckoutPage() {
  const router = useRouter();
  const { status } = useSession();
  const { items, total, count } = useCart();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    line1: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Require login to check out (orders are created from the server-side cart).
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login?callbackUrl=/checkout");
    }
  }, [status, router]);

  const shipping = total > 999 ? 0 : 49;
  const grandTotal = total + shipping;

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: form }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Could not place order.");
        setLoading(false);
        return;
      }
      router.push("/orders?placed=1");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  if (status === "loading") {
    return (
      <div className="container-page py-24 text-center text-silver-dark">
        Loading…
      </div>
    );
  }

  if (count === 0) {
    return (
      <div className="container-page flex flex-col items-center py-24 text-center">
        <h1 className="text-2xl font-bold text-navy">Your cart is empty</h1>
        <Link
          href="/products"
          className="mt-6 rounded-lg bg-royal px-6 py-3 font-semibold text-white hover:bg-royal-dark"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-8">
      <h1 className="mb-6 text-2xl font-bold text-navy">Checkout</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Address form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-silver-light bg-white p-6 lg:col-span-2"
        >
          <h2 className="text-lg font-bold text-navy">Shipping Address</h2>
          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" value={form.fullName} onChange={(v) => update("fullName", v)} required />
            <Field label="Phone" value={form.phone} onChange={(v) => update("phone", v)} required />
          </div>
          <Field label="Address" value={form.line1} onChange={(v) => update("line1", v)} required />
          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="City" value={form.city} onChange={(v) => update("city", v)} required />
            <Field label="State" value={form.state} onChange={(v) => update("state", v)} required />
            <Field label="Pincode" value={form.pincode} onChange={(v) => update("pincode", v)} required />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Placing order…" : `Place Order · ${formatPrice(grandTotal)}`}
          </Button>
          <p className="text-center text-xs text-silver-dark">
            Cash on Delivery. Online payments coming soon.
          </p>
        </form>

        {/* Summary */}
        <div className="h-fit rounded-xl border border-silver-light bg-white p-6">
          <h2 className="mb-4 text-lg font-bold text-navy">Order Summary</h2>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="mr-2 line-clamp-1 text-silver-dark">
                  {item.name} × {item.quantity}
                </span>
                <span className="shrink-0 font-semibold">
                  {formatPrice((item.salePrice ?? item.price) * item.quantity)}
                </span>
              </div>
            ))}
          </div>
          <div className="my-4 border-t border-silver-light" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-silver-dark">Subtotal</span>
              <span className="font-semibold">{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-silver-dark">Shipping</span>
              <span className="font-semibold text-green-600">
                {shipping === 0 ? "Free" : formatPrice(shipping)}
              </span>
            </div>
          </div>
          <div className="my-4 border-t border-silver-light" />
          <div className="flex justify-between text-base font-bold text-navy">
            <span>Total</span>
            <span>{formatPrice(grandTotal)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, required }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-navy">{label}</label>
      <input
        type="text"
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-silver-dark px-3 py-2.5 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/30"
      />
    </div>
  );
}
