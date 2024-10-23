const express = require('express');
const PROGRAMS = require('./programs.json');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/api/workout-log', (req, res, next) => {
    const workoutLog = reg.body;
    console.log("WORKOUT LOG: ",workoutLog);
    res.status(201).json({
        message: 'Workout log added successfully!'
    });
})

app.use('/api/programs', (req, res, next) => {
    const programs = PROGRAMS;
    res.status(200).json({
        message: 'Programs fetched successfully!',
        programs: programs
    });
});

module.exports = app;