import type { Metadata } from "next";
import Image from "next/image";
import { commissions } from "@/content/site";
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
        Personas que se organizan para construir viviendas y fortalecer una
        comunidad en San Martín y Tres de Febrero.
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
          <p className="section-footnote">
            Estructura de comisiones tomada del sitio anterior; pendiente de
            revisión institucional.
          </p>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="Vínculos institucionales"
          title="Una red de cooperación."
        />
        <InstitutionalCards />
      </section>
      <ContactBlock />
    </>
  );
}
