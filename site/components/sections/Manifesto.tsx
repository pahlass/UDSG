import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { manifesto } from "@/content/site";

export function Manifesto() {
  return (
    <section className="border-b border-line bg-paper py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionLabel>{manifesto.kicker}</SectionLabel>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-8 max-w-4xl text-balance text-2xl font-medium leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">
            {manifesto.quote}{" "}
            <span className="text-muted">{manifesto.resolution}</span>
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-line pt-12 md:grid-cols-3 md:gap-12">
          {manifesto.body.map((paragraph, i) => (
            <Reveal key={i} delay={0.1 + i * 0.06}>
              <span className="font-mono text-xs text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-[1.05rem]">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
