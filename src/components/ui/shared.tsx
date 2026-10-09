import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  type Project,
  type Post,
  faqs,
  formatDate,
  site,
} from "@/content/site";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}
export function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      className={`button ${secondary ? "button-secondary" : ""}`}
      href={href}
    >
      {children}
      <Arrow />
    </Link>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="lead">{children}</p>}
    </div>
  );
}
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <header className="page-intro container">
      <Link href="/" className="breadcrumb">
        Inicio / <span>{eyebrow}</span>
      </Link>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lead">{children}</p>
    </header>
  );
}
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={`/proyectos/${project.slug}`} className="card-link">
        <div className="card-image">
          <Image
            src={project.image}
            alt={`Archivo de ${project.name}`}
            fill
            sizes="(min-width: 1000px) 380px, (min-width: 640px) 45vw, 90vw"
          />
          <span className="badge">Estado por confirmar</span>
        </div>
        <div className="card-body">
          <p className="small-label">
            {project.place} · {project.district}
          </p>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
          <span className="text-link">
            Conocer el proyecto <Arrow />
          </span>
        </div>
      </Link>
    </article>
  );
}
export function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      <Link href={`/novedades/${post.slug}`} className="card-link">
        <div className="card-image post-image">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1000px) 380px, (min-width: 640px) 45vw, 90vw"
          />
        </div>
        <div className="card-body">
          <div className="post-meta">
            <span>{post.category}</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h3>{post.title}</h3>
          <p>{post.summary}</p>
          <span className="text-link">
            Leer publicación <Arrow />
          </span>
        </div>
      </Link>
    </article>
  );
}
export function FAQs({ limit }: { limit?: number }) {
  return (
    <div className="faq-list">
      {faqs.slice(0, limit).map((f) => (
        <details key={f.id}>
          <summary>
            {f.question}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
export function InstitutionalCards() {
  return (
    <div className="institution-grid">
      {[
        {
          name: "SUTEBA",
          image: "suteba",
          text: "La cooperativa fue promovida desde SUTEBA como una respuesta organizada a la necesidad de vivienda. Un vínculo que conecta el trabajo docente con la construcción colectiva.",
          url: "https://www.suteba.org.ar/",
        },
        {
          name: "FECOOPTEBA",
          image: "fecoopteba",
          text: "La federación reúne cooperativas de vivienda COOPTEBA de distintas localidades. Un espacio de articulación para compartir experiencias y fortalecer el movimiento cooperativo.",
          url: "https://fecoopteba.coop.ar/",
        },
      ].map((i) => (
        <article className="institution-card" key={i.name}>
          <div className="institution-logo">
            <Image
              src={`/images/instituciones/${i.image}.png`}
              alt={`Logo de ${i.name}`}
              width={390}
              height={176}
            />
          </div>
          <h3>{i.name}</h3>
          <p>{i.text}</p>
          <a
            className="text-link"
            href={i.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sitio institucional <Arrow diagonal />
          </a>
        </article>
      ))}
    </div>
  );
}
export function ContactBlock() {
  return (
    <section className="contact-band" id="contacto">
      <div className="container contact-band-inner">
        <div>
          <p className="eyebrow">Demos el primer paso</p>
          <h2>
            Tu consulta es el comienzo
            <br />
            de una conversación.
          </h2>
          <p>
            Conocé la propuesta, acercate a nuestra sede y despejá tus dudas.
          </p>
          <ButtonLink href="/contacto">Hacer una consulta</ButtonLink>
        </div>
        <div className="contact-details">
          <p>
            <span>Encontranos</span>
            {site.address}
          </p>
          <p>
            <span>Llamanos</span>
            <a href={site.phoneHref}>{site.phone}</a>
          </p>
          <p>
            <span>Escribinos</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
export function Notice({ children }: { children: ReactNode }) {
  return (
    <aside className="notice">
      <span aria-hidden="true">ⓘ</span>
      <p>{children}</p>
    </aside>
  );
}
