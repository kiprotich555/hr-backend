const express = require('express');
const Accounts = require('../models/accountModel');


const accountsRoute = express.Router();

//Get   all accounts.
accountsRoute.get('/all', async (req, res) => {
    const users = await Accounts.find();
    res.send(users);
});


//delete accounts


//count accounts

accountsRoute.get('/countAccounts', async (req, res) => {
    try {
        const countAccounts = await Accounts.countDocuments();
        res.status(200).json({ count: countAccounts })
    } catch (error) {
        console.log(error.message)
    }
})



module.exports = accountsRoute;