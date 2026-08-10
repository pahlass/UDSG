"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

const records = [
  { id: "REG-04821", stage: "capturado", status: "ok" },
  { id: "REG-04822", stage: "estructurado", status: "ok" },
  { id: "REG-04823", stage: "estructurado", status: "ok" },
  { id: "REG-04824", stage: "decisión → alerta", status: "activa" },
];

const stats = [
  { value: "3", label: "capas de infraestructura, un mismo sistema" },
  { value: "2", label: "productos corriendo sobre el mismo motor" },
  { value: "24/7", label: "operación de hosting, backups y autenticación" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-paper/10 bg-ink text-paper">
      <Container className="grid grid-cols-1 gap-16 pb-16 pt-14 md:pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:pt-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50"
          >
            {siteConfig.legalName} — Infraestructura operativa
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-balance text-[2.6rem] font-medium leading-[1.04] tracking-tight md:text-6xl lg:text-[4.75rem]"
          >
            La infraestructura que convierte la operación de tu organización
            en decisiones.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/65 md:text-xl"
          >
            Diseñamos e implementamos los sistemas que capturan cada
            inscripción, cobro, expediente y transacción en el momento en que
            ocurre, los estructuran en un modelo de datos consistente, y
            exponen esa estructura como paneles y alertas que tu equipo usa
            todos los días — no reportes que nadie revisa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/contacto">Agenda una conversación</Button>
            <Button
              href="/#como-operamos"
              variant="secondary"
              className="border-paper/30 text-paper hover:bg-paper hover:text-ink"
            >
              Cómo operamos
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 grid grid-cols-1 gap-8 border-t border-paper/10 pt-10 sm:grid-cols-3"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-mono text-3xl tracking-tight">
                  {s.value}
                </div>
                <p className="mt-2 text-sm leading-snug text-paper/50">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-2xl border border-paper/15 bg-white/[0.03] p-6 font-mono text-xs text-paper/60 md:p-7"
        >
          <div className="flex items-center justify-between border-b border-paper/15 pb-4">
            <span className="uppercase tracking-[0.2em] text-paper/40">
              pahlass_cloud / pipeline
            </span>
            <span className="flex h-2 w-2 rounded-full bg-paper" />
          </div>
          <ul className="mt-4 flex flex-col gap-3">
            {records.map((r, i) => (
              <li
                key={r.id}
                className="flex items-center justify-between gap-4 border-b border-paper/10 pb-3 last:border-none last:pb-0"
              >
                <span className="text-paper/90">{r.id}</span>
                <span className="text-paper/45">{r.stage}</span>
                <span
                  className={
                    i === records.length - 1
                      ? "font-semibold text-paper"
                      : "text-paper/45"
                  }
                >
                  {r.status}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-2 border-t border-paper/15 pt-5 text-paper/40">
            <div className="flex items-center justify-between">
              <span>latencia captura → estructura</span>
              <span className="text-paper/70">~ 400ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span>modelo</span>
              <span className="text-paper/70">multi-tenant</span>
            </div>
            <div className="flex items-center justify-between">
              <span>backups</span>
              <span className="text-paper/70">automatizados</span>
            </div>
          </div>
          <p className="mt-6 leading-relaxed text-paper/45">
            Cada registro pasa por la misma ruta: captura → estructura →
            decisión.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
