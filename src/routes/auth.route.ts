import express from 'express'

import AuthController from '../controllers/auth.controller'
import Validation from '../middlewares/validation'
import authValidation from '../validations/auth.validation'

const router = express.Router()

const validation = new Validation()
const authController = new AuthController()

router
  .route('/sign-in')
  .post(validation.run(authValidation.signIn), authController.signIn)

export default router
