import express, { Request, Response } from 'express'

const router = express.Router()

router.route('/').get((req: Request, res: Response) => {
  return res.status(200).send({ message: 'Hello World' })
})

export default router
