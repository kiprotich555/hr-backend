const express = require('express');
const Events = require('../models/eventModel');



const eventsRoute = express.Router();

//Get   all event.
eventsRoute.get('/all', async (req, res) => {
    const events = await Events.find();
    res.send(events);
});
//Add event
eventsRoute.post('/add', async (req, res) => {
    const newEvent = new Events({
        startAt: req.body.startAt,
        endAt: req.body.endAt,
        summary: req.body.summary,
        color: req.body.color,
    });
    const event = await newEvent.save();
    res.send({
        startAt: event.startAt,
        endAt: event.endAt,
        summary: event.summary,
        color: event.color,
    })
});





//count events

eventsRoute.get('/countEvents', async (req, res) => {
    try {
        const countEvents = await Events.countDocuments();
        res.status(200).json({ count: countEvents })
    } catch (error) {
        console.log(error.message)
    }
})



module.exports = eventsRoute;