export type Product = {
  slug: "newton" | "pahlass-hales";
  name: string;
  category: string;
  tagline: string;
  description: string;
  href: string;
  who: string;
  capabilities: { title: string; description: string }[];
  pattern: string;
};

export const products: Product[] = [
  {
    slug: "newton",
    name: "Newton",
    category: "Membresía recurrente",
    tagline: "Infraestructura para instituciones con membresía recurrente.",
    description:
      "Educación, academias, gimnasios: cualquier organización que cobra y opera sobre una membresía recurrente. Newton estructura inscripciones, cobros, asistencia y expedientes en un solo sistema.",
    href: "/productos/newton",
    who: "Academias, escuelas, gimnasios y organizaciones con membresía recurrente.",
    pattern: "Alta de miembro → cobro recurrente → asistencia → expediente.",
    capabilities: [
      {
        title: "Inscripciones",
        description:
          "Alta de miembros sin fricción, con la información que tu operación realmente necesita capturar — no un formulario genérico.",
      },
      {
        title: "Cobros",
        description:
          "Cobro recurrente estructurado, con visibilidad clara de quién pagó, quién debe y desde cuándo.",
      },
      {
        title: "Asistencia",
        description:
          "Registro de asistencia en tiempo real, base para entender uso real y anticipar bajas antes de que ocurran.",
      },
      {
        title: "Expedientes",
        description:
          "Historial completo por miembro — pagos, asistencia, notas — en un solo lugar, consultable al instante.",
      },
    ],
  },
  {
    slug: "pahlass-hales",
    name: "Pahlass Hales",
    category: "Gestión clínica",
    tagline: "Gestión clínica para consultorios de salud y bienestar.",
    description:
      "Empezamos con nutrición. Pahlass Hales estructura expedientes, planes y el portal del paciente para consultorios que necesitan operar con el mismo rigor que una institución clínica más grande.",
    href: "/productos/pahlass-hales",
    who: "Consultorios de nutrición y bienestar, con expansión a otras especialidades clínicas.",
    pattern: "Consulta → expediente → plan → seguimiento del paciente.",
    capabilities: [
      {
        title: "Expedientes",
        description:
          "Historial clínico estructurado por paciente — mediciones, evolución, notas de consulta — sin depender de archivos sueltos.",
      },
      {
        title: "Planes",
        description:
          "Planes de tratamiento o nutrición documentados y trazables, con seguimiento de adherencia y avance.",
      },
      {
        title: "Portal del paciente",
        description:
          "Acceso directo del paciente a su plan y evolución, sin llamadas ni mensajes para pedir información básica.",
      },
      {
        title: "Continuidad",
        description:
          "Cada consulta se apoya en el historial completo — no se repite información ni se pierde contexto entre visitas.",
      },
    ],
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
