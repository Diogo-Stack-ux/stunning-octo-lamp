'use client'

import { useState } from 'react'
import { addEscola } from '@/lib/escolas/escolas'

export default function Page() {
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [quantidade_alunos, setQuantidadeAlunos] = useState(0)
  const [telefone, setTelefone] = useState(0)

  const handleSubmit = (event: any) => {
    event.preventDefault()
    addEscola(nome, endereco, quantidade_alunos, telefone)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold text-gray-900">
            Cadastro de Escola
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Preencha as informações abaixo para cadastrar a escola.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-900"
            >
              Nome
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                id="nome"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>

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

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="quantidadeAlunos"
              className="block text-sm font-medium text-gray-900"
            >
              Quantidade de Alunos
            </label>
            <div className="mt-2">
              <input
                type="number"
                value={quantidade_alunos}
                onChange={(event) =>
                  setQuantidadeAlunos(Number(event.target.value))
                }
                id="quantidadeAlunos"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="telefone"
              className="block text-sm font-medium text-gray-900"
            >
              Telefone
            </label>
            <div className="mt-2">
              <input
                type="number"
                value={telefone}
                onChange={(event) => setTelefone(parseInt(event.target.value))}
                id="telefone"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
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
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Cadastrar Escola
        </button>
      </div>
    </form>
  )
}
