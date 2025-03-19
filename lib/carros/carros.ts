'use server'

import { pool } from '../db'
export async function addCarro(
  fabricante: string,
  modelo: string,
  ano_de_fabricaçao: number,
  cor: string,
  quilometros_rodados: number
) {
  await pool.query(
    `insert into carro
  ( 
  fabricante,
  modelo,
  ano_de_fabricaçao,
  cor,
  quilometros_rodados)
  values (
  $1,
  $2,
  $3,
  $4,
  $5
  )`,
    [fabricante, modelo, ano_de_fabricaçao, cor, quilometros_rodados]
  )
}
