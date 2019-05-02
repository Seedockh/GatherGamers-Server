import Sequelize from "sequelize";
import User from "./models/user";
import Game from "./models/game";
const config = require('./config.json').dev || null;

export const db = (config) ? new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    dialect: config.driver,
    host: 'localhost',
    port: config.port,
    logging: console.log,
    define: {
      timestamps: false
    }
  }) : new Sequelize(process.env.JAWSDB_URL);

db.authenticate().then( (err)=> {
		console.log('Connection has been established successfully.');
	}, (err)=> {
		console.log('Unable to connect to the database:', err);
	}
);

User.init(db);
Game.init(db);
