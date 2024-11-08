// globals.d.ts
declare global {
    interface Lenis {
      // eslint-disable-next-line @typescript-eslint/no-misused-new
      new (options: { duration: number; easing: (t: number) => number; wrapper: HTMLElement; content: HTMLElement }): Lenis;
      raf: (time: number) => void;
      scrollTo: (element: HTMLElement) => void;
      destroy: () => void;
    }
  
    interface Window {
      Lenis: Lenis; // Agora o Lenis tem um tipo definido
    }
  }
  
  export {};
  