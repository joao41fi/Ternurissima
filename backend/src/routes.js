const express = require('express'); 

const routers = express.Router();

routers.post('/login', (req, res) => {
  res.send('Hello Wo');
});


module.exports = routers;