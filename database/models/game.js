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
        created_at: {
          type: Sequelize.BIGINT,
        },
        updated_at: {
          type: Sequelize.BIGINT,
        }
      }, {
        tableName: "game",
        sequelize: database,
      })
  };
}
