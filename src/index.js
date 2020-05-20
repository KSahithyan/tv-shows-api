"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var data = require('./data.json');
var app = express();
var PORT_NUMBER = 3000;
app.use(express.urlencoded({ extended: false }));
app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Content-Type', 'application/json');
    next();
});
var formatJSON = function (obj) { return JSON.stringify(obj, null, 3); };
app.get('/', function (request, response) {
    // response.setHeader('Content-Type', 'application-json');
    response.send(formatJSON({
        available_endpoints: {
            "/show?id": "Returns the show with the specified id",
            "/list/shows": "Returns the available shows"
        }
    }));
});
app.get('/show', function (request, response) {
    var showId = request.query.id;
    if (showId == undefined) {
        response.json({
            message: "provide an id"
        });
    }
    else {
        var requestedShow = data.shows.find(function (show) { return show.id == showId.toLowerCase(); });
        response.json(requestedShow || {
            message: "Show with id '" + showId + "' is not found"
        });
    }
});
app.get('/list/:category', function (request, response) {
    var category = request.params.category;
    if (!category) {
        response.json({
            message: "provide a category"
        });
    }
    else {
        switch (category) {
            case "shows":
                response.json(data.shows.map(function (show) {
                    return {
                        code_name: show.id,
                        name: show.name
                    };
                }));
                break;
        }
    }
});
app.listen(process.env.PORT || PORT_NUMBER, function () {
    console.log("Listening on https://localhost:" + PORT_NUMBER);
});
