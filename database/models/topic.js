import Sequelize, { Model } from "sequelize";

export default class Topic extends Model {
    static init(database) {

        return super.init(
            {
                title: {
                    type: Sequelize.STRING,
                }
            }, {
                tableName: "topic",
                sequelize: database,
            })
    };
}
