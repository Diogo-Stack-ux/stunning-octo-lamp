'use server'

import { pool } from '../db'

export async function addMaterias(
  nome: string,
  descricao: string,
  ano_letivo: number
) {
  await pool.query(
    `INSERT INTO materias (
      nome,
      descricao,
      ano_letivo
    ) VALUES (
      $1, $2, $3
    )`,
    [nome, descricao, ano_letivo]
  )
}

export async function getMaterias() {
  return (await pool.query(`SELECT * FROM materias`)).rows
}

export async function updateMaterias(
  id: number,
  nome: string,
  descricao: string,
  ano_letivo: number
) {
  await pool.query(
    `UPDATE materias SET 
      nome = $1,
      descricao = $2,
      ano_letivo = $3
    WHERE id = $4`,
    [nome, descricao, ano_letivo, id]
  )
}

export async function removeMaterias(id: number) {
  await pool.query(`DELETE FROM materias WHERE id = $1`, [id])
}
