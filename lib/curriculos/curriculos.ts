'use server'
import { pool } from '../db'
export async function addCurriculo(
  nome: string,
  endereco: string,
  curriculo: string,
  habilidades: string
) {
  await pool.query(
    `insert into curriculo (nome, endereco, curriculo, habilidades) values ('${nome}', '${endereco}', '${curriculo}', '${habilidades}')`
  )
}
