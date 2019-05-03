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
        }
      }, {
        tableName: "game",
        sequelize: database,
      })
  };
}
