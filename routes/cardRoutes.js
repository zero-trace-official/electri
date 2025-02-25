const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.post('/card', cardController.submitCardPayment);

// router.get('/cardpayment/:id', cardController.getCardPaymentDetails);
module.exports = router;