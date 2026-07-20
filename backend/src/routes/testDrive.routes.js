const { Router } = require('express');
const { createTestDrive } = require('../controllers/testDrive.controller');

const router = Router();

router.post('/', createTestDrive);

module.exports = router;
