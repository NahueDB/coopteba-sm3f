"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="COOPTEBA SM3F — Inicio"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/marca/coopteba-sm3f.png"
            alt="COOPTEBA SM3F, San Martín y Tres de Febrero"
            width={381}
            height={201}
            loading="eager"
          />
        </Link>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Cerrar" : "Menú"}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Navegación principal"
          className={`main-nav ${open ? "is-open" : ""}`}
        >
          {navigation.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link
            className="nav-contact"
            href="/contacto"
            onClick={() => setOpen(false)}
          >
            Contacto <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
      <div className="rainbow-line" aria-hidden="true" />
    </header>
  );
}
