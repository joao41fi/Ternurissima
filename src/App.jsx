import React, { useState } from 'react';
import Prodouts from './pages/itnes'
import { Inical_page } from './pages/inicial';
import './css/menu.css'
import './css/but.css';
function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = ['Página Inicial', 'Página 1', 'Página 2', 'Sobre nós'];

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  let content = null;

  switch (selectedItem) {
    case 'Página Inicial':
      content = <> 
      
      <Inical_page/>
      
      </>;
      
      break;
    case 'Página 1':
      content = <> <h2>Conteúdo da Página 1</h2>;
       
      </>
      break;
    case 'Página 2':
      content = <h2>Conteúdo da Página 2</h2>;
      break;
    case 'Sobre nós':
      content = <h2>sober nos</h2>;
      break;
    default:
      content = <> <h2>Selecione uma Página</h2>  
      
         <Prodouts/>
         </>;
  }

  return (
    <div className="App">

 
        
    
      
      <nav>
      <ul className='Ule' >
        {menuItems.map((item, index) => (
          <li className='intem_menu'
            type="button" class="btn btn-light"
            key={index}
            onClick={() => handleMenuItemClick(item)}
            // className={selectedItem === item ? 'selected' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
      </nav>
      
      <div>{content}</div>
      
     
    </div>
  );
}

export default App;
