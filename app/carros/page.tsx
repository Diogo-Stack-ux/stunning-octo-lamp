'use client'

import {
  addCarros,
  getCarros,
  removeCarros,
  updateCarros,
} from '@/lib/carros/carros'
import { useEffect, useState } from 'react'

interface Carro {
  id: number
  fabricante: string
  modelo: string
  ano_de_fabricacao: number
  cor: string
  quilometragem: number
}

export default function Page() {
  const [carros, setCarros] = useState<Carro[]>([])
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [fabricante, setFabricante] = useState('')
  const [modelo, setModelo] = useState('')
  const [ano_de_fabricacao, setAnoDeFabricacao] = useState(0)
  const [cor, setCor] = useState('cor')
  const [quilometragem, setQuilometragem] = useState(0)
  const fetchCarros = async () => {
    try {
      const data = await getCarros()
      setCarros(data)
    } catch (error) {
      console.error('Erro ao buscar carros:', error)
    }
  }

  useEffect(() => {
    fetchCarros()
  }, [])

  const handleEdit = (carro: Carro) => {
    setId(carro.id)
    setFabricante(carro.fabricante)
    setModelo(carro.modelo)
    setCor(carro.cor)
    setQuilometragem(carro.quilometragem)
    setIsModalOpen(true)
  }

  const handleRemove = async (carro: Carro) => {
    try {
      await removeCarros(carro.id)
      fetchCarros()
    } catch (error) {
      console.error('Erro ao remover carro:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addCarros(
          fabricante,
          modelo,
          ano_de_fabricacao,
          cor,
          quilometragem
        )
      } else {
        await updateCarros(
          id,
          fabricante,
          modelo,
          ano_de_fabricacao,
          cor,
          quilometragem
        )
      }
      fetchCarros()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar carros:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE CARROS</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            fabricante: '',
            modelo: '',
            ano_de_fabricacao: 0,
            cor: '',
            quilometragem: 0,
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR UM NOVO CARRO
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Fabricante</th>
              <th className="border px-4 py-2">Modelo</th>
              <th className="border px-4 py-2">Area Privativa </th>
              <th className="border px-4 py-2">Ano De Fabricacao</th>
              <th className="border px-4 py-2">Cor</th>
              <th className="border px-4 py-2">Quilometragem</th>
            </tr>
          </thead>
          <tbody>
            {carros.map((carro) => (
              <tr key={carro.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{carro.fabricante}</td>
                <td className="border px-4 py-2">{carro.modelo}</td>
                <td className="border px-4 py-2">{carro.ano_de_fabricacao}</td>
                <td className="border px-4 py-2">{carro.cor}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(carro)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(carro)}
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
            <h2 className="text-lg font-bold mb-4">Novo carro</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold text-gray-900"></h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Aqui voçê encontra a maior variedade de carros
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      fabricante
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="fabricante"
                        value={fabricante}
                        onChange={(event) => setFabricante(event.target.value)}
                        className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900"
                    >
                      modelo
                    </label>
                    <div className="mt-2">
                      <input
                        id="modelo"
                        value={modelo}
                        onChange={(event) => setModelo(event.target.value)}
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
                      ano de fabricacao
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        id="ano_de_fabricacao"
                        value={ano_de_fabricacao}
                        onChange={(event) =>
                          setAnoDeFabricacao(parseInt(event.target.value))
                        }
                        className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="cor"
                      className="block text-sm font-medium text-gray-900"
                    >
                      cor
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="cor"
                        value={cor}
                        onChange={(event) => setCor(event.target.value)}
                        className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="quilometragem"
                      className="block text-sm font-medium text-gray-900"
                    >
                      quilometragem
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        id="quilometragem"
                        value={quilometragem}
                        onChange={(event) =>
                          setQuilometragem(parseInt(event.target.value))
                        }
                        className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                      />
                    </div>
                  </div>
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
          </div>
        </div>
      )}
    </div>
  )
}
