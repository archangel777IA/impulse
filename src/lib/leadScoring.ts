type Answers = Record<string, any>;

export function scoreLead(a: Answers) {
  const profile = String(a.profile ?? "");
  const weeklyTime = String(a.weeklyTime ?? "");
  const commitment = String(a.commitment ?? "");
  const investmentMindset = String(a.investmentMindset ?? "");
  const selfStatement = String(a.selfStatement ?? "");

  let tier: "FOUNDATION" | "DEVELOPMENT" | "ECOSYSTEM" = "FOUNDATION";

  const scaleSignals =
    commitment.includes("negócio") ||
    selfStatement.includes("escalar") ||
    investmentMindset.includes("escalar");

  const devSignals =
    profile.includes("lanço") ||
    profile.includes("produzo") ||
    investmentMindset.includes("planejado") ||
    investmentMindset.includes("estratégico");

  if (scaleSignals && (weeklyTime.includes("10–20") || weeklyTime.includes("Mais de 20"))) tier = "ECOSYSTEM";
  else if (devSignals) tier = "DEVELOPMENT";

  const urgency =
    String(a.decisionPosture ?? "").includes("o quanto antes") ? "ALTA" :
    String(a.decisionPosture ?? "").includes("ainda essa semana") ? "MÉDIA" :
    "BAIXA";

  return {
    tier,
    urgency,
    summary: {
      profile,
      weeklyTime,
      commitment,
      investmentMindset,
    },
  };
}
