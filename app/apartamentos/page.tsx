'use client'

import React, { useState } from 'react'
import { addApartamento } from '@/lib/apartamentos/apartamentos'

export default function Page() {
  const [tipo, seTtipo] = useState('')
  const [condominio, setCondominio] = useState('')
  const [area_privativa, setArea_privativa] = useState(0)
  const [area_comum, setArea_comum] = useState(0)
  const [quantidade_de_quartos, setQuantidade_de_quartos] = useState(0)
  const [quantidade_de_banheiros, setQuantidade_de_banheiros] = useState(0)
  const [tem_churrasqueira, setTem_churrasqueira] = useState(true)
  const [tem_piscina, setTem_piscina] = useState(true)
  const [valor_do_condominio, setValor_do_condominio] = useState(0)
  const [preco_de_venda, setPreco_de_venda] = useState(0)

  const handlSubmit = async (event: Event) => {
    event?.preventDefault()
    await addApartamento(
      tipo,
      condominio,
      area_privativa,
      area_comum,
      quantidade_de_quartos,
      quantidade_de_banheiros,
      tem_churrasqueira,
      tem_piscina,
      valor_do_condominio,
      preco_de_venda
    )
  }

  return (
    <form onSubmit={handlSubmit}>
      <div className="spcae-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">
            Apartamentos
          </h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Informaçoes do Apartamentos
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="nome_produto"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Tipo
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={tipo}
                onChange={(event) => seTtipo(event.target.value)}
                name="first-name"
                id="tipo"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="nome_produto"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Condominio
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={condominio}
                onChange={(event) => setCondominio(event.target.value)}
                name="first-name"
                id="condominio"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="nome_produto"
              className="block text-sm/6 font-medium text-gray-900"
            >
              area privativa
            </label>
            <div className="mt-2">
              <input
                type="number"
                value={area_privativa}
                onChange={(event) =>
                  setArea_privativa(parseInt(event.target.value))
                }
                name="first-name"
                id="area_privativa"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="nome_produto"
              className="block text-sm/6 font-medium text-gray-900"
            >
              area comum
            </label>
            <div className="mt-2">
              <input
                type="number"
                value={area_comum}
                onChange={(event) =>
                  setArea_comum(parseInt(event.target.value))
                }
                name="first-name"
                id="area_comum"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="nome_produto"
              className="block text-sm/6 font-medium text-gray-900"
            >
              quantidade de quartos
            </label>
            <div className="mt-2">
              <input
                type="number"
                value={quantidade_de_quartos}
                onChange={(event) =>
                  setQuantidade_de_quartos(parseInt(event.target.value))
                }
                name="first-name"
                id="quantidade_quartos"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="nome_produto"
              className="block text-sm/6 font-medium text-gray-900"
            >
              quantidade de Banheiros
            </label>
            <div className="mt-2">
              <input
                type="number"
                value={quantidade_de_banheiros}
                onChange={(event) =>
                  setQuantidade_de_banheiros(parseInt(event.target.value))
                }
                name="first-name"
                id="quantidade_banheiros"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="nome_produto"
              className="block text-sm/6 font-medium text-gray-900"
            >
              tem_Churrasqueira
            </label>
            <div className="mt-2">
              <input
                type="checkbox"
                checked={tem_churrasqueira}
                onChange={(event) => setTem_churrasqueira(event.target.checked)}
                name="tem_churrasqueira"
                id="tem_churrasqueira"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="nome_produto"
              className="block text-sm/6 font-medium text-gray-900"
            >
              piscina
            </label>
            <div className="mt-2">
              <input
                type="checkbox"
                checked={tem_piscina}
                onChange={(event) => setTem_piscina(event.target.checked)}
                name="piscina"
                id="tem_piscina"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="nome_produto"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Valor do condominio
            </label>
            <div className="mt-2">
              <input
                type="number"
                value={valor_do_condominio}
                onChange={(event) =>
                  setValor_do_condominio(parseInt(event.target.value))
                }
                name="first-name"
                id="valor_do_condominio"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="nome_produto"
              className="block text-sm/6 font-medium text-gray-900"
            >
              preco de venda
            </label>
            <div className="mt-2">
              <input
                type="number"
                value={preco_de_venda}
                onChange={(event) =>
                  setPreco_de_venda(parseInt(event.target.value))
                }
                name="first-name"
                id="preco_de_venda"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
