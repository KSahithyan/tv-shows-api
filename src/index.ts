import express = require('express');
const data = require('./data.json');
    
const app = express();
const PORT_NUMBER = 3000;

app.use(express.urlencoded({extended: false}))

app.get('/', function (req, res) {
    res.send("It's working");
})

app.get('/series', function (req, res) {
    let seriesId: string = <string>req.query.id;
    if (seriesId == undefined) {
        res.json({
            message: "provide series parameter"
        })
    }
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