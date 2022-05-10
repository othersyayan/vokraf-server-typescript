import SequelizeAttributes from '@expresso/utils/SequelizeAttributes'
import { Model, Optional } from 'sequelize'
import db from './_instance'

// Entity
export interface CareerTrackAttributes {
  id: string
  name: string
  description: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
  // topic: string | null
  // topic_slug: string | null
  // label_color: string | null
  title: string
  // slug: string | null
  // other_description: string | null
  // pic_url: string | null
  // homepage_pic_url: string | null
  // icon_project_url: string | null
  // total_time: string | null
  // promo_text: string | null
  // total_class: number | null
  // enrollment_cost: number | null
  // enrollment_expire_at: number | null
  // page_price: number | null
  // enrollment_description: string | null
  // instructor_id: string | null
  // isBeta: boolean | false
  // is_upskill: boolean | false
  // mitra_platform: boolean | false
  // code_tag: string | null
  // upskill_categories: string | null
  // sisnaker_url: string | null
  // sekolahmu_url: string | null
  // pintaria_url: string | null
  // pijar_mahir_url: string | null
  // tokopedia_url: string | null
  // kompetensi: string | null
  // category_id: string | null
  // intro_video_url: string | null
  // alias: string | null
  // product_code: string | null
}

// creation attributes
interface CareerTrackCreationAttributes
  extends Optional<CareerTrackAttributes, 'id'> {}

// instance
export interface CareerTrackInstance
  extends Model<CareerTrackAttributes, CareerTrackCreationAttributes>,
    CareerTrackAttributes {}

// class entity
class CareerTrack
  extends Model<CareerTrackAttributes, CareerTrackCreationAttributes>
  implements CareerTrackAttributes
{
  declare id: string
  declare name: string
  declare description: string
  // declare topic: string | null
  // declare topic_slug: string | null
  // declare label_color: string | null
  declare title: string
  // declare slug: string | null
  // declare other_description: string | null
  // declare pic_url: string | null
  // declare homepage_pic_url: string | null
  // declare icon_project_url: string | null
  // declare total_time: string | null
  // declare promo_text: string | null
  // declare total_class: number | null
  // declare enrollment_cost: number | null
  // declare enrollment_expire_at: number | null
  // declare page_price: number | null
  // declare enrollment_description: string | null
  // declare instructor_id: string | null
  // declare isBeta: boolean | false
  // declare is_upskill: boolean | false
  // declare mitra_platform: boolean | false
  // declare code_tag: string | null
  // declare upskill_categories: string | null
  // declare sisnaker_url: string | null
  // declare sekolahmu_url: string | null
  // declare pintaria_url: string | null
  // declare pijar_mahir_url: string | null
  // declare tokopedia_url: string | null
  // declare kompetensi: string | null
  // declare category_id: string | null
  // declare intro_video_url: string | null
  // declare alias: string | null
  // declare product_code: string | null

  declare readonly createdAt: Date
  declare readonly updatedAt: Date
  declare readonly deletedAt: Date
}

// init model
CareerTrack.init(
  {
    ...SequelizeAttributes.CareerTrack,
  },
  // @ts-expect-error
  { sequelize: db.sequelize, tableName: 'career_track', paranoid: true }
)

export default CareerTrack
