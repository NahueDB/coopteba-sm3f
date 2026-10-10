import { SocialLinks } from "@/components/ui/external-media";
import Image from "next/image";
import Link from "next/link";
import { navigation, site, areaContacts } from "@/content/site";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" aria-label="COOPTEBA SM3F — Inicio">
            <Image
              className="footer-logo"
              src="/images/marca/coopteba-sm3f-blanco.png"
              alt="COOPTEBA SM3F"
              width={313}
              height={157}
            />
          </Link>
          <p>
            Una necesidad compartida.
            <br />
            Una respuesta colectiva.
          </p>
        </div>
        <div>
          <h2>Explorá el sitio</h2>
          {navigation.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Información útil</h2>
          <Link href="/documentos">Documentos y recursos</Link>
          <Link href="/preguntas-frecuentes">Preguntas frecuentes</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
        <div>
          <h2>Acercate</h2>
          <p>{site.address}</p>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <div className="container footer-areas">
        <div className="footer-areas-heading">
          <div>
            <h2>Un contacto para cada consulta.</h2>
            <p>
              Contactos por área publicados en el sitio institucional. Vigencia
              pendiente de confirmación.
            </p>
          </div>
          <SocialLinks />
        </div>
        <div className="area-contacts">
          {areaContacts.map((contact) => (
            <div key={contact.email}>
              <h3>{contact.area}</h3>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>COOPTEBA · San Martín y Tres de Febrero</span>
        <span>Maqueta en desarrollo · Contenidos sujetos a revisión</span>
      </div>
    </footer>
  );
}
