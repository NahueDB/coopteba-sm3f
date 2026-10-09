"use client";
import { useState, type FormEvent } from "react";
import { site } from "@/content/site";
export function ContactForm() {
  const [draft, setDraft] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const subject = String(data.get("subject"));
    const message = String(data.get("message"));
    setDraft(
      `mailto:${site.email}?subject=${encodeURIComponent(`Consulta web: ${subject}`)}&body=${encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\n${message}`)}`,
    );
  }
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      onChange={() => setDraft("")}
    >
      <h2>Contanos tu consulta.</h2>
      <p>
        En esta maqueta el formulario prepara un correo. No envía ni almacena
        tus datos.
      </p>
      <div className="field">
        <label htmlFor="name">Tu nombre</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          maxLength={100}
        />
      </div>
      <div className="field">
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={150}
        />
      </div>
      <div className="field">
        <label htmlFor="subject">Motivo de consulta</label>
        <select id="subject" name="subject" required defaultValue="">
          <option value="" disabled>
            Seleccioná una opción
          </option>
          <option>Reunión informativa</option>
          <option>Viviendas y proyectos</option>
          <option>Consulta de persona asociada</option>
          <option>Otra consulta</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Tu mensaje</label>
        <textarea id="message" name="message" required maxLength={3000} />
      </div>
      <p className="form-help">
        No incluyas DNI, datos financieros ni información sensible. Una consulta
        no equivale a una inscripción.
      </p>
      <button type="submit" className="button">
        Preparar correo <span aria-hidden="true">→</span>
      </button>
      {draft && (
        <div className="form-result" role="status">
          <p>El borrador está listo. Todavía no se envió ningún mensaje.</p>
          <a href={draft}>Abrir el borrador en mi aplicación de correo ↗</a>
        </div>
      )}
    </form>
  );
}
