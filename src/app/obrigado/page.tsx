import Link from "next/link";

export default function ObrigadoPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <div className="text-xs tracking-[0.35em] text-white/50">ENVIADO</div>

        <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-white">
          Diagnóstico enviado.
        </h1>

        <p className="mt-4 text-white/70 leading-relaxed">
          Se o WhatsApp não abriu automaticamente, toque no botão abaixo para continuar.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/5511997429410"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-medium text-black bg-white hover:opacity-90 transition"
          >
            Abrir WhatsApp
          </a>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-medium border border-white/20 text-white/80 hover:text-white transition"
          >
            Voltar para a home
          </Link>
        </div>
      </div>
    </main>
  );
}