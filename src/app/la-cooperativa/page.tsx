import { VideoPlayer } from "@/components/ui/external-media";
import type { Metadata } from "next";
import Image from "next/image";
import { commissions, videoById } from "@/content/site";
import {
  PageIntro,
  SectionHeading,
  InstitutionalCards,
  ContactBlock,
  Notice,
} from "@/components/ui/shared";
export const metadata: Metadata = { title: "La cooperativa" };
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="La cooperativa"
        title="Nos une una necesidad. Nos mueve un proyecto común."
      >
        Docentes y compañerxs que se organizan para construir viviendas y fortalecer una comunidad en San Martín y Tres de Febrero.
      </PageIntro>
      <div className="container wide-image">
        <Image
          src="/images/portada/edificio-escaleras.jpg"
          alt="Espacios compartidos y circulación exterior de viviendas del archivo institucional"
          fill
          sizes="100vw"
        />
      </div>
      <section className="section container">
        <div className="prose">
          <p className="eyebrow">Quiénes somos</p>
          <h2>La vivienda, desde la cooperación.</h2>
          <p>
            COOPTEBA SM3F es una cooperativa de vivienda promovida desde SUTEBA,
            formada por personas que se encontraron a partir de una necesidad
            concreta: acceder a una vivienda.
          </p>
          <p>
            Su propuesta se basa en la gestión colectiva y en la participación
            de las personas asociadas. El trabajo cooperativo articula la
            organización, la administración y el acompañamiento de los
            proyectos.
          </p>
          <h2>Historia y propósito</h2>
          <p>
            El recorrido de la cooperativa se expresa en edificios, espacios
            comunitarios y actividades que acompañan la vida institucional. Las
            imágenes de nuestro archivo permiten acercarse a esa historia.
          </p>
          <p>
            El propósito es convertir una necesidad individual en una respuesta
            compartida, con una organización sostenida por la participación y el
            compromiso.
          </p>
          <Notice>
            La cronología, las cifras actuales y las autoridades se incorporarán
            una vez que la organización las confirme. No usamos estadísticas
            históricas como si fueran actuales.
          </Notice>
        </div>
      </section>
      <section className="section news-section">
        <div className="container">
          <SectionHeading
            eyebrow="Participación"
            title="El trabajo se organiza en equipo."
          >
            La información institucional describe comisiones que acompañan
            distintos aspectos de la gestión cooperativa.
          </SectionHeading>
          <div className="commission-list">
            {commissions.map((c) => (
              <div key={c}>{c}</div>
            ))}
          </div>
          <Notice>
            La información de las comisiones se incorporará con la confirmación
            institucional. No usamos datos históricos como si fueran actuales.
          </Notice>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="Vínculos institucionales"
          title="Una red de cooperación."
        />
        <InstitutionalCards />
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="Nuestra historia, en primera persona"
          title="Quiénes somos, en video."
        />
        <div className="video-feature single-video">
          <VideoPlayer video={videoById("aIfePJI-6Mo")} />
          <div>
            <p className="lead">
              Una presentación del canal institucional para acercarte a la
              propuesta cooperativa.
            </p>
            <Notice>
              Material de archivo: revisar las cifras, autoridades y condiciones
              que puedan aparecer. Confirmar subtítulos y transcripción antes de
              publicar.
            </Notice>
          </div>
        </div>
      </section>
      <section className="section news-section">
        <div className="container">
          <SectionHeading
            eyebrow="FECOOPTEBA"
            title="Una mirada a la red cooperativa."
          />
          <div className="video-grid">
            <VideoPlayer video={videoById("pnyb3wsDwQg")} />
            <VideoPlayer video={videoById("ugXP_WPF7A8")} />
          </div>
          <Notice>
            Ambos videos tienen una duración de 4:42 y miniaturas iguales.
            Revisar si sus contenidos son equivalentes y elegir una versión
            definitiva. Son materiales de 2025, no información actualizada
            automáticamente.
          </Notice>
        </div>
      </section>
      <ContactBlock />
    </>
  );
}
