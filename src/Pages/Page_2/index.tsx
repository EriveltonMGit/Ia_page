"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./page_2.css";
// IMPORT IMG 
import Image from "next/image";
import Img_Abstract from '../../img/Page_2/noise.png'
// COMPONENTS 


export default function Page_2() {
  useEffect(() => {
    // Registrando o plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animação para a div_flutuante, movendo, girando e desaparecendo com o scroll
    gsap.to(".div_flutuante", {
      y: "200vh", 
      rotation: 720,
      // opacity: 0.5,
      scrollTrigger: {
        trigger: ".section_2",
        start: "top top",
        end: "bottom", 
        scrub: true,
      },
    });
    
  }, []);

  return (
    <section className="section_2">
      <main className="container_content">
        {/* CARD 1 */}
        <div className="cards_1">
          <div className="div_flutuante">
          
            <Image className="area-especial" src={Img_Abstract} alt=""/>
          </div>
          <div className="opacity_flutu">

          </div>
        </div>

        {/* CARD 2 */}
        <div className="cards_2">
          <div className="card_">
            <h1>O que é <span>IA?</span></h1>
            <p>
              A Inteligência Artificial é um campo inovador da ciência da
              computação, focado em criar sistemas que podem aprender, fazer
              previsões e tomar decisões para resolver desafios complexos.
            </p>
            <p>
              A IA está transformando nosso cotidiano, com aplicações que vão
              desde a previsão de desastres naturais até diagnósticos médicos e
              a criação de soluções para mudanças climáticas. Embora poderosa,
              sua utilização traz responsabilidades, exigindo ética e cuidado em
              seu desenvolvimento.
            </p>
          </div>
          <div className="card_">
            <h1>Explorando a <span>Inteligência Artificial </span></h1>
            <p>
              Existem muitas definições diferentes de IA. Pensamos em IA como um
              ramo da ciência da computação que permite que computadores façam
              previsões e tomem decisões para resolver problemas.
            </p>
            <p>
              A inteligência artificial está tendo um enorme impacto em nosso
              mundo. Você pode usar a IA para resolver problemas com os quais se
              importa, como mudanças climáticas, manchetes enganosas e
              diagnósticos de doenças — embora ela também possa ser mal
              utilizada.
            </p>
          </div>
          <div className="card_">
            <h1>A Revolução da <span>Inteligência Artificial </span></h1>
            <p>
              A Inteligência Artificial está reescrevendo as regras da
              tecnologia, permitindo que máquinas tomem decisões inteligentes,
              aprenda com dados e melhorem sua performance com o tempo.
            </p>
            <p>
              De soluções inovadoras em saúde e educação até melhorias no
              transporte e segurança, a IA tem o potencial de resolver problemas
              globais. No entanto, também apresenta desafios, como a necessidade
              de garantir que seu uso seja responsável e beneficie toda a
              sociedade.
            </p>
          </div>
        </div>
      </main>


    </section>
  );
}
