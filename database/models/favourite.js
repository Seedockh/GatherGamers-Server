import Sequelize, { Model } from "sequelize";

export default class Favourite extends Model {
  static init(database) {

    return super.init(
      {
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      }, {
        tableName: "favourite",
        sequelize: database,
      })
  };
}
