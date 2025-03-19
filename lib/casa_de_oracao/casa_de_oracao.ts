'use server'
import { pool } from '../db'
export async function addCasadeOracao(
  nome: string,
  endereco: string,
  anciao: string,
  telefone_anciao: number,
  cooperador: string,
  telefone_cooperador: number,
  cooperador_de_jovens: string,
  telefone_cooperador_de_jovens: number,
  diacono: string,
  telefone_diacono: number,
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
