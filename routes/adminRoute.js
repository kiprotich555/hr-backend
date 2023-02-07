const express = require('express');
const Admins = require('../models/adminsModel.js');
const bcrypt = require('bcryptjs');

const adminRoute = express.Router();

adminRoute.post('/login', async (req, res) => {

    const admin = await Admins.findOne({ adminId: req.body.adminId });

    if (admin) {
        if (bcrypt.compareSync(req.body.adminPassword, admin.adminPassword)) {
            res.send({
                _id: admin._id,
                adminId: admin.adminId,
                adminName: admin.adminName,
                adminPassword: admin.adminPassword,
                isAdmin: admin.isAdmin,
            })
            return;
        }
    }
    res.status(400).send({ message: 'Invalid AdminId or adminPassword.' })
});

//update admin

adminRoute.put('/update', async (req, res) => {
    const admin = await Admins.findById(req.body._id);
    if (admin) {
        //for all
        admin.adminId = req.body.adminId || admin.adminId;
        admin.adminName = req.body.adminName || admin.adminName;
        //for password
        if (req.body.newPassword) {
            admin.adminPassword = bcrypt.hashSync(req.body.newPassword)
        }

        const updatedAdmin = await admin.save();
        res.send({
            _id: updatedAdmin._id,
            adminId: updatedAdmin.adminId,
            adminName: updatedAdmin.adminName,
            isAdmin: updatedAdmin.isAdmin
        })
    } else {
        res.status(401).send({ message: 'admin not found' })
    }
})

module.exports = adminRoute;