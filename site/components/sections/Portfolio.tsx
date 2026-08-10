import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { products } from "@/content/products";

export function Portfolio() {
  return (
    <section
      id="productos"
      className="border-b border-paper/10 bg-ink py-24 text-paper md:py-32"
    >
      <Container>
        <Reveal>
          <SectionLabel tone="dark">Portafolio</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-medium tracking-tight md:text-5xl">
            Un motor. Dos nichos, cada uno con su propio patrón.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/55 md:text-lg">
            Newton y Hales corren sobre Pahlass Cloud: hosting administrado,
            base de datos multi-tenant, autenticación y backups operados por
            nosotros. Cada producto tiene su propio modelo de datos y su
            propio patrón operativo.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={0.15 + i * 0.08}>
              <Link
                href={product.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-paper/15 p-8 transition-colors duration-300 hover:border-paper/40 md:p-10"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper/45">
                      {product.category}
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-paper/45 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-paper" />
                  </div>
                  <h3 className="mt-6 text-3xl font-medium tracking-tight">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-paper/60">
                    {product.description}
                  </p>
                </div>

                <div className="mt-10 flex flex-col gap-2 border-t border-paper/10 pt-6">
                  {product.spec.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center justify-between gap-4 font-mono text-xs text-paper/40"
                    >
                      <span>{s.label}</span>
                      <span className="text-paper/65">{s.value}</span>
                    </div>
                  ))}
                  <p className="mt-3 font-mono text-xs text-paper/45">
                    {product.pattern}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
