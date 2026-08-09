export const siteConfig = {
  name: "Pahlass",
  legalName: "Pahlass Data Systems",
  tagline: "Ingeniería de datos y desarrollo de software",
  description:
    "Construimos la infraestructura que convierte la operación dispersa de una organización en datos estructurados, y esos datos en decisiones.",
  email: "hola@pahlass.com",
  nav: [
    { label: "Cómo operamos", href: "/#como-operamos" },
    { label: "Productos", href: "/#productos" },
    { label: "Por qué Pahlass", href: "/#por-que-pahlass" },
    { label: "Contacto", href: "/contacto" },
  ],
};

export const manifesto = {
  kicker: "El problema",
  quote:
    "La mayoría de las organizaciones no tienen un problema de estrategia. Tienen un problema de información.",
  resolution:
    "Nosotros construimos la infraestructura que la convierte en decisiones.",
  body: [
    "La operación real de una organización — inscripciones, cobros, expedientes, asistencia, inventario — casi nunca vive en un sistema. Vive en papel, en hojas de cálculo sueltas, en el criterio de la persona que lleva quince años haciéndolo a mano.",
    "Eso no es un problema de voluntad. Es un problema de infraestructura: nadie construyó la capa que convierte esa operación en datos confiables. Sin esa capa, no hay panel, ni alerta, ni análisis que sirva — solo estimaciones sobre información que nadie verificó.",
  ],
};

export const operatingModel = [
  {
    step: "01",
    title: "Capturamos",
    description:
      "Digitalizamos la operación en el punto donde ocurre — formularios, flujos y sistemas que reemplazan el papel y las hojas de cálculo sueltas, sin fricción para quien los usa todos los días.",
  },
  {
    step: "02",
    title: "Estructuramos",
    description:
      "Esa captura se convierte en datos consistentes y consultables: un mismo expediente, un mismo cliente, una misma transacción, sin duplicados ni versiones contradictorias.",
  },
  {
    step: "03",
    title: "Decidimos",
    description:
      "Sobre esos datos construimos alertas, paneles y análisis — la capa que responde preguntas reales de operación, no reportes genéricos que nadie revisa.",
  },
];

export const differentiators = [
  {
    title: "Infraestructura propia",
    description:
      "No integramos herramientas de terceros y las llamamos solución. Operamos hosting, base de datos, autenticación y backups sobre Pahlass Cloud — de principio a fin.",
  },
  {
    title: "Un motor, varios productos",
    description:
      "Newton y Pahlass Hales comparten el mismo motor de infraestructura. Cada nuevo producto hereda una base ya probada, en vez de empezar de cero.",
  },
  {
    title: "Decisión, no solo digitalización",
    description:
      "Digitalizar es el primer paso, no el destino. Construimos hasta la capa de decisión: alertas, paneles y análisis que se usan, no que se archivan.",
  },
  {
    title: "Ingeniería aplicada, no software genérico",
    description:
      "Cada implementación parte de cómo opera tu organización específicamente — no de un molde que después hay que forzar para que encaje.",
  },
];
