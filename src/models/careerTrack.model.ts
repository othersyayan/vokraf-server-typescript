import { DataTypes, Model, UUIDV4 } from 'sequelize'

import sequelize from '../config/sequelize'

export interface CareerTrackAttributes {
  id: string
  title: string
  description: string
}

export interface CareerTrackInstance
  extends Model<CareerTrackAttributes>,
    CareerTrackAttributes {}

class CareerTrack
  extends Model<CareerTrackAttributes>
  implements CareerTrackAttributes
{
  declare id: string
  declare title: string
  declare description: string
}

CareerTrack.init(
  {
    id: {
      field: '_id',
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    title: {
      field: 'title',
      type: DataTypes.STRING,
    },
    description: {
      field: 'description',
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'CareerTrack',
    tableName: 'career_track',
  }
)

export default CareerTrack
