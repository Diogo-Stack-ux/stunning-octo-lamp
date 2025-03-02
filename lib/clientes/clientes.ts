'use server'
import { pool } from '@/lib/db'
export async function addClientes(
  nome: string,
  email: string,
  endereco: string,
  data_de_nascimento: string,
  telefone: string,
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
      '${nome}',
      '${email}',
      '${telefone}',
      '${endereco}',
      '${data_de_nascimento}',
      '${cpf}'
     )`
  )
}
