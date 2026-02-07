import Section from "./Section";
import ThoughtBubble from "./ThoughtBubble";
import { copy } from "@/config/copy";

export default function ProblemSection() {
  const variants = ["a", "b", "c", "d", "e"] as const;

  return (
    <Section id="problem" title={copy.problem.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {copy.problem.bullets.map((b, i) => (
          <ThoughtBubble key={b} text={b} variant={variants[i] ?? "a"} />
        ))}
      </div>

      <p className="mt-10 font-semibold">{copy.problem.conclusion}</p>
    </Section>
  );
}
