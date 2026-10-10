"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { site, socialLinks, type Video } from "@/content/site";

export function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Redes sociales de la cooperativa">
      {socialLinks.map((s) => (
        <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
          {s.label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </nav>
  );
}
export function VideoPlayer({ video }: { video: Video }) {
  const [loaded, setLoaded] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    if (loaded) frame.current?.focus();
  }, [loaded]);
  return (
    <article className="video-card">
      <div className="video-frame">
        {loaded ? (
          <iframe
            ref={frame}
            src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
            title={video.title}
            allow="encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            className="video-load"
            onClick={() => setLoaded(true)}
            aria-label={`Cargar video: ${video.title}`}
          >
            <Image
              src={video.image}
              alt=""
              fill
              sizes="(min-width:1000px) 600px, 100vw"
            />
            <span className="video-play" aria-hidden="true">
              ▶
            </span>
            <span className="video-duration">{video.duration}</span>
            <span className="video-load-label">Cargar video de YouTube</span>
          </button>
        )}
      </div>
      <div className="video-caption">
        <h3>{video.title}</h3>
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en YouTube ↗
        </a>
      </div>
      <p className="media-privacy">
        {loaded
          ? "Reproductor externo cargado. YouTube gestiona la reproducción y puede procesar datos de uso."
          : "El reproductor se conecta a YouTube únicamente al pulsar el botón. Sin reproducción automática."}
      </p>
    </article>
  );
}
export function InteractiveMap() {
  const [loaded, setLoaded] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    if (loaded) frame.current?.focus();
  }, [loaded]);
  const embed = `https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`;
  return (
    <div className="interactive-map">
      <div className="map-frame">
        {loaded ? (
          <iframe
            ref={frame}
            title="Mapa interactivo de la sede de COOPTEBA SM3F en Madero 5670, Tropezón"
            src={embed}
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="map-placeholder">
            <span aria-hidden="true" className="map-pin">
              ⌖
            </span>
            <h3>Encontranos en Tropezón.</h3>
            <p>{site.address}</p>
            <button
              className="button"
              type="button"
              onClick={() => setLoaded(true)}
            >
              Cargar mapa interactivo <span aria-hidden="true">↗</span>
            </button>
            <p className="media-privacy">
              Al cargar el mapa se establece una conexión con Google Maps.
            </p>
          </div>
        )}
      </div>
      <a
        className="text-link"
        href={site.map}
        target="_blank"
        rel="noopener noreferrer"
      >
        Cómo llegar en Google Maps ↗
      </a>
    </div>
  );
}
