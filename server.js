import bodyParser from 'body-parser';
import mysql from 'mysql';
import app from './routes/';
import { db } from './database/initdb';
import User from './database/models/user'
import Game from './database/models/game'
import Event from './database/models/event'
import Favourite from './database/models/favourite'
import Participant from './database/models/participant'

require('dotenv').config()
const port = process.env.PORT;

User.sync({ force: false });
Game.sync({ force: false });
Event.sync({ force: false });
Favourite.sync({ force: false });
Participant.sync({ force: false });

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
