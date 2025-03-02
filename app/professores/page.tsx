'use client'

import { useState } from 'react'
import { addProfessor } from '@/lib/professores/professores'

export default function Page() {
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [especialidade, setEspecialidade] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()

    addProfessor(nome, endereco, especialidade, telefone, email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold text-gray-900">
            Cadastro de Professor
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Preencha as informações abaixo para cadastrar o professor.
          </p>
        </div>

        {/* Nome do Professor */}
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

        {/* Especialidade */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="especialidade"
              className="block text-sm font-medium text-gray-900"
            >
              Especialidade
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={especialidade}
                onChange={(event) => setEspecialidade(event.target.value)}
                id="especialidade"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Telefone */}
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
                type="text"
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
                id="telefone"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="email"
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
          Cadastrar Professor
        </button>
      </div>
    </form>
  )
}
