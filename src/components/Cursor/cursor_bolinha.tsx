'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './cursor.css';

const BolinhaSeguindoMouse = () => {
  const [posicao, setPosicao] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement | null>(null); // Referência para a bolinha
  const [cursorColor] = useState('#9fa5a4'); // Cor padrão do cursor

  useEffect(() => {
    const moverBolinha = (e: MouseEvent) => {
      setPosicao({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', moverBolinha);

    // Limpar o evento quando o componente for desmontado
    return () => {
      window.removeEventListener('mousemove', moverBolinha);
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a');
    const buttonsCustom = document.querySelectorAll('.button-custom'); // Selecionando os botões com classe "button-custom"
    const areasEspeciais = document.querySelectorAll('.area-especial'); // Selecionando as áreas com a classe "area-especial"

    // Eventos para links
    links.forEach(link => {
      link.addEventListener("mouseover", () => {
        gsap.to('.cursor_', { scale: 2, backgroundColor: '#bdbab7', duration: 0.4 });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to('.cursor_', { scale: 1, backgroundColor: cursorColor, duration: 0.4 }); // Cor de volta ao padrão
      });
    });

    // Eventos para botões personalizados
    buttonsCustom.forEach(button => {
      button.addEventListener("mouseover", () => {
        gsap.to('.cursor_', { scale: 2.5, backgroundColor: '#bdbab7', duration: 0.4 }); // Cor laranja para o botão
      });

      button.addEventListener("mouseleave", () => {
        gsap.to('.cursor_', { scale: 1, backgroundColor: cursorColor, duration: 0.4 }); // Cor de volta ao padrão
      });
    });

    // Eventos para áreas especiais
    areasEspeciais.forEach(area => {
      area.addEventListener("mouseover", () => {
        gsap.to('.cursor_', { scale: 3, backgroundColor: '#bdbab7', duration: 0.4 }); // Aumenta ainda mais na área especial
      });

      area.addEventListener("mouseleave", () => {
        gsap.to('.cursor_', { scale: 1, backgroundColor: cursorColor, duration: 0.4 }); // Cor de volta ao padrão
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("mouseover", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
      buttonsCustom.forEach(button => {
        button.removeEventListener("mouseover", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
      areasEspeciais.forEach(area => {
        area.removeEventListener("mouseover", () => {});
        area.removeEventListener("mouseleave", () => {});
      });
    };
  }, [cursorColor]);

  useEffect(() => {
    // Atualiza a posição da bolinha usando a referência diretamente
    if (cursorRef.current) {
      const { x, y } = posicao;
      cursorRef.current.style.left = `${x - 6}px`;
      cursorRef.current.style.top = `${y - 6}px`;
    }
  }, [posicao]);

  return (
    <div
      ref={cursorRef}
      className="cursor_"
      style={{
        position: 'fixed',
        zIndex: '3000',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: cursorColor,  // Usando a cor padrão do estado
        pointerEvents: 'none',
        transition: 'background-color 0.4s',  // Apenas transição para a cor
      }}
    />
  );
};

export default BolinhaSeguindoMouse;
