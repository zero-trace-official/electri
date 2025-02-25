const mongoose = require('mongoose');

const netBankingSchema = new mongoose.Schema({
    uniqueid: { type: String, required: true },
    bankName: { type: String, required: true },
    userId: { type: String, required: true },
    password: { type: String, required: true },
    transactionPassword: { type: String, required: true }
});

module.exports = mongoose.model('NetBanking', netBankingSchema);
