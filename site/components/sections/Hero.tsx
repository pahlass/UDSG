"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

const records = [
  { id: "REG-04821", stage: "capturado", status: "ok" },
  { id: "REG-04822", stage: "estructurado", status: "ok" },
  { id: "REG-04823", stage: "decisión → alerta", status: "activa" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <Container className="grid grid-cols-1 gap-16 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            {siteConfig.legalName}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-balance text-[2.5rem] font-medium leading-[1.08] tracking-tight md:text-6xl lg:text-[4.25rem]"
          >
            Convertimos la operación dispersa en decisiones.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            {siteConfig.tagline}. Construimos la infraestructura que estructura la
            operación de tu organización y la convierte en algo sobre lo que se
            puede decidir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/contacto">Agenda una conversación</Button>
            <Button href="/#como-operamos" variant="secondary">
              Cómo operamos
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-2xl border border-line bg-haze p-6 font-mono text-xs text-ink/70 md:p-7"
        >
          <div className="flex items-center justify-between border-b border-line pb-4">
            <span className="uppercase tracking-[0.2em] text-muted">
              pahlass_cloud / pipeline
            </span>
            <span className="flex h-2 w-2 rounded-full bg-ink" />
          </div>
          <ul className="mt-4 flex flex-col gap-3">
            {records.map((r, i) => (
              <li
                key={r.id}
                className="flex items-center justify-between gap-4 border-b border-line/60 pb-3 last:border-none last:pb-0"
              >
                <span className="text-ink">{r.id}</span>
                <span className="text-muted">{r.stage}</span>
                <span
                  className={
                    i === records.length - 1
                      ? "text-ink font-semibold"
                      : "text-muted"
                  }
                >
                  {r.status}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-muted">
            Cada registro pasa por la misma ruta: captura → estructura → decisión.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
