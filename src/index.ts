import express = require('express');
import { DataObj } from "./data-types";

const data: DataObj = require('./data.json');
    
const app = express();
const PORT_NUMBER = 3000;

app.use(express.urlencoded({ extended: false }))
app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Content-Type', 'application/json');
    next()    
})

const formatJSON = (obj: Object) => JSON.stringify(obj, null, 3)

app.get('/', function (request, response) {
    // response.setHeader('Content-Type', 'application-json');
    response.send(formatJSON({
        available_endpoints: {
            "/show?id": "Returns the show with the specified id",
            "/list/shows": "Returns the available shows"
        }
    }))
})

app.get('/show', function (request, response) {
    let showId: string = (<string>request.query.id)
    if (showId == undefined) {
        response.json({
            message: "provide a code_name"
        })
    } else {
        let requestedShow = data.shows.find(show => show.id == showId.toLowerCase());
        response.json(requestedShow || {
            message: `Show with id '${showId}' is not found`
        })
    }
    
})

app.get('/list/:category', function (request, response) {
    let category: string = <string>request.params.category;
    if (!category) {
        response.json({
            message: "provide a category"
        })
    } else {
        switch (category) {
            case "shows":
                response.json(data.shows.map(show => {
                    return {
                        code_name: show.id,
                        name: show.name
                    }
                }))
                break;
        }
    }
})

app.listen(process.env.PORT || PORT_NUMBER, function () {
    console.log(`Listening on https://localhost:${PORT_NUMBER}`)
})