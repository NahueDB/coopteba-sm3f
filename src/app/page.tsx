import { SocialLinks, VideoPlayer } from "@/components/ui/external-media";
import Image from "next/image";
import Link from "next/link";
import { InstagramCarousel } from "@/components/ui/instagram-carousel";
import { projects, posts, steps, videoById } from "@/content/site";
import {
  ButtonLink,
  SectionHeading,
  ProjectCard,
  PostCard,
  FAQs,
  InstitutionalCards,
  ContactBlock,
  Arrow,
  Notice,
} from "@/components/ui/shared";
export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="live-dot" />
            Cooperativa de vivienda · SM3F
          </p>
          <h1>
            La vivienda es
            <br />
            un sueño.
            <br />
            <span>
              Construirla,
              <br />
              un proyecto colectivo.
            </span>
          </h1>
          <p className="lead">
            Nos organizamos para hacer posible el acceso a la vivienda en San
            Martín y Tres de Febrero. Con participación, compromiso y trabajo
            cooperativo.
          </p>
          <div className="button-row">
            <ButtonLink href="/viviendas-y-proyectos">
              Conocé nuestros proyectos
            </ButtonLink>
            <Link className="text-link" href="#como-funciona">
              Cómo funciona <Arrow />
            </Link>
          </div>
          <p className="hero-note">
            Una necesidad compartida. Una respuesta colectiva.
          </p>
        </div>
        <div className="hero-visual">
          <div className="hero-photo">
            <Image
              src="/images/portada/edificio-galerias.jpg"
              alt="Galerías y espacios de circulación compartidos, con estructura naranja y un patio verde. Archivo de COOPTEBA SM3F."
              fill
              sizes="(min-width: 1000px) 48vw, 100vw"
              fetchPriority="high"
              loading="eager"
            />
          </div>
          <Link
            href="/viviendas-y-proyectos"
            className="hero-caption"
            aria-label="Explorar viviendas y proyectos"
          >
            <span>Más que viviendas.</span>
            <strong>
              Espacios para vivir
              <br />y encontrarnos.
            </strong>
            <span className="caption-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
          <span className="vertical-caption">SAN MARTÍN + TRES DE FEBRERO</span>
        </div>
      </section>
      <div className="principles">
        <ul
          className="container principles-inner"
          aria-label="Nuestros valores"
        >
          {["Vivienda", "Participación", "Comunidad", "Cooperación"].map(
            (value, index) => (
              <li key={value}>
                <span
                  className={`value-symbol value-${index}`}
                  aria-hidden="true"
                >
                  {["⌂", "✳", "◎", "↗"][index]}
                </span>
                {value}
              </li>
            ),
          )}
        </ul>
      </div>
      <section className="section container about-grid" id="la-cooperativa">
        <div className="about-visual">
          <Image
            src="/images/portada/edificio-escaleras.jpg"
            alt="Escalera exterior y árboles junto a las viviendas. Fotografía del archivo institucional."
            fill
            sizes="(min-width: 900px) 45vw, 90vw"
          />
          <span className="photo-tag">Nuestra forma de construir</span>
        </div>
        <div>
          <SectionHeading
            eyebrow="La cooperativa"
            title="Una casa propia. Una construcción compartida."
          >
            Somos una cooperativa de vivienda promovida desde SUTEBA, formada
            por personas que se encontraron a partir de una necesidad concreta:
            la vivienda.
          </SectionHeading>
          <p>
            La propuesta pone en el centro la organización colectiva. Las
            personas asociadas participan en la gestión y el trabajo de la
            cooperativa, acompañando un proyecto que es de todas y todos.
          </p>
          <div className="mini-values">
            <div>
              <h3>Quiénes somos</h3>
              <p>
                Personas que se organizan para transformar una necesidad en una
                respuesta común.
              </p>
            </div>
            <div>
              <h3>Historia y propósito</h3>
              <p>
                Un recorrido de trabajo cooperativo que se expresa en viviendas,
                encuentros y comunidad.
              </p>
            </div>
          </div>
          <ButtonLink href="/la-cooperativa" secondary>
            Conocé la cooperativa
          </ButtonLink>
        </div>
      </section>
      <section className="section process-section" id="como-funciona">
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow="Cómo funciona"
              title="El primer paso es conocernos."
            >
              No necesitás tener todas las respuestas. La reunión informativa es
              un buen lugar para empezar.
            </SectionHeading>
            <Link className="text-link" href="/preguntas-frecuentes">
              Despejá tus dudas <Arrow />
            </Link>
          </div>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <article key={s.title} className="step">
                <span className="step-number">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
          <div className="process-bottom">
            <p>
              Consultá la disponibilidad de planes y las condiciones vigentes
              directamente con la cooperativa.
            </p>
            <ButtonLink href="/contacto">Solicitar información</ButtonLink>
          </div>
        </div>
      </section>
      <section className="section container" id="proyectos">
        <div className="section-top">
          <SectionHeading
            eyebrow="Viviendas y proyectos"
            title="El trabajo colectivo toma forma."
          >
            Cada proyecto es parte de un recorrido compartido. Explorá los
            edificios y las imágenes de nuestro archivo.
          </SectionHeading>
          <Link className="text-link" href="/viviendas-y-proyectos">
            Ver todos los proyectos <Arrow />
          </Link>
        </div>
        <div className="cards-grid">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <p className="section-footnote">
          Las fotos pertenecen al archivo institucional. Los estados actuales de
          cada proyecto están pendientes de confirmación.
        </p>
      </section>
      <section className="section news-section" id="novedades">
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow="Novedades"
              title="La comunidad también se construye así."
            >
              Encuentros, formación y actividades que forman parte de la vida
              cooperativa.
            </SectionHeading>
            <Link className="text-link" href="/novedades">
              Todas las publicaciones <Arrow />
            </Link>
          </div>
          <div className="archive-label">
            Archivo institucional · Publicaciones de 2022
          </div>
          <div className="cards-grid">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
      <section className="section container video-feature">
        <div>
          <SectionHeading
            eyebrow="Nuestra comunidad en video"
            title="Un año de encuentros. Un proyecto que sigue."
          >
            Compartimos el registro de 2024 de la cooperativa: una invitación a
            acercarte a su vida comunitaria.
          </SectionHeading>
          <Notice>
            Video de archivo: corresponde a 2024, no a las actividades del año
            actual. Su contenido completo y accesibilidad deben revisarse antes
            de publicar.
          </Notice>
          <SocialLinks />
        </div>
        <VideoPlayer video={videoById("OzbBvx-oAyw")} />
      </section>
      <InstagramCarousel />
      <section className="section container faq-section">
        <div>
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Información clara para empezar."
          >
            Reunimos algunas de las dudas más habituales. Si necesitás más
            información, conversemos.
          </SectionHeading>
          <Link className="text-link" href="/preguntas-frecuentes">
            Ver todas las preguntas <Arrow />
          </Link>
        </div>
        <FAQs limit={4} />
      </section>
      <section className="section container institutional-section">
        <SectionHeading
          eyebrow="Vínculos institucionales"
          title="Parte de una red que nos fortalece."
        />
        <InstitutionalCards />
      </section>
      <ContactBlock />
    </>
  );
}
