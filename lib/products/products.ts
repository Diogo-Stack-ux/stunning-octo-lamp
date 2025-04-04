'use server'
import { pool } from '@/lib/db'
export async function addProducts(
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
     $1,
     $2,
     $3,
     $4
    )`,
    [nome, valorUnitario, validade, descricao]
  )
}
export async function getProducts() {
  return (await pool.query(`select * from products`)).rows
}

export async function updateProducts(
  id: number,
  nome: string,
  valorUnitario: number,
  validade: string,
  descricao: string
) {
  await pool.query(
    `update alunos set 
            nome = '$1',
            valor unitario = '$2',
            validade = '$3',
            descricao = '$4'
        
        where id = $5`,
    [nome, valorUnitario, validade, descricao, id]
  )
}

export async function removeProducts(id: number) {
  await pool.query(`delete from products where id = ${id}`)
}
