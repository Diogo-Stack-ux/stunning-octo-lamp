'use server'
import { pool } from '../db'
export async function addCurriculos(
  nome: string,
  endereco: string,
  curriculo: string,
  habilidades: string
) {
  await pool.query(
    `insert into curriculo 
(nome,
endereco,
curriculo,
habilidades
) values (
 $1,
 $2,
 $3,
 $4
  )`,
    [nome, endereco, curriculo, habilidades]
  )
}

export async function getCurriculos() {
  return (await pool.query(`select * from curriculo`)).rows
}

export async function updateCurriculos(
  id: number,
  nome: string,
  endereco: string,
  curriculo: string,
  habilidades: string
) {
  await pool.query(
    `update curriculos set 
            nome = '$1',
            endereco = '$2',
            curriculo = '$3',
            habilidades = '$4'
        where id = $5`,
    [nome, endereco, curriculo, habilidades, id]
  )
}

export async function removeCurriculos(id: number) {
  await pool.query(`delete from curriculos where id = ${id}`)
}
