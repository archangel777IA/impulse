"use client";

import { useMemo, useState } from "react";
import Button from "./Button";
import { copy } from "@/config/copy";
import { scoreLead } from "@/lib/leadScoring";

type Answers = {
  profile?: string;
  style?: string;
  reason?: string;
  selfStatement?: string;
  biggestChallenge?: string;
  commitment?: string;
  weeklyTime?: string;
  investmentMindset?: string;
  decisionPosture?: string;

  contactName?: string;
  contactInstagram?: string;
  contactWhatsapp?: string;
  contactEmail?: string;
};

type Step =
  | { key: keyof Answers; label: string; type: "radio"; options: string[] }
  | { key: keyof Answers; label: string; type: "text"; placeholder?: string }
  | { key: keyof Answers; label: string; type: "textarea"; placeholder?: string };

export default function DiagnosticForm() {
  const steps: Step[] = useMemo(
    () => [
      {
        key: "profile",
        label: "1) Como você se define hoje na música?",
        type: "radio",
        options: ["Estou começando", "Já produzo há um tempo", "Já lanço músicas", "Já toco / já tenho público"],
      },
      { key: "style", label: "2) Qual estilo você produz?", type: "text", placeholder: "Ex: Psytrance, Progressive, Techno..." },
      { key: "reason", label: "3) O que te trouxe até a Impulse hoje?", type: "textarea", placeholder: "Conte o que você quer destravar." },

      {
        key: "selfStatement",
        label: "4) Qual dessas frases mais parece com você?",
        type: "radio",
        options: ["Tenho talento, mas me sinto perdido", "Evoluí no som, mas não sei crescer", "Tenho público, mas falta estrutura", "Quero escalar meu projeto"],
      },
      {
        key: "biggestChallenge",
        label: "5) Hoje, seu maior desafio é:",
        type: "radio",
        options: ["Som", "Imagem", "Estratégia", "Disciplina / direção", "Tudo isso junto"],
      },

      {
        key: "commitment",
        label: "6) Qual seu nível de comprometimento com seu projeto artístico?",
        type: "radio",
        options: ["É um hobby sério", "Quero transformar em carreira", "Já trato como negócio"],
      },
      {
        key: "weeklyTime",
        label: "7) Quanto tempo você consegue dedicar por semana ao seu projeto?",
        type: "radio",
        options: ["Até 5h", "5–10h", "10–20h", "Mais de 20h"],
      },

      {
        key: "investmentMindset",
        label: "8) Para você, investir em desenvolvimento artístico hoje significa:",
        type: "radio",
        options: ["Algo que precisa ser muito acessível", "Um investimento planejado", "Algo estratégico para crescer", "Algo necessário para escalar"],
      },

      {
        key: "decisionPosture",
        label: "9) Se encontrarmos a estrutura certa para você, qual sua postura?",
        type: "radio",
        options: ["Quero entender melhor antes de decidir", "Posso decidir ainda essa semana", "Quero avançar o quanto antes"],
      },

      { key: "contactName", label: "Seu nome", type: "text", placeholder: "Como podemos te chamar?" },
      { key: "contactInstagram", label: "Seu Instagram", type: "text", placeholder: "@seuperfil" },
      { key: "contactWhatsapp", label: "WhatsApp (opcional)", type: "text", placeholder: "(DDD) 99999-9999" },
      { key: "contactEmail", label: "E-mail (opcional)", type: "text", placeholder: "voce@exemplo.com" },
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const step = steps[idx];
  const total = steps.length;
  const progress = Math.round(((idx + 1) / total) * 100);

  function setValue(key: keyof Answers, value: string) {
    setAnswers((a) => ({ ...a, [key]: value }));
  }

  function canNext(): boolean {
    const v = answers[step.key];
    // contato é opcional, mas vamos validar no submit
    if (step.key === "contactWhatsapp" || step.key === "contactEmail") return true;

    if (!v || String(v).trim().length === 0) return false;
    return true;
  }

  async function submit() {
    setLoading(true);
    setErr(null);

    try {
      const hasWhatsapp = String(answers.contactWhatsapp ?? "").trim().length > 0;
      const hasEmail = String(answers.contactEmail ?? "").trim().length > 0;

      if (!hasWhatsapp && !hasEmail) {
        setErr("Informe WhatsApp ou e-mail para contato.");
        setLoading(false);
        return;
      }

      const scoring = scoreLead(answers);

      const payload = {
        answers,
        scoring,
        meta: {
          url: typeof window !== "undefined" ? window.location.href : "",
          ts: new Date().toISOString(),
        },
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Falha ao enviar. Tente novamente.");

      const data = (await res.json()) as { ok: boolean; link?: string };

      if (!data.ok || !data.link) {
        throw new Error("Não foi possível gerar o link do WhatsApp.");
      }

      window.open(data.link, "_blank", "noopener,noreferrer");
      window.location.href = "/obrigado";
    } catch (e: any) {
      setErr(e?.message ?? "Falha ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="text-xs tracking-[0.35em] text-muted">DIAGNÓSTICO</div>
      <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">{copy.form.title}</h1>
      <p className="mt-3 text-muted">{copy.form.subtitle}</p>

      <div className="mt-8 rounded-xl2 border border-line bg-card p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm text-muted">
            Etapa {idx + 1} de {total}
          </div>
          <div className="text-sm text-muted">{progress}%</div>
        </div>

        <div className="mt-3 h-2 w-full rounded-full bg-bg border border-line overflow-hidden">
          <div className="h-full bg-accent" style={{ width: `${progress}%` }} />
        </div>

        <div className="mt-8">
          <div className="text-lg font-semibold">{step.label}</div>

          {step.type === "radio" ? (
            <div className="mt-4 grid gap-3">
              {step.options.map((opt) => {
                const selected = answers[step.key] === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setValue(step.key, opt)}
                    className={[
                      "text-left rounded-xl2 border p-4 transition",
                      selected ? "border-accent bg-bg" : "border-line bg-card hover:border-fg/40",
                    ].join(" ")}
                  >
                    <div className="font-medium">{opt}</div>
                  </button>
                );
              })}
            </div>
          ) : null}

          {step.type === "text" ? (
            <input
              value={(answers[step.key] as string) ?? ""}
              onChange={(e) => setValue(step.key, e.target.value)}
              placeholder={step.placeholder}
              className="mt-4 w-full rounded-xl2 border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted outline-none focus:border-accent"
            />
          ) : null}

          {step.type === "textarea" ? (
            <textarea
              value={(answers[step.key] as string) ?? ""}
              onChange={(e) => setValue(step.key, e.target.value)}
              placeholder={step.placeholder}
              rows={5}
              className="mt-4 w-full rounded-xl2 border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted outline-none focus:border-accent"
            />
          ) : null}

          {err ? <div className="mt-4 text-sm text-accent">{err}</div> : null}

          <div className="mt-8 flex items-center justify-between gap-3">
            <Button variant="ghost" onClick={() => setIdx((i) => Math.max(0, i - 1))} disabled={idx === 0 || loading}>
              Voltar
            </Button>

            {idx < total - 1 ? (
              <Button onClick={() => setIdx((i) => i + 1)} disabled={!canNext() || loading}>
                Próximo
              </Button>
            ) : (
              <Button onClick={submit} disabled={loading} type="button">
                {loading ? "Enviando..." : "Enviar diagnóstico"}
              </Button>
            )}
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted">Sem pressão. Sem empurrar pacote. Primeiro, clareza.</p>
    </div>
  );
}
