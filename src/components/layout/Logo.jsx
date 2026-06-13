import Image from "next/image";
import Link from "next/link";

/**
 * Brand logo. Expects the HV monogram saved at /public/images/logo.png
 * The logo art sits on a light background, so on dark (navy) bars it is
 * placed inside a white rounded badge to keep contrast clean.
 */
export default function Logo({ onBadge = true, showWordmark = true, size = 40 }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5">
      <span
        className={
          onBadge
            ? "flex items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow-sm"
            : "flex items-center justify-center"
        }
        style={{ height: size, width: size }}
      >
        <Image
          src="/images/logo.png"
          alt="Hardvanta Technologies LLP"
          width={size}
          height={size}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      {showWordmark && (
        <span className="text-xl font-extrabold tracking-tight">
          Hard<span className="text-royal-light">vanta</span>
        </span>
      )}
    </Link>
  );
}
