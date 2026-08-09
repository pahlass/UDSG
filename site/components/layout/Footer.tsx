import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site";
import { products } from "@/content/products";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/pahlass-logo-white.png"
              alt={siteConfig.name}
              width={140}
              height={32}
              className="h-6 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
              {siteConfig.tagline}.
            </p>
          </div>

          <FooterColumn
            title="Productos"
            links={products.map((p) => ({ label: p.name, href: p.href }))}
          />

          <FooterColumn
            title="Compañía"
            links={[
              { label: "Cómo operamos", href: "/#como-operamos" },
              { label: "Por qué Pahlass", href: "/#por-que-pahlass" },
              { label: "Contacto", href: "/contacto" },
            ]}
          />

          <FooterColumn
            title="Contacto"
            links={[{ label: siteConfig.email, href: `mailto:${siteConfig.email}` }]}
          />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {siteConfig.legalName}. Todos los derechos
            reservados.
          </span>
          <span className="font-mono">Pahlass Cloud — infraestructura propia</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-paper/40">
        {title}
      </h3>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-paper/70 transition-colors duration-200 hover:text-paper"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
