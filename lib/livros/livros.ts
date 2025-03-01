'use server'
import { pool } from '@/lib/db'
export async function addLivros(
  nome: string,
  autor: string,
  assunto: string,
  resumo: string,
  data_de_lancamento: string,
  preco_sugerido: string
) {
  await pool.query(
    `insert into Livros (nome, autor, assunto, resumo, data_de_lancamento, preco_sugerido) values ('${nome}', '${autor}', '${assunto}', '${resumo}', '${data_de_lancamento}', '${preco_sugerido}')`
  )
}
