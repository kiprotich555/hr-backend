const mongoose = require('mongoose');

//table for users
const employeeSchema = mongoose.Schema({
    employeeId: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    role: { type: String, requied: true },
}, {
    timestamps: true
});

const Employee = mongoose.model('Employees', employeeSchema);

module.exports = Employee 