"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between gap-4">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0"
            aria-label="Ir para a página inicial"
            onClick={() => setOpen(false)}
          >
            <div
              className="
                relative
                h-24 w-56
                sm:h-28 sm:w-64
                md:h-32 md:w-72
              "
            >
              <Image
                src="/logo-impulse.png"
                alt="Impulse"
                fill
                priority
                className="object-contain brightness-0 invert"
              />
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <Link href="/sobre" className="hover:text-white transition">
              Sobre
            </Link>

            <Link href="/#problem" className="hover:text-white transition">
              Problema
            </Link>

            <Link href="/#levels" className="hover:text-white transition">
              Níveis
            </Link>

            <Link href="/#how" className="hover:text-white transition">
              Como funciona
            </Link>
          </nav>

          {/* CTA + MOBILE */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="hidden sm:block">
              <Button href="/diagnostico?src=top">Diagnóstico</Button>
            </div>

            <div className="sm:hidden">
              <Link
                href="/diagnostico?src=top"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium text-black bg-white hover:opacity-90 transition"
                onClick={() => setOpen(false)}
              >
                Diagnóstico
              </Link>
            </div>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 py-2 text-white/85 hover:bg-white/10 transition"
              aria-label="Abrir menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="text-sm">{open ? "Fechar" : "Menu"}</span>
            </button>
          </div>
        </div>

        {/* MENU MOBILE */}
        {open && (
          <div className="md:hidden mt-4 rounded-2xl border border-white/10 bg-black/60 overflow-hidden">
            <div className="flex flex-col">
              <Link
                href="/sobre"
                className="px-5 py-4 text-white/85 hover:bg-white/5 transition"
                onClick={() => setOpen(false)}
              >
                Sobre
              </Link>

              <Link
                href="/#problem"
                className="px-5 py-4 text-white/85 hover:bg-white/5 transition"
                onClick={() => setOpen(false)}
              >
                Problema
              </Link>

              <Link
                href="/#levels"
                className="px-5 py-4 text-white/85 hover:bg-white/5 transition"
                onClick={() => setOpen(false)}
              >
                Níveis
              </Link>

              <Link
                href="/#how"
                className="px-5 py-4 text-white/85 hover:bg-white/5 transition"
                onClick={() => setOpen(false)}
              >
                Como funciona
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
