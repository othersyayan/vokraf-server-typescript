/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { APP_LANG } from '@config/env'
import { i18nConfig } from '@config/i18nextConfig'
import models from '@database/models'
import {
  CareerTrackAttributes,
  CareerTrackInstance,
} from '@database/models/careerTrack'
import db from '@database/models/_instance'
import { validateBoolean, validateUUID } from '@expresso/helpers/Formatter'
import useValidation from '@expresso/hooks/useValidation'
import ResponseError from '@expresso/modules/Response/ResponseError'
import {
  DtoFindAll,
  SqlizeOptions,
} from '@expresso/modules/SqlizeQuery/interface'
import PluginSqlizeQuery from '@expresso/modules/SqlizeQuery/PluginSqlizeQuery'
import chalk from 'chalk'
import { startOfDay } from 'date-fns'
import { Request } from 'express'
import { TOptions } from 'i18next'
import _ from 'lodash'

// ---------------------------------------------------------------------------------------------------------------------

const { Sequelize } = db
const { Op } = Sequelize
const { CareerTrack } = models

// ---------------------------------------------------------------------------------------------------------------------

interface DtoPaginate extends DtoFindAll {
  data: CareerTrackInstance[]
}

class CareerTrackService {
  /**
   * @param req Request findAll
   */
  public static async findAll(req: Request): Promise<DtoPaginate> {
    const { lang } = req.getQuery()
    const defaultLang = lang ?? APP_LANG
    const i18nOpt: string | TOptions = { lng: defaultLang }

    const { includeCount, order, ...queryFind } = PluginSqlizeQuery.generate(
      req.query,
      CareerTrack,
      []
    )

    const data = await CareerTrack.findAll({
      ...queryFind,
      order: order.length ? order : [['createdAt', 'desc']],
    })

    const total = await CareerTrack.count({
      include: includeCount,
      where: queryFind.where,
    })

    const message = i18nConfig.t('success.dataReceived', i18nOpt)

    return { message: `${total} ${message}`, data, total }
  }
}

export default CareerTrackService
