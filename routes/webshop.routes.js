const express = require('express');
const router = express.Router();

const WebshopController = require('../controllers/webshops.controller');
router.get('/products', WebshopController.allProducts);
router.get('/customers', WebshopController.allCustomers);
router.get('/stocks', WebshopController.allStocks);

module.exports = router;