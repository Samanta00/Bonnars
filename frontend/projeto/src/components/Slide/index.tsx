import React from "react";
import slideMobile1 from "../../assets/Mobile/banner1-mobile.png";
import slideTablet1 from "../../assets/Tablet/banner1-tablet.png";
import slideDesktop1 from "../../assets/Desktop/banner1-desktop.png";
import slideMobile2 from "../../assets/Mobile/banner2-mobile.png";
import slideTablet2 from "../../assets/Tablet/banner2-tablet.png";
import slideDesktop2 from "../../assets/Desktop/banner2-desktop.png";
import slideMobile3 from "../../assets/Mobile/banner3-mobile.png";
import slideTablet3 from "../../assets/Tablet/banner3-tablet.png";
import slideDesktop3 from "../../assets/Desktop/banner3-desktop.png";

export default function Slide() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img 
            className="img-fluid d-md-none" src={slideMobile1} 
            alt="Modelo feminina vestindo blusa violeta" 
          />
          <img 
            className="img-fluid d-none d-md-block d-xl-none" src={slideTablet1} 
            alt="Modelo feminina vestindo blusa violeta" 
          />
          <img 
            className="img-fluid d-none d-xl-block" src={slideDesktop1} 
            alt="Modelo feminina vestindo blusa violeta" 
          />
        </div>
        <div className="carousel-item">
          <img 
            className="img-fluid d-md-none" src={slideMobile2} 
            alt="Modelo feminina vestindo blusa violeta" 
          />
          <img 
            className="img-fluid d-none d-md-block d-xl-none" src={slideTablet2} 
            alt="Modelo feminina vestindo blusa violeta" 
          />
          <img 
            className="img-fluid d-none d-xl-block" src={slideDesktop2} 
            alt="Modelo feminina vestindo blusa violeta" 
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>COLEÇÃO ATEMPORAL</h5>
            <p>Estilo e qualidade para durar.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img 
            className="img-fluid d-md-none" src={slideMobile3} 
            alt="Modelo feminina vestindo blusa violeta" 
          />
          <img 
            className="img-fluid d-none d-md-block d-xl-none" src={slideTablet3} 
            alt="Modelo feminina vestindo blusa violeta" 
          />
          <img 
            className="img-fluid d-none d-xl-block" src={slideDesktop3} 
            alt="Modelo feminina vestindo blusa violeta" 
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>COLEÇÃO ATEMPORAL</h5>
            <p>Alto impacto visual, baixo impacto ambiental!</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
}