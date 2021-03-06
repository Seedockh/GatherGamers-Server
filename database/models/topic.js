import Sequelize, { Model } from "sequelize";

export default class Topic extends Model {
    static init(database) {

        return super.init(
            {
                title: {
                    type: Sequelize.STRING,
                },
                state: {
                    type: Sequelize.STRING,
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
                tableName: "topic",
                sequelize: database,
            })
    };
}
