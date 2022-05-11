import express from 'express'

import authRoute from './auth.route'
import baseRoute from './base.route'
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
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

export default router
