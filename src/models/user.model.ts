import bcrypt from 'bcrypt'
import { DataTypes, Model, UUIDV4 } from 'sequelize'

import sequelize from '../config/sequelize'

export interface UserAttributes {
  id: string
  name: string
  email: string
  password: string
}

export interface UserInstance extends Model<UserAttributes>, UserAttributes {}

class User extends Model<UserAttributes> implements UserAttributes {
  declare id: string
  declare name: string
  declare email: string
  declare password: string
}

User.init(
  {
    id: {
      field: '_id',
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      field: 'first_name',
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'user',
  }
)

const setUserPassword = (user: UserInstance): void => {
  const { password } = user
  const saltRounds = 10

  const hash = bcrypt.hashSync(password, saltRounds)
  user.setDataValue('password', hash)
}

User.addHook('beforeCreate', setUserPassword)
User.addHook('beforeUpdate', setUserPassword)

export default User
