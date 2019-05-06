import Sequelize, { Model } from "sequelize";

export default class Participant extends Model {
  static init(database) {

    return super.init(
      {

      }, {
        tableName: "participant",
        sequelize: database,
      })
  };
}
