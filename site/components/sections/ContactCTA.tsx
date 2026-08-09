import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="rounded-2xl bg-ink px-8 py-16 text-paper md:px-16 md:py-24">
            <p className="max-w-2xl text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              Cuéntanos cómo opera tu organización.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/60 md:text-lg">
              Una conversación de 30 minutos para entender tu operación y decirte,
              con honestidad, si podemos construir algo que la mejore.
            </p>
            <div className="mt-10">
              <Button href="/contacto" variant="secondary" className="border-paper text-paper hover:bg-paper hover:text-ink">
                Agenda una conversación
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
