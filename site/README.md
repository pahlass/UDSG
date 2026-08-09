# Pahlass — sitio público

Sitio corporativo de Pahlass Data Systems. Next.js 14 (App Router), TypeScript,
Tailwind CSS, Framer Motion.

Vive en `site/` dentro del repo `Pahlass` para no interferir con `admin/`,
`admin-api/` ni el sitio estático actual servido por GitHub Pages.

## Correr localmente

```bash
cd site
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Copia `.env.example` a `.env.local` y complétalo. El envío de correo del
formulario de contacto (Resend) todavía no está activo — sin `RESEND_API_KEY`
y `CONTACT_EMAIL_TO`, el formulario muestra un mensaje con el correo de
contacto directo en vez de enviar.

```bash
cp .env.example .env.local
```

## Estructura

```
site/
  app/                 rutas (home, /productos/*, /contacto, /api/contact)
  components/
    layout/            Header, Footer
    sections/          bloques de cada página
    ui/                primitivos (Container, Button, Reveal, SectionLabel)
  content/              copy y datos (site.ts, products.ts)
  public/               imágenes, favicons
```

## Despliegue

Pensado para Railway con el directorio raíz del servicio apuntando a `site/`.
Dominio gestionado en Cloudflare. Aún no configurado — por ahora el sitio
solo se corre localmente para revisión de diseño.
