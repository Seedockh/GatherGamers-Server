import express from 'express';
import bodyParser from 'body-parser';
import axios from "axios";
import fs from 'fs';
import path from 'path';
import circularJson from 'circular-json';

const hostname = 'localhost';
const port = 3000;
const app = express();
const apiKey = fs.readFileSync(path.resolve(__dirname, 'apiKey'), 'utf8')

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`);
});

app.get('/games', (req, res) => {
    const url = 'https://api-v3.igdb.com/games/?fields=name,cover&order=popularity:desc&limit=50';
    fetch(url, res)
});

app.get('/cover/:gamecoverid', (req, res) => {  
    const url = `https://api-v3.igdb.com/covers/${req.params.gamecoverid}?fields=url`; 
    fetch(url, res)
});

function fetch(url, res) {
    axios.get(url, {
        headers: {
            "user-key": apiKey,
            Accept: "application/json"
        }
    })
    .then(response => {
        res.send(response.data)
    })
    .catch(err => {
        let json = circularJson.stringify(err.response);
        res.send(JSON.parse(json))
    });
}