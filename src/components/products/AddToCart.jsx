"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function AddToCart({ product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const outOfStock = product.stock <= 0;

  async function handleAdd() {
    await addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="rounded-lg border border-silver p-2 hover:border-royal"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <span className="w-10 text-center font-semibold text-navy">{qty}</span>
        <button
          onClick={() => setQty((q) => q + 1)}
          className="rounded-lg border border-silver p-2 hover:border-royal"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>

      <button
        onClick={handleAdd}
        disabled={outOfStock}
        className="inline-flex items-center gap-2 rounded-lg bg-royal px-6 py-3 font-semibold text-white transition-colors hover:bg-royal-dark disabled:cursor-not-allowed disabled:opacity-50"
      >
        {added ? (
          <>
            <Check size={18} /> Added
          </>
        ) : (
          <>
            <ShoppingCart size={18} /> {outOfStock ? "Out of stock" : "Add to cart"}
          </>
        )}
      </button>
    </div>
  );
}
