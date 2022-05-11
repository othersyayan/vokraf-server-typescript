import Joi from 'joi'

const getCTs = {
  query: Joi.object().keys({
    id: Joi.string(),
    title: Joi.string(),
    description: Joi.string(),
  }),
}

const getCT = {
  params: Joi.object().keys({
    id: Joi.string(),
  }),
}

const createCT = {
  body: Joi.object().keys({
    id: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
  }),
}

const careerTrackValidation = {
  getCTs,
  getCT,
  createCT,
}

export default careerTrackValidation
