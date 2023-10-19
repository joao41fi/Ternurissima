import React from 'react';

const fs = require('fs');

const {google} = require('googleapis');


const id_page = '1Ux59MFmRLDyoJgqU1Et3JOhntjFh0RlC';


async function carega_arquivo(){
  try{
    // login
    const auth = new google.auth.GoogleAuth({
      keyFile:'./ternurisima-57d5912f5e88.json',
      scopes:['https://www.googleapis.com/auth/drive']

    })
    // execusão
    const driver_serve = google.drive({
      version: 'v3',
      auth

    })

    const file_meta = {
      'name': 'texte-1.png',
      'parents':[id_page]
    }
    const meedia = {
      mimeType: 'image/png',
      body: fs.createReadStream('./transferir.png')

    }
    

    const responta = await driver_serve.files.create({
      resource:file_meta,
      media:meedia,
      fields:'id'
    })
    return responta.data.id
    
  }catch(err){
   console.log(err)
  }
}



function Ia_test() {
  async function handleFileUpload() {
    try {
      const fileId = await carega_arquivo();
      console.log(`Arquivo carregado com sucesso. ID do arquivo: ${fileId}`);
    } catch (error) {
      console.error('Ocorreu um erro ao carregar o arquivo:', error);
    }
  }

  return (
    <div >
      <h1>Upload para o Google Drive</h1>
      <button onClick={handleFileUpload}>Carregar arquivo</button>
    </div>
  );
}

export default Ia_test;
