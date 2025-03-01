'use server'
import { pool } from '../db'
export async function addFilme(
  nome: string,
  diretor: string,
  assunto: string,
  classificacao_etaria: string
) {
  await pool.query(
    `insert into filme (nome, diretor, assunto, classificacao_etaria ) values ('${nome}', '${diretor}', '${assunto}', '${classificacao_etaria}')`
  )
}
