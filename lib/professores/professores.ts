'use server'

import { pool } from '../db'

// Adicionar professor
export async function addProfessores(
  nome: string,
  endereco: string,
  especialidade: string,
  telefone: number,
  email: string
) {
  await pool.query(
    `INSERT INTO professor (
      nome,
      endereco,
      especialidade,
      telefone,
      email
    ) VALUES (
      $1, $2, $3, $4, $5
    )`,
    [nome, endereco, especialidade, telefone, email]
  )
}

// Buscar todos os professores
export async function getProfessores() {
  const result = await pool.query(`SELECT * FROM professor`)
  return result.rows
}

// Atualizar professor
export async function updateProfessores(
  id: number,
  nome: string,
  endereco: string,
  especialidade: string,
  telefone: number,
  email: string
) {
  await pool.query(
    `UPDATE professor SET 
      nome = $1,
      endereco = $2,
      especialidade = $3,
      telefone = $4,
      email = $5
    WHERE id = $6`,
    [nome, endereco, especialidade, telefone, email, id]
  )
}

// Remover professor
export async function removeProfessores(id: number) {
  await pool.query(`DELETE FROM professor WHERE id = $1`, [id])
}
