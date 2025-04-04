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
    `insert into computadores
  (descricao,
  cpu,
  memoria,
  placa_video,
  placa_mae,
  fonte,
  armazenamento
  ) values (
   $1,
   $2,
   $3,
   $4,
   $5,
   $6,
   $7
  )`,
    [descricao, cpu, memoria, placaVideo, placaMae, fonte, armazenamento]
  )
}

export async function getComputadores() {
  return (await pool.query(`select * from computadores`)).rows
}

export async function updateComputadores(
  id: number,
  descricao: string,
  cpu: string,
  memoria: string,
  placaVideo: string,
  placaMae: string,
  fonte: string,
  armazenamento: string
) {
  await pool.query(
    `update alunos set 
            descricao = '$1',
            cpu = '$2',
            memoria = '$3',
            placa_video = '$4',
            placa_mae = '$5',
            fonte = '$6',
            armazenamento = '$7'
        where id = $8`,
    [descricao, cpu, memoria, placaVideo, placaMae, fonte, armazenamento, id]
  )
}

export async function removeComputadores(id: number) {
  await pool.query(`delete from computadores where id = ${id}`)
}
