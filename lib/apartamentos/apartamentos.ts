'use server'
import { pool } from '../db'
export async function addApartamento(
  tipo: string,
  condominio: string,
  area_privativa: string,
  area_comum: string,
  quantidade_de_quartos: string,
  quantidade_de_banheiros: string,
  tem_churrasqueira: string,
  tem_piscina: string,
  valor_do_condominio: string,
  preco_de_venda: string
) {
  await pool.query(
    `insert into ape (tipo, condominio, area_privativa, area_comum, quantidade_de_quartos, quantidade_de_banheiros, tem_churrasqueira, tem_piscina, valor_do_condominio, preco_de_venda)  values ('${tipo}', '${condominio}', '${area_privativa}', '${area_comum}', '${quantidade_de_quartos}', '${quantidade_de_banheiros}', '${tem_churrasqueira}', '${tem_piscina}', '${valor_do_condominio}', '${preco_de_venda}')`
  )
}
