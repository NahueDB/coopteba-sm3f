"use client";
import { useState } from "react";
import { projects } from "@/content/site";
import { ProjectCard } from "./shared";
export function ProjectList() {
  const [district, setDistrict] = useState("Todos");
  const items = projects.filter(
    (p) => district === "Todos" || p.district === district,
  );
  return (
    <>
      <div className="filter-row" aria-label="Filtrar proyectos por partido">
        {["Todos", "General San Martín", "Tres de Febrero"].map((d) => (
          <button
            key={d}
            type="button"
            aria-pressed={district === d}
            onClick={() => setDistrict(d)}
          >
            {d}
          </button>
        ))}
      </div>
      <p className="archive-label" aria-live="polite">
        {items.length} proyectos del archivo institucional
      </p>
      <div className="cards-grid">
        {items.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
