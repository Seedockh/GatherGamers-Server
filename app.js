const express = require('express');
const app = express();
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const circular-json = require('circular-json');

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
            "user-key": process.env.IGDBKEY,
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

module.exports = app;
