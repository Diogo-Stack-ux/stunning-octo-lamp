'use server'
import { pool } from '../db'
export async function addAlunos(
  nome: string,
  nome_do_pai: string,
  nome_da_mae: string,
  data_de_nascimento: Date,
  cor_da_pele: string
) {
  await pool.query(
    `insert into alunos (nome , 
    nome_do_pai , 
    nome_da_mae, 
    data_de_nascimento , 
    cor_da_pele) values (
    $1,
    $2,
    $3,
    $4,
    $5
  )`,
    [nome, nome_do_pai, nome_da_mae, data_de_nascimento, cor_da_pele]
  )
}

export async function getAlunos() {
  return (await pool.query(`select * from alunos`)).rows
}

export async function updateAlunos(
  id: number,
  nome: string,
  nome_do_pai: string,
  nome_da_mae: string,
  data_de_nascimento: Date,
  cor_da_pele: string
) {
  await pool.query(
    `update alunos set 
            nome = '$1',
            nome do pai = '$2',
            nome da mae = '$3',
            data de nascimento = '$4}',
            cor da pele = '$5'
        where id = $6`,
    [nome, nome_do_pai, nome_da_mae, data_de_nascimento, cor_da_pele, id]
  )
}

export async function removeAlunos(id: number) {
  await pool.query(`delete from alunos where id = ${id}`)
}
