const express = require('express');
const cors = require('cors');
const Correio = require('node-correios');
const correio = new Correio;
const app = express();
const PORT = 3001;

app.use(cors());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get('/', (req, res) => {
    //codigo aqui
    .then(result => {
        res.send(result);
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
})