'use client'

import { useState } from 'react'

export default function Page() {
  const [tipo, setTipo] = useState('')
  const [endereco, setEndereco] = useState('')
  const [areaTerreno, setAreaTerreno] = useState<number | string>('') // Flexível para número ou string
  const [areaConstruida, setAreaConstruida] = useState<number | string>('') // Flexível para número ou string
  const [quartos, setQuartos] = useState<number>(0)
  const [banheiros, setBanheiros] = useState<number>(0)
  const [temEdicula, setTemEdicula] = useState(false)
  const [temChurrasqueira, setTemChurrasqueira] = useState(false)
  const [temPiscina, setTemPiscina] = useState(false)
  const [valorCondominio, setValorCondominio] = useState<number>(0)
  const [precoVenda, setPrecoVenda] = useState<number>(0)

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const casa = {
      tipo,
      endereco,
      areaTerreno,
      areaConstruida,
      quartos,
      banheiros,
      temEdicula,
      temChurrasqueira,
      temPiscina,
      valorCondominio,
      precoVenda,
    }
    console.log('Cadastro de Casa:', casa) // Aqui você pode enviar os dados para um servidor ou outro processamento
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold text-gray-900">
            Cadastro de Casa
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Preencha as informações abaixo para cadastrar a casa.
          </p>
        </div>

        {/* Tipo da Casa */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="tipo"
              className="block text-sm font-medium text-gray-900"
            >
              Tipo
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={tipo}
                onChange={(event) => setTipo(event.target.value)}
                id="tipo"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Endereço */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="endereco"
              className="block text-sm font-medium text-gray-900"
            >
              Endereço
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={endereco}
                onChange={(event) => setEndereco(event.target.value)}
                id="endereco"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Área do Terreno */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="areaTerreno"
              className="block text-sm font-medium text-gray-900"
            >
              Área do Terreno (m²)
            </label>
            <div className="mt-2">
              <input
                type="number"
                value={areaTerreno}
                onChange={(event) => setAreaTerreno(event.target.value)}
                id="areaTerreno"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Área Construída */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="areaConstruida"
              className="block text-sm font-medium text-gray-900"
            >
              Área Construída (m²)
            </label>
            <div className="mt-2">
              <input
                type="number"
                value={areaConstruida}
                onChange={(event) => setAreaConstruida(event.target.value)}
                id="areaConstruida"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Quantidade de Quartos */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="quartos"
              className="block text-sm font-medium text-gray-900"
            >
              Quantidade de Quartos
            </label>
            <div className="mt-2">
              <input
                type="number"
                value={quartos}
                onChange={(event) => setQuartos(Number(event.target.value))}
                id="quartos"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Quantidade de Banheiros */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="banheiros"
              className="block text-sm font-medium text-gray-900"
            >
              Quantidade de Banheiros
            </label>
            <div className="mt-2">
              <input
                type="number"
                value={banheiros}
                onChange={(event) => setBanheiros(Number(event.target.value))}
                id="banheiros"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Tem Edícula */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="temEdicula"
              className="block text-sm font-medium text-gray-900"
            >
              Tem Edícula
            </label>
            <div className="mt-2">
              <input
                type="checkbox"
                checked={temEdicula}
                onChange={() => setTemEdicula(!temEdicula)}
                id="temEdicula"
                className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Tem Churrasqueira */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="temChurrasqueira"
              className="block text-sm font-medium text-gray-900"
            >
              Tem Churrasqueira
            </label>
            <div className="mt-2">
              <input
                type="checkbox"
                checked={temChurrasqueira}
                onChange={() => setTemChurrasqueira(!temChurrasqueira)}
                id="temChurrasqueira"
                className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Tem Piscina */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="temPiscina"
              className="block text-sm font-medium text-gray-900"
            >
              Tem Piscina
            </label>
            <div className="mt-2">
              <input
                type="checkbox"
                checked={temPiscina}
                onChange={() => setTemPiscina(!temPiscina)}
                id="temPiscina"
                className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Valor do Condomínio */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="valorCondominio"
              className="block text-sm font-medium text-gray-900"
            >
              Valor do Condomínio
            </label>
            <div className="mt-2">
              <input
                type="number"
                value={valorCondominio}
                onChange={(event) =>
                  setValorCondominio(Number(event.target.value))
                }
                id="valorCondominio"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Preço de Venda */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="precoVenda"
              className="block text-sm font-medium text-gray-900"
            >
              Preço de Venda
            </label>
            <div className="mt-2">
              <input
                type="number"
                value={precoVenda}
                onChange={(event) => setPrecoVenda(Number(event.target.value))}
                id="precoVenda"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold text-gray-900">
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Cadastrar Casa
        </button>
      </div>
    </form>
  )
}
