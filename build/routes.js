"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShowsByCategory = exports.getShowById = exports.getShows = exports.getRoutes = void 0;
const data = require('./data.json');
const formatJSON = (obj) => JSON.stringify(obj, null, 3);
exports.getRoutes = function (_request, response) {
    response.send(formatJSON({
        available_endpoints: {
            "/": "Returns all routes",
            "/shows": "Returns the available shows",
            "/shows?id": "Returns the show with the specified id",
            "/shows?category": "Returns all shows which is the specified category"
        }
    }));
};
exports.getShows = function (request, response) {
    const { category: categoryQuery, id } = request.query;
    if (categoryQuery)
        response.json(exports.getShowsByCategory(categoryQuery));
    if (id)
        response.json(exports.getShowById(id));
    response.json(data.shows);
};
exports.getShowById = function (showId) {
    let requestedShow = data.shows.find(show => show.id == showId.toLowerCase());
    return requestedShow || {
        message: `Show with id '${showId}' is not found`
    };
};
exports.getShowsByCategory = (category) => {
    let requestedShows = data.shows.filter(show => show.category.includes(category));
    return requestedShows || {
        message: `Shows with category ${category} is not found`
    };
};
