import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* overlay do fundo */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
              Clareza, direção e
              <span className="block text-white/80">
                posicionamento real para sua carreira artística.
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-white/60 font-normal -mt-2">
              Leve sua música mais longe.
            </p>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              A Impulse acompanha artistas que desejam estruturar a carreira
              musical com autonomia, consciência e decisões bem direcionadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/diagnostico?src=hero"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-medium text-black bg-white hover:opacity-90 transition"
              >
                Fazer diagnóstico
              </Link>

              <a
                href="/#problem"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-medium border border-white/20 text-white/80 hover:text-white transition"
              >
                Entender melhor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section
        id="problem"
        className="relative py-24 md:py-32 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto px-6 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6 space-y-6">
            <div className="text-xs tracking-[0.35em] text-white/50">
              O PROBLEMA
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Informação não falta.
              <span className="block text-white/80">Falta direção.</span>
            </h2>

            <p className="text-white/70 leading-relaxed">
              A maioria dos artistas até estuda, consome conteúdo e produz,
              mas continua travado por não saber qual decisão tomar,
              quando avançar e o que realmente importa agora.
            </p>

            <p className="text-white/60 leading-relaxed">
              Sem clareza, toda ação vira tentativa. E tentativa constante
              não constrói posicionamento.
            </p>
          </div>

          <div className="md:col-span-6 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-white/80 leading-relaxed">
                A Impulse não entrega atalhos, nem fórmulas genéricas.
                Entregamos estrutura para decisões conscientes
                e crescimento consistente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEVELS */}
      <section
        id="levels"
        className="relative py-24 md:py-32 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto px-6 space-y-14">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs tracking-[0.35em] text-white/50">
              NÍVEIS
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Cada artista está em um momento
            </h2>

            <p className="text-white/70 leading-relaxed">
              Não existe solução única. Existe leitura correta do estágio
              e execução compatível com ele.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Início",
                text: "Para quem está começando e precisa organizar base, identidade e rotina.",
              },
              {
                title: "Desenvolvimento",
                text: "Para quem já produz, mas precisa clarear posicionamento e próximos passos.",
              },
              {
                title: "Escala",
                text: "Para quem já lança e busca consistência, estratégia e expansão.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black/40 p-6 space-y-3"
              >
                <div className="text-lg font-semibold text-white">
                  {item.title}
                </div>
                <p className="text-white/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section
        id="how"
        className="relative py-24 md:py-32 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto px-6 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 space-y-6">
            <div className="text-xs tracking-[0.35em] text-white/50">
              COMO FUNCIONA
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Acompanhamento, não promessa
            </h2>

            <p className="text-white/70 leading-relaxed">
              O processo começa com diagnóstico, passa por leitura estratégica
              e se desenvolve com acompanhamento real.
            </p>

            <p className="text-white/60 leading-relaxed">
              Sem ilusão, sem empurrar pacotes. Clareza primeiro,
              execução depois.
            </p>
          </div>

          <div className="md:col-span-5 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <ol className="space-y-4 text-white/80">
                <li>1. Diagnóstico do momento artístico</li>
                <li>2. Leitura estratégica e direcionamento</li>
                <li>3. Acompanhamento e evolução contínua</li>
              </ol>
            </div>

            <Link
              href="/diagnostico?src=how"
              className="inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-medium text-black bg-white hover:opacity-90 transition"
            >
              Iniciar diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
