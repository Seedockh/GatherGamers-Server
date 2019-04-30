import express from 'express';
import bodyParser from 'body-parser';
import axios from "axios";
import fs from 'fs';
import path from 'path';
import circularJson from 'circular-json';
import mysql from 'mysql';

const app = express();
const port = process.env.PORT || 3000
const db_connection = mysql.createConnection({
  db_host: "localhost",
  db_database: "gathergamers",
  db_user: "root",
  db_password: "root",
  db_socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

db_connection.connect( err =>{
  if (err) throw err;
  console.log("Connected, bitch !");
})

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
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
