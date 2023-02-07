const mongoose = require('mongoose');

//table for users
const eventsSchema = mongoose.Schema({
    startAt: { type: String, required: true },
    endAt: { type: String, required: true },
    timezoneStartAt: { type: String, required: true, default: 'Nairobi' },
    summary: { type: String, required: true, },
    color: { type: String, required: true },
}, {
    timestamps: true
});

const Events = mongoose.model('Events', eventsSchema);

module.exports = Events 