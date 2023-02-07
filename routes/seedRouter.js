const express = require('express');
const data = require('../data.js');
const Accounts = require('../models/accountModel.js');
const Admins = require('../models/adminsModel.js');
const Departments = require('../models/departmentsModel.js');
const Employee = require('../models/employeeModel.js');
const Events = require('../models/eventModel.js');
const Holidays = require('../models/holidaysModel.js');
const Projects = require('../models/projectModel.js');
const Users = require('../models/usersModel.js');


const seedRouter = express.Router();

// import all data to db
seedRouter.get('/', async (req, res) => {

    //Seed admins into DB
    await Admins.remove({});
    const createdAmins = await Admins.insertMany(data.admins);

    //seed users into DB
    await Users.remove({});
    const createdUsers = await Users.insertMany(data.users)

    //seed Departmet into DB
    await Departments.remove({});
    const createdDepartments = await Departments.insertMany(data.departments)

    // Add Employee into DB
    await Employee.remove({});
    const createdEmployee = await Employee.insertMany(data.employee)


    // Add Holiday into DB
    await Holidays.remove({});
    const createdHolidays = await Holidays.insertMany(data.holidays)

    // Add Holiday into DB
    await Accounts.remove({});
    const createdAccounts = await Accounts.insertMany(data.accounts)

    // Add Event into DB
    await Events.remove({});
    const createdEvents = await Events.insertMany(data.events)

    // Add Event into DB
    await Projects.remove({});
    const createdProjects = await Projects.insertMany(data.projects)




    res.send({ createdAmins, createdUsers, createdDepartments, createdEmployee, createdHolidays, createdAccounts, createdEvents, createdProjects });
});

module.exports = seedRouter 
