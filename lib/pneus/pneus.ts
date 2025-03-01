'use server'
import { pool } from '../db'
export async function addPneus(
  marca: string,
  modelo: string,
  largura: string,
  raio: string,
  especura: string,
  carga_maxima: string
) {
  await pool.query(
    `insert into pneus (marca, modelo, largura, raio, especura, carga_maxima) values ('${marca}', '${modelo}', '${largura}', ${raio}, '${especura}', '${carga_maxima}')`
  )
}
