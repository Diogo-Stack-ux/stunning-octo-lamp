'use server'

import { pool } from '../db'

// Adicionar usuário
export async function addUsuarios(
  nome: string,
  apelido: string,
  email: string,
  senha: string
) {
  try {
    await pool.query(
      `INSERT INTO usuarios (
        nome,
        apelido,
        email,
        senha
      ) VALUES ($1, $2, $3, $4)`,
      [nome, apelido, email, senha]
    )
  } catch (error) {
    console.error('Erro ao adicionar usuário:', error)
    throw new Error('Erro ao adicionar usuário')
  }
}

// Buscar todos os usuários
export async function getUsuarios() {
  try {
    const result = await pool.query(`SELECT * FROM usuarios`)
    return result.rows
  } catch (error) {
    console.error('Erro ao buscar usuários:', error)
    throw new Error('Erro ao buscar usuários')
  }
}

// Atualizar usuário
export async function updateUsuarios(
  id: number,
  nome: string,
  apelido: string,
  email: string,
  senha: string
) {
  try {
    await pool.query(
      `UPDATE usuarios SET 
        nome = $1,
        apelido = $2,
        email = $3,
        senha = $4
      WHERE id = $5`,
      [nome, apelido, email, senha, id]
    )
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error)
    throw new Error('Erro ao atualizar usuário')
  }
}

// Remover usuário
export async function removeUsuarios(id: number) {
  try {
    await pool.query(`DELETE FROM usuarios WHERE id = $1`, [id])
  } catch (error) {
    console.error('Erro ao remover usuário:', error)
    throw new Error('Erro ao remover usuário')
  }
}
