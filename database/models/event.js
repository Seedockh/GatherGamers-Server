import Sequelize, { Model } from "sequelize";

export default class Event extends Model {
  static init(database) {

    return super.init(
      {
        name: {
          type: Sequelize.STRING,
        },
        date: {
          type: Sequelize.DATE,
        },
        place: {
          type: Sequelize.TEXT,
        }
      }, {
        tableName: "event",
        sequelize: database,
      })
  };
}
