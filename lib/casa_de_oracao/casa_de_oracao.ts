'use server'
import { pool } from '../db'
export async function addCasaDeOracao(
  nome: string,
  endereco: string,
  anciao: string,
  telefone_anciao: string,
  cooperador: string,
  telefone_cooperador: string,
  cooperador_de_jovens: string,
  telefone_cooperador_de_jovens: string,
  diacono: string,
  telefone_diacono: string,
  numero_da_ultima_santa_ceia: number
) {
  await pool.query(
    `insert into casa_de_oracao
  (nome,
  endereco,
  anciao,
  telefone_anciao,
  cooperador,
  telefone_cooperador,
  cooperador_de_jovens,
  telefone_cooperador_de_jovens,
  diacono,
  telefone_diacono,
  numero_da_ultima_santa_ceia
  ) values (
   $1,
   $2,
   $3,
   $4,
   $5,
   $6,
   $7,
   $8,
   $9,
   $10,
   $11
)`,
    [
      nome,
      endereco,
      anciao,
      telefone_anciao,
      cooperador,
      telefone_cooperador,
      cooperador_de_jovens,
      telefone_cooperador_de_jovens,
      diacono,
      telefone_diacono,
      numero_da_ultima_santa_ceia,
    ]
  )
}

export async function getCasaDeOracao() {
  return (await pool.query(`select * from casa_de_oracao`)).rows
}

export async function updateCasaDeOracao(
  id: number,
  nome: string,
  endereco: string,
  anciao: string,
  telefone_anciao: string,
  cooperador: string,
  telefone_cooperador: string,
  cooperador_de_jovens: string,
  telefone_cooperador_de_jovens: string,
  diacono: string,
  telefone_diacono: string,
  numero_da_ultima_santa_ceia: number
) {
  await pool.query(
    `update animais set 
            nome = '$1',
            endereco = '$2',
            anciao = '$3',
            telefone anciao = '$4',
            cooperador = '$5',
            telefone cooperador = '$6',
            cooperador de jovens = '$7',
            telefone cooperador de jovens = '$8',
            diacono = '$9',
            telefone diacono = '$10',
            numero da ultima santa ceia = '$11'

        where id = $12`,
    [
      nome,
      endereco,
      anciao,
      telefone_anciao,
      cooperador,
      telefone_cooperador,
      cooperador_de_jovens,
      telefone_cooperador_de_jovens,
      diacono,
      telefone_diacono,
      numero_da_ultima_santa_ceia,
      id,
    ]
  )
}

export async function removeCasaDeOracao(id: number) {
  await pool.query(`delete from casa_de_oracao where id = $1`, [id])
}
