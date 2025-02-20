'use client'

import { addProduto } from '@/lib/products/products'
import { useState } from 'react'

export default function Page() {
  const [nome, setNome] = useState('nome products')
  const [valorUnitario, setValorUnitario] = useState(0)
  const [validade, setValidade] = useState('nome products')
  const [descricao, setDescricao] = useState('nome products')
  const handleSubmit = (event: any) => {
    event.preventDefault()
    addProduto(nome, valorUnitario, validade, descricao)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-6 space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold text-gray-900">PRODUTOS</h2>
          <p className="mt-1 text-sm text-gray-600">
            Produtos de diversas variedades.
          </p>

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
                  name="nome"
                  id="nome"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="valorUnitario"
                className="block text-sm font-medium text-gray-900"
              >
                Valor Unitário
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="valorUnitario"
                  id="valorUnitario"
                  value={valorUnitario}
                  onChange={(event) =>
                    setValorUnitario(parseFloat(event.target.value))
                  }
                  className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="validade"
                className="block text-sm font-medium text-gray-900"
              >
                Validade
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="validade"
                  id="validade"
                  value={validade}
                  onChange={(event) => setValidade(event.target.value)}
                  className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="descricao"
                className="block text-sm font-medium text-gray-900"
              >
                Descrição do produto
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="descricao"
                  id="descricao"
                  value={descricao}
                  onChange={(event) => setDescricao(event.target.value)}
                  autoComplete="descricao"
                  className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
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
            Salvar
          </button>
        </div>
      </form>
    </div>
  )
}
