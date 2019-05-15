/* All Games Ids : http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json
GameDetail : https://store.steampowered.com/api/appdetails?appids=814380 */

import Game from '../database/models/game'

const express = require('express');
const api = express();
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const circularJson = require('circular-json');

let gameIds = []

api.get('/', (req, res) => {
  res.send(JSON.stringify({
      "/games": "Returns list of games ordered by popularity",
      "/cover/:id": "Returns game cover data (like url)"
  }))
});

api.get('/games', async(req, res) => {
  const url = 'http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json';
  Promise.resolve(fetch(url, res)).then( async response => {
    await console.log(response);
  })
});

api.get('/games/detail/:gameid', (req, res) => {
  const url = `https://store.steampowered.com/api/appdetails?appids=${req.params.gameid}`;
  fetch(url, res);
});

// Send IGDB games to the Sequelize model "Game"
api.post('/initdatas', (req,res)=> {
  // Get the games and push them in an array
  /*const gamesUrl = 'https://api-v3.igdb.com/games/?fields=name,cover,summary&limit=50';
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
  */
})



function fetch(url, res) {
  axios.get(url, {
    headers: {
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

module.exports = api;
