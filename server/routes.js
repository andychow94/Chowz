const express = require('express');

const router = express.Router();
const location = require('./controllers/location');
const userList = require('./controllers/userList');

router.get('/location', location.getCoords);
router.get('/weather', location.getForecast);
router.post('/save', userList.saveStore);
router.post('/delete', userList.deleteStore);
router.get('/list', userList.findList);

module.exports = router;
