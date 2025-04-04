'use server'
import { pool } from '@/lib/db'
export async function addEscolas(
  nome: string,
  endereco: string,
  quantidadeDeAlunos: number,
  telefone: string
) {
  await pool.query(
    `insert into escola
(nome,
endereco,
quantidade_alunos,
telefone
) values (
 $1,
 $2,
 $3,
 $4
  )`,
    [nome, endereco, quantidadeDeAlunos, telefone]
  )
}

export async function getEscolas() {
  return (await pool.query(`select * from escolas`)).rows
}

export async function updateEscolas(
  id: number,
  nome: string,
  endereco: string,
  quantidadeDeAlunos: number,
  telefone: string
) {
  await pool.query(
    `update escolas set 
            nome = '$1',
            endereco = '$2',
            quantidade alunos = '$3',
            telefone = '$4'

        where id = $5`,
    [nome, nome, endereco, quantidadeDeAlunos, telefone, id]
  )
}

export async function removeEscolas(id: number) {
  await pool.query(`delete from escolas where id = ${id}`)
}
