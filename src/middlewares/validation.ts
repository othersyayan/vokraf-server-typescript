import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'

import pick from '../utils/pick'

class Validation {
  public run =
    (schema: any) => (req: Request, res: Response, next: NextFunction) => {
      const validSchema = pick(schema, ['params', 'query', 'body'])
      const object = pick(req, Object.keys(validSchema))
      const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' }, abortEarly: false })
        .validate(object)

      if (error) {
        const errorMessage = error.details.map((details) =>
          details.message.replace(/["]+/g, '')
        )
        return res.status(422).send(errorMessage)
      }

      Object.assign(req, value)

      return next()
    }
}

export default Validation
