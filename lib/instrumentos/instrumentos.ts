'use server'
import { pool } from '../db'
export async function addInstrumentos(nome: string, tipo: string) {
  await pool.query(
    `insert into instrumentos
(nome,
tipo
) values (
  $1,
  $2
  )`,
    [nome, tipo]
  )
}
