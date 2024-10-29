const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const {WorkoutLog, Program, Workout} = require('./models/program');

const app = express();

const mgUrl = "mongodb+srv://bernhardwhy:x4SUbMdxqI5gDLXw@mean-workout.pxedv.mongodb.net/?retryWrites=true&w=majority&appName=mean-workout";

mongoose.connect(mgUrl)
    .then(() => {
        console.log('Connected to database!');
    })
    .catch(() => {
        console.log('Connection failed!');
    });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.post('/api/workout-log', (req, res, next) => {
    const workoutLog = new WorkoutLog({
        date: req.body.date,
        workoutId: req.body.programId,
        weight: req.body.weight,
    });
    console.log(workoutLog);
    workoutLog.save();
    res.status(201).json({
        message: 'Workout log added successfully!'
    });
})

app.get('/api/programs', (req, res, next) => {
    Program.find()
        .then(documents => {
            res.status(200).json({
                message: 'Programs fetched successfully!',
                programs: documents
            });
        });
});

app.get('/api/workouts', (req, res, next) => {
    Workout.find()
    .then(documents => {
        res.status(200).json({
            message: 'Workouts fetched successfully!',
            workouts: documents
        });
    });
});

app.get('/api/workout-logs', (req, res, next) => {
    WorkoutLog.find()
        .then(documents => {
            res.status(200).json({
                message: 'Workout LOGS fetched successfully!',
                workoutLogs: documents
            });
        });
});

module.exports = app;