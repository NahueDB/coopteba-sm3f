import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, formatDate } from "@/content/site";
import { PageIntro, Notice } from "@/components/ui/shared";
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title:
      posts.find((p) => p.slug === slug)?.title ?? "Publicación no encontrada",
  };
}
export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={<div className="container section">Cargando publicación…</div>}
    >
      <Article params={params} />
    </Suspense>
  );
}
async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = posts.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <PageIntro eyebrow={p.category} title={p.title}>
        {p.summary}
      </PageIntro>
      <article className="container content-section">
        <div className="prose">
          <div className="post-meta">
            <span>{p.category}</span>
            <time dateTime={p.date}>{formatDate(p.date)}</time>
            <span>Archivo institucional</span>
          </div>
          <div className="article-image">
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="(min-width:900px) 760px, 100vw"
            />
          </div>
          {p.paragraphs.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <Notice>
            Resumen del archivo original, pendiente de revisión y aprobación editorial. { <br/> } No es información de una actividad vigente.
          </Notice> 
          <a
            href={p.source}
            className="source-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar publicación original ↗
          </a>
          <div style={{ marginTop: 35 }}>
            <Link href="/novedades" className="text-link">
              ← Volver a novedades
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
