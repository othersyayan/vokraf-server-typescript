import express from 'express'

import CareerTrackController from '../controllers/careerTrack.controller'
import Auth from '../middlewares/auth'
import Validation from '../middlewares/validation'
import ctValidation from '../validations/careerTrack.validation'

const router = express.Router()

const auth = new Auth()
const validation = new Validation()
const ctController = new CareerTrackController()

router
  .route('/')
  .get(validation.run(ctValidation.getCTs), ctController.getCTs)
  .post(validation.run(ctValidation.getCTs), ctController.getCTs)

router
  .route('/:id')
  .get(validation.run(ctValidation.getCT), ctController.getCT)
  .patch(validation.run(ctValidation.getCT), ctController.getCT)
  .delete(validation.run(ctValidation.getCT), ctController.getCT)

export default router
