const express = require('express');
const Users = require('../models/usersModel');
const bcrypt = require('bcryptjs')


const usersRoute = express.Router();

//Get   all users.
usersRoute.get('/all', async (req, res) => {
    const users = await Users.find();
    res.send(users);
});

//Add user
usersRoute.post('/add', async (req, res) => {
    const newUser = new Users({
        userId: req.body.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile,
        role: req.body.role,
        roleType: req.body.roleType,
        password: bcrypt.hashSync(req.body.password)
    });
    const user = await newUser.save();
    res.send({
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
        roleType: user.roleType,
        // password: user.password
    })
});

//delete user

usersRoute.delete('/delete/:id', async (req, res) => {
    try {
        await Users.findByIdAndDelete(req.params.id);
        res.status(200).send('User has been deleted.')
    } catch (error) {
        console.log('Cannot be deleted.');
    }
});

//count users

usersRoute.get('/countUsers', async (req, res) => {
    try {
        const countUsers = await Users.countDocuments();
        res.status(200).json({ count: countUsers })
    } catch (error) {
        console.log(error.message)
    }
})



module.exports = usersRoute;