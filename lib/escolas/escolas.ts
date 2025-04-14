'use server'

import { pool } from '@/lib/db'

export async function addEscolas(
  nome: string,
  endereco: string,
  quantidade_alunos: number,
  telefone: string
) {
  await pool.query(
    `INSERT INTO escolas (
      nome,
      endereco,
      quantidade_alunos,
      telefone
    ) VALUES (
      $1, $2, $3, $4
    )`,
    [nome, endereco, quantidade_alunos, telefone]
  )
}

export async function getEscolas() {
  const result = await pool.query(`SELECT * FROM escolas`)
  return result.rows
}

export async function updateEscolas(
  id: number,
  nome: string,
  endereco: string,
  quantidade_alunos: number,
  telefone: string
) {
  await pool.query(
    `UPDATE escolas SET 
      nome = $1,
      endereco = $2,
      quantidade_alunos = $3,
      telefone = $4
     WHERE id = $5`,
    [nome, endereco, quantidade_alunos, telefone, id] // Correção feita aqui
  )
}

export async function removeEscolas(id: number) {
  await pool.query(`DELETE FROM escolas WHERE id = $1`, [id])
}
