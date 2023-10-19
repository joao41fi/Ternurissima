const express = require('express');
const app = express();

const routers = require('./routes');

app.use(routers);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('la mundo')
})