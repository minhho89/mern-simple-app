const express = require('express');
const bodyParser = require("body-parser");
const uuid = require("uuid");
const cors = require('cors');

const app = express();

const DUMMY_PRODUCTS = [];

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000'}));


app.get('/products', (req, res) => {
    res.status(200).json({products: DUMMY_PRODUCTS});
});
app.post('/product', (req, res) => {
    const {title, price} = req.body;

    if (!title || title.trim().length === 0 || !price || price <= 0) {
        return res.status(422).json({message: 'Invalid input, please enter a valid title and price.'});
    }

    const createdProduct = {
        id: uuid.v4(),
        title,
        price
    };

    DUMMY_PRODUCTS.push(createdProduct);

    res.status(201).json({message: 'Created new product.', product: createdProduct});

});

app.listen(5002, () => {
    console.log('Server started on port 5002');
});
