const mongoose = require('mongoose');

//table for projects
const projectsSchema = mongoose.Schema({
    clientName: { type: String, required: true },
    project: { type: String, required: true },
    projectCost: { type: Number, required: true },
    payment: { type: String, required: true, default: 'Pending' },
    status: { type: String, required: true, default: 'Submit' },

}, {
    timestamps: true
});

const Projects = mongoose.model('Projects', projectsSchema);

module.exports = Projects