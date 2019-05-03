import bodyParser from 'body-parser';
import mysql from 'mysql';
import app from './routes/';
import { db } from './database/initdb';
import User from './database/models/user'
import Game from './database/models/game'

require('dotenv').config()
const port = process.env.PORT;

User.sync({ force: false });
Game.sync({ force: false });

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
