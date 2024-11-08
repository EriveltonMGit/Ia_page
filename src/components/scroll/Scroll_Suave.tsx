"use client";

import { useEffect } from "react";

const Scroll = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.2, // Duração da rolagem suave
        easing: (t: number) => t, // Easing
        wrapper: document.body, // Body como wrapper
        content: document.documentElement, // HTML como conteúdo
      });

      const scroll = () => {
        lenis.raf(performance.now());
        requestAnimationFrame(scroll);
      };

      requestAnimationFrame(scroll);

      // Seleciona links de âncora
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          const targetId = link.getAttribute("href");

          if (targetId && targetId !== "#") {
            const targetElement = document.querySelector(targetId) as HTMLElement;
            if (targetElement) {
              lenis.scrollTo(targetElement);
            }
          }
        });
      });

      return () => {
        lenis.destroy();
      };
    } else {
      console.error("Lenis não está disponível.");
    }
  }, []);

  return null; // O componente não renderiza nada visível
};

export default Scroll;
