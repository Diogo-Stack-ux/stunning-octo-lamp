'use client'

import { addClientes } from '@/lib/clientes/clientes'
import { useState } from 'react'

export default function Page() {
  const [titulo, setTitulo] = useState('')
  const [numero, setNumero] = useState('')
  const [letra, setLetra] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    // await addClientes(nome, nome_do_pai, endereco, data_de_nascimento, comum)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">ALUNO</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold text-gray-900"></h2>
            <p className="mt-1 text-sm text-gray-600">AREA DO ALUNO.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="titulo"
                  className="block text-sm font-medium text-gray-900"
                >
                  titulo
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="titulo"
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="numero"
                  className="block text-sm font-medium text-gray-900"
                >
                  Numero
                </label>
                <div className="mt-2">
                  <input
                    id="numero"
                    value={numero}
                    onChange={(event) => setNumero(event.target.value)}
                    type="number"
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="Letra"
                  className="block text-sm font-medium text-gray-900"
                >
                  Letra
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="letra"
                    value={letra}
                    onChange={(event) => setLetra(event.target.value)}
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
