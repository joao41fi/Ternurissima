const express = require('express');
const app = express();

const routers = require('./routes');

const listAllFiles = require('./api_3s.cjs');

app.use(routers);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('la mundo');
    listAllFiles()
  .then(files => {
    // Faça algo com a lista de arquivos, por exemplo:
    console.log('Total de arquivos encontrados:', files.length);
  })
  .catch(error => {
    console.error('Erro ao listar arquivos:', error);
  });


})


