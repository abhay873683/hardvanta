export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-royal/40";
  const variants = {
    primary:
      "bg-royal text-white hover:bg-royal-dark shadow-sm hover:shadow-md",
    secondary:
      "bg-navy text-white hover:bg-navy-light",
    outline:
      "border border-silver-dark text-navy bg-white hover:border-royal hover:text-royal",
    ghost: "text-navy hover:bg-silver-light",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base",
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
