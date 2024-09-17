const express = require('express');
const sequelize = require('../sequelize/sequelize');
const orderController = require('../../adapters/controllers/OrderController');

const app = express();
app.use(express.json());

// Endpoint untuk membuat pesanan
app.post('/orders', (req, res) => orderController.createOrder(req, res));

// Menghubungkan ke database dan memulai server
sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  })
  .catch(error => {
    console.error('Failed to connect to the database:', error);
  });
