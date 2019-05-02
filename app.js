import Game from './database/models/game'

const express = require('express');
const app = express();
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const circularJson = require('circular-json');

app.get('/', (req, res) => {
  res.send(JSON.stringify({
      "/games": "Returns list of games ordered by popularity",
      "/cover/:id": "Returns game cover data (like url)"
  }))
});

app.get('/games', (req, res) => {
  const url = 'https://api-v3.igdb.com/games/?fields=name,cover,summary,created_at,updated_at&limit=50';
  fetch(url, res);
});

app.get('/cover/:gamecoverid', (req, res) => {
  const url = `https://api-v3.igdb.com/covers/${req.params.gamecoverid}?fields=url`;
  fetch(url, res);
});

// Send the games to the Sequelize model "Game"
app.post('/initdatas', (req,res)=> {
  // Get the games and push them in an array
  const gamesUrl = 'https://api-v3.igdb.com/games/?fields=name,cover,summary,created_at,updated_at&limit=50';
  axios.get(gamesUrl, {
    headers: {
        "user-key": process.env.IGDBKEY,
        Accept: "application/json"
    }
  }).then((response) => {
    let fetchedGames = [];

    response.data.map(item => {
      fetchedGames.push(item);
    });

    // Get the cover from the previous fetched ID and replace it by the url
    const fixCovers = fetchedGames.map(game => {
      if (game.cover) {
        const coverUrl = `https://api-v3.igdb.com/covers/${game.cover}?fields=url`;
        return axios.get(coverUrl, {
          headers: {
              "user-key": process.env.IGDBKEY,
              Accept: "application/json"
          }
        }).then(response => game.cover = `https:${response.data[0].url.replace('thumb','720p')}`)
          .catch(err => res.send(JSON.parse(circularJson.stringify(err.response))));
      } else {
        game.cover = "http://vignette2.wikia.nocookie.net/e__/images/8/86/No_cover.png/revision/latest?cb=20130103223703&path-prefix=eminem";
      }
    });

    // When both fetches are done, send the Games to the DB
    Promise.all(fixCovers).then( () => {
      fetchedGames.map( game => Game.findOrCreate({where: game, default: game}));
      res.send(fetchedGames);
    });

  }).catch(err => {
    let json = circularJson.stringify(err.response);
    res.send(JSON.parse(json))
  });
})



function fetch(url, res) {
  axios.get(url, {
    headers: {
        "user-key": process.env.IGDBKEY,
        Accept: "application/json"
    }
  })
  .then(response => {
    res.send(response.data);
  })
  .catch(err => {
    let json = circularJson.stringify(err.response);
    res.send(JSON.parse(json))
  });
}

module.exports = app;
