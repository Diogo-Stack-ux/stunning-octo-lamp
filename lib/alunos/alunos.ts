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
