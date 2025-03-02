'use client'

import { useState } from 'react'
import { addAnimais } from '@/lib/animais/animais'

export default function Page() {
  const [nome, setNome] = useState('')
  const [nomeCientifico, setNomeCientifico] = useState('')
  const [especie, setEspecie] = useState('')
  const [grupo, setGrupo] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()
    addAnimais(nome, nomeCientifico, especie, grupo)

    const animal = { nome, nomeCientifico, especie, grupo }
    console.log('Cadastro de Animal:', animal)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold text-gray-900">
            Cadastro de Animal
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Preencha as informações abaixo para cadastrar o animal.
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
              htmlFor="nomeCientifico"
              className="block text-sm font-medium text-gray-900"
            >
              Nome Científico
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={nomeCientifico}
                onChange={(event) => setNomeCientifico(event.target.value)}
                id="nomeCientifico"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="especie"
              className="block text-sm font-medium text-gray-900"
            >
              Espécie
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={especie}
                onChange={(event) => setEspecie(event.target.value)}
                id="especie"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Grupo */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="grupo"
              className="block text-sm font-medium text-gray-900"
            >
              Grupo
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={grupo}
                onChange={(event) => setGrupo(event.target.value)}
                id="grupo"
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
          Cadastrar Animal
        </button>
      </div>
    </form>
  )
}
