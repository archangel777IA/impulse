export default function ThoughtBubble({
  text,
  variant = "a",
}: {
  text: string;
  variant?: "a" | "b" | "c" | "d" | "e";
}) {
  const v =
    variant === "a"
      ? "rotate-[-0.5deg]"
      : variant === "b"
      ? "rotate-[0.5deg]"
      : variant === "c"
      ? "rotate-[-0.25deg]"
      : variant === "d"
      ? "rotate-[0.25deg]"
      : "rotate-0";

  return (
    <div className={`relative ${v}`}>
      <div className="relative rounded-[999px] border border-white/20 bg-white/5 px-7 py-5 backdrop-blur">
        {/* Contorno interno para efeito cartoon */}
        <div className="pointer-events-none absolute inset-0 rounded-[999px] ring-1 ring-white/10" />
        <div className="text-lg md:text-xl text-white/85 leading-snug">{text}</div>
      </div>

      {/* Bolinhas do pensamento */}
      <span className="absolute -bottom-3 left-12 h-3.5 w-3.5 rounded-full border border-white/20 bg-white/5 ring-1 ring-white/10" />
      <span className="absolute -bottom-7 left-8 h-2.5 w-2.5 rounded-full border border-white/20 bg-white/5 ring-1 ring-white/10" />
      <span className="absolute -bottom-10 left-5 h-1.5 w-1.5 rounded-full border border-white/20 bg-white/5 ring-1 ring-white/10" />
    </div>
  );
}
