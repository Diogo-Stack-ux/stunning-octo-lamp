'use client'

import { addPneus, getPneus, updatePneus, removePneus } from '@/lib/pneus/pneus'
import { useState, useEffect } from 'react'

interface Pneu {
  id: number
  marca: string
  modelo: string
  largura: number
  raio: number
  especura: number
  carga_maxima: number
}

export default function Page() {
  const [pneus, setPneus] = useState<Pneu[]>([])
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [largura, setLargura] = useState(0)
  const [raio, setRaio] = useState(0)
  const [especura, setEspecura] = useState(0)
  const [carga_maxima, setCargaMaxima] = useState(0)

  const fetchPneus = async () => {
    try {
      const data = await getPneus()
      setPneus(data)
    } catch (error) {
      console.error('Erro ao buscar pneus:', error)
    }
  }

  useEffect(() => {
    fetchPneus()
  }, [])

  const handleEdit = (pneu: Pneu) => {
    setId(pneu.id)
    setMarca(pneu.marca)
    setModelo(pneu.modelo)
    setLargura(pneu.largura)
    setRaio(pneu.raio)
    setEspecura(pneu.especura)
    setCargaMaxima(pneu.carga_maxima)
    setIsModalOpen(true)
  }

  const handleRemove = async (pneu: Pneu) => {
    try {
      await removePneus(pneu.id)
      fetchPneus()
    } catch (error) {
      console.error('Erro ao remover pneu:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addPneus(marca, modelo, largura, raio, especura, carga_maxima)
      } else {
        await updatePneus(
          id,
          marca,
          modelo,
          largura,
          raio,
          especura,
          carga_maxima
        )
      }
      fetchPneus()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar pneu:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE ALUNOS</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            marca: '',
            modelo: '',
            largura: 0,
            raio: 0,
            especura: 0,
            carga_maxima: 0,
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR NOVOS PNEUS
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">marco</th>
              <th className="border px-4 py-2">Modelo</th>
              <th className="border px-4 py-2">largura</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {pneus.map((pneu) => (
              <tr key={pneu.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{pneu.marca}</td>
                <td className="border px-4 py-2">{pneu.modelo}</td>
                <td className="border px-4 py-2">{pneu.largura}</td>
                <td className="border px-4 py-2">{pneu.marca?.toString()}</td>
                <td className="border px-4 py-2">{pneu.modelo}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(pneu)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(pneu)}
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
            <h2 className="text-lg font-bold mb-4">Novo Pneu</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="largura"
                value={largura}
                onChange={(e) => setLargura(parseInt(e.target.value))}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="raio"
                value={raio}
                onChange={(e) => setRaio(parseInt(e.target.value))}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="especura"
                value={especura}
                onChange={(e) => setEspecura(parseInt(e.target.value))}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="carga_maxima"
                value={carga_maxima}
                onChange={(e) => setCargaMaxima(parseInt(e.target.value))}
                className="w-full p-2 border rounded-md"
              />

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-400 px-3 py-1 rounded-md"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 px-3 py-1 text-white rounded-md"
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
