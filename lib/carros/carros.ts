'use server'

import { pool } from '../db'
export async function addCarro(
  fabricante: string,
  modelo: string,
  ano_de_fabricaçao: string,
  cor: string,
  quilometros_rodados: string
) {
  await pool.query(
    `insert into carro( fabricante, modelo, ano_de_fabricaçao, cor, quilometros_rodados) values ('${fabricante}', '${modelo}', '${ano_de_fabricaçao}', '${cor}', '${quilometros_rodados}')`
  )
}
