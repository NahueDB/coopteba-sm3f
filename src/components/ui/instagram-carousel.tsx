"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { instagram, type InstagramPost } from "@/content/site";
import { Notice } from "./shared";
const previews: InstagramPost[] = [
  {
    permalink: instagram.url,
    id: "preview-1",
    image: "/images/portada/edificio-galerias.jpg",
    alt: "Galerías del archivo institucional",
    caption: "Espacios para encontrarnos.",
  },
  {
    permalink: instagram.url,
    id: "preview-2",
    image: "/images/proyectos/bonifacini-3976/patio.jpg",
    alt: "Patio del archivo institucional",
    caption: "El proyecto se vive en comunidad.",
  },
  {
    permalink: instagram.url,
    id: "preview-3",
    image: "/images/sede/salon.jpg",
    alt: "Salón de la sede en el archivo institucional",
    caption: "Un lugar para compartir.",
  },
  {
    permalink: instagram.url,
    id: "preview-4",
    image: "/images/portada/edificio-escaleras.jpg",
    alt: "Escaleras del archivo institucional",
    caption: "Construimos de forma colectiva.",
  },
];
export function InstagramCarousel() {
  const track = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState({ start: true, end: false });
  const real = instagram.posts.length > 0;
  const items = real ? instagram.posts : previews;
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () =>
      setPosition({
        start: element.scrollLeft < 3,
        end:
          element.scrollLeft + element.clientWidth >= element.scrollWidth - 3,
      });
    update();
    element.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => {
      element.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);
  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const width =
      element.firstElementChild?.getBoundingClientRect().width ?? 300;
    element.scrollBy({
      left: direction * (width + 22),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  return (
    <section
      className="section instagram-section"
      id="instagram"
      aria-label="Instagram de la cooperativa"
    >
      <div className="container">
        <div className="section-top">
          <div className="section-heading">
            <p className="eyebrow">Nos encontramos en Instagram</p>
            <h2>
              La vida cooperativa,
              <br />
              más cerca.
            </h2>
            <p className="lead">
              Un espacio para seguir nuestras actividades, encuentros y
              proyectos.
            </p>
          </div>
          <a
            href={instagram.url}
            className="instagram-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">◎</span>
            {instagram.handle} ↗
          </a>
        </div>
        {!real && (
          <Notice>
            Vista previa del carrusel: fotos del archivo institucional, no
            publicaciones de Instagram. La conexión a los últimos posts está
            pendiente.
          </Notice>
        )}
        <div className="carousel-controls">
          <p>{real ? "Publicaciones cargadas" : "Vista previa del diseño"}</p>
          <div>
            <button
              type="button"
              aria-label="Ver tarjetas anteriores de Instagram"
              aria-controls="instagram-track"
              disabled={position.start}
              onClick={() => move(-1)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Ver tarjetas siguientes de Instagram"
              aria-controls="instagram-track"
              disabled={position.end}
              onClick={() => move(1)}
            >
              →
            </button>
          </div>
        </div>
        <ul
          id="instagram-track"
          className="instagram-track"
          ref={track}
          tabIndex={0}
          aria-label="Carrusel de Instagram"
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              move(event.key === "ArrowRight" ? 1 : -1);
            }
          }}
        >
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-card"
              >
                <div className="instagram-image">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width:1000px) 340px, (min-width:640px) 45vw, 80vw"
                  />
                  <span className="instagram-image-tag">
                    {real ? "Instagram ↗" : "Archivo · Vista previa"}
                  </span>
                </div>
                <div className="instagram-card-body">
                  <p>{item.caption}</p>
                  <span>
                    {real ? "Ver publicación" : "Visitar el perfil oficial"} ↗
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <p className="carousel-hint">
          Deslizá para explorar · También podés usar los botones o las flechas
          del teclado.
        </p>
      </div>
    </section>
  );
}
