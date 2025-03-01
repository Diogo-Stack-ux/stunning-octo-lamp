'use server'
import { pool } from '../db'
export async function addCasaOracao(
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
  numero_da_ultima_santa_ceia: string
) {
  await pool.query(
    `insert into casa_de_oracao (nome, endereco, anciao, telefone_anciao, cooperador, telefone_cooperador, cooperador_de_jovens, telefone_cooperador_de_jovens, diacono, telefone_diacono, numero_da_ultima_santa_ceia) values ('${nome}', '${endereco}', '${anciao}', '${telefone_anciao}', '${cooperador}', '${telefone_cooperador}', '${cooperador_de_jovens}', '${telefone_cooperador_de_jovens}', '${diacono}', '${telefone_diacono}', '${numero_da_ultima_santa_ceia}')`
  )
}
