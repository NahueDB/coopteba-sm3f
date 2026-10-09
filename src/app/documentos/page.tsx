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
          El material disponible proviene del sitio anterior. Su vigencia debe
          confirmarse antes de utilizarlo para tomar decisiones sobre un plan.
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
                PDF · 1,3 MB · Archivo publicado en 2022 · Vigencia por
                confirmar
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
            Este espacio permitirá incorporar documentos aprobados, con título,
            descripción y fecha o versión. No publicaremos documentación interna
            ni datos personales.
          </p>
        </div>
      </section>
    </>
  );
}
