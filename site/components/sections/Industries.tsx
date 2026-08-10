import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { industries } from "@/content/site";

export function Industries() {
  return (
    <section id="sectores" className="border-b border-line bg-paper py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionLabel>Sectores</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-medium tracking-tight md:text-5xl">
            Infraestructura aplicada a la operación real.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            El mismo enfoque — capturar, estructurar, decidir — se aplica a
            operaciones muy distintas entre sí. Esto es lo que tienen en
            común los sectores donde construimos.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={0.05 + (i % 8) * 0.04}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-ink">
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover opacity-80 grayscale transition-all duration-500 ease-out group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 text-sm font-medium leading-tight text-paper">
                  {ind.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
