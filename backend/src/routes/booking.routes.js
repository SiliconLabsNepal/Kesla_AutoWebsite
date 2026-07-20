const { Router } = require('express');
const { createBooking } = require('../controllers/booking.controller');

const router = Router();

router.post('/', createBooking);

module.exports = router;
