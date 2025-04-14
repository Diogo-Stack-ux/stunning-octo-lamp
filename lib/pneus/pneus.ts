'use server'

import { pool } from '../db'

export async function addPneus(
  marca: string,
  modelo: string,
  largura: number,
  raio: number,
  especura: number,
  carga_maxima: number
) {
  await pool.query(
    `INSERT INTO pneus (
      marca,
      modelo,
      largura,
      raio,
      especura,
      carga_maxima
    ) VALUES (
      $1, $2, $3, $4, $5, $6
    )`,
    [marca, modelo, largura, raio, especura, carga_maxima]
  )
}

export async function getPneus() {
  return (await pool.query(`SELECT * FROM pneus`)).rows
}

export async function updatePneus(
  id: number,
  marca: string,
  modelo: string,
  largura: number,
  raio: number,
  especura: number,
  carga_maxima: number
) {
  await pool.query(
    `UPDATE pneus SET 
      marca = $1,
      modelo = $2,
      largura = $3,
      raio = $4,
      especura = $5,
      carga_maxima = $6
    WHERE id = $7`,
    [marca, modelo, largura, raio, especura, carga_maxima, id]
  )
}

export async function removePneus(id: number) {
  await pool.query(`DELETE FROM pneus WHERE id = $1`, [id])
}
