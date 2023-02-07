const mongoose = require('mongoose');

//table for accounts
const accountsSchema = mongoose.Schema({
    invoiceNo: { type: String, required: true, unique: true },
    clients: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: Boolean, required: true, default: false },
    amount: { type: String, required: true },
}, {
    timestamps: true
});

const Accounts = mongoose.model('Accounts', accountsSchema);

module.exports = Accounts 