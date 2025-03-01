'use server'
import { pool } from '../db'
export async function addCasa(
  tipo: string,
  endereco: string,
  areaterreno: string,
  areaconstruida: string,
  quartos: string,
  banheiros: string,
  edicula: string,
  churrasqueira: string,
  piscina: string,
  valorcondominio: string,
  precovenda: string
) {
  await pool.query(
    `insert into casa (tipo, endereco, areaterreno, areaconstruida, quartos, banheiros, edicula, churrasqueira, piscina, valorcondominio, precovenda) values ('${tipo}', '${endereco}', '${areaterreno}', '${areaconstruida}', '${quartos}', ${banheiros}, '${edicula}', '${churrasqueira}', '${piscina}', ${valorcondominio}, '${precovenda}')`
  )
}
