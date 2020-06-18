import express = require('express');
import { getShows, getRoutes, getShowById, getDetailsOfShow } from "./routes";
    
const app = express();
const PORT_NUMBER = 3000;

app.use(express.urlencoded({ extended: false }))
app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Content-Type', 'application/json');
    next();
})

app.get('/', getRoutes);
app.get('/shows', getShows);
app.get('/shows/:id', getShowById);
app.get('/shows/:id/:data_category', getDetailsOfShow);

app.listen(process.env.PORT || PORT_NUMBER, function () {
    console.log(`Listening on https://localhost:${PORT_NUMBER}`)
})