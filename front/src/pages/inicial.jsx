import React, { useState ,useEffect} from 'react';
import axios from 'axios';


import Carousel from './bloks/img_divise'

import '../css/menu.css'
import '../css/inical.css'



const tras = async () => {
  console.log('Executando a função');

  // Defina o objeto de dados que você deseja enviar na solicitação POST
  const data = {
      username: 'seu_nome_de_usuário',
      senha: 'sua_senha'
  };

  try {
      const response = await axios.get('http://localhost:3000/imges');
      console.log(response.data);
      console.log('fim');
  } catch (error) {
      console.error('Erro ao fazer a solicitação POST:', error);
  }
}


export function Inical_page(){
  useEffect(() => {
    tras();
}, []);
    
    return(

        <>
          
    
      <title>Bootstrap Example</title>
         
      <Carousel/>
        
        </>
    );
        
    

}
