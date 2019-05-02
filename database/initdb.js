import Sequelize from "sequelize";
import User from "./models/user";
const config = require('./config.json').dev;

export const db = new Sequelize(
  config.database,
  config.user,
  config.password, {
    dialect: config.driver,
    host: 'localhost',
    logging: console.log,
    define: {
      timestamps: false
    }
  }
);

db.authenticate().then( (err)=> {
		console.log('Connection has been established successfully.');
	}, (err)=> {
		console.log('Unable to connect to the database:', err);
	}
);

User.init(db);
