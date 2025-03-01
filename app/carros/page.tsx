'use client'

import { addCarro } from '@/lib/carros/carros'
import { useState } from 'react'

export default function Page() {
  const [fabricante, setFabricante] = useState('')
  const [modelo, setModelo] = useState('')
  const [ano_de_fabricacao, setAnoDeFabricacao] = useState('')
  const [cor, setCor] = useState('')
  const [quilometragem, setQuilometragem] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await addCarro(fabricante, modelo, ano_de_fabricacao, cor, quilometragem)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Esta é a página de carros</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold text-gray-900"></h2>
            <p className="mt-1 text-sm text-gray-600">
              Aqui voçê encontra a maior variedade de carros
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-900"
                >
                  fabricante
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="fabricante"
                    value={fabricante}
                    onChange={(event) => setFabricante(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  modelo
                </label>
                <div className="mt-2">
                  <input
                    id="modelo"
                    value={modelo}
                    onChange={(event) => setModelo(event.target.value)}
                    type="text"
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="endereco"
                  className="block text-sm font-medium text-gray-900"
                >
                  ano de fabricacao
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    id="ano_de_fabricacao"
                    value={ano_de_fabricacao}
                    onChange={(event) => setAnoDeFabricacao(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="cor"
                  className="block text-sm font-medium text-gray-900"
                >
                  cor
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="cor"
                    value={cor}
                    onChange={(event) => setCor(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="quilometragem"
                  className="block text-sm font-medium text-gray-900"
                >
                  quilometragem
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="quilometragem"
                    value={quilometragem}
                    onChange={(event) => setQuilometragem(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold text-gray-900">
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  )
}
