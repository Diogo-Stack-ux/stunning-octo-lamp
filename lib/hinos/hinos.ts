'use server'
import { pool } from '../db'
export async function addHinos(titulo: string, numero: number, letra: string) {
  await pool.query(
    `insert into hinos (
            titulo,
            numero,
            letra
        ) values (
            $1,
            $2,
            $3
        )`,
    [titulo, numero, letra]
  )
}

export async function getHinos() {
  return (await pool.query(`select * from hinos`)).rows
}

export async function updateHinos(
  id: number,
  titulo: string,
  numero: number,
  letra: string
) {
  await pool.query(
    `update hino set 
            titulo = $1',
            letra = $2,
            numero = $3
        where id = $4`,
    [titulo, letra, numero, id]
  )
}

export async function removeHinos(id: number) {
  await pool.query(`delete from hinos where id = ${id}`)
}
