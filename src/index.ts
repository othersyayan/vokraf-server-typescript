import App from './app'
import config from './config/config'
import db from './config/sequelize'

const app = new App(config.PORT)

db.authenticate()
  .then(() => {
    app.listen()
  })
  .catch((err: any) => console.log(err))
