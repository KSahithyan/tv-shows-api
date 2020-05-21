"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShow = exports.getShows = exports.getRoutes = void 0;
const data = require('./data.json');
const formatJSON = (obj) => JSON.stringify(obj, null, 3);
exports.getRoutes = function (_request, response) {
    response.send(formatJSON({
        available_endpoints: {
            "/": "Returns all routes",
            "/shows": "Returns the available shows",
            "/shows/id": "Returns the show with the specified id"
        }
    }));
};
exports.getShows = function (_request, response) {
    response.json(data.shows.map(show => {
        return {
            id: show.id,
            name: show.name
        };
    }));
};
exports.getShow = function (request, response) {
    let showId = request.params.id;
    if (showId == undefined) {
        response.json({
            message: "provide an id"
        });
    }
    else {
        let requestedShow = data.shows.find(show => show.id == showId.toLowerCase());
        response.json(requestedShow || {
            message: `Show with id '${showId}' is not found`
        });
    }
};
