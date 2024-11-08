

// IMPORT IMGS 
import Image from "next/image";
import Img_Ia from '../../img/Page_3/transferir.webp'

import "./page_3.css";
export default function Page_3() {
  return (
    <section className="section_3">
      <div className="titulo_ia">
        <h1>
          A Revolução da IA: Como o ChatGPT Está Transformando o
          Mercado de Trabalho
        </h1>
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
            O Futuro promissor da <span>IA</span>: Projeções revelam uma
            explosão de oportunidades e desafios.
          </h2>
          <p>
            A Inteligência Artificial (IA) está transformando o panorama global
            dos negócios, oferecendo novas oportunidades, revolucionando setores
            e criando uma demanda sem precedentes por talentos especializados.
            Este artigo detalha o crescimento exponencial do mercado de IA,
            explora as tendências emergentes e analisa as implicações dessa
            tecnologia para empresas de todos os tamanhos.
          </p>
          <h2>
            O crescimento exponencial do mercado de <span>IA</span>.
          </h2>
          <p>
            Primeiramente, vamos falar sobre o crescimento exponencial do
            mercado de IA. Estamos testemunhando um aumento significativo nos
            investimentos em tecnologias de IA em todo o mundo, à medida que
            empresas de todos os setores buscam aproveitar seu potencial. A
            Inteligência Artificial está se tornando uma ferramenta
            indispensável para a inovação e a competitividade, sendo integrada
            em processos e operações de forma cada vez mais abrangente. Com
            projeções otimistas, analistas e especialistas apontam para um
            crescimento exponencial do mercado de IA nas próximas décadas.
          </p>
        </div>
        <div className="card_2">
        
          <Image className="img_ia_2 area-especial" src={Img_Ia} alt=""/> 
        </div>
      </main>

      {/* AQUI FICA O SVG DO TOP BOTTOM */}
      <div className="svg_bottom">
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
