const mongoose = require('mongoose');


//create table for admins
const adminsSchema = mongoose.Schema({
    adminId: { type: Number, required: true, unique: true },
    adminName: { type: String, requied: true },
    adminPassword: { type: String, requied: true },
    isAdmin: { type: Boolean, requied: true, default: true }
}, {
    timestamps: true
});

const Admins = mongoose.model('Admins', adminsSchema);

module.exports = Admins 