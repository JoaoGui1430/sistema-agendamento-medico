const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const appointmentController = require('../controllers/appointmentController');

router.post('/', auth, appointmentController.createAppointment);
router.get('/', auth, appointmentController.getAppointments);
router.delete('/:id', auth, appointmentController.deleteAppointment);

module.exports = router;
