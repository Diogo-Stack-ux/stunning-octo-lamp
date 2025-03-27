'use server'

import { pool } from '../db'
export async function addCarros(
  fabricante: string,
  modelo: string,
  ano_de_fabricaçao: number,
  cor: string,
  quilometragem: number
) {
  await pool.query(
    `insert into carros
  ( 
  fabricante,
  modelo,
  ano_de_fabricaçao,
  cor,
  quilometragem)
  values (
  $1,
  $2,
  $3,
  $4,
  $5
  )`,
    [fabricante, modelo, ano_de_fabricaçao, cor, quilometragem]
  )
}

export async function getCarros() {
  return (await pool.query(`select * from carros`)).rows
}

export async function updateCarros(
  id: number,
  fabricante: string,
  modelo: string,
  ano_de_fabricaçao: number,
  cor: string,
  quilometragem: number
) {
  await pool.query(
    `update carros set 
            fabricante = '$1',
            modelo = '$2',
            ano_de_fabricacao = '$3',
            cor = '$4',
            quilometragem = '$5'
        where id = $6`,
    [fabricante, modelo, ano_de_fabricaçao, cor, quilometragem, id]
  )
}

export async function removeCarros(id: number) {
  await pool.query(`delete from carros where id = ${id}`)
}
