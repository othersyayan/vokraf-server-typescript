import { Request, Response } from 'express'

import AuthService from '../services/auth.service'

class AuthController {
  private authService = new AuthService()

  public signIn = async (req: Request, res: Response) => {
    const data = req.body
    const signIn = await this.authService.signIn(data)

    return res.status(200).send(signIn)
  }
}

export default AuthController
