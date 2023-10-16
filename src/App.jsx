import React, { useState, useEffect } from 'react';
import Prodouts from './pages/itnes'; 
import { Inical_page } from './pages/inicial';


import  ProductPage from './pages/pasta';

import './css/menu.css';
import './css/but.css';

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
          <ProductPage />
        </>
      );
      break;
    case 'Página 2':
      content = <h2>Conteúdo da Página 2</h2>;
      break;
    case 'Sobre nós':
      content = <h2>Sobre nós</h2>;
      break;
    default:
      content = (
        <>
          <h2>Selecione uma Página</h2>
          <Prodouts />
        </>
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
                className="intem_menu"
                type="button"
                className="btn btn-light"
                key={index}
                onClick={() => handleMenuItemClick(item)}
              >
                {item}
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
