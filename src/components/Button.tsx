import Link from "next/link";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({ href, onClick, children, variant = "primary", type = "button", disabled }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition border";
  const styles =
    variant === "primary"
      ? "bg-accent text-black border-accent hover:opacity-90"
      : "bg-transparent text-fg border-line hover:border-fg/40";
  if (href) {
    return (
      <Link className={`${base} ${styles}`} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${styles} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}>
      {children}
    </button>
  );
}
