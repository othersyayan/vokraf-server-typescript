import express, { Application, Request, Response } from 'express'

import routes from './routes'

class App {
  private express: Application
  private port: number

  constructor(port: number) {
    this.express = express()
    this.port = port

    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))

    this.routes()
  }

  private routes = (): void => {
    this.express.use(routes)

    this.express.use('*', (req: Request, res: Response) => {
      return res
        .status(404)
        .send('Sorry, HTTP resource you are looking for was not found.')
    })
  }

  public listen = (): void => {
    this.express.listen(this.port, () => {
      console.log(`Listening to port ${this.port}`)
    })
  }
}

export default App
