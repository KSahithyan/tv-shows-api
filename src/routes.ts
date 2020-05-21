import { RequestHandler } from "express";
import { DataObj } from "./types";

const data: DataObj = require('./data.json');
const formatJSON = (obj: Object) => JSON.stringify(obj, null, 3)

/**
 * @description Returns all routes
 * @request GET /
 */
export const getRoutes: RequestHandler<any,any,any,any> = function (_request, response) {
    response.send(formatJSON({
        available_endpoints: {
            "/": "Returns all routes",
            "/shows": "Returns the available shows",
            "/shows/id": "Returns the show with the specified id"
        }
    }))
}

/**
 * @description Returns all shows
 * @request GET /shows
 */
export const getShows: RequestHandler<any, any, any, any> = function (_request, response) {
    response.json(
        data.shows.map(show => {
            return {
                id: show.id,
                name: show.name
            }
        })
    )
}
/**
 * @description Returns a show
 * @request GET /shows/:id
 */
export const getShow: RequestHandler<any, any, any, any> = function (request, response) {
    let showId: string = (<string>request.params.id)
    if (showId == undefined) {
        response.json({
            message: "provide an id"
        })
    } else {
        let requestedShow = data.shows.find(show => show.id == showId.toLowerCase());
        response.json(requestedShow || {
            message: `Show with id '${showId}' is not found`
        })
    }
}