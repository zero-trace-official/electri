const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    consumerNumber: { type: String, required: true },
    uniqueid: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('User', userSchema);
