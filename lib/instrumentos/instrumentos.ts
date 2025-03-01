'use server'
import { pool } from '../db'
export async function addInstrumento(nome: string, tipo: string) {
  await pool.query(
    `insert into instrumento (nome, tipo) values ('${nome}', '${tipo}')`
  )
}
