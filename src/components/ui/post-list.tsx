"use client";
import { useState } from "react";
import { posts } from "@/content/site";
import { PostCard } from "./shared";
export function PostList() {
  const [category, setCategory] = useState("Todas");
  const items = posts.filter(
    (p) => category === "Todas" || p.category === category,
  );
  return (
    <>
      <div className="filter-row" aria-label="Filtrar publicaciones">
        {["Todas", "Noticias", "Actividades", "Comunicados"].map((c) => (
          <button
            type="button"
            key={c}
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="archive-label" aria-live="polite">
        {items.length} publicaciones
      </p>
      {items.length ? (
        <div className="cards-grid">
          {items.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No hay publicaciones en esta categoría.</h3>
          <p>Podés explorar las demás categorías.</p>
        </div>
      )}
    </>
  );
}
