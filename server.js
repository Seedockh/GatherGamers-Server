import bodyParser from 'body-parser';
import mysql from 'mysql';
import app from './app';
import { db } from './database/initdb';
import User from './database/models/user'
import Game from './database/models/game'

require('dotenv').config()
const port = process.env.PORT;

User.sync({ force: false });
Game.sync({ force: false });

/*
User.create({ email: "jack2@gmail.com", password: "sparrow" }).then( res => {
  console.log("Jack's second auto-generated ID:", res.id);
});
Game.create({ name: "Sekiro", cover: "https://www.google.fr" }).then( res => {
  console.log("New game id : ", res.id);
});
*/

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
