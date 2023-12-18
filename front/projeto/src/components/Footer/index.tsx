import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <>
      <section className="pb-4 bg-black text-bg-dark">
        <h2 className="text-center py-3">Conheça todas as nossas facilidades</h2>
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 px-3">
          <div className="divs-facilidades d-flex align-items-center">
            <div>
              <i className="verde-limao bi bi-x-diamond fs-1"></i>
            </div>
            <div>
              <div className="ms-3 mb-1 verde-limao">PAGUE PELO PIX</div>
              <div className="texto-menor ms-3">
                Ganhe 5% OFF em pagamentos via PIX
              </div>
            </div>
          </div>
          <div className="divs-facilidades d-flex align-items-center">
            <div>
              <i className="verde-limao bi bi-arrow-repeat fs-1"></i>
            </div>
            <div>
              <div className="ms-3 mb-1 verde-limao">TROCA GRÁTIS</div>
              <div className="texto-menor ms-3">
                Fique livre para trocar em até 30 dias.
              </div>
            </div>
          </div>
          <div className="divs-facilidades d-flex align-items-center">
            <div>
              <i className="verde-limao bi bi-flower1 fs-1"></i>
            </div>
            <div>
              <div className="ms-3 mb-1 verde-limao">SUSTENTABILIDADE</div>
              <div className="texto-menor ms-3">
                Moda responsável, que respeita o meio ambiente.
              </div>
            </div>
          </div>
        </div>
      </section>

      <form className="border border-secondary my-3 my-xl-5 p-3 text-center div-novidades mx-auto">
        <h5>
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? Cadastre-se!
        </h5>
        <div className="input-group my-3">
          <input
            type="email"
            className="form-control border-secondary rounded-0"
            placeholder="Digite seu e-mail"
            aria-label="Digite seu e-mail"
            aria-describedby="button-addon2"
          />
          <button type="button" id="button-addon2">
            Enviar
          </button>
        </div>
      </form>

      <footer className="text-center bg-black text-bg-dark">
        <p className="card-text py-3">2023 <i className="bi bi-c-circle"></i> Teste</p>
      </footer>
    </>
  );
}

export default Footer;
