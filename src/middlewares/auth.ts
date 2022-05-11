import { NextFunction, Request, Response } from 'express'

import { getToken, verifyAccessToken } from '../helpers/token'

class Auth {
  public isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    const token = getToken(req.headers)
    const verifiedToken = verifyAccessToken(token)

    if (!verifiedToken?.data) {
      return res.status(401).send({
        message: verifiedToken?.message,
      })
    }

    req.user = verifiedToken.data.id

    next()
  }
}

export default Auth
