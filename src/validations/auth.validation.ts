import Joi from 'joi'

const signIn = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}

const authValidation = {
  signIn,
}

export default authValidation
