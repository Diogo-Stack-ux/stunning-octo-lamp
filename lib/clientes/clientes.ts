'use server'
import { pool } from '@/lib/db'
export async function addClientes(
  primeiro_nome: string,
  nome_do_pai: string,
  nome_da_mae: string,
  data_de_nascimento: string,
  cor_da_pele: string
) {
  await pool.query(
    `insert into clientes(
      primeiro_nome,
      nome_do_pai,
      nome_da_mae,
     data_de_nascimento,
      cor_da_pele
      
    ) values (
      '${primeiro_nome}',
     '${nome_do_pai}',
     '${nome_da_mae}',
      '${data_de_nascimento}',
      '${cor_da_pele}'
      
     )`
  )
}
