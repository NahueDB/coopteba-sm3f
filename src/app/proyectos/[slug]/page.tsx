import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";
import {
  PageIntro,
  Notice,
  ButtonLink,
  ContactBlock,
} from "@/components/ui/shared";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title:
      projects.find((p) => p.slug === slug)?.name ?? "Proyecto no encontrado",
  };
}
export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={<div className="container section">Cargando proyecto…</div>}
    >
      <ProjectDetail params={params} />
    </Suspense>
  );
}
async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <PageIntro eyebrow="Proyecto" title={p.name}>
        {p.summary}
      </PageIntro>
      <section className="container content-section project-layout">
        <div>
          <div className="wide-image">
            <Image
              src={p.image}
              alt={`Archivo de ${p.name}`}
              fill
              sizes="(min-width:1000px) 65vw, 100vw"
            />
          </div>
          <div className="prose">
            <h2>Un recorrido en imágenes</h2>
            <p>
              Este proyecto forma parte del archivo institucional de COOPTEBA
              SM3F en {p.place}, partido {p.district}. Las fotografías
              documentan su recorrido, pero no representan su estado
              actual.
            </p>
            <Notice>
              Ficha en preparación: faltan agregar imágenes y confirmar la historia completa, las
              unidades, las tipologías, las fechas y el estado actual del
              proyecto.
            </Notice>
          </div>
          <div className="gallery">
            {p.gallery.map((g) => (
              <figure key={g.src}>
                <div className="gallery-image">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(min-width:1000px) 350px, 90vw"
                  />
                </div>
                <figcaption>{g.alt}</figcaption>
              </figure>
            ))}
          </div>
          <a
            className="source-link"
            href={p.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver el archivo institucional original ↗
          </a>
        </div>
        <aside className="project-info">
          <p className="eyebrow">Datos del proyecto</p>
          <h3>{p.name}</h3>
          <span className="badge">Estado por confirmar</span>
          <dl>
            <dt>Localidad</dt>
            <dd>{p.place}</dd>
            <dt>Partido</dt>
            <dd>{p.district}</dd>
            <dt>Información actualizada</dt>
            <dd>Pendiente de validación institucional</dd>
            <dt>Fotografías</dt>
            <dd>Archivo del sitio anterior</dd>
          </dl>
          <ButtonLink href="/contacto">Consultar por el proyecto</ButtonLink>
        </aside>
      </section>
      <ContactBlock />
    </>
  );
}
