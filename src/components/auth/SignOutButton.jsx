"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="inline-flex items-center gap-2 rounded-lg border border-silver-dark px-4 py-2 text-sm font-semibold text-navy hover:border-royal hover:text-royal"
    >
      <LogOut size={16} /> Sign out
    </button>
  );
}
