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
    `insert into pneus 
  (marca,
  modelo,
  largura,
  raio,
  especura,
  carga_maxima
  ) values (
  $1,
  $2,
  $3,
  $4,
  $5,
  $6
  )`,
    [marca, modelo, largura, raio, especura, carga_maxima]
  )
}

export async function getPneus() {
  return (await pool.query(`select * from pneus`)).rows
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
    `update alunos set 
           marca = '$1',
           modelo = '$2',
           largura = '$3',
           raio = '$4',
           especura = '$5',
           carga_maxima = '$6'
        where id = $7`,
    [marca, modelo, largura, raio, especura, carga_maxima, id]
  )
}

export async function removePneus(id: number) {
  await pool.query(`delete from pneus where id = ${id}`)
}
