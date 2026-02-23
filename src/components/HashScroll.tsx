"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function tryScrollToHash(hash: string) {
  const id = hash.replace("#", "").trim();
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Quando a rota muda, tenta rolar para o hash atual (se existir)
    const hash = window.location.hash;
    if (!hash) return;

    let tries = 0;
    const maxTries = 60; // 6s

    const timer = window.setInterval(() => {
      tries += 1;
      const ok = tryScrollToHash(hash);
      if (ok || tries >= maxTries) window.clearInterval(timer);
    }, 100);

    // tenta também no próximo frame
    requestAnimationFrame(() => tryScrollToHash(hash));

    return () => window.clearInterval(timer);
  }, [pathname]);

  useEffect(() => {
    // Se o hash mudar sem trocar de rota
    const onHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;

      let tries = 0;
      const maxTries = 60;

      const timer = window.setInterval(() => {
        tries += 1;
        const ok = tryScrollToHash(hash);
        if (ok || tries >= maxTries) window.clearInterval(timer);
      }, 100);

      requestAnimationFrame(() => tryScrollToHash(hash));
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}