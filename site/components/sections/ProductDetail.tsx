import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Product, products } from "@/content/products";

export function ProductDetail({ product }: { product: Product }) {
  const other = products.find((p) => p.slug !== product.slug);

  return (
    <>
      <section className="border-b border-paper/10 bg-ink py-20 text-paper md:py-28">
        <Container>
          <Reveal>
            <SectionLabel tone="dark">{product.category}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-medium tracking-tight md:text-6xl">
              {product.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/60 md:text-xl">
              {product.description}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contacto">Agenda una conversación</Button>
              <Button
                href={other!.href}
                variant="secondary"
                className="border-paper/30 text-paper hover:bg-paper hover:text-ink"
              >
                Ver {other!.name}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-16 grid grid-cols-1 gap-6 border-t border-paper/10 pt-8 sm:grid-cols-3">
              {product.spec.map((s) => (
                <div key={s.label}>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-paper/40">
                    {s.label}
                  </span>
                  <p className="mt-2 text-base text-paper/80">{s.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-line bg-paper py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div>
                <SectionLabel>Para quién</SectionLabel>
                <p className="mt-6 text-xl leading-relaxed tracking-tight md:text-2xl">
                  {product.who}
                </p>
                <p className="mt-8 font-mono text-xs text-muted">
                  {product.pattern}
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {product.capabilities.map((cap, i) => (
                <Reveal key={cap.title} delay={0.06 + i * 0.05} className="bg-paper">
                  <div className="flex h-full flex-col gap-3 p-7">
                    <span className="font-mono text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-medium tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {cap.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 text-paper md:py-28">
        <Container>
          <Reveal>
            <SectionLabel tone="dark">Infraestructura</SectionLabel>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed tracking-tight md:text-2xl">
              {product.name} corre sobre{" "}
              <span className="font-medium">Pahlass Cloud</span>: hosting
              administrado, base de datos multi-tenant, autenticación y
              backups — operados por nosotros, no por ti.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
