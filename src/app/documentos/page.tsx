import type { Metadata } from "next";
import { PageIntro, Notice, Arrow } from "@/components/ui/shared";
export const metadata: Metadata = { title: "Documentos" };
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Documentos"
        title="Información para leer, consultar y compartir."
      >
        Material institucional y recursos descargables, reunidos en un mismo
        lugar.
      </PageIntro>
      <section className="container content-section">
        <Notice>
          El material publicado en este espacio es de carácter institucional y
          público. No se incluyen documentos internos ni datos personales. La
          información de los documentos publicados puede estar sujeta a cambios
          y actualizaciones; confirmar la vigencia de los datos con la cooperativa antes de tomar decisiones.
        </Notice>
        <h2 style={{ marginBottom: 30 }}>Material institucional</h2>
        <div className="document-list">
          <article className="document-card">
            <div>
              <h3>Cartilla informativa</h3>
              <p>
                Una presentación de la propuesta cooperativa, recuperada del
                archivo institucional.
              </p>
              <p className="small-label">
                PDF · 1,3 MB · Archivo publicado en 2022 · <span className="strongText"> Vigencia por
                confirmar</span>
              </p>
            </div>
            <a
              className="text-link"
              href="/documentos/cartilla-informativa.pdf"
              download
            >
              Descargar PDF <Arrow />
            </a>
          </article>
        </div>
        <div className="empty-state" style={{ marginTop: 35 }}>
          <h3>Otros recursos</h3>
          <p>
            Este espacio permitirá incorporar documentos aprobados, como proyectos de construcción, informes y estudios. No se publicará documentación interna
            ni datos personales.
          </p>
        </div>
      </section>
    </>
  );
}
