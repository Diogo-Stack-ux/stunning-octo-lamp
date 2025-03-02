'use client'

import { addClientes } from '@/lib/clientes/clientes'
import { useState } from 'react'

export default function Page() {
  const [primeiro_nome, setPrimeiroNome] = useState('')
  const [endereco_de_email, setEnderecoDeEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [data_de_nascimento, setDataDeNascimento] = useState('')
  const [numero_de_telefone, setNumeroDeTelefone] = useState('')
  const [cpf, setCpf] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await addClientes(
      primeiro_nome,
      endereco_de_email,
      endereco,
      data_de_nascimento,
      numero_de_telefone,
      cpf
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Esta é a página do cliente</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold text-gray-900"></h2>
            <p className="mt-1 text-sm text-gray-600">
              Use um endereço permanente onde você possa receber
              correspondência.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-900"
                >
                  Primeiro Nome
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="first-name"
                    value={primeiro_nome}
                    onChange={(event) => setPrimeiroNome(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Endereço de email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    value={endereco_de_email}
                    onChange={(event) => setEnderecoDeEmail(event.target.value)}
                    type="email"
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
                  htmlFor="data_nascimento"
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
                  htmlFor="telefone"
                  className="block text-sm font-medium text-gray-900"
                >
                  Número de telefone
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="telefone"
                    value={numero_de_telefone}
                    onChange={(event) =>
                      setNumeroDeTelefone(event.target.value)
                    }
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="cpf"
                  className="block text-sm font-medium text-gray-900"
                >
                  CPF
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="cpf"
                    value={cpf}
                    onChange={(event) => setCpf(event.target.value)}
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
