import express from 'express'

import authRoute from './auth.route'
import baseRoute from './base.route'
import ctRoute from './careerTrack.route'
import userRoute from './user.route'

const router = express.Router()

const defaultRoutes = [
  {
    path: '/',
    route: baseRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/careerTrack',
    route: ctRoute,
  },
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

export default router
