import React from "react";

import Cmobile1 from "../../assets/Mobile/categorias/categoria-camiseta.png";
import Ctablet1 from "../../assets/Tablet/categorias/categoria-camiseta.png";
import Cdesktop1 from "../../assets/Desktop/categorias/categoria-camiseta.png";

import Cmobile2 from "../../assets/Mobile/categorias/categoria-casacos.png";
import Ctablet2 from "../../assets/Tablet/categorias/categoria-casacos.png";
import Cdesktop2 from "../../assets/Desktop/categorias/categoria-casacos.png";

import Cmobile3 from "../../assets/Mobile/categorias/categoria-bolsas.png";
import Ctablet3 from "../../assets/Tablet/categorias/categoria-bolsas.png";
import Cdesktop3 from "../../assets/Desktop/categorias/categoria-bolsa.png"; // Corrigi o nome da imagem

import Cmobile4 from "../../assets/Mobile/categorias/categoria-calcados.png";
import Ctablet4 from "../../assets/Tablet/categorias/categoria-calcados.png";
import Cdesktop4 from "../../assets/Desktop/categorias/categoria-calcados.png";

import Cmobile5 from "../../assets/Mobile/categorias/categoria-oculos.png";
import Ctablet5 from "../../assets/Tablet/categorias/categoria-oculos.png";
import Cdesktop5 from "../../assets/Desktop/categorias/categoria-oculos.png";

import Cmobile6 from "../../assets/Mobile/categorias/categoria-calcas.png";
import Ctablet6 from "../../assets/Tablet/categorias/categoria-calcas.png";
import Cdesktop6 from "../../assets/Desktop/categorias/categoria-calcas.png";

const Cards: React.FC = () => {
  return (
    <>
      <h2 className="text-center my-3 my-xl-5">Busque por categoria</h2>
      <div className="container row mx-auto g-4">
        <div className="col-6 col-md-4 col-xxl-2">
          <div className="card rounded-0 border-0">
            <img className="d-md-none d-block" src={Cmobile1} alt="" />
            <img className="d-none d-md-block d-xl-none" src={Ctablet1} alt="" />
            <img className="d-none d-xl-block" src={Cdesktop1} alt="" />
            <div className="card-header bg-black text-bg-dark">
              <p className="text-center">Categoria</p>
            </div>
          </div>
        </div>

        

      </div>
    </>
  );
};

export default Cards;
