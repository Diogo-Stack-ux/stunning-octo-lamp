'use server'
import { pool } from '@/lib/db'
export async function addClientes(
  nome: string,
  email: string,
  endereco: string,
  data_de_nascimento: Date,
  telefone: number,
  cpf: string
) {
  await pool.query(
    `insert into clientes (
      nome,
      endereco_de_email,
      numero_de_telefone,
      endereco, 
      data_de_nascimento,
      cpf
    ) values (
     $1,
     $2,
     $3,
     $4,
     $5,
     $6)`,
    [nome, email, telefone, endereco, data_de_nascimento, cpf]
  )
}
