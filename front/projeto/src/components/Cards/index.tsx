import React from "react";

import Cmobile1 from "../../assets/Mobile/categorias/categoria-camiseta.png";
import Ctablet1 from "../../assets/Tablet/categorias/categoria-camiseta.png";
import Cdesktop1 from "../../assets/Desktop/categorias/categoria-camiseta.png";

import Cmobile2 from "../../assets/Mobile/categorias/categoria-casacos.png";
import Ctablet2 from "../../assets/Tablet/categorias/categoria-casacos.png";
import Cdesktop2 from "../../assets/Desktop/categorias/categoria-casacos.png";

import Cmobile3 from "../../assets/Mobile/categorias/categoria-bolsas.png";
import Ctablet3 from "../../assets/Tablet/categorias/categoria-bolsas.png";
import Cdesktop3 from "../../assets/Desktop/categorias/categoria-bolsa.png";

import Cmobile4 from "../../assets/Mobile/categorias/categoria-calcados.png";
import Ctablet4 from "../../assets/Tablet/categorias/categoria-calcados.png";
import Cdesktop4 from "../../assets/Desktop/categorias/categoria-calcados.png";

import Cmobile5 from "../../assets/Mobile/categorias/categoria-oculos.png";
import Ctablet5 from "../../assets/Tablet/categorias/categoria-oculos.png";
import Cdesktop5 from "../../assets/Desktop/categorias/categoria-oculos.png";

import Cmobile6 from "../../assets/Mobile/categorias/categoria-calcas.png";
import Ctablet6 from "../../assets/Tablet/categorias/categoria-calcas.png";
import Cdesktop6 from "../../assets/Desktop/categorias/categoria-calcas.png";


export default function Cards() {
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
              <p className="text-center">
                Camisas
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4 col-xxl-2">
          <div className="card">
            <img className="d-md-none d-block" src={Cmobile2} alt="" />
            <img className="d-none d-md-block d-xl-none" src={Ctablet2} alt="" />
            <img className="d-none d-xl-block" src={Cdesktop2} alt="" />
            <div className="card-header bg-black text-bg-dark">
              <p className="text-center">
                Casacos
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4 col-xxl-2">
          <div className="card">
            <img className="d-md-none d-block" src={Cmobile3} alt="" />
            <img className="d-none d-md-block d-xl-none" src={Ctablet3} alt="" />
            <img className="d-none d-xl-block" src={Cdesktop3} alt="" />
            <div className="card-header bg-black text-bg-dark">
              <p className="text-center">
                Bolsas
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4 col-xxl-2">
          <div className="card">
            <img className="d-md-none d-block" src={Cmobile4} alt="" />
            <img className="d-none d-md-block d-xl-none" src={Ctablet4} alt="" />
            <img className="d-none d-xl-block" src={Cdesktop4} alt="" />
            <div className="card-header bg-black text-bg-dark">
              <p className="text-center">
                Calçados
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4 col-xxl-2">
          <div className="card">
            <img className="d-md-none d-block" src={Cmobile5} alt="" />
            <img className="d-none d-md-block d-xl-none" src={Ctablet5} alt="" />
            <img className="d-none d-xl-block" src={Cdesktop5} alt="" />
            <div className="card-header bg-black text-bg-dark">
              <p className="text-center">
                Acessórios
              </p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4 col-xxl-2">
          <div className="card">
            <img className="d-md-none d-block" src={Cmobile6} alt="" />
            <img className="d-none d-md-block d-xl-none" src={Ctablet6} alt="" />
            <img className="d-none d-xl-block" src={Cdesktop6} alt="" />
            <div className="card-header bg-black text-bg-dark">
              <p className="text-center">
                Calças
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}