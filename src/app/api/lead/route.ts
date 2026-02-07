import { NextResponse } from "next/server";

function safe(v: any) {
  return String(v ?? "").trim();
}

function buildMessage(body: any) {
  const a = body?.answers ?? {};
  const s = body?.scoring ?? {};
  const origin = safe(body?.meta?.url);

  return [
    "NOVO DIAGNÓSTICO IMPULSE",
    "",
    `Nome: ${safe(a.contactName)}`,
    `Instagram: ${safe(a.contactInstagram)}`,
    `WhatsApp: ${safe(a.contactWhatsapp)}`,
    `E-mail: ${safe(a.contactEmail)}`,
    "",
    "RESUMO DO ARTISTA",
    `Como se define: ${safe(a.profile)}`,
    `Estilo: ${safe(a.style)}`,
    `Motivo: ${safe(a.reason)}`,
    `Frase: ${safe(a.selfStatement)}`,
    `Maior desafio: ${safe(a.biggestChallenge)}`,
    `Compromisso: ${safe(a.commitment)}`,
    `Tempo por semana: ${safe(a.weeklyTime)}`,
    `Mentalidade de investimento: ${safe(a.investmentMindset)}`,
    `Postura de decisão: ${safe(a.decisionPosture)}`,
    "",
    "QUALIFICAÇÃO AUTOMÁTICA",
    `Nível sugerido: ${safe(s.tier)}`,
    `Urgência: ${safe(s.urgency)}`,
    "",
    `Origem: ${origin || "não informada"}`,
    "",
    "Próximo passo: conversa estratégica."
  ].join("\n");
}

function waLink(phoneWithDDI: string, text: string) {
  return `https://wa.me/${phoneWithDDI}?text=${encodeURIComponent(text)}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = buildMessage(body);

    const whatsapp = "5511967470576";
    const link = waLink(whatsapp, message);

    return NextResponse.json({ ok: true, link });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: error?.message ?? "Erro interno" },
      { status: 500 }
    );
  }
}
