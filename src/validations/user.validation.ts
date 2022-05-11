import Joi from 'joi'

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
  }),
}

const getUser = {
  params: Joi.object().keys({
    id: Joi.string(),
  }),
}

const createUser = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}

const updateUser = {
  params: Joi.object().keys({
    id: Joi.string(),
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}

const userValidation = {
  getUsers,
  getUser,
  createUser,
  updateUser,
}

export default userValidation
