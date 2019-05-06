import Sequelize, { Model } from "sequelize";

export default class Game extends Model {
  static init(database) {

    return super.init(
      {
        name: {
          type: Sequelize.STRING,
        },
        cover: {
          type: Sequelize.STRING,
        },
        summary: {
          type: Sequelize.TEXT,
        },
        createdAt: {
          type: Sequelize.DATE(3),
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
        },
        updatedAt: {
          type: Sequelize.DATE(3),
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
        }
      }, {
        tableName: "game",
        sequelize: database,
      })
  };
}
