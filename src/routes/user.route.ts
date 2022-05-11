import express from 'express'

import UserController from '../controllers/user.controller'
import Auth from '../middlewares/auth'
import Validation from '../middlewares/validation'
import userValidation from '../validations/user.validation'

const router = express.Router()

const auth = new Auth()
const validation = new Validation()
const userController = new UserController()

router
  .route('/')
  .get(
    auth.isLoggedIn,
    validation.run(userValidation.getUsers),
    userController.getUsers
  )
  .post(
    auth.isLoggedIn,
    validation.run(userValidation.createUser),
    userController.createUser
  )

router
  .route('/:id')
  .get(
    auth.isLoggedIn,
    validation.run(userValidation.getUser),
    userController.getUser
  )
  .patch(
    auth.isLoggedIn,
    validation.run(userValidation.updateUser),
    userController.updateUser
  )
  .delete(
    auth.isLoggedIn,
    validation.run(userValidation.getUser),
    userController.deleteUser
  )

export default router
