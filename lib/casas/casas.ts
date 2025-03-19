'use server'
import { pool } from '../db'
export async function addCasas(
  tipo: string,
  endereco: string,
  area_terreno: number,
  area_construida: number,
  quantidade_quartos: number,
  quantidade_banheiros: number,
  tem_edicula: boolean,
  tem_churrasqueira: boolean,
  tem_piscina: boolean,
  valor_condominio: number,
  preco_venda: number
) {
  await pool.query(
    `insert into casas (tipo,
    endereco,
    area_terreno,
    area_construida,
    quantidade_quartos,
    quantidade_banheiros,
    tem_edicula,
    tem_churrasqueira,
    tem_piscina,
    valor_condominio,
    preco_venda)
    values
    (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    $10,
    $11
  )`,
    [
      tipo,
      endereco,
      area_terreno,
      area_construida,
      quantidade_quartos,
      quantidade_banheiros,
      tem_edicula,
      tem_churrasqueira,
      tem_piscina,
      valor_condominio,
      preco_venda,
    ]
  )
}
