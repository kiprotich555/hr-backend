const mongoose = require('mongoose');


//create table for admins
const holidaysSchema = mongoose.Schema({
    day: { type: String, required: true, },
    date: { type: String, requied: true },
    holiday: { type: String, requied: true },
}, {
    timestamps: true
});

const Holidays = mongoose.model('Holidays', holidaysSchema);

module.exports = Holidays 