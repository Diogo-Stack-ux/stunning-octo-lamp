'use server'
import { pool } from '../db'
export async function addComputadores(
  descricao: string,
  cpu: string,
  memoria: string,
  placaVideo: string,
  placaMae: string,
  fonte: string,
  armazenamento: string
) {
  await pool.query(
    `insert into computadores (descricao, cpu, memoria, placa_video, placa_mae, fonte, armazenamento) values ('${descricao}', '${cpu}', '${memoria}', '${placaVideo}', '${placaMae}', '${fonte}', '${armazenamento}')`
  )
}
