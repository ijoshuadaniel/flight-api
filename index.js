const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const { fetchToken, dataAccess } = require('./utlis/api');

const app = express();

dotenv.config();
app.use(express.json());

app.post('/flights', async (req, res) => {
  const { url, method, data, headers } = req.body;
  const response = await dataAccess(url, method, data, headers);
  res.status(200).send(response);
});

app.get('/token', async (req, res, next) => {
  const data = await fetchToken();
  const date = new Date().getTime();
  res.send({
    ...data,
    date: date,
    expiry: date + data.expires_in,
  });
});
app.listen(80);
