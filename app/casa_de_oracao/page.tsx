'use client'

import { useEffect, useState } from 'react'
import {
  addCasaDeOracao,
  getCasaDeOracao,
  removeCasaDeOracao,
  updateCasaDeOracao,
} from '@/lib/casa_de_oracao/casa_de_oracao'

interface CasaDeOracao {
  id: number
  nome: string
  endereco: string
  anciao: string
  telefoneAnciao: string
  coperador: string
  telefoneCooperador: string
  cooperadorJovens: string
  telefoneCooperadorJovens: string
  diacono: string
  telefoneDiacono: string
  ultimaSantaCeia: number
}

export default function Page() {
  const [CasaDeOracao, setCasaDeOracao] = useState<CasaDeOracao[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [id, setId] = useState(0)
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
  const [ultimaSantaCeia, setUltimaSantaCeia] = useState(0)

  const fetchCasaDeOracao = async () => {
    try {
      const data = await getCasaDeOracao()
      setCasaDeOracao(data)
    } catch (error) {
      console.error('Erro ao buscar casa de oracao:', error)
    }
  }

  useEffect(() => {
    fetchCasaDeOracao()
  }, [])

  const handleEdit = (casaDeOracao: CasaDeOracao) => {
    setId(casaDeOracao.id)
    setNome(casaDeOracao.nome)
    setEndereco(casaDeOracao.endereco)
    setAnciao(casaDeOracao.anciao)
    setTelefoneAnciao(casaDeOracao.telefoneAnciao)
    setCooperador(casaDeOracao.coperador)
    setTelefoneCooperador(casaDeOracao.telefoneCooperador)
    setCooperadorJovens(casaDeOracao.cooperadorJovens)
    setDiacono(casaDeOracao.diacono)
    setTelefoneDiacono(casaDeOracao.telefoneDiacono)
    setUltimaSantaCeia(casaDeOracao.ultimaSantaCeia)
    setIsModalOpen(true)
  }

  const handleRemove = async (casaDeOracao: CasaDeOracao) => {
    try {
      await removeCasaDeOracao(casaDeOracao.id)
      fetchCasaDeOracao()
    } catch (error) {
      console.error('Erro ao remover casa de oracao:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addCasaDeOracao(
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
      } else {
        await updateCasaDeOracao(
          id,
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
      fetchCasaDeOracao()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar casa de oracao:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE CASAS DE ORAÇÃO</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            nome: '',
            anciao: '',
            endereco: '',
            telefoneAnciao: '',
            coperador: '',
            telefoneCooperador: '',
            cooperadorJovens: '',
            telefoneCooperadorJovens: '',
            diacono: '',
            telefoneDiacono: '',
            ultimaSantaCeia: 0,
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR UMA NOVA CASA DE ORAÇÃO
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">NOME</th>
              <th className="border px-4 py-2">ENDEREÇO</th>
              <th className="border px-4 py-2">Ações </th>
            </tr>
          </thead>
          <tbody>
            {CasaDeOracao.map((casaDeOracao) => (
              <tr key={casaDeOracao.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{casaDeOracao.nome}</td>
                <td className="border px-4 py-2">{casaDeOracao.endereco}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(casaDeOracao)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(casaDeOracao)}
                    className="bg-red-500 px-3 py-1 text-white rounded-md"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-lg font-bold mb-4">Nova Casa de Oração</h2>
            ```
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Cadastro de Casa de Oração
              </h2>
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-4">
                  <label className="block text-sm font-medium text-gray-900">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-900">
                    Nro. Sta. Ceia
                  </label>
                  <input
                    type="number"
                    value={ultimaSantaCeia}
                    onChange={(e) =>
                      setUltimaSantaCeia(parseInt(e.target.value))
                    }
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-5">
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
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
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
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Telefone Ancião
                  </label>
                  <input
                    type="number"
                    value={telefoneAnciao}
                    onChange={(e) => setTelefoneAnciao(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
              </div>
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
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
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Telefone Cooperador
                  </label>
                  <input
                    type="text"
                    value={telefoneCooperador}
                    onChange={(e) => setTelefoneCooperador(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
              </div>
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
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
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Telefone Diácono
                  </label>
                  <input
                    type="text"
                    value={telefoneDiacono}
                    onChange={(e) => setTelefoneDiacono(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
              </div>
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
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
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Telefone Cooperador de Jovens
                  </label>
                  <input
                    type="text"
                    value={telefoneCooperadorJovens}
                    onChange={(e) =>
                      setTelefoneCooperadorJovens(e.target.value)
                    }
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-sm font-semibold text-gray-900"
                >
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
            ```
          </div>
        </div>
      )}
    </div>
  )
}
