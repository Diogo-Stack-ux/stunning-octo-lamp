'use client'

import { addAlunos } from '@/lib/alunos/alunos'
import { useState } from 'react'

export default function Page() {
  const [nome, setNome] = useState('')
  const [nome_do_pai, setNomeDoPai] = useState('')
  const [nome_da_mae, setNomeDaMae] = useState('')
  const [data_de_nascimento, setDataDeNascimento] = useState('')
  const [cor_da_pele, setCorDaPele] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await addAlunos(
      nome,
      nome_do_pai,
      nome_da_mae,
      data_de_nascimento,
      cor_da_pele
    )
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
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  nome do pai
                </label>
                <div className="mt-2">
                  <input
                    id="nome_do_pai"
                    value={nome_do_pai}
                    onChange={(event) => setNomeDoPai(event.target.value)}
                    type="text"
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="nome_da_mae"
                  className="block text-sm font-medium text-gray-900"
                >
                  nome da mae
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="nome_da_mae"
                    value={nome_da_mae}
                    onChange={(event) => setNomeDaMae(event.target.value)}
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
                    type="Date"
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
                  htmlFor="cor_da_pele"
                  className="block text-sm font-medium text-gray-900"
                >
                  cor da pele
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="cor_da_pele"
                    value={cor_da_pele}
                    onChange={(event) => setCorDaPele(event.target.value)}
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
