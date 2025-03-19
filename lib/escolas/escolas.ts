'use server'
import { pool } from '@/lib/db'
export async function addEscola(
  nome: string,
  endereco: string,
  quantidade_alunos: number,
  telefone: number
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
    [nome, endereco, quantidade_alunos, telefone]
  )
}
