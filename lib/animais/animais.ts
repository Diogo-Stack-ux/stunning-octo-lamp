'use server'
import { pool } from '../db'
export async function addAnimais(
  nome: string,
  nome_cientifico: string,
  especie: string,
  grupo: string
) {
  await pool.query(
    `insert into animais (nome, nome_cientifico, especie, grupo) values ('${nome}', '${nome_cientifico}', '${especie}', '${grupo}')`
  )
}
