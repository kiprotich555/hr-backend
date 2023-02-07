const express = require('express');
const Holidays = require('../models/holidaysModel');



const holidaysRoute = express.Router();

//Get   all holidays.
holidaysRoute.get('/all', async (req, res) => {
    const holidays = await Holidays.find();
    res.send(holidays);
});

//count holidays

holidaysRoute.get('/countHolidays', async (req, res) => {
    try {
        const countHolidays = await Holidays.countDocuments();
        res.status(200).json({ count: countHolidays })
    } catch (error) {
        console.log(error.message)
    }
})


module.exports = holidaysRoute;