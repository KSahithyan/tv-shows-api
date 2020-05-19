import express = require('express');
import { DataObj } from "./data-types";

const data: DataObj = require('./data.json');
    
const app = express();
const PORT_NUMBER = 3000;

app.use(express.urlencoded({extended: false}))

app.get('/', function (req, res) {
    res.send("It's working");
})

app.get('/show/:id', function (req, res) {
    let showId: string = <string>req.params.id;
    if (showId == undefined) {
        res.json({
            message: "provide a code_name"
        })
    }
    let requestedShow = data.shows.find(show => show.code_name == showId);
    
    res.json(requestedShow || {
        message: `Show with id ${showId} is not found`
    })
})

app.listen(process.env.PORT || PORT_NUMBER, function () {
    console.log(`Listening on https://localhost:${PORT_NUMBER}`)
})