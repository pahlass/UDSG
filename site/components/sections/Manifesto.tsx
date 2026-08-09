import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { manifesto } from "@/content/site";

export function Manifesto() {
  return (
    <section className="border-b border-line py-24 md:py-32">
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

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14">
          {manifesto.body.map((paragraph, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
