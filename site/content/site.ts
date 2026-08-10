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
    { label: "Sectores", href: "/#sectores" },
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
    "La operación real de una organización — inscripciones, cobros, expedientes, asistencia, inventario, mantenimiento — casi nunca vive en un sistema. Vive en papel, en hojas de cálculo sueltas, en el criterio de la persona que lleva quince años haciéndolo a mano y que es, sin que nadie lo haya decidido así, el único lugar donde esa información existe de forma completa.",
    "Eso no es un problema de voluntad ni de capacitación. Es un problema de infraestructura: nadie construyó la capa que toma esa operación, en el momento en que ocurre, y la convierte en un registro estructurado, consistente y consultable. Sin esa capa, cualquier panel, alerta o análisis que se construya encima es una estimación sobre información que nadie verificó — y las decisiones que se toman con eso heredan esa misma incertidumbre.",
    "Nuestro trabajo empieza ahí: en el punto exacto donde la operación y el dato todavía no se han encontrado. Diseñamos el sistema que los conecta, lo construimos, y lo operamos — no como un proyecto que se entrega y se abandona, sino como infraestructura que sigue funcionando, con nosotros respondiendo por ella.",
  ],
};

export const operatingModel = [
  {
    step: "01",
    title: "Capturamos",
    description:
      "Digitalizamos la operación exactamente en el punto donde ocurre — no en un formulario genérico que alguien llena después, de memoria, al final del día.",
    details: [
      "Interfaces diseñadas para el flujo de trabajo real de quien captura, no para el modelo de datos.",
      "Validación en el punto de entrada: los errores se corrigen al capturar, no se descubren tres reportes después.",
      "Funciona con o sin conexión estable — la captura no depende de que la infraestructura de red del cliente sea perfecta.",
    ],
  },
  {
    step: "02",
    title: "Estructuramos",
    description:
      "Esa captura se normaliza en un modelo de datos consistente: un mismo expediente, un mismo cliente, una misma transacción, identificados una sola vez y referenciados en todas partes.",
    details: [
      "Un identificador único por entidad — persona, cuenta, expediente — sin duplicados generados por captura repetida.",
      "Reglas de integridad aplicadas en la base de datos, no solo en la interfaz: el dato no puede quedar en un estado inconsistente.",
      "Historial completo de cambios por registro, con quién y cuándo — auditable, no reconstruido de memoria.",
    ],
  },
  {
    step: "03",
    title: "Decidimos",
    description:
      "Sobre ese modelo estructurado construimos la capa de decisión: alertas que se disparan solas, paneles que responden la pregunta operativa real, no la genérica.",
    details: [
      "Alertas basadas en umbrales y comportamiento — un pago vencido, una asistencia que cae, un inventario que no cuadra — no reportes que hay que interpretar.",
      "Paneles construidos para el rol de quien decide: dirección ve algo distinto a operación, y ambos ven lo que necesitan sin pedirlo.",
      "Exportable y auditable: el dato detrás de cada panel se puede rastrear hasta el registro capturado que lo originó.",
    ],
  },
];

export const differentiators = [
  {
    title: "Infraestructura propia",
    description:
      "No integramos herramientas de terceros y las llamamos solución.",
    detail:
      "Operamos el hosting, la base de datos, la autenticación y los backups de cada implementación. Aislamiento de datos por organización, backups automatizados con retención definida, certificados gestionados y despliegues sin downtime — de principio a fin, bajo nuestra responsabilidad, no la de un tercero que dejó de responder correos.",
  },
  {
    title: "Un motor, varios productos",
    description: "Newton y Hales comparten el mismo motor de infraestructura.",
    detail:
      "Autenticación, multi-tenancy, backups, paneles y el sistema de alertas están construidos una sola vez y se reutilizan en cada producto. Un nuevo producto hereda una base ya probada en producción, en vez de empezar de cero — eso también significa que cada mejora de infraestructura beneficia a todos los productos a la vez.",
  },
  {
    title: "Decisión, no solo digitalización",
    description:
      "Digitalizar es el primer paso, no el destino del proyecto.",
    detail:
      "La mayoría de los proyectos de \"digitalización\" terminan en un formulario que reemplaza al papel y nada más. Nosotros construimos hasta la capa de decisión: alertas que se disparan sin que nadie las pida, paneles diseñados para el rol de quien los usa, no reportes genéricos que se revisan una vez y se archivan.",
  },
  {
    title: "Ingeniería aplicada, no software genérico",
    description:
      "Cada implementación parte de cómo opera tu organización específicamente.",
    detail:
      "Antes de escribir una línea de código, documentamos el proceso real: quién captura qué, en qué momento, con qué excepciones. El sistema se diseña sobre ese proceso — no al revés, forzando tu operación a encajar en un molde genérico construido para nadie en particular.",
  },
];

export type Industry = { name: string; image: string };

export const industries: Industry[] = [
  { name: "Educación", image: "/images/industries/educacion.jpg" },
  { name: "Salud", image: "/images/industries/salud.jpg" },
  { name: "Manufactura", image: "/images/industries/manufactura.jpg" },
  { name: "Hospitalidad", image: "/images/industries/hospitalidad.jpg" },
  {
    name: "Logística y distribución",
    image: "/images/industries/logistica-distribucion.jpg",
  },
  { name: "Agroindustria", image: "/images/industries/agroindustria.jpg" },
  {
    name: "Comercio y retail",
    image: "/images/industries/comercio-retail.jpg",
  },
  { name: "Construcción", image: "/images/industries/construccion.jpg" },
  {
    name: "Alimentos y bebidas",
    image: "/images/industries/alimentos-bebidas.jpg",
  },
  {
    name: "Servicios profesionales",
    image: "/images/industries/servicios-profesionales.jpg",
  },
  {
    name: "Sector inmobiliario",
    image: "/images/industries/sector-inmobiliario.jpg",
  },
];
