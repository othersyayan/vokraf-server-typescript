import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '../../.env') })

interface EnvVars {
  NODE_ENV: string
  PORT: number
  POSTGRES_URL: string
  JWT_SECRET_ACCESS_TOKEN: string
  JWT_ACCESS_TOKEN_EXPIRED: string
}

const config: EnvVars = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: Number(process.env.PORT) ?? 3000,
  POSTGRES_URL: process.env.POSTGRES_URL ?? '',
  JWT_SECRET_ACCESS_TOKEN: process.env.JWT_SECRET_ACCESS_TOKEN ?? 'secret',
  JWT_ACCESS_TOKEN_EXPIRED: process.env.JWT_ACCESS_TOKEN_EXPIRED ?? '7d',
}

export default config
