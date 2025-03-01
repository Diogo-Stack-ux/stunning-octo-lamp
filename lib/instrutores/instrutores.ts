'use server'
import { pool } from '../db'
export async function addInstrutores(
  nome: string,
  especialidade: string,
  data_de_nascimento: string,
  endereco: string,
  comum: string
) {
  await pool.query(
    `insert into instrutores(nome, especialidade, data_de_nascimento, endereco, comum) values ('${nome}', '${especialidade}', '${data_de_nascimento}', '${endereco}', '${comum}')`
  )
}
