'use server'
import { pool } from '../db'
export async function addInstrutores(
  nome: string,
  especialidade: string,
  endereco: string,
  data_de_nascimento: Date,
  comum: string
) {
  await pool.query(
    `insert into instrutores
(nome,
especialidade,
endereco,
data_de_nascimento,
comum
) values (
 $1,
 $2,
 $3,
 $4,
 $5)`,
    [nome, especialidade, endereco, data_de_nascimento, comum]
  )
}
