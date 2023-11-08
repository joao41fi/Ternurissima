import React, { useState, useEffect } from 'react';

const Page_not_nober = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(2); // Número de produtos por página
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 1', price: 10 },
    { id: 6, name: 'Product 2', price: 20 },
    { id: 7, name: 'Product 3', price: 30 },
    { id: 8, name: 'Product 5', price: 40 },
    { id: 9, name: 'Product 9', price: 40 },
    // Adicione mais objetos de produtos aqui
  ]);

  useEffect(() => {
    // Sua função a ser executada quando a página for aberta
    calcularProdutosPorPagina();
  }, []);

  const calcularProdutosPorPagina = () => {
    const prod = window.innerWidth / 225;
    setProductsPerPage(parseInt(prod));
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='css_prod' >
      <h1>Produtos</h1>
      <ul className="ule">
      <button onClick={prevPage} disabled={currentPage === 1} className='seta-'>
          Anterior
        </button>
        {currentProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Preço: R$ {product.price.toFixed(2)}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          
        ))}
         <button onClick={nextPage} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>
          Próxima
        </button>
      </ul>

     
    </div>
  );
};

export default Page_not_nober;
