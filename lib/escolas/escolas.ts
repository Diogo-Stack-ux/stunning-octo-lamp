'use server'
import { pool } from '@/lib/db'
export async function addEscola(
  nome: string,
  endereco: string,
  quantidade_alunos: number,
  telefone: string
) {
  await pool.query(
    `insert into escola (nome, endereco, quantidade_alunos, telefone) values ('${nome}', '${endereco}', '${quantidade_alunos}', '${telefone}')`
  )
}
