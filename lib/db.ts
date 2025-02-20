import { Pool } from 'pg'
import { config } from 'dotenv'

config()

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'diogo9121',
  port: 5432,
})
