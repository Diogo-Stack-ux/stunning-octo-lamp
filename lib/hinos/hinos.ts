'use server'
import { pool } from '../db'
export async function addHino(titulo: string, numero: string, letra: string) {
  await pool.query(
    `insert into hino (titulo, numero, letra) values ('${titulo}', '${numero}', '${letra}')`
  )
}
