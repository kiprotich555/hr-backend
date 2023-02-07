const express = require('express');
const Departments = require('../models/departmentsModel');
const bcrypt = require('bcryptjs')


const departmentsRoute = express.Router();

//Get   all Departments
departmentsRoute.get('/all', async (req, res) => {
    const departments = await Departments.find();
    res.send(departments);
});

//Add department
departmentsRoute.post('/add', async (req, res) => {
    const newDepartment = new Departments({
        departmentName: req.body.departmentName,
        departmentHead: req.body.departmentHead,
        totalEmployees: req.body.totalEmployees,
    });
    const department = await newDepartment.save();
    res.send({
        departmentName: department.departmentName,
        departmentHead: department.departmentHead,
        totalEmployees: department.totalEmployees,
    })
});


module.exports = departmentsRoute;
