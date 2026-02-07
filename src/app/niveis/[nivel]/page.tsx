import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { copy } from "@/config/copy";

export default function NivelPage({ params }: { params: { nivel: string } }) {
  const item = copy.levels.items.find((x) => x.slug === params.nivel);

  if (!item) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="max-w-3xl mx-auto px-6 py-16">
          <div className="rounded-xl2 border border-line bg-card p-8">
            <h1 className="text-2xl font-semibold">Nível não encontrado</h1>
            <p className="mt-3 text-muted">Volte para a página inicial.</p>
            <div className="mt-6">
              <Button href="/">Voltar</Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.35em] text-muted">NÍVEL IMPULSE</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">{item.name}</h1>
          <p className="mt-4 text-muted text-lg">{item.subtitle}</p>

          <div className="mt-10 rounded-xl2 border border-line bg-card p-8">
            <h2 className="text-2xl font-semibold">O que você recebe</h2>
            <p className="mt-3 text-muted">
              Esse nível existe para organizar sua evolução e evitar desperdício de tempo e dinheiro com tentativa e erro.
            </p>

            <ul className="mt-6 space-y-2 text-muted">
              {item.points.map((p: string) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-line">
              <div className="text-muted text-sm">Indicado para</div>
              <div className="mt-2 text-lg font-semibold">{item.indicatedFor}</div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={`/diagnostico?src=nivel_${item.slug}`}>Fazer diagnóstico</Button>
              <Button href="/" variant="ghost">
                Voltar ao site
              </Button>
            </div>

            <p className="mt-4 text-sm text-muted">
              Diagnóstico gratuito. Sem pressão. Primeiro clareza, depois decisão.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
