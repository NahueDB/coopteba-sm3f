import type { Metadata } from "next";
import { ProjectList } from "@/components/ui/project-list";
import {
  PageIntro,
  SectionHeading,
  Notice,
  ContactBlock,
} from "@/components/ui/shared";
export const metadata: Metadata = { title: "Viviendas y proyectos" };
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Viviendas y proyectos"
        title="De la organización a los espacios que habitamos."
      >
        Un recorrido por los proyectos de la cooperativa, sus viviendas y las
        imágenes que documentan su historia.
      </PageIntro>
      <section className="container content-section">
        <Notice>
          Las imágenes y ubicaciones provienen del sitio institucional. Los
          estados de obra, las fechas de entrega y la disponibilidad no están
          confirmados.
        </Notice>
        <ProjectList />
      </section>
      <section className="section news-section">
        <div className="container">
          <SectionHeading
            eyebrow="Tipologías anteriores"
            title="Las viviendas del archivo institucional."
          >
            El sitio anterior describe tres tamaños de departamentos. Esta
            información es histórica y no representa una oferta vigente.
          </SectionHeading>
          <div className="typology-grid">
            {[
              {
                name: "Vivienda chica",
                area: "38–42 m²",
                rooms: "Un dormitorio",
              },
              {
                name: "Vivienda mediana",
                area: "42–44 m²",
                rooms: "Dos dormitorios",
              },
              {
                name: "Vivienda grande",
                area: "65 m²",
                rooms: "Tres / cuatro dormitorios",
              },
            ].map((t) => (
              <article className="typology" key={t.name}>
                <h3>{t.name}</h3>
                <p className="area">{t.area}</p>
                <p>{t.rooms}</p>
              </article>
            ))}
          </div>
          <p className="section-footnote">
            La disposición y las dimensiones deben verificarse por proyecto.
            Fuente: página “Tipos de vivienda” del sitio anterior.
          </p>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="Tipologías actuales"
          title="Cada proyecto tiene sus particularidades."
        />
        <div className="empty-state" style={{ marginTop: 30 }}>
          <h3>Catálogo actual en revisión</h3>
          <p>
            Los planos, superficies y características de los proyectos actuales
            se incorporarán con información aprobada por la cooperativa.
            Mientras tanto, podés solicitar orientación directamente.
          </p>
        </div>
        <Notice>
          La división entre tipologías anteriores y actuales es una propuesta de
          arquitectura. Todavía debemos confirmar con vos qué evolución o
          diferencia querés mostrar.
        </Notice>
      </section>
      <ContactBlock />
    </>
  );
}
