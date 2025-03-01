'use server'
import { pool } from '../db'
export async function addUsuarios(
  nome: string,
  apelido: string,
  email: string,
  senha: string
) {
  await pool.query(
    `insert into usuarios (nome, apelido, email, senha) values ('${nome}', '${apelido}', '${email}', '${senha}')`
  )
}
