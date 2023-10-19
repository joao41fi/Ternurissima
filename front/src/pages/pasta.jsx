import React, { useState, useEffect } from 'react';


const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setproductsPerPage] = useState(2); // Número de produtos por página

  useEffect(() => {
    // Sua função a ser executada quando a página for aberta
    calcolode_produto();
  }, []);

  const calcolode_produto = () => {
    // const window = useWindowDimensions();
    console.log('Executando a função',window.innerWidth);
    const prod = window.innerWidth/200
    setproductsPerPage( parseInt(prod))
    console.log(parseInt(prod))
  }

  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 3', price: 30 },
    // Adicione mais objetos de produtos aqui
  ]);

  

  

  // Índices dos produtos para a página atual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Função para mudar de página
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div >
     

      <h1>Produtos</h1>
      <ul className='ule'  > 
      {currentProducts.map(product => (
         <div class="card" key={product.id} > 
         <img src="..." class="card-img-top" alt="..." />
         <div class="card-body">
         <h5 class="card-title" >{product.name}</h5>
         <p  class="card-text" >Preço: R$ {product.price.toFixed(2)}</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
         </div>
        </div>
  
      ))}
      </ul>

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