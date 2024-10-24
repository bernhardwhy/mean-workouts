const express = require('express');
const PROGRAMS = require('./programs.json');
const WORKOUTS = require('./workouts.json');
const bodyParser = require('body-parser');

const workoutLog = require('./models/program');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.post('/api/workout-log', (req, res, next) => {
    const workoutLog = new workoutLog({
        id: req.body.id,
        title: req.body.title,
        date: req.body.date,
    });
    console.log("WORKOUT LOG: ",workoutLog);
    res.status(201).json({
        message: 'Workout log added successfully!'
    });
})

app.get('/api/programs', (req, res, next) => {
    const programs = PROGRAMS;
    res.status(200).json({
        message: 'Programs fetched successfully!',
        programs: programs
    });
});

app.get('/api/workouts', (req, res, next) => {
    const workouts = WORKOUTS;
    res.status(200).json({
        message: 'Workouts fetched successfully!',
        workouts: workouts
    });
});

module.exports = app;