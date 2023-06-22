const Security = require('../security/verifyUser');
const Product = require('../services/productsWebshop.services');
const Customer = require('../services/customerWebshop.service');

async function allProducts(req, res) {
  await Security.validateApiKey(req, res, async() => {
    const products = await Product.allProduct();
    res.status(200).send(products);
  });
}
async function allCustomers(req, res) {
  await Security.validateApiKey(req, res, async() => {
    const customers = await Customer.allCustomer();
    res.status(200).send(customers);
  });
}
async function allStocks(req, res) {
  await Security.validateApiKey(req, res, async() => {
    const stocks = await Product.allStocks();
    console.log(stocks);
    res.status(200).send(stocks);
  });
}

module.exports = {
  allProducts,
  allCustomers,
  allStocks
};