import type { Metadata } from "next";
import { PageIntro, FAQs, ContactBlock } from "@/components/ui/shared";
export const metadata: Metadata = { title: "Preguntas frecuentes" };
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Preguntas frecuentes"
        title="Tus dudas tienen un lugar acá."
      >
        Información inicial para conocer la propuesta. Las condiciones concretas
        de cada plan deben consultarse con la cooperativa.
      </PageIntro>
      <section className="container content-section">
        <div className="prose">
          <FAQs />
        </div>
      </section>
      <ContactBlock />
    </>
  );
}
