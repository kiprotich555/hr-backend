const express = require('express');
const Employee = require('../models/employeeModel');


const employeeRoute = express.Router();

//Get   all users.
employeeRoute.get('/all', async (req, res) => {
    const employee = await Employee.find();
    res.send(employee);
});

//Add user
employeeRoute.post('/add', async (req, res) => {
    const newEmployee = new Employee({
        employeeId: req.body.employeeId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        role: req.body.role,
    });
    const employee = await newEmployee.save();
    res.send({
        employeeId: employee.employeeId,
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        phone: employee.mobile,
        role: employee.role,

    })
});

//count emploee

employeeRoute.get('/countEmployee', async (req, res) => {
    try {
        const countEmployee = await Employee.countDocuments();
        res.status(200).json({ count: countEmployee })
    } catch (error) {
        console.log(error.message)
    }
})


module.exports = employeeRoute;