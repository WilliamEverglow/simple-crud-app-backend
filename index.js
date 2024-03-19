const express = require('express'); 
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/products', productRoute);


app.get('/', (req,res) => {
    res.send('Hello from Node API Server!!!');
});


mongoose.connect('mongodb+srv://williamlearnstoit:QZRVe34pi1zlHWEB@backenddb.zrmk3lz.mongodb.net/Simple-CRUD?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log("Connected to database!"); 
    app.listen(3000,() => {
        console.log('Server is running on Port 3000')
    });   
})
.catch(() => {
    console.log("Connection Failed!");
})

