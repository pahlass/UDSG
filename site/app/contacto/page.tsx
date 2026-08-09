import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Agenda una conversación con Pahlass.",
};

export default function ContactoPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <SectionLabel>Contacto</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-balance text-4xl font-medium tracking-tight md:text-5xl">
                Cuéntanos cómo opera tu organización.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
                Una conversación de 30 minutos para entender tu operación y
                decirte, con honestidad, si podemos construir algo que la
                mejore.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-10 font-mono text-xs text-muted">
                {siteConfig.email}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
