'use client'

import { useEffect, useState } from 'react'
import {
  addCarros,
  getCarros,
  removeCarros,
  updateCarros,
} from '@/lib/carros/carros'

interface Carro {
  id: number
  fabricante: string
  modelo: string
  ano_de_fabricacao: number
  cor: string
  quilometragem: number
}

export default function Page() {
  // Estados
  const [carros, setCarros] = useState<Carro[]>([])
  const [id, setId] = useState(0)
  const [fabricante, setFabricante] = useState('')
  const [modelo, setModelo] = useState('')
  const [ano_de_fabricacao, setAnoDeFabricacao] = useState(0)
  const [cor, setCor] = useState('')
  const [quilometragem, setQuilometragem] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Buscar carros
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

  // Editar
  const handleEdit = (carro: Carro) => {
    setId(carro.id)
    setFabricante(carro.fabricante)
    setModelo(carro.modelo)
    setAnoDeFabricacao(carro.ano_de_fabricacao)
    setCor(carro.cor)
    setQuilometragem(carro.quilometragem)
    setIsModalOpen(true)
  }

  // Remover
  const handleRemove = async (carro: Carro) => {
    try {
      await removeCarros(carro.id)
      fetchCarros()
    } catch (error) {
      console.error('Erro ao remover carro:', error)
    }
  }

  // Modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Salvar
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
      console.error('Erro ao salvar carro:', error)
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
        className="mb-4 rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500"
      >
        ADICIONAR UM NOVO CARRO
      </button>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Fabricante</th>
              <th className="border px-4 py-2">Modelo</th>
              <th className="border px-4 py-2">Ano de Fabricação</th>
              <th className="border px-4 py-2">Cor</th>
              <th className="border px-4 py-2">Quilometragem</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {carros.map((carro) => (
              <tr key={carro.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{carro.fabricante}</td>
                <td className="border px-4 py-2">{carro.modelo}</td>
                <td className="border px-4 py-2">{carro.ano_de_fabricacao}</td>
                <td className="border px-4 py-2">{carro.cor}</td>
                <td className="border px-4 py-2">{carro.quilometragem} km</td>
                <td className="border px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleEdit(carro)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md"
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-lg font-bold mb-4">
              {id === 0 ? 'Novo Carro' : 'Editar Carro'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Fabricante"
                value={fabricante}
                onChange={(e) => setFabricante(e.target.value)}
                className="w-full rounded-md border p-2"
              />
              <input
                type="text"
                placeholder="Modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                className="w-full rounded-md border p-2"
              />
              <input
                type="number"
                placeholder="Ano de Fabricação"
                value={ano_de_fabricacao}
                onChange={(e) => setAnoDeFabricacao(Number(e.target.value))}
                className="w-full rounded-md border p-2"
              />
              <input
                type="text"
                placeholder="Cor"
                value={cor}
                onChange={(e) => setCor(e.target.value)}
                className="w-full rounded-md border p-2"
              />
              <input
                type="number"
                placeholder="Quilometragem"
                value={quilometragem}
                onChange={(e) => setQuilometragem(Number(e.target.value))}
                className="w-full rounded-md border p-2"
              />

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-700 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
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
