'use server'
import { pool } from '../db'
export async function addFilmes(
  nome: string,
  diretor: string,
  assunto: string,
  classificacao_etaria: string
) {
  await pool.query(
    `insert into filmes 
(nome,
diretor,
assunto,
classificacao_etaria
) values (
 $1,
 $2,
 $3,
 $4
  )`,
    [nome, diretor, assunto, classificacao_etaria]
  )
}

export async function getFilmes() {
  return (await pool.query(`select * from filmes`)).rows
}

export async function updateFilmes(
  id: number,
  nome: string,
  diretor: string,
  assunto: string,
  classificacao_etaria: string
) {
  await pool.query(
    `update filmes set 
            nome = '$1',
            diretor = '$2',
            assunto = '$3',
            classificacao_etaria = '$4'
        where id = $6`,
    [nome, diretor, assunto, classificacao_etaria, id]
  )
}

export async function removeFilmes(id: number) {
  await pool.query(`delete from filmes where id = ${id}`)
}
