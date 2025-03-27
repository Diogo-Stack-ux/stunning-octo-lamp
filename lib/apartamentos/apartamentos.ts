'use server'
import { pool } from '../db'
export async function addApartamentos(
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
export async function getApartamentos() {
  return (await pool.query(`select * from apartamentos`)).rows
}

export async function updateApartamentos(
  id: number,
  tipo: string,
  condominio: string,
  area_privativa: number,
  area_comum: number,
  quantidade_de_quartos: number,
  quantidade_de_banheiros: number,
  tem_churrasqueira: boolean | undefined,
  tem_piscina: boolean,
  valor_do_condominio: number,
  preco_de_venda: number
) {
  await pool.query(
    `update animais set 
            tipo = '$1',
            condominio = '$2',
            area privativa = '$3',
            area comum = '$4',
            quantidade de quartos = '$5'
            quantidade de banheiros = '$6',
            tem churrasqueira = '$7',
            tem piscina = '$8',
            valor do condominio = '$9',
            preco de venda = '$10',

        where id = $11`,
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
      id,
    ]
  )
}

export async function removeApartamentos(id: number) {
  await pool.query(`delete from apartamentos where id = ${id}`)
}
