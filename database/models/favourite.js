import Sequelize, { Model } from "sequelize";

export default class Favourite extends Model {
  static init(database) {

    return super.init(
      {

      }, {
        tableName: "favourite",
        sequelize: database,
      })
  };
}
