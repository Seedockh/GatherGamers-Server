import Sequelize, { Model } from "sequelize";
import bcrypt from "bcrypt";

export default class User extends Model {
  static init(database) {

    return super.init(
      {
        user_firstName: {
          type: Sequelize.STRING,
        },
        user_lastName: {
          type: Sequelize.STRING,
        },
        user_nickname: {
          type: Sequelize.STRING,
          unique: {
            args: true,
            msg: "Nickname already in use"
          },
          validate: {
            isLongEnough(v) {
              if (v.length < 5) {
                throw new Error("Nickname must have at least 5 characters");
              }
            }
          }
        },
        user_email: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            isEmail: { msg: "Email is not valid." }
          },
          unique: {
            args: true,
            msg: "Email already in use"
          }
        },
        password_digest: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true
          }
        },
        user_password: {
          type: Sequelize.VIRTUAL,
          validate: {
            isLongEnough(v) {
              if (v.length < 7) {
                throw new Error("Password must have at least 7 characters");
              }
            }
          }
        },
        user_password_confirmation: {
          type: Sequelize.VIRTUAL,
          validate: {
            isEqual(v) {
              if (v !== this.password) {
                throw new Error("Password confirmation doesn't match password");
              }
            }
          }
        },
        user_city: {
          type: Sequelize.STRING,
        },
        user_createdAt: {
          type: Sequelize.TIME,
        },
        user_updatedAt: {
          type: Sequelize.TIME,
        },
      }, {
        tableName: "user",
        sequelize: database,

        indexes: [
          {
            unique: true,
            fields: ["user_nickname", "user_email"]
          }
        ],

        hooks: {
          async beforeValidate(userInstance) {
            if (userInstance.isNewRecord) {
              userInstance.password_digest = await userInstance.generateHash();
            }
          },

          async beforeSave(userInstance) {
            if (!userInstance.isNewRecord && userInstance.changed("password")) {
              userInstance.password_digest = await userInstance.generateHash();
            }
          },
          async beforeUpdate(userInstance) {
            if (userInstance.password && userInstance.changed("password")) {
              userInstance.password_digest = await userInstance.generateHash();
            }
          },
        }
      })
  };


  async generateHash() {
    const SALT_ROUND = 5;
    const hash = await bcrypt.hash(this.user_password, SALT_ROUND);
    if (!hash) {
      throw new Error("Can't hash password");
    }
    return hash;
  }

  async checkPassword(password) {
    return bcrypt.compare(password, this.user_password_digest);
  }

  toJSON() {
    const values = Object.assign({}, this.get());

    delete values.user_password_digest;
    delete values.user_password;
    delete values.user_password_confirmation;
    return values;
  }
}
