import { DataTypes, Model, UUIDV4 } from 'sequelize'

import sequelize from '../config/sequelize'

export interface TokenAttributes {
  id?: string
  userId: string
  token: string
  type: string
}

export interface TokenInstance
  extends Model<TokenAttributes>,
    TokenAttributes {}

class Token extends Model<TokenAttributes> implements TokenAttributes {
  declare id: string
  declare userId: string
  declare token: string
  declare type: string
}

Token.init(
  {
    id: {
      field: '_id',
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    userId: {
      field: 'user_id',
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Token',
    tableName: 'token',
  }
)

export default Token
