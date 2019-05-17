import fs from 'fs';
import Sequelize from "sequelize";
import User from "./models/user";
import Game from "./models/game";
import Event from "./models/event";
import Favourite from "./models/favourite";
import Participant from "./models/participant";
import Notification from "./models/notification";
import Friend from "./models/friend";
import Topic from "./models/topic"

const config = fs.existsSync(__dirname.replace('\\','/')+'/config.json') ? require('./config.json').dev : null;

export const db = (config) ? new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    dialect: config.dialect,
    host: 'localhost',
    port: config.port,
    logging: console.log,
    define: {
      timestamps: false
    }
  }) : new Sequelize(process.env.JAWSDB_URL, {logging: false} );

db.authenticate().then( (err)=> {
		console.log('Connection has been established successfully.');
	}, (err)=> {
		console.log('Unable to connect to the database:', err);
	}
);

User.init(db);
Game.init(db);
Event.init(db);
Favourite.init(db);
Participant.init(db);
Notification.init(db);
Friend.init(db);
Topic.init(db)

User.belongsToMany(Game,{through:Favourite});
Game.belongsToMany(User,{through:Favourite});

User.belongsToMany(Event,{through:Participant});
Event.belongsToMany(User,{through:Participant});

User.belongsToMany(User, { as: 'userToFriend', foreignKey: 'UserId', through: Friend });
User.belongsToMany(User, { as: 'friendToUser', foreignKey: 'FriendId', through: Friend });

Event.belongsTo(User);
User.hasMany(Event);

Event.belongsTo(Game);
Game.hasMany(Event);

Notification.belongsTo(User);
User.hasMany(Notification);

Notification.belongsTo(Game);
Game.hasMany(Notification);

Topic.belongsTo(User)
Topic.belongsTo(Game)
User.hasMany(Topic)
Game.hasMany(Topic)