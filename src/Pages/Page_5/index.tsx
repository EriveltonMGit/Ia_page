"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// IMPORT IMGS
import Image from "next/image";
import Img_Rotation from "../../img/Page_5/noise-3.png";

import "./page_5.css";
export default function Page_5() {
  useEffect(() => {
    // Registrando o plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animação para a div_flutuante, movendo, girando e desaparecendo com o scroll
    gsap.to(".div_flut_5", {
      y: "200vh",
      rotation: 760,
      // opacity: 0.5,
      scrollTrigger: {
        trigger: ".section_5",
        start: "top top",
        end: "bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="section_5">
      <div className="titulo_ia">
        <h1>Por que a IA generativa é importante?</h1>
        <div className="link_social">
          <a href="">
            {" "}
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="">
            {" "}
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="">
            <i className="bi bi-share-fill"></i>
          </a>

          <a href="https://forbes.com.br/forbes-tech/2024/10/a-revolucao-da-ia-como-o-chatgpt-esta-transformando-o-mercado-de-trabalho/">
            Leia mais em: Forbs{" "}
          </a>
        </div>
      </div>
      {/* AUI FICA O CONTEUDO DA SECTION 3 OS TEXTOS E MINI CARDS */}
      <main className="cards_">
        <div className="card">
          <h2>
            Por que a <span>IA generativa</span> é importante?
          </h2>
          <p>
            Aplicações de IA generativa, como o ChatGPT, chamaram a atenção e a
            imaginação de todos. Elas podem ajudar a reinventar a maioria das
            experiências e aplicações dos clientes, criar novas aplicações nunca
            antes vistas e ajudar os clientes a alcançar novos níveis de
            produtividade. De acordo com a Goldman Sachs, a IA generativa
            poderia impulsionar um aumento de 7% (ou quase 7 trilhões de
            dólares) no produto interno bruto (PIB) global.
          
              A seguir, apresentamos mais alguns benefícios da IA generativa.
            
          </p>
          <h2>Acelera a pesquisa</h2>
          <p>
            Os algoritmos de IA generativa podem explorar e analisar dados
            complexos de novas maneiras. Assim, os pesquisadores podem descobrir
            novas tendências e padrões que, de outra forma, não seriam
            aparentes. Esses algoritmos podem resumir o conteúdo, delinear
            vários caminhos de solução, debater ideias e criar documentação
            detalhada a partir de notas de pesquisa. É por isso que a IA
            generativa aprimora drasticamente a pesquisa e a inovação.
          </p>
        </div>
        <div className="card_5">
          <div className="div_flut_5">
            <Image
              className="img_ia_5 area-especial"
              src={Img_Rotation}
              alt=""
            />
          </div>
          <div className="opacity_flutu_2"></div>
        </div>
      </main>
        {/* AQUI FICA O SVG DO TOP BOTTOM */}
        <div className="svg_bottom_4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0d0f11"
            fillOpacity="1" // Altere de fill-opacity para fillOpacity
            d="M0,128L120,138.7C240,149,480,171,720,170.7C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
