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
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      }, {
        tableName: "event",
        sequelize: database,
      })
  };
}
