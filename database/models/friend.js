import Sequelize, { Model } from "sequelize";

export default class Friend extends Model {
  static init(database) {

    return super.init(
      {
        createdAt: {
          type: Sequelize.DATE(3),
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
        },
        updatedAt: {
          type: Sequelize.DATE(3),
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
        }
      }, {
        tableName: "friend",
        sequelize: database,
      })
  };
}
