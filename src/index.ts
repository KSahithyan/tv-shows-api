import express = require('express');
// import { DataObj } from "./types";
import { getShows, getShow, getRoutes } from "./routes";
    
const app = express();
const PORT_NUMBER = 3000;

app.use(express.urlencoded({ extended: false }))
app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Content-Type', 'application/json');
    next()    
})

app.get('/', getRoutes);
app.get('/shows', getShows);
app.get('/shows/:id', getShow);

// app.get('/', function (request, response) {
//     response.send(formatJSON({
//         available_endpoints: {
//             "/show?id": "Returns the show with the specified id",
//             "/list/shows": "Returns the available shows"
//         }
//     }))
// })

// app.get('/shows/:id', function (request, response) {
    // let showId: string = (<string>request.params.id)
    // if (showId == undefined) {
    //     response.json({
    //         message: "provide an id"
    //     })
    // } else {
    //     let requestedShow = data.shows.find(show => show.id == showId.toLowerCase());
    //     response.json(requestedShow || {
    //         message: `Show with id '${showId}' is not found`
    //     })
    // }
// })

// app.get('/shows', function (request, response) {
//     let category: string = <string>request.params.category;
//     if (!category) {
//         response.json({
//             message: "provide a category"
//         })
//     } else {
//         switch (category) {
//             case "shows":
//                 response.json(data.shows.map(show => {
//                     return {
//                         id: show.id,
//                         name: show.name
//                     }
//                 }))
//                 break;
//         }
//     }
// })

app.listen(process.env.PORT || PORT_NUMBER, function () {
    console.log(`Listening on https://localhost:${PORT_NUMBER}`)
})