"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetailsOfShow = exports.getShowsByCategory = exports.getShowById = exports.getShows = exports.getRoutes = void 0;
const data = require('./data.json');
const formatJSON = (obj) => JSON.stringify(obj, null, 3);
const findShow = (id) => data.shows.find((show) => show.id == id.toLowerCase());
exports.getRoutes = function (_request, response) {
    let fullUrl = _request.protocol + '://' + _request.get('host') + _request.originalUrl;
    response.send(formatJSON({
        available_endpoints: [
            { endpoint: '/', description: "Returns all routes" },
            { endpoint: '/shows', description: "Returns the available shows" },
            { endpoint: '/shows/:id', description: "Returns the show with the specified id" },
            { endpoint: "/shows?category", description: "Returns all shows which is the specified category" },
            { endpoint: "/shows/:id/:data_category", description: "Returns a data_category of the specified show. Valid values, 'characters', 'seasons', 'episodes'" }
        ]
    }));
};
exports.getShows = function (request, response) {
    const { category: categoryQuery } = request.query;
    if (categoryQuery)
        response.json(exports.getShowsByCategory(categoryQuery));
    response.json(data.shows);
};
exports.getShowById = function (request, response) {
    const { id: showId } = request.params;
    response.json(findShow(showId) || {
        message: `Show with id '${showId}' is not found`
    });
};
exports.getShowsByCategory = (category) => {
    let requestedShows = data.shows.filter(show => show.category.includes(category));
    return requestedShows || {
        message: `Shows with category ${category} is not found`
    };
};
exports.getDetailsOfShow = function (request, response) {
    var _a;
    const { data_category: dataCategory, id: showId } = request.params;
    let selectedShow = findShow(showId);
    if (selectedShow == undefined) {
        response.json({
            message: `No shows found with the id, ${showId}`
        });
    }
    else {
        const AVAILABLE_ENDPOINTS = ["characters", "episodes", "seasons"];
        response.json(AVAILABLE_ENDPOINTS.includes(dataCategory) && selectedShow == undefined ? (_a = selectedShow[dataCategory]) !== null && _a !== void 0 ? _a : "" :
            { message: `${dataCategory} endpoint not available` });
    }
};
