'use server'

import { pool } from '../db'

export async function addHinos(titulo: string, numero: number, letra: string) {
  await pool.query(
    `INSERT INTO hinos (
      titulo,
      numero,
      letra
    ) VALUES (
      $1, $2, $3
    )`,
    [titulo, numero, letra]
  )
}

export async function getHinos() {
  const result = await pool.query(`SELECT * FROM hinos`)
  return result.rows
}

export async function updateHinos(
  id: number,
  titulo: string,
  numero: number,
  letra: string
) {
  await pool.query(
    `UPDATE hinos SET 
      titulo = $1,
      numero = $2,
      letra = $3
     WHERE id = $4`,
    [titulo, numero, letra, id]
  )
}

export async function removeHinos(id: number) {
  await pool.query(`DELETE FROM hinos WHERE id = $1`, [id])
}
