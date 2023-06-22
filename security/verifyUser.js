'use strict';
require('dotenv').config();
const validateApiKey = (req, res, next) => {
  console.log('Check if request is authorized with API key');

  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    console.error('No API key was provided.',
      'Make sure you authorize your request by providing the following HTTP header:',
      'x-api-key: <Your API Key>', '\n▶ Query Parameters: ', req.query);
    res.status(403).send('Unauthorized');
    return;
  }

  if (isValidApiKey(apiKey)) {
    next();
  } else {
    console.error('Invalid API key:\n', '▶ Query Parameters: ', req.query, '\n▶ API Key: ', apiKey);
    res.status(403).send('Unauthorized');
  }
};

const isValidApiKey = (apiKey) => {
  const validApiKey = process.env.API_KEY; // Remplacez par votre clé API valide

  return apiKey === validApiKey;
};

module.exports = {
  validateApiKey: validateApiKey
};
