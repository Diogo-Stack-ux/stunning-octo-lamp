'use server'
import { pool } from '../db'
export async function addApartamento(
  tipo: string,
  condominio: string,
  area_privativa: number,
  area_comum: number,
  quantidade_de_quartos: number,
  quantidade_de_banheiros: number,
  tem_churrasqueira: boolean | undefined,
  tem_piscina: boolean | undefined,
  valor_do_condominio: number,
  preco_de_venda: number
) {
  await pool.query(
    `insert into apartamentos
  (tipo, condominio,
  area_privativa,
  area_comum,
  quantidade_de_quartos,
  quantidade_de_banheiros,
  tem_churrasqueira,
  tem_piscina,
  valor_do_condominio,
  preco_de_venda
  )  values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    $10
  )`,
    [
      tipo,
      condominio,
      area_privativa,
      area_comum,
      quantidade_de_quartos,
      quantidade_de_banheiros,
      tem_churrasqueira,
      tem_piscina,
      valor_do_condominio,
      preco_de_venda,
    ]
  )
}
