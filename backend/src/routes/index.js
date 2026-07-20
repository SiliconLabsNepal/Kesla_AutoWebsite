const { Router } = require('express');
const testDriveRoutes = require('./testDrive.routes');
const bookingRoutes = require('./booking.routes');
const contactRoutes = require('./contact.routes');
const exchangeRoutes = require('./exchange.routes');
const { checkHealth } = require('../controllers/health.controller');

const router = Router();

router.get('/health', checkHealth);
router.use('/test-drive', testDriveRoutes);
router.use('/bookings', bookingRoutes);
router.use('/contact', contactRoutes);
router.use('/exchange', exchangeRoutes);

module.exports = router;
