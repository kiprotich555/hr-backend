const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const seedRouter = require('./routes/seedRouter.js');
const adminRoute = require('./routes/adminRoute.js');
const usersRoute = require('./routes/usersRoute.js');
const departmentsRoute = require('./routes/departmentsRoutes.js');
const employeeRoute = require('./routes/employeeRoute.js');
const holidaysRoute = require('./routes/holidayRoute.js');
const accountsRoute = require('./routes/accountRoute.js');
const eventsRoute = require('./routes/eventRoute.js');
const projectsRoute = require('./routes/projectsRoute.js');




const app = express();


//db connection
dotenv.config();
mongoose.connect(
    process.env.MONGO_URL
).then(() => {
    console.log('DB connection successful');
}).catch((error) => console.log(error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//router
app.use('/api/seed/', seedRouter);
app.use('/api/admins', adminRoute);
app.use('/api/users', usersRoute);
app.use('/api/departments', departmentsRoute);
app.use('/api/employee', employeeRoute);
app.use('/api/holidays', holidaysRoute);
app.use('/api/accounts', accountsRoute);
app.use('/api/events', eventsRoute);
app.use('/api/projects', projectsRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server running...');
})