import express from 'express';
import bodyParser from 'body-parser';
import axios from "axios";
import fs from 'fs';
import path from 'path';
import circularJson from 'circular-json';
import mysql from 'mysql';

const hostname = 'localhost';
const port = 3000;
const app = express();
const connection = mysql.createConnection({
  host: "localhost",
  database: "gathergamers",
  user: "root",
  password: "root",
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

connection.connect( err =>{
  if (err) throw err;
  console.log("Connected, bitch !");
})

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(process.env.PORT, hostname, () => {
    console.log(`Server running at ${hostname}:${process.env.PORT||port}`);
});

app.get('/', (req, res) => {
    res.send({
        "/games": "Returns list of games ordered by popularity",
        "/cover/:id": "Returns game cover data (like url)"
    })
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
            "user-key": process.env.IGDBKEY || fs.readFileSync(path.resolve(__dirname, 'apiKey'), 'utf8'),
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
