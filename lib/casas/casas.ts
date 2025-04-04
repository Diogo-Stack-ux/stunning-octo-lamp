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

export async function getCasas() {
  return (await pool.query(`select * from casas`)).rows
}

export async function updateCasas(
  id: number,
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
    `update animais set 
            tipo = '$1',
            endereco = '$2',
            area_terreno = '$3',
            area_construida = '$4',
            quantidade_quartos = '$5',
            quantidade_banheiros = '$6',
            tem_edicula = '$7',
            tem_churrasqueira = '$8',
            tem_piscina = '$9',
            valor_condominio = '$10',
            preco_venda = '$11'

            where id = $12`,
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
      id,
    ]
  )
}

export async function removeCasas(id: number) {
  await pool.query(`delete from casa where id = $1`, [id])
}
