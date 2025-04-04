'use server'
import { pool } from '@/lib/db'
export async function addLivros(
  nome: string,
  autor: string,
  assunto: string,
  resumo: string,
  data_de_lancamento: Date,
  preco_sugerido: number
) {
  await pool.query(
    `insert into Livros
  (nome,
  autor,
  assunto,
  resumo,
  data_de_lancamento,
  preco_sugerido
  ) values (
   $1,
   $2,
   $3,
   $4,
   $5,
   $6 )`,
    [nome, autor, assunto, resumo, data_de_lancamento, preco_sugerido]
  )
}

export async function getLivros() {
  return (await pool.query(`select * from livros`)).rows
}

export async function updateLivros(
  id: number,
  nome: string,
  autor: string,
  assunto: string,
  resumo: string,
  data_de_lancamento: Date,
  preco_sugerido: number
) {
  await pool.query(
    `update livros set 
            nome = '$1',
            autor = '$2',
            assunto = '$3',
            resumo = '$4',
            data de lancamento = '$5',
            preco sugerido = '$6'
        where id = $7`,
    [nome, autor, assunto, resumo, data_de_lancamento, preco_sugerido, id]
  )
}

export async function removeLivros(id: number) {
  await pool.query(`delete from livros where id = ${id}`)
}
