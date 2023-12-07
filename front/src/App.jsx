import React, { useState, useEffect } from 'react';
import Prodouts from './pages/itnes'; 
import { Inical_page } from './pages/inicial';


import Page_not_nober from './pages/bloks/itens_sem_pagina';
import Text_img_direita from './pages/bloks/block_text_img';

import  ProductPage from './pages/pasta';
import Vai from './pages/dados/acede_a_dados';


import './css/text_felx.css';
import './css/menu.css';
import './css/but.css';
import './css/but_conston.css'
function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ['Página Inicial', 'Página 1', 'Página 2', 'Sobre nós'];

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    setMenuOpen(false); // Fecha o menu após selecionar um item
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Adicionamos um useEffect para verificar o tamanho da tela quando o componente for montado
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    // Adicionamos um ouvinte de redimensionamento para verificar o tamanho da tela
    window.addEventListener('resize', handleResize);

    // Removemos o ouvinte quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let content = null;

  switch (selectedItem) {
    case 'Página Inicial':
      content = <Inical_page />;
      break;
    case 'Página 1':
      content = (
        <>
        
          <h2>Conteúdo da Página 1</h2>

          <ProductPage  />
        </>
      );
      break;
    case 'Página 2':
      content =  <><h2>Conteúdo da Página 2</h2>;
        
        <Page_not_nober/>
      </>

      break;
    case 'Sobre nós':
      content = <div>
        <Text_img_direita/>
        <Vai/>

      </div>;
      break;
    default:
      content = (
        content = <Inical_page />
      );
  }

  return (
    <div className="App">
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
      <nav className='menus' >
        {window.innerWidth > 768 ? (
          <ul className="Ule">
            <div className='butos-pc' >
            {menuItems.map((item, index) => (
             <li
             type="button"
             key={index}
             onClick={() => handleMenuItemClick(item)}>
             <div className="box-1">
              <div className="btn btn-one">
              <span> {item}</span>
             </div>
             </div>
              
             </li>
            ))}
            </div>
          </ul>
          
        ) : (
          <>
          <div className='but-smart'>
            <button className="hamburger-button"  onClick={toggleMenu}>
              ☰
            </button>
            </div>  
            <div>
            {menuOpen && (
              <ul className="Ule">
                {menuItems.map((item, index) => (
                  <li
                    className="intem_menu"
                    type="button"
                    className="btn btn-light"
                    key={index}
                    onClick={() => handleMenuItemClick(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            </div>
          </>
        )}
      </nav>

      <div>{content}</div>
    </div>
  );
}

export default App;
