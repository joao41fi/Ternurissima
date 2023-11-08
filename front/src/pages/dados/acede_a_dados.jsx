import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Vai() {
    useEffect(() => {
        tras();
    }, []);

    const tras = async () => {
        console.log('Executando a função');

        // Defina o objeto de dados que você deseja enviar na solicitação POST
        const data = {
            username: 'seu_nome_de_usuário',
            senha: 'sua_senha'
        };

        try {
            const response = await axios.get('http://localhost:3000/valores');
            console.log(response);
            console.log('fim');
        } catch (error) {
            console.error('Erro ao fazer a solicitação POST:', error);
        }
    }

    return (
        <div>
            <h1>Vai</h1>
        </div>
    );
}

export default Vai;
