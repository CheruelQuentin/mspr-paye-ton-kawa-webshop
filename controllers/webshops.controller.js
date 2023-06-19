const Security = require('../security/verifyUser');
const axios = require('axios');

async function allProducts(req, res) {
  const products = (await axios.get('https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products')).data;
  console.log(products);
  res.status(200).send(products);
}
async function allCustomers(req, res) {
  const customers = (await axios.get('https://615f5fb4f7254d0017068109.mockapi.io/api/v1/customers')).data;
  console.log(customers);
  res.status(200).send(customers);
}
module.exports = {
  allProducts,
  allCustomers
};