import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { copy } from "@/config/copy";

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="rounded-xl2 border border-line bg-card p-8">
          <div className="text-xs tracking-[0.35em] text-muted">ENVIADO</div>
          <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            {copy.form.thanksTitle}
          </h1>
          <p className="mt-4 text-muted leading-relaxed">{copy.form.thanksText}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/">Voltar ao site</Button>
            <Button href="/diagnostico" variant="ghost">Enviar novamente</Button>
          </div>

          <p className="mt-6 text-sm text-muted">
            Se alguma conversa do WhatsApp não abriu, volte e envie novamente, ou libere popups para localhost.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
