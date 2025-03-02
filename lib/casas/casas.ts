'use server'
import { pool } from '../db'
export async function addCasas(
  tipo: string,
  endereco: string,
  area_terreno: string,
  area_construida: string,
  quantidade_quartos: string,
  quantidade_banheiros: string,
  tem_edicula: string,
  tem_churrasqueira: string,
  tem_piscina: string,
  valor_condominio: string,
  preco_venda: string
) {
  await pool.query(
    `insert into casas (tipo, endereco, area_terreno, area_construida, quantidade_quartos, quantidade_banheiros, tem_edicula, tem_churrasqueira, tem_piscina, valor_condominio, preco_venda) values ('${tipo}', '${endereco}', '${area_terreno}', '${area_construida}', '${quantidade_quartos}', '${quantidade_banheiros}', '${tem_edicula}', '${tem_churrasqueira}', '${tem_piscina}', '${valor_condominio}', '${preco_venda}')`
  )
}
