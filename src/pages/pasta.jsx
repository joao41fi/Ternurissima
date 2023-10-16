import React, { useState } from 'react';

const ProductPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    // Adicione mais objetos de produtos aqui
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(2); // Número de produtos por página

  // Índices dos produtos para a página atual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Função para mudar de página
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Produtos</h1>
      {currentProducts.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Preço: R${product.price}</p>
        </div>
      ))}

      {/* Paginação */}
      <ul className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
          <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
            <button onClick={() => paginate(index + 1)} className="page-link">
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;