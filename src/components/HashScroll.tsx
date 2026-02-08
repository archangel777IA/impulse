"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function scrollToHash(hash: string) {
  const id = hash.replace("#", "").trim();
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export default function HashScroll() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Tenta rolar sempre que a rota ou query mudar
    // Isso pega o caso /#problem, /?x=1#problem, etc
    const hash = window.location.hash;

    if (!hash) return;

    let tries = 0;
    const maxTries = 60; // 60 * 100ms = 6s

    const tick = () => {
      tries += 1;
      const ok = scrollToHash(hash);
      if (ok || tries >= maxTries) {
        clearInterval(timer);
      }
    };

    // tenta já no próximo frame e depois em intervalos
    requestAnimationFrame(tick);
    const timer = window.setInterval(tick, 100);

    return () => clearInterval(timer);
  }, [pathname, searchParams]);

  useEffect(() => {
    // Também responde a mudanças de hash sem troca de rota
    const onHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;

      let tries = 0;
      const maxTries = 60;

      const tick = () => {
        tries += 1;
        const ok = scrollToHash(hash);
        if (ok || tries >= maxTries) clearInterval(timer);
      };

      requestAnimationFrame(tick);
      const timer = window.setInterval(tick, 100);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
