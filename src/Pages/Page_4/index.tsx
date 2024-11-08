"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// IMPORT IMGS
import Image from "next/image";
import Img_Ia from "../../img/Page_4/noise-2.png";

import "./page_4.css";
export default function Page_4() {
  useEffect(() => {
    // Registrando o plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animação para a div_flutuante, movendo, girando e desaparecendo com o scroll
    gsap.to(".div_flut_2", {
      y: "180vh",
      rotation: 420,
      // opacity: 0.5,
      scrollTrigger: {
        trigger: ".section_4",
        start: "top top",
        end: "bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="section_4">
      <div className="titulo_ia">
        <h1>IA generativa</h1>
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
            A Revolução da <span>IA Generativa</span>: Oportunidades e Desafios
            para o Futuro
          </h2>
          <p>
            Um subcampo empolgante da IA, ​​que tem despertado cada vez mais
            interesse é a chamada IA ​​generativa, que se concentra na criação
            de conteúdo novo e original, como imagens, música, texto e muito
            mais. Essa tecnologia inovadora tem aplicações em áreas como design,
            arte, entretenimento e até mesmo na criação de novas soluções
            tecnológicas.
          </p>
          <h2>
            A estimativa da <span>IA generativa</span> é chegar na marca de US$
            50 bilhões até 2028
          </h2>
          <p>
            Com projeções demonstrando que o mercado de IA generativa
            ultrapassará os US$ 50 bilhões até 2029, fica evidente o potencial
            desses segmentos para discussão a criatividade e a inovação em
            diversos setores. A capacidade da IA ​​generativa de gerar conteúdo
            único e personalizado abre novas possibilidades para artistas,
            designers e empresas que buscam se destacar em um mercado cada vez
            mais competitivo.
          </p>
        <div className="rodape_">
        <a href="https://aws.amazon.com/pt/what-is/generative-ai/">Saiba mais</a>
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

        
        </div>
        </div>
        <div className="card_2">
          <div className="div_flut_2">
            <Image className="img_ia_2 area-especial" src={Img_Ia} alt="" />
          </div>
          <div className="opacity_flutu_2"></div>
        </div>
      </main>
    </section>
  );
}
