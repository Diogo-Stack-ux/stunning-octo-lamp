'use server'

import { pool } from '../db'

export async function addInstrutores(
  nome: string,
  especialidade: string,
  endereco: string,
  data_de_nascimento: Date,
  comum: string
) {
  await pool.query(
    `INSERT INTO instrutores (
      nome,
      especialidade,
      endereco,
      data_de_nascimento,
      comum
    ) VALUES (
      $1, $2, $3, $4, $5
    )`,
    [nome, especialidade, endereco, data_de_nascimento, comum]
  )
}

export async function getInstrutores() {
  const result = await pool.query(`SELECT * FROM instrutores`)
  return result.rows
}

export async function updateInstrutores(
  id: number,
  nome: string,
  especialidade: string,
  endereco: string,
  data_de_nascimento: Date,
  comum: string
) {
  await pool.query(
    `UPDATE instrutores SET 
      nome = $1,
      especialidade = $2,
      endereco = $3,
      data_de_nascimento = $4,
      comum = $5
     WHERE id = $6`,
    [nome, especialidade, endereco, data_de_nascimento, comum, id]
  )
}

export async function removeInstrutores(id: number) {
  await pool.query(`DELETE FROM instrutores WHERE id = $1`, [id])
}
