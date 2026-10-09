// Contenido de maqueta. Revalidar con la cooperativa antes de publicar.
export const site = {
  name: "COOPTEBA SM3F",
  email: "informes@cooptebasm3f.coop.ar",
  phone: "11 5069-9919",
  phoneHref: "tel:+541150699919",
  address: "Madero 5670, Tropezón, San Martín",
  hours: "Lunes a viernes de 18 a 20 h · Sábados de 10 a 12 h",
  map: "https://www.google.com/maps/search/?api=1&query=Madero+5670+Tropezon+San+Martin",
  source: "https://cooptebasmtytf.com.ar/",
};
export const navigation = [
  { label: "La cooperativa", href: "/la-cooperativa" },
  { label: "Viviendas y proyectos", href: "/viviendas-y-proyectos" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Novedades", href: "/novedades" },
];
export type ProjectStatus =
  "Por confirmar" | "En curso" | "Entregado" | "En planificación";
export type Project = {
  slug: string;
  name: string;
  place: string;
  district: string;
  image: string;
  summary: string;
  status: ProjectStatus;
  source: string;
  gallery: { src: string; alt: string }[];
};
const project = (
  slug: string,
  name: string,
  place: string,
  district: string,
  summary: string,
  photos: string[] = ["fachada"],
): Project => ({
  slug,
  name,
  place,
  district,
  summary,
  status: "Por confirmar",
  source: "https://cooptebasmtytf.com.ar/fotos/",
  image: `/images/proyectos/${slug}/${photos[0]}.jpg`,
  gallery: photos.map((p) => ({
    src: `/images/proyectos/${slug}/${p}.jpg`,
    alt: `${name}: ${p.replaceAll("-", " ")}. Fotografía del archivo institucional.`,
  })),
});
export const projects: Project[] = [
  project(
    "castelli-3902",
    "Castelli 3902",
    "San Martín",
    "General San Martín",
    "Vivienda colectiva y espacios de encuentro. Un proyecto desarrollado en colaboración con Proyecto Habitar.",
  ),
  project(
    "bonifacini-3976",
    "Bonifacini 3976",
    "Santos Lugares",
    "Tres de Febrero",
    "Un recorrido por las viviendas, patios y etapas de construcción que documenta el archivo de la cooperativa.",
    ["fachada", "patio", "balcon", "construccion"],
  ),
  project(
    "la-merced-5225",
    "La Merced 5225",
    "Caseros",
    "Tres de Febrero",
    "El archivo reúne imágenes del edificio, los interiores y la historia de su construcción.",
    ["fachada", "comedor", "cocina", "balcon", "obra-2016"],
  ),
  project(
    "general-hornos-1365",
    "General Hornos 1365",
    "Villa Bosch",
    "Tres de Febrero",
    "Uno de los edificios que forman parte del recorrido documentado de COOPTEBA SM3F.",
  ),
  project(
    "biarritz-3040",
    "Biarritz 3040",
    "San Martín",
    "General San Martín",
    "Un proyecto incluido en la galería institucional de edificios y viviendas.",
  ),
  project(
    "nicaragua-3871",
    "Nicaragua 3871",
    "Santos Lugares",
    "Tres de Febrero",
    "Un proyecto del archivo institucional situado en Santos Lugares.",
  ),
];
export const steps = [
  {
    title: "Conocé la propuesta",
    text: "Acercate a la cooperativa o solicitá una reunión informativa. Es el primer espacio para conversar y despejar dudas.",
  },
  {
    title: "Entendé el proceso",
    text: "Informate sobre los planes, los aportes, la participación y los criterios de adjudicación. Confirmá siempre las condiciones vigentes.",
  },
  {
    title: "Construimos en comunidad",
    text: "El trabajo colectivo y la participación de las personas asociadas sostienen la organización y los proyectos de vivienda.",
  },
];
export const faqs = [
  {
    id: "cooperativa",
    category: "La cooperativa",
    question: "¿Qué es COOPTEBA SM3F?",
    answer:
      "Es una cooperativa de vivienda promovida desde SUTEBA. Personas con una necesidad compartida de vivienda se organizan para gestionar colectivamente sus proyectos.",
  },
  {
    id: "acercarse",
    category: "Primeros pasos",
    question: "¿Cómo puedo conocer la propuesta?",
    answer:
      "Podés comunicarte por teléfono o correo y solicitar una reunión informativa. Consultá previamente los horarios y la modalidad de atención.",
  },
  {
    id: "ubicacion",
    category: "Viviendas",
    question: "¿Dónde se desarrollan los proyectos?",
    answer:
      "La información institucional sitúa sus edificios en los partidos de General San Martín y Tres de Febrero. En la sección de proyectos podés consultar las ubicaciones documentadas.",
  },
  {
    id: "inscripcion",
    category: "Primeros pasos",
    question: "¿Hay inscripciones abiertas?",
    answer:
      "Todavía no contamos con información actualizada y confirmada sobre nuevas inscripciones. Una consulta no equivale a una inscripción ni garantiza una vivienda: la cooperativa debe informar la disponibilidad y las condiciones vigentes.",
  },
  {
    id: "cuotas",
    category: "Viviendas",
    question: "¿Dónde consulto cuotas y adjudicación?",
    answer:
      "Solicitá la información vigente directamente a la cooperativa. El sitio anterior contiene material histórico, pero montos, plazos y condiciones deben revisarse antes de presentarlos como actuales.",
  },
  {
    id: "participacion",
    category: "La cooperativa",
    question: "¿Qué significa participar en una cooperativa?",
    answer:
      "Además del proyecto de vivienda, implica una organización colectiva. La información institucional describe asambleas y comisiones de trabajo; consultá cómo se organiza actualmente la participación.",
  },
];
export type Post = {
  slug: string;
  title: string;
  category: "Actividades" | "Noticias" | "Comunicados";
  date: string;
  image: string;
  summary: string;
  paragraphs: string[];
  source: string;
};
export const posts: Post[] = [
  {
    slug: "conversatorio-violencia-de-genero",
    title: "Un espacio para hablar sobre violencia de género",
    category: "Actividades",
    date: "2022-06-05",
    image: "/images/novedades/conversatorio-violencia-de-genero.jpg",
    summary:
      "La Comisión de Géneros y Diversidad compartió una convocatoria para reflexionar sobre la violencia de género y su naturalización.",
    paragraphs: [
      "El archivo institucional registra la convocatoria al conversatorio virtual “Hablemos de violencia de género y su naturalización”, previsto para el 11 de junio de 2022.",
      "La actividad proponía un espacio de reflexión junto a la licenciada María Soledad Carnuccio, psicóloga especialista en violencia familiar.",
      "Esta publicación recupera una actividad histórica. No es una convocatoria vigente.",
    ],
    source:
      "https://cooptebasmtytf.com.ar/conversatorio-virtual-sobre-violencia-de-genero/",
  },
  {
    slug: "formacion-cooperativa-inaes",
    title: "Formación para fortalecer el trabajo cooperativo",
    category: "Noticias",
    date: "2022-04-27",
    image: "/images/novedades/curso-inaes.jpg",
    summary:
      "Una propuesta del INAES sobre fundamentos, organización y responsabilidades del sistema cooperativo.",
    paragraphs: [
      "En abril de 2022, la cooperativa difundió el curso del INAES “Aspectos básicos cooperativos”, una propuesta destinada a grupos precooperativos y personas interesadas en comprender el sistema.",
      "La formación abordaba los fundamentos de una cooperativa, su proceso de constitución y su proyección dentro de la economía social y solidaria.",
      "Este es un registro de archivo. Consultá al organismo para conocer su oferta formativa actual.",
    ],
    source: "https://cooptebasmtytf.com.ar/1168-2/",
  },
  {
    slug: "memoria-verdad-justicia",
    title: "Memoria, verdad y justicia: una jornada compartida",
    category: "Actividades",
    date: "2022-03-20",
    image: "/images/novedades/jornada-memoria-verdad-justicia.jpg",
    summary:
      "Una jornada de reflexión y encuentro en la sede, junto a personas asociadas y organizaciones del barrio.",
    paragraphs: [
      "El 19 de marzo de 2022 se realizó en la sede una jornada de reflexión y acción por la memoria, la verdad y la justicia.",
      "Participaron familiares de detenidos desaparecidos, sobrevivientes, personas asociadas y representantes de instituciones barriales, entre ellas CAPS 21 y Cefiro Estación Cultural.",
      "El registro institucional destaca la importancia de escuchar los testimonios y de generar espacios colectivos para conocer la historia.",
    ],
    source: "https://cooptebasmtytf.com.ar/memoria-verdad-y-justicia-2/",
  },
];
export function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
export const commissions = [
  "Tierra y Obras",
  "Administrativa y Contable",
  "Finanzas",
  "Prensa y Difusión",
  "Educación y Capacitación",
  "Géneros y Diversidad",
  "Derechos Humanos",
  "Mantenimiento",
];
