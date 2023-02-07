const mongoose = require('mongoose');

//table for departments
const DepartmentsSchema = mongoose.Schema({
    departmentName: { type: String, required: true, unique: true },
    departmentHead: { type: String, required: true },
    totalEmployees: { type: Number, required: true },
}, {
    timestamps: true
});

const Departments = mongoose.model('Departments', DepartmentsSchema);

module.exports = Departments 