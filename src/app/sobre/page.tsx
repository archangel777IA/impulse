import Link from "next/link";

export const metadata = {
  title: "Sobre | Impulse",
  description:
    "Impulse não é venda de conhecimento. É acompanhamento de carreira e desenvolvimento artístico.",
};

export default function SobrePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 md:py-20">
      {/* Topo */}
      <section className="space-y-8">
        <div className="inline-flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-white/70" />
          <span className="text-xs tracking-[0.35em] text-white/60">
            SOBRE A IMPULSE
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
            Impulse não é venda de conhecimento,
            <span className="block text-white/80">
              é acompanhamento de carreira e desenvolvimento artístico.
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl">
            Sabe aqueles detalhes que a maioria das empresas deixa passar? Nós damos atenção,
            extraindo o máximo de qualidade e expressão que o seu projeto musical pode alcançar.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href="/diagnostico?src=sobre"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-black bg-white hover:opacity-90 transition"
          >
            Fazer diagnóstico
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium border border-white/15 text-white/80 hover:text-white transition"
          >
            Voltar para a home
          </Link>
        </div>
      </section>

      {/* Separador */}
      <div className="my-14 md:my-16 border-t border-white/10" />

      {/* Corpo editorial */}
      <section className="grid gap-10 md:grid-cols-12">
        {/* Coluna esquerda */}
        <div className="md:col-span-7 space-y-10">
          <div className="space-y-3 text-white/75 leading-relaxed">
            <p>Você dá a ideia, a gente desenvolve. Simples e direto.</p>
            <p>
              A gente não veio para resolver problemas. A gente veio para trazer clareza sobre
              onde você quer chegar com sua música, e construir posicionamento real para sua arte.
            </p>
          </div>

          {/* Destaque editorial */}
          <div className="relative">
            <div className="absolute -left-3 top-0 bottom-0 w-[2px] bg-white/20" />
            <div className="pl-6 space-y-4">
              <p className="text-xl md:text-2xl font-semibold text-white leading-snug">
                Posicionamento relevante para sua expressão.
              </p>

              <p className="text-white/75 leading-relaxed">
                Nós atendemos aqueles artistas que desejam ter independência, decidir quando
                lançar, o que lançar e como lançar, sem depender de datas de terceiros, mantendo
                o controle do próprio projeto nas próprias mãos.
              </p>

              <p className="text-white/70 leading-relaxed">
                Não é maquiagem. Não é promessa vazia. É estrutura para a sua música falar com
                verdade, com consistência e presença.
              </p>
            </div>
          </div>
        </div>

        {/* Coluna direita */}
        <div className="md:col-span-5 space-y-8">
          <div className="text-xs tracking-[0.35em] text-white/50">PILARES</div>

          <div className="space-y-8">
            <div className="space-y-2">
              <div className="text-white font-semibold text-lg">Atenção ao detalhe</div>
              <div className="h-[1px] bg-white/10" />
              <p className="text-white/70 leading-relaxed">
                A maioria ignora. Nós olhamos. Extraímos expressão e qualidade até o projeto
                comunicar o que ele realmente é.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-white font-semibold text-lg">
                Clareza antes de qualquer movimento
              </div>
              <div className="h-[1px] bg-white/10" />
              <p className="text-white/70 leading-relaxed">
                Clareza sobre o destino. Direção no caminho. Sem ruído. Sem conteúdo que não vira
                decisão.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-white font-semibold text-lg">
                Execução simples e direta
              </div>
              <div className="h-[1px] bg-white/10" />
              <p className="text-white/70 leading-relaxed">
                Você dá a ideia, a gente desenvolve. Com critério técnico, consistência e
                posicionamento real.
              </p>
            </div>
          </div>

          {/* CTA lateral */}
          <div className="pt-2">
            <Link
              href="/diagnostico?src=sobre-bottom"
              className="inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-black bg-white hover:opacity-90 transition"
            >
              Quero clareza no meu projeto
            </Link>
            <p className="mt-3 text-xs text-white/50 text-center">
              A análise orienta o próximo passo com honestidade.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
