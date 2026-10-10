import type { Metadata } from "next";
import { PostList } from "@/components/ui/post-list";
import { PageIntro, Notice, ContactBlock } from "@/components/ui/shared";
export const metadata: Metadata = { title: "Novedades" };
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Novedades"
        title="Noticias de una comunidad en movimiento."
      >
        Actividades, encuentros y comunicados de la cooperativa.
      </PageIntro>
      <section className="container content-section">
        <Notice>
          Esta proyecto recupera publicaciones de 2022 del archivo institucional.
          Sus actividades no son convocatorias vigentes. Los textos son
          resúmenes editoriales sujetos a aprobación.
        </Notice>
        <PostList />
      </section>
      <ContactBlock />
    </>
  );
}
