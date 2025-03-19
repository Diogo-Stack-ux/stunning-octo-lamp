'use client'

import { addMaterias } from '@/lib/materias/materias'
import { useState } from 'react'

export default function Page() {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [ano_letivo, setAnoLetivo] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await addMaterias(nome, descricao, ano_letivo)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">MATERIAS</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold text-gray-900"></h2>
            <p className="mt-1 text-sm text-gray-600">MATERIAL DO ALUNO.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-900"
                >
                  Nome
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="name"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="descricao"
                  className="block text-sm font-medium text-gray-900"
                >
                  Descrição
                </label>
                <div className="mt-2">
                  <input
                    id="descricao"
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                    type="text"
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="Ano_letivo"
                  className="block text-sm font-medium text-gray-900"
                >
                  Ano letivo
                </label>
                <div className="mt-2">
                  <input
                    type="Date"
                    id="ano_letivo"
                    value={ano_letivo}
                    onChange={(event) => setAnoLetivo(event.target.value)}
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
