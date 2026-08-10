import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { operatingModel } from "@/content/site";

export function HowWeOperate() {
  return (
    <section
      id="como-operamos"
      className="border-b border-paper/10 bg-ink py-24 text-paper md:py-32"
    >
      <Container>
        <Reveal>
          <SectionLabel tone="dark">Cómo operamos</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-medium tracking-tight md:text-5xl">
            Tres capas, un mismo sistema.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/55 md:text-lg">
            No son fases de un proyecto que se entrega y termina. Son tres
            capas que operan juntas, de forma continua, mientras el sistema
            está en producción.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 border-t border-paper/10 md:grid-cols-3">
          {operatingModel.map((item, i) => (
            <Reveal key={item.step} delay={0.12 + i * 0.08}>
              <div
                className={`flex h-full flex-col gap-6 border-paper/10 px-1 py-10 md:px-8 ${
                  i > 0 ? "md:border-l" : ""
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-paper/40">
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-paper/60">
                  {item.description}
                </p>
                <ul className="mt-2 flex flex-col gap-3 border-t border-paper/10 pt-5">
                  {item.details.map((d) => (
                    <li
                      key={d}
                      className="font-mono text-xs leading-relaxed text-paper/40"
                    >
                      — {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
