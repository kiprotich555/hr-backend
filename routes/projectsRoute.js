const express = require('express');
const Projects = require('../models/projectModel');



const projectsRoute = express.Router();

//Get   all projects.
projectsRoute.get('/all', async (req, res) => {
    const projects = await Projects.find();
    res.send(projects);
});

//Add project
projectsRoute.post('/add', async (req, res) => {
    const newProject = new Projects({
        clientName: req.body.clientName,
        project: req.body.project,
        projectCost: req.body.projectCost,
        payment: req.body.payment,
        status: req.body.status,

    });
    const project = await newProject.save();
    res.send({
        clientName: project.clientName,
        project: project.project,
        projectCost: project.projectCost,
        payment: project.payment,
        status: project.status,
    })
});


module.exports = projectsRoute;
