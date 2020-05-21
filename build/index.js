"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const data = require('./data.json');
const app = express();
const PORT_NUMBER = 3000;
app.use(express.urlencoded({ extended: false }));
app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Content-Type', 'application/json');
    next();
});
const formatJSON = (obj) => JSON.stringify(obj, null, 3);
app.get('/', function (request, response) {
    response.send(formatJSON({
        available_endpoints: {
            "/show?id": "Returns the show with the specified id",
            "/list/shows": "Returns the available shows"
        }
    }));
});
app.get('/shows/:id', function (request, response) {
    console.log('with id');
});
app.get('/shows', function (request, response) {
    console.log('empty');
});
app.listen(process.env.PORT || PORT_NUMBER, function () {
    console.log(`Listening on https://localhost:${PORT_NUMBER}`);
});
