import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { differentiators } from "@/content/site";

export function WhyPahlass() {
  return (
    <section id="por-que-pahlass" className="border-b border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionLabel>Por qué Pahlass</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-medium tracking-tight md:text-5xl">
            No integramos herramientas. Operamos infraestructura.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={0.1 + i * 0.06} className="bg-paper">
              <div className="flex h-full flex-col gap-4 p-8 md:p-10">
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
