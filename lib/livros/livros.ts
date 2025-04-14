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
    `INSERT INTO livros (
      nome,
      autor,
      assunto,
      resumo,
      data_de_lancamento,
      preco_sugerido
    ) VALUES (
      $1, $2, $3, $4, $5, $6
    )`,
    [nome, autor, assunto, resumo, data_de_lancamento, preco_sugerido]
  )
}

export async function getLivros() {
  const result = await pool.query(`SELECT * FROM livros`)
  return result.rows
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
    `UPDATE livros SET 
      nome = $1,
      autor = $2,
      assunto = $3,
      resumo = $4,
      data_de_lancamento = $5,
      preco_sugerido = $6
     WHERE id = $7`,
    [nome, autor, assunto, resumo, data_de_lancamento, preco_sugerido, id]
  )
}

export async function removeLivros(id: number) {
  await pool.query(`DELETE FROM livros WHERE id = $1`, [id])
}
