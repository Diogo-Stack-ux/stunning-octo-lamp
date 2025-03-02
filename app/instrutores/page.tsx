'use client'

import { addInstrutores } from '@/lib/instrutores/instrutores'
import { useState } from 'react'

export default function Page() {
  const [nome, setNome] = useState('diogo')
  const [especialidade, setEspecialidade] = useState('')
  const [endereco, setEndereco] = useState('')
  const [data_de_nascimento, setDataDeNascimento] = useState('')
  const [comum, setComum] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await addInstrutores(
      nome,
      especialidade,
      endereco,
      data_de_nascimento,
      comum
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Esta é a página dos instrutores</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold text-gray-900"></h2>
            <p className="mt-1 text-sm text-gray-600">
              CONHEÇA NOSSA EQUIPE DE PROFESSORES.
            </p>

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
                  htmlFor="especialidade"
                  className="block text-sm font-medium text-gray-900"
                >
                  especialidade
                </label>
                <div className="mt-2">
                  <input
                    id="especialidade"
                    value={especialidade}
                    onChange={(event) => setEspecialidade(event.target.value)}
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
                  Endereço
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="endereco"
                    value={endereco}
                    onChange={(event) => setEndereco(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="data_De_nascimento"
                  className="block text-sm font-medium text-gray-900"
                >
                  Data de nascimento
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    id="data_nascimento"
                    value={data_de_nascimento}
                    onChange={(event) =>
                      setDataDeNascimento(event.target.value)
                    }
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="comum"
                  className="block text-sm font-medium text-gray-900"
                >
                  comum
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="comum"
                    value={comum}
                    onChange={(event) => setComum(event.target.value)}
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
