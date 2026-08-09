"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/content/site";

type Status = "idle" | "loading" | "success" | "fallback" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      organization: (form.elements.namedItem("organization") as HTMLInputElement)
        .value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (json.ok) {
        setStatus("success");
      } else if (json.reason === "not_configured") {
        setStatus("fallback");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-haze p-8">
        <p className="text-lg font-medium tracking-tight">Mensaje enviado.</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Te contactaremos en menos de 48 horas.
        </p>
      </div>
    );
  }

  if (status === "fallback") {
    return (
      <div className="rounded-2xl border border-line bg-haze p-8">
        <p className="text-lg font-medium tracking-tight">
          El envío directo aún no está activo.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Escríbenos directamente a{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-ink underline">
            {siteConfig.email}
          </a>{" "}
          y te respondemos en menos de 48 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Nombre" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Organización" name="organization" type="text" />
      <div>
        <label
          htmlFor="message"
          className="text-xs font-mono uppercase tracking-[0.2em] text-muted"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-3 w-full resize-none border-b border-line bg-transparent py-2 text-base outline-none transition-colors duration-200 focus:border-ink"
          placeholder="Cuéntanos cómo opera tu organización hoy."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-muted">
          Algo falló. Escríbenos a{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-ink underline">
            {siteConfig.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex w-fit items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity duration-200 hover:opacity-90 disabled:opacity-50"
      >
        {status === "loading" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs font-mono uppercase tracking-[0.2em] text-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-b border-line bg-transparent py-2 text-base outline-none transition-colors duration-200 focus:border-ink"
      />
    </div>
  );
}
