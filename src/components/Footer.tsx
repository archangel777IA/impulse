export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-6">
          <div
            className="flex justify-center"
            style={{
              filter:
                "drop-shadow(0 0 28px rgba(183,148,244,0.28)) drop-shadow(0 0 64px rgba(183,148,244,0.18))",
            }}
          >
            <img
              src="/logo-impulse.png"
              alt="Impulse"
              className="h-40 sm:h-56 md:h-96 w-auto max-w-[95%] brightness-0 invert opacity-95"
              draggable={false}
            />
          </div>

          <div className="text-xs tracking-widest text-white/80">
            2026 - IMPULSE, TODOS OS DIREITOS RESERVADOS
          </div>
        </div>
      </div>
    </footer>
  );
}
