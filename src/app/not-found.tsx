import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container section">
      <p className="eyebrow">Página no encontrada</p>
      <h1>Por acá no era.</h1>
      <p className="lead" style={{ marginBlock: 25 }}>
        La página que buscás no está disponible. Podés volver al Inicio y
        continuar explorando.
      </p>
      <Link href="/" className="button">
        Volver al Inicio →
      </Link>
    </section>
  );
}
