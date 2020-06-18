import { RequestHandler } from "express";
import { DataObj, ShowObject } from "./types";

const data: DataObj = require('./data.json');
const formatJSON = (obj: Object) => JSON.stringify(obj, null, 3)
const findShow = (id: string) => data.shows.find((show: ShowObject) => show.id == id.toLowerCase())

/**
 * @description Returns all routes
 * @request GET /
 */
export const getRoutes: RequestHandler<any, any, any, any> = function (_request, response) {
    let fullUrl = _request.protocol + '://' + _request.get('host') + _request.originalUrl;
    response.send(formatJSON({
        available_endpoints: [
            { endpoint: '/', description: "Returns all routes" },
            { endpoint: '/shows', description: "Returns the available shows" },
            { endpoint: '/shows/:id', description: "Returns the show with the specified id" },
            { endpoint: "/shows?category", description: "Returns all shows which is the specified category" },
            { endpoint: "/shows/:id/:data_category", description: "Returns a data_category of the specified show. Valid values, 'characters', 'seasons', 'episodes'" }
        ]
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
        category: categoryQuery
    } = request.query;

    if (categoryQuery) response.json(getShowsByCategory(categoryQuery))
    // if (id) response.json(getShowById(id))

    response.json(data.shows)
}

/**
 * @description Returns the show with the id
 * @param showId Returns the show which matches the id
 */
export const getShowById: RequestHandler<any, any, any, any> = function (request, response) {
    const {id: showId} = request.params
    response.json(findShow(showId) || {
        message: `Show with id '${showId}' is not found`
    })
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

export const getDetailsOfShow: RequestHandler<any, any, any, any> = function (request, response) {
    const { data_category: dataCategory, id: showId } = request.params
    let selectedShow = findShow(showId)
    if (selectedShow == undefined) {
        response.json({
            message: `No shows found with the id, ${showId}`
        })
    } else {
        const AVAILABLE_ENDPOINTS = ["characters", "episodes", "seasons"]
        //@ts-ignore
        response.json(
            //@ts-ignore
            AVAILABLE_ENDPOINTS.includes(dataCategory) ? selectedShow[dataCategory] :
            { message: `${dataCategory} endpoint not available` }
            )
        }
}