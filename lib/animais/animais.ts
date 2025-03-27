'use server'
import { pool } from '../db'
export async function addAnimais(
  nome: string,
  nome_cientifico: string,
  especie: string,
  grupo: string
) {
  await pool.query(
    `insert into animais
   (nome,
    nome_cientifico,
    especie,
    grupo
    ) values (
    $1,
    $2,
    $3,
    $4
    )`,
    [nome, nome_cientifico, especie, grupo]
  )
}

export async function getAnimais() {
  return (await pool.query(`select * from animais`)).rows
}

export async function updateAnimais(
  id: number,
  nome: string,
  nome_cientifico: string,
  especie: string,
  grupo: string
) {
  await pool.query(
    `update animais set 
            nome = '$1',
            nome cientifico = '$2',
            especie = '$3',
            grupo = '$4',
        where id = $5`,
    [nome, nome_cientifico, especie, grupo, id]
  )
}

export async function removeAnimais(id: number) {
  await pool.query(`delete from animais where id = ${id}`)
}
