const axios = require('axios');
require('dotenv').config();

module.exports.getCoords = (req, res) => {
  // console.log(req.query.location);
  const address = req.query.location.split(' ').join('%');
  // console.log(address);
  const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_TOKEN}`;
  // console.log(googleUrl);
  axios.get(googleUrl)
    .then((result) => {
      console.log('Google map results:', result.data.results[0].geometry.location);
    })
    .catch((err) => {
      console.log('Error in google maps location:', err);
    });
  res.sendStatus(200);
};
