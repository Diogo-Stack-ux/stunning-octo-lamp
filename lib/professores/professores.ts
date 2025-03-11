'use server'
import { pool } from '../db'
export async function addProfessor(
  nome: string,
  endereco: string,
  especialidade: string,
  telefone: number,
  email: string
) {
  await pool.query(
    `insert into professor
(nome,
endereco,
especialidade,
telefone,
email
) values (
 $1,
 $2,
 $3,
 $4,
 $5
  )`,
    [nome, endereco, especialidade, telefone, email]
  )
}
