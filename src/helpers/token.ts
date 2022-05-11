import jwt, {
  JsonWebTokenError,
  JwtPayload,
  NotBeforeError,
  TokenExpiredError,
} from 'jsonwebtoken'
import ms from 'ms'

import config from '../config/config'

interface Payload {
  id: string
}

interface Token {
  accessToken: string
  refreshToken: string
}

interface VerifyAccessToken {
  message: string
  data: JwtPayload | string | any
}

const generateToken = (payload: Payload): Token => {
  const getMilliSecondExpires = ms(config.JWT_ACCESS_TOKEN_EXPIRED)
  const expiresIn = Number(getMilliSecondExpires) / 1000

  const accessToken = jwt.sign(
    JSON.parse(JSON.stringify(payload)),
    config.JWT_SECRET_ACCESS_TOKEN,
    { expiresIn }
  )

  const refreshToken = jwt.sign(
    JSON.parse(JSON.stringify(payload)),
    config.JWT_SECRET_ACCESS_TOKEN
  )

  return {
    accessToken,
    refreshToken,
  }
}

const getToken = (headers: any): string => {
  if (headers.authorization) {
    const token = headers.authorization

    return token
  }

  return ''
}

const verifyAccessToken = (token: string): VerifyAccessToken | undefined => {
  try {
    if (!token) {
      return { message: 'Unauthorized!', data: null }
    }

    const data = jwt.verify(token, config.JWT_SECRET_ACCESS_TOKEN)

    return { message: 'Token Verified', data }
  } catch (error: any) {
    if (error instanceof NotBeforeError) {
      return { message: `JWT Not Before Error: ${error.message}`, data: null }
    }

    if (error instanceof JsonWebTokenError) {
      return { message: `JWT Token Error: ${error.message}`, data: null }
    }

    if (error instanceof TokenExpiredError) {
      return { message: `JWT Expired Error: ${error.message}`, data: null }
    }
  }
}

export { generateToken, getToken, verifyAccessToken }
