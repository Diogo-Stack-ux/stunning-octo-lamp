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

export async function getInstrutores() {
  return (await pool.query(`select * from instrutores`)).rows
}

export async function updateInstrutores(
  id: number,
  nome: string,
  especialidade: string,
  endereco: string,
  data_de_nascimento: Date,
  comum: string
) {
  await pool.query(
    `update instrutores set 
            nome = '$1',
            especialidade = '$2',
            endereco = '$3',
            data de nascimento = '$4}',
            comum = '$5'
        where id = $6`,
    [nome, especialidade, endereco, data_de_nascimento, comum, id]
  )
}

export async function removeInstrutores(id: number) {
  await pool.query(`delete from instrutores where id = ${id}`)
}
