'use server'
import { pool } from '../db'
export async function addProfessores(
  nome: string,
  endereco: string,
  especialidade: string,
  telefone: number,
  email: string
) {
  await pool.query(
    `insert into professores
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

export async function getProfessores() {
  return (await pool.query(`select * from professores`)).rows
}

export async function updateProfessores(
  id: number,
  nome: string,
  endereco: string,
  especialidade: string,
  telefone: number,
  email: string
) {
  await pool.query(
    `update professores set 
            nome = '$1',
            endereco = '$2',
            especialidade = '$3',
            telefone = '$4}',
            email = '$5'
        where id = $6`,
    [nome, endereco, especialidade, telefone, email, id]
  )
}

export async function removeProfessores(id: number) {
  await pool.query(`delete from professores where id = ${id}`)
}
