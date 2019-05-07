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
        createdAt: {
          type: Sequelize.DATE(3),
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
        },
        updatedAt: {
          type: Sequelize.DATE(3),
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
        },
        price: {
          type: Sequelize.INTEGER,
        },
        players: {
          type: Sequelize.INTEGER,
        },
        type: {
          type: Sequelize.STRING,
        }
      }, {
        tableName: "event",
        sequelize: database,
      })
  };
}
