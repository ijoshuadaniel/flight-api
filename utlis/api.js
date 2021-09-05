const axios = require('axios');
const qs = require('qs');
const { GET_TOKEN } = require('../constants/api-constants');
const dotenv = require('dotenv');

dotenv.config();

const grantType = process.env.GRANT_TYPE;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

exports.fetchToken = async (data) => {
  const response = await axios({
    url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
    method: 'POST',
    data: qs.stringify({
      grant_type: 'client_credentials',
      client_id: 'OK0IGtf9Vx2tvyZmRkmz68UsQieb7d32',
      client_secret: 'ulyMOotRtfZSEp34343L',
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return response.data;
};

exports.dataAccess = async (url, method, data, headers) => {
  const response = await axios({
    url: url,
    method: method,
    data: data,
    headers: headers,
  });

  return response.data;
};
