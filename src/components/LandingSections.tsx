import Link from "next/link";
import Section from "./Section";
import Button from "./Button";
import ProblemSection from "./ProblemSection";
import { copy } from "@/config/copy";

export default function LandingSections() {
  return (
    <>
      {/* HERO */}
      <section id="hero" className="pt-14 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.35em] text-muted">
              DESENVOLVIMENTO ARTÍSTICO
            </p>

            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight">
              {copy.hero.headline}
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted">
              {copy.hero.subheadline}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Button href="/diagnostico?src=hero">
                {copy.hero.cta}
              </Button>
              <Button href="#levels" variant="ghost">
                Ver níveis
              </Button>
            </div>

            <p className="mt-4 text-sm text-muted">
              {copy.hero.lowRisk}
            </p>
          </div>

          {/* CARDS OBJETIVO / FERRAMENTA / NECESSIDADE */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl2 border border-line bg-card p-5">
              <div className="text-xs tracking-widest text-muted uppercase">
                Objetivo
              </div>
              <div className="mt-2 font-semibold">
                Som com direção
              </div>
            </div>

            <div className="rounded-xl2 border border-line bg-card p-5">
              <div className="text-xs tracking-widest text-muted uppercase">
                Ferramenta
              </div>
              <div className="mt-2 font-semibold">
                Identidade que sustenta
              </div>
            </div>

            <div className="rounded-xl2 border border-line bg-card p-5">
              <div className="text-xs tracking-widest text-muted uppercase">
                Necessidade
              </div>
              <div className="mt-2 font-semibold">
                Estratégia que organiza
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <ProblemSection />

      {/* SOLUÇÃO */}
      <Section id="solution" title={copy.solution.title}>
        <div className="space-y-3 text-muted leading-relaxed">
          {copy.solution.text.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      {/* NÍVEIS */}
      <Section id="levels" title={copy.levels.title}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {copy.levels.items.map((it) => (
            <Link
              key={it.slug}
              href={`/niveis/${it.slug}`}
              className="rounded-xl2 border border-line bg-card p-6 flex flex-col hover:border-fg/40 transition"
            >
              <div className="text-xs tracking-[0.25em] text-muted">
                {it.subtitle}
              </div>

              <div className="mt-2 text-lg font-semibold">
                {it.name}
              </div>

              <ul className="mt-5 space-y-2 text-sm text-muted">
                {it.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-line text-sm">
                <div className="text-muted">Indicado para</div>
                <div className="mt-1">{it.indicatedFor}</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* COMO FUNCIONA */}
      <Section id="how" title={copy.how.title}>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted">
          {copy.how.steps.map((s, i) => (
            <li
              key={s}
              className="rounded-xl2 border border-line bg-card p-4"
            >
              <span className="text-fg font-semibold mr-2">
                {i + 1}.
              </span>
              {s}
            </li>
          ))}
        </ol>

        <p className="mt-6 text-sm text-muted">
          {copy.how.note}
        </p>
      </Section>

      {/* CTA FINAL */}
      <section id="cta" className="py-16 border-t border-line">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-xl2 border border-line bg-card p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-2xl md:text-3xl font-semibold">
                {copy.finalCta.title}
              </div>
              <div className="mt-2 text-muted">
                Comece com um diagnóstico. Clareza antes de qualquer decisão.
              </div>
            </div>

            <div className="flex gap-3">
              <Button href="/diagnostico?src=final">
                {copy.finalCta.button}
              </Button>
              <Button href="#hero" variant="ghost">
                Voltar ao topo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
