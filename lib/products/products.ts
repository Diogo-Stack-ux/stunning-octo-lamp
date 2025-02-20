'use server'
import { pool } from '@/lib/db'
export async function addProduto(
  nome: string,
  valorUnitario: number,
  validade: string,
  descricao: string
) {
  await pool.query(
    `insert into products(
      nome,
      valor_unitario,
      validade,
      descricao
    ) values (
      '${nome}',
      ${valorUnitario},
      '${validade}',
      '${descricao}'
     )`
  )
}
