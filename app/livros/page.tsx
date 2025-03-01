'use client'

import { addClientes } from '@/lib/clientes/clientes'
import { useState } from 'react'

export default function Page() {
  const [nome, setNome] = useState('')
  const [autor, setAutor] = useState('')
  const [assunto, setAssunto] = useState('')
  const [resumo, setResumo] = useState('')
  const [data_de_lancamento, setDataDeLancamento] = useState('')
  const [preco_sugerido, setPrecoSugerido] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    // await addClientes(nome, nome_do_pai, endereco, data_de_nascimento, comum,preco_sugerido)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">LIVROS E APOSTILAS</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold text-gray-900"></h2>
            <p className="mt-1 text-sm text-gray-600">MATERIAL DE ESTUDOS.</p>

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
                  htmlFor="autor"
                  className="block text-sm font-medium text-gray-900"
                >
                  Autor
                </label>
                <div className="mt-2">
                  <input
                    id="autor"
                    value={autor}
                    onChange={(event) => setAutor(event.target.value)}
                    type="text"
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="assunto"
                  className="block text-sm font-medium text-gray-900"
                >
                  Assunto
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="assunto"
                    value={assunto}
                    onChange={(event) => setAssunto(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="resumo"
                  className="block text-sm font-medium text-gray-900"
                >
                  resumo
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="resumo"
                    value={resumo}
                    onChange={(event) => setResumo(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="data_de_lancamento"
                  className="block text-sm font-medium text-gray-900"
                >
                  Data de lançamento
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    id="data_de_lancamento"
                    value={data_de_lancamento}
                    onChange={(event) =>
                      setDataDeLancamento(event.target.value)
                    }
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="preco_sugerido"
                  className="block text-sm font-medium text-gray-900"
                >
                  preço sugerido
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="data_de_lancamento"
                    value={preco_sugerido}
                    onChange={(event) => setPrecoSugerido(event.target.value)}
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
