const { Router } = require('express');
const { createExchangeRequest } = require('../controllers/exchange.controller');

const router = Router();

router.post('/', createExchangeRequest);

module.exports = router;
