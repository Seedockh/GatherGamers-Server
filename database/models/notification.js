import Sequelize, { Model } from "sequelize";

export default class Notification extends Model {
  static init(database) {

    return super.init(
      {
        message: {
          type: Sequelize.STRING,
        },
        type: {
          type: Sequelize.BOOLEAN,
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
        tableName: "notification",
        sequelize: database,
      })
  };
}
