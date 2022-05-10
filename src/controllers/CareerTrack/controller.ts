/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { APP_LANG } from '@config/env'
import ConstRole from '@expresso/constants/ConstRole'
import asyncHandler from '@expresso/helpers/asyncHandler'
import { arrayFormatter } from '@expresso/helpers/Formatter'
import HttpResponse from '@expresso/modules/Response/HttpResponse'
import Authorization from '@middlewares/Authorization'
import PermissionAccess from '@middlewares/PermissionAccess'
import route from '@routes/v1'
import { Request, Response } from 'express'
import CareerTrackService from './service'

// ---------------------------------------------------------------------------------------------------------------------

const onlyAdmin = [ConstRole.ID_SUPER_ADMIN, ConstRole.ID_ADMIN]

route.get(
  '/careertrack',
  // PermissionAccess(onlyAdmin),
  Authorization,
  asyncHandler(async function findAll(req: Request, res: Response) {
    const data = await CareerTrackService.findAll(req)

    const httpResponse = HttpResponse.get(data)
    res.status(200).json(httpResponse)
  })
)
