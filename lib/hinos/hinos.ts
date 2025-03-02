'use server'
import { pool } from '../db'
export async function addHinos(titulo: string, numero: string, letra: string) {
  await pool.query(
    `insert into hinos (titulo, numero, letra) values ('${titulo}', '${numero}', '${letra}')`
  )
}
