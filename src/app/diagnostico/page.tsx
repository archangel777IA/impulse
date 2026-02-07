import DiagnosticForm from "@/components/DiagnosticForm";
import { copy } from "@/config/copy";

export const metadata = {
  title: "Diagnóstico | Impulse",
  description: "Formulário de diagnóstico artístico para direcionamento e posicionamento real.",
};

export default function DiagnosticoPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
          {copy.form.title}
        </h1>
        <p className="text-white/70 leading-relaxed">
          {copy.form.subtitle}
        </p>
      </div>

      <div className="mt-10">
        <DiagnosticForm />
      </div>
    </main>
  );
}
