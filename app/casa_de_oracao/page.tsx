'use client'

import { useState } from 'react'
import { addCasadeOracao } from '@/lib/casa_de_oracao/casa_de_oracao'

export default function Page() {
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [anciao, setAnciao] = useState('')
  const [telefoneAnciao, setTelefoneAnciao] = useState('')
  const [cooperador, setCooperador] = useState('')
  const [telefoneCooperador, setTelefoneCooperador] = useState('')
  const [cooperadorJovens, setCooperadorJovens] = useState('')
  const [telefoneCooperadorJovens, setTelefoneCooperadorJovens] = useState('')
  const [diacono, setDiacono] = useState('')
  const [telefoneDiacono, setTelefoneDiacono] = useState('')
  const [ultimaSantaCeia, setUltimaSantaCeia] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()
    addCasadeOracao(
      nome,
      endereco,
      anciao,
      telefoneAnciao,
      cooperador,
      telefoneCooperador,
      cooperadorJovens,
      telefoneCooperadorJovens,
      diacono,
      telefoneDiacono,
      ultimaSantaCeia
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-900">
        Cadastro de Casa de Oração
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-900">Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full rounded-md border-gray-300 px-3 py-1.5"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900">
          Endereço
        </label>
        <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          className="w-full rounded-md border-gray-300 px-3 py-1.5"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900">
          Ancião
        </label>
        <input
          type="text"
          value={anciao}
          onChange={(e) => setAnciao(e.target.value)}
          className="w-full rounded-md border-gray-300 px-3 py-1.5"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900">
          Telefone Ancião
        </label>
        <input
          type="tel"
          value={telefoneAnciao}
          onChange={(e) => setTelefoneAnciao(e.target.value)}
          className="w-full rounded-md border-gray-300 px-3 py-1.5"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900">
          Cooperador
        </label>
        <input
          type="text"
          value={cooperador}
          onChange={(e) => setCooperador(e.target.value)}
          className="w-full rounded-md border-gray-300 px-3 py-1.5"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900">
          Telefone Cooperador
        </label>
        <input
          type="tel"
          value={telefoneCooperador}
          onChange={(e) => setTelefoneCooperador(e.target.value)}
          className="w-full rounded-md border-gray-300 px-3 py-1.5"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900">
          Cooperador de Jovens
        </label>
        <input
          type="text"
          value={cooperadorJovens}
          onChange={(e) => setCooperadorJovens(e.target.value)}
          className="w-full rounded-md border-gray-300 px-3 py-1.5"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900">
          Telefone Cooperador de Jovens
        </label>
        <input
          type="tel"
          value={telefoneCooperadorJovens}
          onChange={(e) => setTelefoneCooperadorJovens(e.target.value)}
          className="w-full rounded-md border-gray-300 px-3 py-1.5"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900">
          Diácono
        </label>
        <input
          type="text"
          value={diacono}
          onChange={(e) => setDiacono(e.target.value)}
          className="w-full rounded-md border-gray-300 px-3 py-1.5"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900">
          Telefone Diácono
        </label>
        <input
          type="tel"
          value={telefoneDiacono}
          onChange={(e) => setTelefoneDiacono(e.target.value)}
          className="w-full rounded-md border-gray-300 px-3 py-1.5"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900">
          Número da Última Santa Ceia
        </label>
        <input
          type="number"
          value={ultimaSantaCeia}
          onChange={(e) => setUltimaSantaCeia(e.target.value)}
          className="w-full rounded-md border-gray-300 px-3 py-1.5"
        />
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
  )
}
