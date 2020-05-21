"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes");
const app = express();
const PORT_NUMBER = 3000;
app.use(express.urlencoded({ extended: false }));
app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Content-Type', 'application/json');
    next();
});
app.get('/', routes_1.getRoutes);
app.get('/shows', routes_1.getShows);
app.get('/shows/:id', routes_1.getShow);
app.listen(process.env.PORT || PORT_NUMBER, function () {
    console.log(`Listening on https://localhost:${PORT_NUMBER}`);
});
