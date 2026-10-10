import { SocialLinks, InteractiveMap } from "@/components/ui/external-media";
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
              <span>Horarios</span>
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
            Confirmar los horarios. {<br />} El sitio anterior muestra correos
            de dos dominios distintos: se usó el de la cabecera, pendiente de
            validación institucional.
          </Notice>
        </div>
        <ContactForm />
      </section>
      <section className="container section map-section">
        <div>
          <p className="eyebrow">Nuestra sede</p>
          <h2>Vení a conocernos.</h2>
          <p className="lead">Explorá la ubicación y elegí cómo llegar.</p>
          <SocialLinks />
        </div>
        <InteractiveMap />
      </section>
    </>
  );
}
