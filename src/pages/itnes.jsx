import React from 'react';
import '../css/produtos.css'
import '../css/menu.css'

const products = [
  {
    id: 1,
    name: 'Produto 1',
    price: 19.99,
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 29.99,
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 9.99,
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 9.99,
  },
  {
    id: 1,
    name: 'Produto 1',
    price: 19.99,
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 29.99,
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 9.99,
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 9.99,
  },
  {
    id: 1,
    name: 'Produto 1',
    price: 19.99,
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 29.99,
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 9.99,
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 9.99,
  },
  
  // Adicione mais produtos aqui
];

function Prodouts() {
  return (
    <div class="card" type="button" className='text' >
      
         

 
     
      <h1>Lista de Produtos</h1>
      <nav>
      <ul className='ule'  >
        {products.map((product) => (
        
         
            <div class="card" > 
             <img src="..." class="card-img-top" alt="..." />
             <div class="card-body">
             <h5 class="card-title" >{product.name}</h5>
             <p  class="card-text" >Preço: R$ {product.price.toFixed(2)}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
            </div>
       
          
        ))}

      </ul>
      </nav>
    </div>
  );
}

export default Prodouts;

