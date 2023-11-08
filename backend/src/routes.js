
const listAllFiles = require('./api/api_3s.cjs');
const listFilesInFolder = require('./api/listar_pasta.cjs');
const readFileContent = require('./api/ler_arquivo.cjs');


const express = require('express');
const router = express.Router();

const users = [{
  id: 1,
  nome: 'ok',
  username: 'admin',
  password: '123'
}];

router.post('/login', (req, res) => {
  res.send('Hello Wo');
});

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const valid = users.find(user => user.username === username && user.password === password);
  
  if (valid) {
    return res.status(200).json(valid);
  }
  
  return res.status(401).json({
    message: 'not valid'
  });
});

router.get('/valores', (req, res) => {

  
  const fileId = '1B_xA6Epc5hgRf_Mg3aiORYZW5HdWNSAl'; 
  readFileContent(fileId)
   .then((fileContent) => {
    if (fileContent !== null) {
      console.log('Content of the file:', fileContent);
      return res.send( JSON.stringify( fileContent));
    }
  })
  .catch((err) => {
    console.error('Error:', err.message);
    return res.send( JSON.stringify( err.message) );
  });
  

});




module.exports = router;
