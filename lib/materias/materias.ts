'use server'
import { pool } from '../db'
export async function addMaterias(
  nome: string,
  descricao: string,
  ano_letivo: string
) {
  await pool.query(`insert into materias(nome, descricao , ano_letivo) values 
	('${nome}', '${descricao}', '${ano_letivo}')`)
}
