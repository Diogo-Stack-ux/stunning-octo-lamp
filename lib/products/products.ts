'use server'
import { pool } from '@/lib/db'

export async function addProducts(
  nome: string,
  valorUnitario: number,
  validade: string,
  descricao: string
) {
  await pool.query(
    `INSERT INTO products (
      nome,
      valor_unitario,
      validade,
      descricao
    ) VALUES (
      $1, $2, $3, $4
    )`,
    [nome, valorUnitario, validade, descricao]
  )
}

export async function getProducts() {
  return (await pool.query(`SELECT * FROM products`)).rows
}

export async function updateProducts(
  id: number,
  nome: string,
  valorUnitario: number,
  validade: string,
  descricao: string
) {
  await pool.query(
    `UPDATE products SET 
      nome = $1,
      valor_unitario = $2,
      validade = $3,
      descricao = $4
    WHERE id = $5`,
    [nome, valorUnitario, validade, descricao, id]
  )
}

export async function removeProducts(id: number) {
  await pool.query(`DELETE FROM products WHERE id = $1`, [id])
}
