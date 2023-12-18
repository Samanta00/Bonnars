import React from "react";
import './styles/styles.css';
import { Link } from "react-router-dom";
import PhotosessaoMaisVendidos from "../../assets/banner.png";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  isBestSeller: boolean;
  isTrending: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Produto 1",
    image: "https://images.tcdn.com.br/img/img_prod/793630/vestido_longo_verde_esmeralda_lia_rabello_209_1_4dbe68d4af54f584019fa973d5340ecb.jpg",
    description: "Descrição do Produto 1",
    isBestSeller: true,
    isTrending: true,
  },
  {
    id: 2,
    name: "Produto 1",
    image: "https://images.tcdn.com.br/img/img_prod/793630/vestido_longo_verde_esmeralda_lia_rabello_209_1_4dbe68d4af54f584019fa973d5340ecb.jpg",
    description: "Descrição do Produto 1",
    isBestSeller: true,
    isTrending: true,
  },
  {
    id: 3,
    name: "Produto 1",
    image: "https://images.tcdn.com.br/img/img_prod/793630/vestido_longo_verde_esmeralda_lia_rabello_209_1_4dbe68d4af54f584019fa973d5340ecb.jpg",
    description: "Descrição do Produto 1",
    isBestSeller: true,
    isTrending: true,
  },
  {
    id: 4,
    name: "Produto 1",
    image: "https://images.tcdn.com.br/img/img_prod/793630/vestido_longo_verde_esmeralda_lia_rabello_209_1_4dbe68d4af54f584019fa973d5340ecb.jpg",
    description: "Descrição do Produto 1",
    isBestSeller: true,
    isTrending: true,
  }

];



const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="CardNovidade mb-3">
     <img src={product.image} className="ImageNovidade" alt={product.name} />
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.description}</p>
      {product.isBestSeller && <span className="badge bg-success">Mais Vendido</span>}
      {product.isTrending && <span className="badge bg-warning text-dark">Bombando</span>}
    </div>
  </div>
);

const ProductListVendidos: React.FC = () => {
  const bestSellers: Product[] = products.filter(
    (product) => product.isBestSeller && product.isTrending
  ).slice(0, 5);

  return (
    <div className="ContainerNovidade">
      <img src={PhotosessaoMaisVendidos} alt="Banner" className="BannerImage" />
      <h2>Produtos que mais Bombam e são Vendidos</h2>
      <div className="ProductBlock">
        {bestSellers.map((product) => (
          <div key={product.id} className="CardNovidade">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="d-flex flex-column align-items-center mt-4"> {/* Centralizar conteúdo */}
        <h1>Está esperando o quê?</h1>
        <h2>Venha fazer suas compras agora mesmo!!!</h2>
        <Link to="/catalogo">
          <button className="btn btn-primary btn-lg mt-3">Catálogo</button>
        </Link>
        <p/><p/>
      </div>
    </div>
  );
};

export default ProductListVendidos;