const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = 5000;
const products = require('./products.json')

app.listen(Port, () => {
    app.get('/product', (req, res) => {
        res.send(products);
    });

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const product  = products.find(p => p.id == id)
    if(!product){
      res.send(404)
    }
      res.send(product)

    
})




})
