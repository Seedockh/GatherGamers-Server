import Sequelize, { Model } from "sequelize";

export default class Participant extends Model {
  static init(database) {

    return super.init(
      {
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      }, {
        tableName: "participant",
        sequelize: database,
      })
  };
}
