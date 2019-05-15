/* All Games Ids : http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json
GameDetail : https://store.steampowered.com/api/appdetails?appids=814380 */

import Game from '../database/models/game'

const express = require('express');
const api = express();
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const circularJson = require('circular-json');

let fetchedGames = []

api.get('/', (req, res) => {
  res.send(JSON.stringify({
      "/games": "Returns list of games [id,name]",
      "/games/details/:gameid": "Returns game detail"
  }))
});

api.get('/games', async(req, res) => {
  const url = 'http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json';
  axios.get(url, {
    headers: {
        Accept: "application/json"
    }
  }).then(async (response) => {
    await response.data.applist.apps.map(item => {
      fetchedGames.push(item);
    })
    res.send(fetchedGames);
  })
});

api.get('/games/detail/:gameid', (req, res) => {
  const url = `https://store.steampowered.com/api/appdetails?appids=${req.params.gameid}`;
  fetch(url, res);
});

// Send IGDB games to the Sequelize model "Game"
api.post('/initdatas', (req,res)=> {
  // Get the games and push them in an array
  const url = 'http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json';
  axios.get(url, {
    headers: {
        Accept: "application/json"
    }
  }).then(async (response) => {
    await response.data.applist.apps.map(item => {
      fetchedGames.push(item);
    })

    // Get the details from the previous fetched IDs and stores required data
    const getDetails = fetchedGames.map( (game,index) => {
      if (index!==500) return null;
      const gameid = game.appid;
      const detailUrl = `https://store.steampowered.com/api/appdetails?appids=${gameid}`;
      return axios.get(detailUrl).then( response => {
        const details = response.data[gameid];
        if (details.success && details.data.metacritic) {
        const result = {

        }
        return game = `https:${response.data[0].url.replace('thumb','720p')}`)
      }).catch( err => {
        return res.send(JSON.parse(circularJson.stringify(err.response)));
      });
    });

/*
    // When both fetches are done, send the Games to the DB
    Promise.all(fixCovers).then( () => {
      fetchedGames.map( game => Game.findOrCreate({where: game, default: game}));
      res.send(fetchedGames);
    });
*/
  }).catch(err => {
    let json = circularJson.stringify(err.response);
    res.send(JSON.parse(json))
  });
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
