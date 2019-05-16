/* All Games Ids : http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json
GameDetail : https://store.steampowered.com/api/appdetails?appids=814380 */

import Game from '../database/models/game'

const express = require('express');
const api = express();
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const circularJson = require('circular-json');

let fetchedGames = [];
let validGames = [];

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

// Send Steam game ids to the appids.js file
api.post('/getgamesids', (req,res)=> {
  // Get the games and push them in appids.js file
  const url = 'http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json';
  axios.get(url, {
    headers: {
        Accept: "application/json"
    }
  }).then(async (response) => {
    fetchedGames = response.data.applist.apps;
    await fs.writeFileSync('./database/steam/appids.js',JSON.stringify(fetchedGames));
    res.send("Game ids written");
  }).catch(err => {
    res.send(err.response)
  });
})

api.post('/getgoodgames', async (req,res)=> {
  console.clear();
  const rawGameIds = await fs.readFileSync('./database/steam/appids.js');
  const gameids = await JSON.parse(rawGameIds);
  // Get the details from the previous fetched IDs and stores required data
  console.log("======== TOTAL GAMES : "+gameids.length+" =========");
  console.log("Checking for "+gameids.length+" indexes...");
  let percile = 1;
  const getDetails = await gameids.map( async (game,index) => {

    if (index>=(gameids.length/100)*percile) percile++;
    console.log("Done : "+percile+"%...");



                      if (index>300) return null;
                      const gameid = game.appid;
                      const detailUrl = `https://store.steampowered.com/api/appdetails?appids=${gameid}`;
                      return await axios.get(detailUrl, {
                        headers: {
                            Accept: "application/json"
                        }
                      }).then( async response => {

                        return new Promise((resolve,reject)=>{

                          setTimeout(async()=> {


                            console.log("=========  GETTING GAME DETAILS  =========");
                            console.log("  >>>>> GAMEID : "+gameid+" <<<<<   ");
                            console.log("  >>>>> INDEX  : "+index+"  <<<<<   ");
                            const fullDetails = response.data
                            const details = fullDetails[gameid].success ? fullDetails[gameid].data : null;
                            if (details!==null) {
                               if (details.metacritic!==undefined && details.recommendations!==undefined) {
                                 if (details.metacritic.score>75 && details.recommendations.total>1000) {
                                   console.log("++++++++++ GOOD GAME : "+details.name+" ++++++++++");
                                   const validGame = {
                                     name: details.name,
                                     summary: details.detailed_description,
                                     cover: details.header_image,
                                     background: details.background,
                                     developers: details.developers,
                                     release: details.release_date,
                                     metacritic: details.metacritic.score,
                                     recommendations: details.recommendations.total
                                   }
                                   console.log(" >>>>>> SENDING VALID GAME <<<<<<<<");
                                   return validGames.push(validGame);
                                 } else {
                                   console.log(`--------- GAME NOT GOOD ENOUGH () --------------`);
                                   return null;
                                 }
                              } else {
                                console.log(`*********** GAME HAS NO NOTATION () ***********`);
                                return null;
                              }
                            } else {
                              console.log(`........... GAME ID INVALID () ...........`);
                              return null;
                            }



                          },5000);




                        })


                      }).catch( err => {
                        console.log("XXXXXXXX ERROR FETCHING DETAILS XXXXXXXXXX");
                        return console.log(err.response.status);
                        //return res.send(err);
                      })




  });

  // When both fetches are done, send the Games to the DB
  Promise.all(getDetails).then( () => {
    console.log(" !!!!!!!!!!!  PROMISES DONE !!!!!!!!!!! ");
    fs.appendFileSync('./database/steam/goodgames.js',JSON.stringify(validGames));
    //fetchedGames.map( game => Game.findOrCreate({where: game, default: game}));
    res.send(validGames);
  });
})


function fetch(url, res) {
  axios.get(url, {
    headers: {
        Accept: "application/json"
    }
  })
  .then(response => {
    console.log(response);
    //res.send(response);
    res.end();
  })
  .catch(err => {
    let json = circularJson.stringify(err);
    res.send(JSON.parse(json))
  });
}

module.exports = api;

/*
{
    "237740": {
        "success": true,
        "data": {
            "name": "Angry Video Game Nerd Adventures",

            "detailed_description": "<h2 class=\"bb_tag\"><strong>&quot;The most rewarding game of 2013!&quot;</strong></h2> <br>Influenced by retro classics Mega Man and Castlevania, Angry Video Game Nerd Adventures features the AVGN and friends as they blast their way through 10 levels of fun, fast paced 2D action based on the AVGN's adventures in his online series. With multiple playable characters, power ups, cameos galore, tons of secrets and more we're making a game that all fans of video games will enjoy.  If you're a fan of old school difficulty, fart jokes, The Nerd and/or old school platformers chances are you'll enjoy AVGN Adventures.<br><br>Some say &quot;hard&quot; we're saying &quot;rewarding!&quot; Why? Because every check point you get, every boss you beat, every accomplishment is earned.  You feel like like a stud. This is a game that allows you to brag to your friends if you beat it. <br><br>Yes, this is the official The Angry Video Game Nerd game!<br><br><i>Visit <a href=\"https://steamcommunity.com/linkfilter/?url=http://Cinemassacre.com\" target=\"_blank\" rel=\"noopener\"  >Cinemassacre.com</a> to see the series the game was based on, &amp; also check out it's sequel Angry Video Game Nerd II: ASSimilation!</i><br><br><i>We're 100% cool with you posting gameplay videos, Let's Plays, reviews, etc of AVGN Adventures and monetizing them as much as you possibly can. Have fun! All we ask is that when you do them, let us know because we want to watch you play the game  That's fun for us!</i>",

            "header_image": "https://steamcdn-a.akamaihd.net/steam/apps/237740/header.jpg?t=1534359215",

            "developers": [
                "FreakZone Games"
            ],
            "metacritic": {
                "score": 77,
                "url": "https://www.metacritic.com/game/pc/angry-video-game-nerd-adventures?ftag=MCD-06-10aaa1f"
            },
            "recommendations": {
                "total": 2262
            },
            "release_date": {
                "coming_soon": false,
                "date": "20 Sep, 2013"
            },
            "background": "https://steamcdn-a.akamaihd.net/steam/apps/237740/page_bg_generated_v6b.jpg?t=1534359215",
        }
    }
}
*/
