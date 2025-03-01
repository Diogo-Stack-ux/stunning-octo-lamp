'use client'

import { addClientes } from '@/lib/clientes/clientes'
import { useState } from 'react'

export default function Page() {
  const [descricao, setDescricao] = useState('')
  const [cpu, setCpu] = useState('')
  const [memoria, setMemoria] = useState('')
  const [placa_de_video, setPlacaDeVideo] = useState('')
  const [placa_mae, setPlacaMae] = useState('')
  const [fonte, setfonte] = useState('')
  const [Armazenamento, setArmazenamento] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    // await addClientes(nome, nome_do_pai, endereco, data_de_nascimento, comum)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">computadores</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold text-gray-900"></h2>
            <p className="mt-1 text-sm text-gray-600">
              notbooks, e computadores.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="descricao"
                  className="block text-sm font-medium text-gray-900"
                >
                  Descricao
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="descricao"
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="cpu"
                  className="block text-sm font-medium text-gray-900"
                >
                  cpu
                </label>
                <div className="mt-2">
                  <input
                    id="cpu"
                    value={cpu}
                    onChange={(event) => setCpu(event.target.value)}
                    type="text"
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="memoria"
                  className="block text-sm font-medium text-gray-900"
                >
                  memoria
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="memoria"
                    value={memoria}
                    onChange={(event) => setMemoria(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="placa_de_video"
                  className="block text-sm font-medium text-gray-900"
                >
                  Placa de video
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="placa_de_video"
                    value={placa_de_video}
                    onChange={(event) => setPlacaDeVideo(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="placa_mae"
                  className="block text-sm font-medium text-gray-900"
                >
                  placa mae
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="placa_mae"
                    value={placa_mae}
                    onChange={(event) => setPlacaMae(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="fonte"
                  className="block text-sm font-medium text-gray-900"
                >
                  Fonte
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="fonte"
                    value={fonte}
                    onChange={(event) => setfonte(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="armazenamento"
                  className="block text-sm font-medium text-gray-900"
                >
                  Armazenamento
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="armazenamento"
                    value={Armazenamento}
                    onChange={(event) => setArmazenamento(event.target.value)}
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
