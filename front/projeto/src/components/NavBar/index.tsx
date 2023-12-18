import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

  interface Product {
    id: number;
    nome: string;
   
  }

const NavBar: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/produtos')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os produtos:', error);
      });
  }, []);

  const handleSearch = (e:any) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = products.filter((product) =>
      product.nome.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <nav className="navbar navbar-expand-md bg-black navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h1 className="m-0">

          </h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/catalogo">Lojas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bombando">Novidades</a>
            </li>

          </ul>
          <form className="d-flex" role="search">
          <Link to="/carrinho">
            <i className="bi bi-cart4 text-light fs-3 me-2"></i>
          </Link>
          <div className="position-relative">
            <input
              className="form-control me-2 rounded-0"
              type="search"
              placeholder="Procurar produto"
              aria-label="Buscar"
              value={searchTerm}
              onChange={handleSearch}
            />

            {searchTerm && (
              <div className="position-absolute bg-white w-100 mt-1 p-2 border rounded">
                <ul className="list-group">
                  {filteredProducts.map((product) => (
                  <li key={product.id} className="list-group-item">
                    <Link to="/catalogo">{product.nome}</Link>
                  </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
         
          <button className="btn btn-outline-light rounded-0">Pesquisar</button>
        
          
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
