"use client";

import "./page_8.css";

export default function Page_8() {
  return (
    <section id="contato" className="section_footer">
      <footer  className="footer">
        <div className="container">
          {/* Sobre */}
          <div
            className="footerColumn"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h5 className="footerTitle">Sobre</h5>
            <p className="footerText">
              Ofereço serviços de alta qualidade com foco em atender as
              necessidades dos clientes em todas as fases do projeto.
            </p>
          </div>

          {/* Serviços */}
          <div
            className="footerColumn"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h5 className="footerTitle">Serviços</h5>
            <ul className="footerList">
              <li>
                <a href="#!">
                  <i className="bi bi-person-badge"></i>MENTORIA
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="bi bi-laptop"></i> DESENVOLVIMENTO
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="bi bi-headset"></i>SUPORTE
                </a>
              </li>
              <li>
                <a href="#!">
                  {" "}
                  <i className="bi bi-chat-dots"></i> TREINAMENTO
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div
            className="footerColumn"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h5 className="footerTitle">CONTATO</h5>
            <ul className="footerList">
              <li>
                <a href="">
                  
                  <i className="bi bi-whatsapp"></i>WHATSAPP
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="bi bi-envelope"></i>ENVIAR E-MAIL
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <i className="bi bi-telephone-outbound-fill"></i>CONTATO
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <i className="bi bi-geo-fill"></i> LOCALIZAÇÃO
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div
            className="footerColumn links"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h5 className="footerTitle">SIGA-ME</h5>
            <div className="socialLinks">
           
              {/*  */}
              <div className="div_icons">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="" className="socialIcon">
                  <i className="bi bi-github"></i>
                </a>
                <a href="" className="socialIcon">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          © 2024 Copyright: Todos os direitos reservados.
        </div>
      </footer>
    </section>
    
  );
}
