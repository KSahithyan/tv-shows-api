import { RequestHandler } from "express";
import { DataObj, ShowObject } from "./types";

const data: DataObj = require('./data.json');
const formatJSON = (obj: Object) => JSON.stringify(obj, null, 3)

/**
 * @description Returns all routes
 * @request GET /
 */
export const getRoutes: RequestHandler<any, any, any, any> = function (_request, response) {
    response.send(formatJSON({
        available_endpoints: {
            "/": "Returns all routes",
            "/shows": "Returns the available shows",
            "/shows?id": "Returns the show with the specified id",
            "/shows?category": "Returns all shows which is the specified category"
        }
    }))
}

/**
 * @description Returns shows based on the query
 * @request GET /shows          Returns all shows
 * @request GET /shows?id       Returns the show which matches the id
 * @request GET /shows?category Returns shows that has the specified category
 */
export const getShows: RequestHandler<any, any, any, any> = function (request, response) {
    const {
        category: categoryQuery,
        id
    } = request.query;

    if (categoryQuery) response.json(getShowsByCategory(categoryQuery))
    if (id) response.json(getShowById(id))

    response.json(data.shows)
}

/**
 * @param showId Returns the show which matches the id
 */
export const getShowById = function (showId: string): ShowObject | Error {
    let requestedShow = data.shows.find(show => show.id == showId.toLowerCase());
    return requestedShow || {
        message: `Show with id '${showId}' is not found`
    } as Error
}

/**
 * @param category Returns an array of shows which contains the specified category
 */
export const getShowsByCategory = (category: string): ShowObject[] | Error => {
    let requestedShows = data.shows.filter(show => show.category.includes(category))
    return requestedShows || {
        message: `Shows with category ${category} is not found`
    } as Error
}