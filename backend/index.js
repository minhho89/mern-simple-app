const express = require('express');
const bodyParser = require("body-parser");
const uuid = require("uuid");
const cors = require('cors');
const http = require("http");
const socketIo = require("socket.io");
const {createServer} = require("http");
const { Server } = require('socket.io');
const app = express();
const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000", "http://localhost:3001"],
        method: ["GET", "POST"]
    }
});

io.on('connection', (socket)=> {
   console.log('a user connected with id: ', socket.id) ;
});

// server.listen(5002, () => {
//     console.log('listening on *:5002');
// })

require('dotenv').config();

const DUMMY_PRODUCTS = [];

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:3000', "http://localhost:3001"]}));


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

    io.emit('new-product', createdProduct);

    res.status(201).json({message: 'Created new product.', product: createdProduct});

});

const port = process.env.PORT || 5002;
server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
