const axios = require('axios');
require('dotenv').config();

module.exports.getCoords = (req, res) => {
  // console.log(req.query.location);
  const address = req.query.location.split(' ').join('%20');
  const textInput = req.query.input.split(' ').join('%');
  // console.log(address);
  const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_TOKEN}`;
  // const yelpUrl = `https://api.yelp.com/v3/businesses/search?text=${}&latitude=${}&longitude=${}`;
  // console.log(googleUrl);
  axios.get(googleUrl)
    .then((result) => {
      // console.log('Google map results:', result.data.results[0].geometry.location);
      console.log(result);
      // console.log("textInput", textInput);
      const lat = result.data.results[0].geometry.location.lat;
      const lng = result.data.results[0].geometry.location.lng;
      const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=${textInput}&latitude=${lat}&longitude=${lng}`;
      // console.log(yelpUrl);
      return axios.get(yelpUrl, { headers: { Authorization: `Bearer ${process.env.YELP_TOKEN}` } });
    })
    .then((result) => {
      // console.log('Yelp Results:', result.data);
      res.send(result.data);
    })
    .catch((err) => {
      console.log('Error in google maps location:', err);
    });
};

module.exports.getForecast = (req, res) => {
  const address = req.query.location.split(' ').join('%20');
  const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_TOKEN}`;
  axios.get(googleUrl)
    .then((result) => {
      const lat = result.data.results[0].geometry.location.lat;
      const lng = result.data.results[0].geometry.location.lng;
      return axios.get(`https://api.weather.gov/points/${lat},${lng}`);
    })
    .then((result) => {
      const office = result.data.properties.gridId;
      const gridX = result.data.properties.gridX;
      const gridY = result.data.properties.gridY;
      // console.log(office, gridX, gridY);
      return axios.get(`https://api.weather.gov/gridpoints/${office}/${gridX},${gridY}/forecast`);
    })
    .then((result) => {
      // console.log('Check weather results:', result);
      res.send(result.data.properties);
    })
    .catch((err) => {
      console.log('Error in weather forecast:', err);
    });
};
