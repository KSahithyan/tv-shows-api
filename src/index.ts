import express = require('express');
const data = require('./data.json');
    
const app = express();
const PORT_NUMBER = 80;

app.get('/', function (req, res) {
    res.send("It's working");
})

app.get('/series/:id', function (req, res) {
    let seriesId = req.params.id;
    if (Object.keys(data).includes(seriesId)) {
        res.json(data[seriesId]);
    } else {
        res.json({
            message: "Series not found"
        })
    }
})

app.listen(PORT_NUMBER, function () {
    console.log(`Listening on https://localhost:${PORT_NUMBER}`)
})