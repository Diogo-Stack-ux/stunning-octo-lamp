'use server'
import { pool } from '@/lib/db'
export async function addClientes(
  nome: string,
  email: string,
  endereco: string,
  data_de_nascimento: string,
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

export async function getClientes() {
  return (await pool.query(`select * from clientes`)).rows
}

export async function updateClientes(
  id: number,
  nome: string,
  email: string,
  endereco: string,
  data_de_nascimento: string,
  telefone: number,
  cpf: string
) {
  await pool.query(
    `update clientes set 
            nome = '$1',
            email = '$2',
            endereco = '$3',
            data_de_nascimento = '$4',
            telefone = '$5',
            cpf = '$6'
        where id = $7`,
    [nome, email, endereco, data_de_nascimento, telefone, cpf, id]
  )
}

export async function removeClientes(id: number) {
  await pool.query(`delete from clientes where id = ${id}`)
}
