export type Product = {
  slug: "newton" | "hales";
  name: string;
  category: string;
  tagline: string;
  description: string;
  href: string;
  who: string;
  pattern: string;
  capabilities: { title: string; description: string }[];
  spec: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "newton",
    name: "Newton",
    category: "Membresía recurrente",
    tagline: "Infraestructura para instituciones con membresía recurrente.",
    description:
      "Newton estructura la operación completa de una institución que cobra sobre membresía recurrente: inscripciones, cobro, asistencia y expediente, en un mismo sistema, con un mismo modelo de datos por miembro.",
    href: "/productos/newton",
    who: "Academias, escuelas, gimnasios y cualquier organización que opera sobre membresía recurrente.",
    pattern: "Alta de miembro → cobro recurrente → asistencia → expediente.",
    spec: [
      { label: "Modelo", value: "Multi-tenant, un esquema por organización" },
      { label: "Cobro", value: "Recurrente, con conciliación automática" },
      { label: "Alertas", value: "Vencimiento, inasistencia, bajas en riesgo" },
    ],
    capabilities: [
      {
        title: "Inscripciones",
        description:
          "Alta de miembros sin fricción, con la información que tu operación realmente necesita capturar — configurable por tipo de membresía, no un formulario genérico de un solo molde.",
      },
      {
        title: "Cobros",
        description:
          "Cobro recurrente estructurado, con conciliación automática contra lo efectivamente pagado — visibilidad exacta de quién pagó, quién debe, y desde cuándo, sin cruzar hojas de cálculo a fin de mes.",
      },
      {
        title: "Asistencia",
        description:
          "Registro de asistencia en tiempo real, base para entender uso real por miembro y anticipar bajas antes de que ocurran, no después de que ya se fueron.",
      },
      {
        title: "Expedientes",
        description:
          "Historial completo por miembro — pagos, asistencia, notas, cambios de plan — en un solo lugar, consultable al instante por cualquiera con el permiso correcto.",
      },
      {
        title: "Paneles por rol",
        description:
          "Dirección ve ocupación, cobranza y retención agregadas. Recepción ve el estado del miembro que tiene enfrente. Cada rol ve lo que necesita, no todo el sistema.",
      },
      {
        title: "Multi-sede",
        description:
          "Una misma institución con varias sedes opera bajo el mismo sistema, con datos consolidados a nivel institución y separados por sede cuando hace falta.",
      },
    ],
  },
  {
    slug: "hales",
    name: "Hales",
    category: "Gestión clínica",
    tagline: "Infraestructura de gestión clínica para salud y bienestar.",
    description:
      "Hales estructura la operación clínica completa — expediente, plan de tratamiento, seguimiento y portal del paciente — para consultorios y clínicas de salud y bienestar que necesitan operar con el mismo rigor que una institución clínica de mayor escala.",
    href: "/productos/hales",
    who: "Consultorios y clínicas de salud y bienestar.",
    pattern: "Consulta → expediente → plan → seguimiento del paciente.",
    spec: [
      { label: "Modelo", value: "Multi-tenant, un esquema por clínica" },
      { label: "Expediente", value: "Estructurado, versionado por consulta" },
      { label: "Acceso", value: "Portal del paciente, permisos por rol clínico" },
    ],
    capabilities: [
      {
        title: "Expedientes",
        description:
          "Historial clínico estructurado por paciente — mediciones, evolución, notas de consulta — versionado en cada visita, sin depender de archivos sueltos ni de la memoria de quien atendió la última vez.",
      },
      {
        title: "Planes de tratamiento",
        description:
          "Planes documentados y trazables, con seguimiento de adherencia y avance medible visita a visita, no una hoja impresa que el paciente pierde antes de la siguiente cita.",
      },
      {
        title: "Portal del paciente",
        description:
          "Acceso directo del paciente a su plan, indicaciones y evolución — sin llamadas ni mensajes para pedir información que ya está en el sistema.",
      },
      {
        title: "Continuidad clínica",
        description:
          "Cada consulta se apoya en el historial completo del paciente. Nada se repite, nada se pierde entre visitas, incluso si atiende un profesional distinto.",
      },
      {
        title: "Agenda y recordatorios",
        description:
          "Programación de citas con recordatorios automáticos, pensada para reducir inasistencias sin que alguien tenga que llamar a confirmar una por una.",
      },
      {
        title: "Reportes clínicos",
        description:
          "Evolución del paciente exportable en el formato que la consulta necesita — para referir, para el propio paciente, o para el expediente físico si el caso lo requiere.",
      },
    ],
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
