const express = require('express');

const router = express.Router();
const location = require('./controllers/location');

router.get('/location', location.getCoords);

module.exports = router;
