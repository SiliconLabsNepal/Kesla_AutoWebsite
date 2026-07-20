const { Router } = require('express');
const { createContactMessage } = require('../controllers/contact.controller');

const router = Router();

router.post('/', createContactMessage);

module.exports = router;
