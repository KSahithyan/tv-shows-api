"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var data = require('./data.json');
var app = express();
var PORT_NUMBER = 3000;
app.use(express.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.send("It's working");
});
app.get('/series', function (req, res) {
    var seriesId = req.query.id;
    if (seriesId == undefined) {
        res.json({
            message: "provide series parameter"
        });
    }
    if (Object.keys(data).includes(seriesId)) {
        res.json(data[seriesId]);
    }
    else {
        res.json({
            message: "Series not found"
        });
    }
});
app.listen(process.env.PORT || PORT_NUMBER, function () {
    console.log("Listening on https://localhost:" + PORT_NUMBER);
});
