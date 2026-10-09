import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "COOPTEBA SM3F · Construimos en comunidad",
    template: "%s | COOPTEBA SM3F",
  },
  description:
    "Conocé la cooperativa de vivienda de San Martín y Tres de Febrero, sus proyectos y su propuesta de construcción colectiva.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={geist.variable}>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
