const express = require('express');
const app = express();
const cors = require('cors');
const routers = require('./routes');

const listAllFiles = require('./api/api_3s.cjs');
const listFilesInFolder = require('./api/listar_pasta.cjs');
const readFileContent = require('./api/ler_arquivo.cjs');


app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/nova', (req, res) => {
  res.send('Hello World!dddddddddddddddddddddddd');
});
app.use(routers);


app.listen(3000, () => {
    console.log('la mundo');
  //   listAllFiles()
  // .then(files => {
  //   // Faça algo com a lista de arquivos, por exemplo:
  //   console.log('Total de arquivos encontrados:', files.length);
  // })
  // .catch(error => {
  //   console.error('Erro ao listar arquivos:', error);
  // });

//   const folderId = '1IAW8iDsHOApNlGe95p3Aj84LF-fK3eTs'; // Substitua pelo ID da sua pasta
// listFilesInFolder(folderId)
//   .then((files) => {
//     // Faça algo com os arquivos listados
//   })
//   .catch((error) => {
//     console.error('Erro ao listar os arquivos:', error);
//   });



//   const fileId = '1B_xA6Epc5hgRf_Mg3aiORYZW5HdWNSAl';
// readFileContent(fileId)
//   .then((fileContent) => {
//     if (fileContent !== null) {
//       console.log('Content of the file:', fileContent);
//     }
//   })
//   .catch((err) => {
//     console.error('Error:', err.message);«
//   });


})


