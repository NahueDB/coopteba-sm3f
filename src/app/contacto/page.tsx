import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { ContactForm } from "@/components/ui/contact-form";
import { PageIntro, Notice, Arrow } from "@/components/ui/shared";
export const metadata: Metadata = { title: "Contacto" };
export default function Page() {
  return (
    <>
      <PageIntro eyebrow="Contacto" title="Empecemos por conversar.">
        Solicitá una reunión informativa, consultá por la propuesta o acercate a
        nuestra sede.
      </PageIntro>
      <section className="container content-section contact-page-grid">
        <div className="contact-page-info">
          <h2>Estamos cerca.</h2>
          <div className="contact-details">
            <p>
              <span>Sede</span>
              {site.address}
            </p>
            <p>
              <span>Teléfono</span>
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
            <p>
              <span>Correo</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              <span>Horarios publicados en el sitio anterior</span>
              {site.hours}
            </p>
          </div>
          <a
            className="text-link"
            href={site.map}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver ubicación en Google Maps <Arrow diagonal />
          </a>
          <div className="wide-image">
            <Image
              src="/images/sede/fachada.jpg"
              alt="Sede de COOPTEBA SM3F en Madero 5670. Fotografía del archivo institucional."
              fill
              sizes="(min-width:1000px) 45vw, 90vw"
            />
          </div>
          <Notice>
            Confirmá los horarios antes de acercarte. El sitio anterior muestra
            correos de dos dominios distintos: usamos el de su cabecera,
            pendiente de validación institucional.
          </Notice>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
