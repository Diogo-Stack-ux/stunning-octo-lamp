'use server'
import { pool } from '../db'
export async function addProfessor(
  nome: string,
  endereco: string,
  especialidade: string,
  telefone: string,
  email: string
) {
  await pool.query(
    `insert into professor (nome, endereco, especialidade, telefone, email) values ('${nome}', '${endereco}', '${especialidade}', '${telefone}', '${email}')`
  )
}
