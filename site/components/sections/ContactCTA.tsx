import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ContactCTA() {
  return (
    <section className="bg-ink py-24 text-paper md:py-32">
      <Container>
        <Reveal>
          <SectionLabel tone="dark">Siguiente paso</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-2xl text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Cuéntanos cómo opera tu organización.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/55 md:text-lg">
            Una conversación de 30 minutos para entender tu operación y
            decirte, con honestidad, si podemos construir algo que la
            mejore. Sin propuesta genérica antes de esa conversación.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10">
            <Button
              href="/contacto"
              variant="secondary"
              className="border-paper text-paper hover:bg-paper hover:text-ink"
            >
              Agenda una conversación
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
