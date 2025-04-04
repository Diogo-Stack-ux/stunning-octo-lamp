'use server'
import { pool } from '../db'
export async function addInstrumentos(nome: string, tipo: string) {
  await pool.query(
    `insert into instrumentos
(nome,
tipo
) values (
  $1,
  $2
  )`,
    [nome, tipo]
  )
}

export async function getInstrumentos() {
  return (await pool.query(`select * from instrumentos`)).rows
}

export async function updateInstrumentos(
  id: number,
  nome: string,
  tipo: string
) {
  await pool.query(
    `update instrumentos set 
            nome = '$1',
            tipo = '$2',
        
        where id = $3`,
    [nome, tipo, id]
  )
}

export async function removeInstrumentos(id: number) {
  await pool.query(`delete from instrumentos where id = ${id}`)
}
