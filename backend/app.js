const express = require('express');

const app = express();

app.use('/api/programs',(req, res, next) => {
    console.log('This is my sevcond middleware');
    res.json
});

module.exports = app;