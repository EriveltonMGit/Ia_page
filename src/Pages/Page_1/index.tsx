// IMPORT IMGS
import Image from "next/image";
import Img_bkg from "../../img/Page_1/ia_.webp";
import Img_circulo from '../../img/Page_1/effect-home-hero.png.webp'


// IMPORT CSS
import "./page_1.css";
export default function Page_1() {
  return (
    <section className="section_1">
     <Image className="ciculo_" src={Img_circulo} alt="" />
    
   
      {/* CARD PRINCIPAL */}
      <main className="container">
        <div className="card_ia">
            <h1 className="area-especial">A Revolução da Inteligência Artificial</h1>
            <div className="card_rodape_">
                <p>Entenda os conceitos básicos de <span> Inteligência Artificial</span> e como ela está moldando o nosso mundo.</p>
                <button className="btn_sb button-custom">Saiba mais</button>

            </div>
        </div>
        <Image className="__bk_ia area-especial" src={Img_bkg} alt="" />
      </main>
     {/* AQUI FICA O SVG DO TOP BOTTOM */}
<div className="svg_top">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#0d0f11"
      fillOpacity="1" 
      d="M0,128L120,138.7C240,149,480,171,720,170.7C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
    ></path>
  </svg>
</div>
    </section>
  );
}
