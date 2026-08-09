import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { products } from "@/content/products";

export function Portfolio() {
  return (
    <section id="productos" className="border-b border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionLabel>Portafolio</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-medium tracking-tight md:text-5xl">
            Un motor. Dos nichos, cada uno con su propio patrón.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Newton y Pahlass Hales corren sobre Pahlass Cloud: hosting
            administrado, base de datos multi-tenant, autenticación y backups
            operados por nosotros.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={0.15 + i * 0.08}>
              <Link
                href={product.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-line p-8 transition-colors duration-300 hover:border-ink md:p-10"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                      {product.category}
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                  </div>
                  <h3 className="mt-6 text-3xl font-medium tracking-tight">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {product.tagline}
                  </p>
                </div>

                <p className="mt-10 border-t border-line pt-6 font-mono text-xs text-muted">
                  {product.pattern}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
