import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { operatingModel } from "@/content/site";

export function HowWeOperate() {
  return (
    <section id="como-operamos" className="border-b border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionLabel>Cómo operamos</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-medium tracking-tight md:text-5xl">
            Tres capas, un mismo sistema.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 border-t border-line md:grid-cols-3">
          {operatingModel.map((item, i) => (
            <Reveal key={item.step} delay={0.1 + i * 0.08}>
              <div
                className={`flex h-full flex-col gap-6 border-line px-1 py-10 md:px-8 ${
                  i > 0 ? "md:border-l" : ""
                }`}
              >
                <span className="font-mono text-sm text-muted">{item.step}</span>
                <h3 className="text-2xl font-medium tracking-tight">
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
