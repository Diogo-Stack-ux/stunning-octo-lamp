'use client'

import { useState } from 'react'
import { addCasas } from '@/lib/casas/casas'

export default function Page() {
  const [tipo, setTipo] = useState('tipo')
  const [endereco, setEndereco] = useState('endereco')
  const [area_terreno, setAreaTerreno] = useState('areaTerreno')
  const [area_construida, setAreaConstruida] = useState('areaConstruida')
  const [quantidade_quartos, setQuartos] = useState('quartos')
  const [quantidade_banheiros, setBanheiros] = useState('banheiros')
  const [tem_edicula, setEdicula] = useState('')
  const [tem_churrasqueira, setChurrasqueira] = useState('')
  const [tem_piscina, setPiscina] = useState('')
  const [valor_condominio, setValorCondominio] = useState('valorCondominio')
  const [preco_venda, setPrecoVenda] = useState('')

  const handlSubmit = (event: any) => {
    event.preventDefault()
    addCasas(
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
      preco_venda
    )
  }

  return (
    <form onSubmit={handlSubmit}>
      <div className="spcae-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Casas</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Informaçoes sobre a casa
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="nome_produto"
              className="block text-sm/6 font-medium text-gray-900"
            >
              tipo
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={tipo}
                onChange={(event: any) => setTipo(event.target.value)}
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
              endereço
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={endereco}
                onChange={(event: any) => setEndereco(event.target.value)}
                name="first-name"
                id="endereco"
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
              area terreno
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={area_terreno}
                onChange={(event: any) => setAreaTerreno(event.target.value)}
                name="first-name"
                id="area_terreno"
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
              area construida
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={area_construida}
                onChange={(event: any) => setAreaConstruida(event.target.value)}
                name="first-name"
                id="areaConstruida"
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
              quartos
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={quantidade_quartos}
                onChange={(event: any) => setQuartos(event.target.value)}
                name="first-name"
                id="quartos"
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
              Banheiros
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={quantidade_banheiros}
                onChange={(event) => setBanheiros(event.target.value)}
                name="first-name"
                id="banheiros"
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
              edicula
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={tem_edicula}
                onChange={(event: any) => setEdicula(event.target.value)}
                name="first-name"
                id="edeicula"
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
              churrasqueira
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={tem_churrasqueira}
                onChange={(event: any) => setChurrasqueira(event.target.value)}
                name="first-name"
                id="churrasqueira"
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
                type="text"
                value={tem_piscina}
                onChange={(event: any) => setPiscina(event.target.value)}
                name="first-name"
                id="piscina"
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
              Valor condominio
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={valor_condominio}
                onChange={(event) => setValorCondominio(event.target.value)}
                name="first-name"
                id="valor_condominio"
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
              Preço venda
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={preco_venda}
                onChange={(event) => setPrecoVenda(event.target.value)}
                name="first-name"
                id="preco_venda"
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
