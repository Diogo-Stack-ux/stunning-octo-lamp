'use client'

import {
  addComputadores,
  getComputadores,
  removeComputadores,
  updateComputadores,
} from '@/lib/computadores/computadores'
import { useState, useEffect } from 'react'

interface Computador {
  id: number
  descricao: string
  cpu: string
  memoria: string
  placa_de_video: string
  placa_mae: string
  fonte: string
  Armazenamento: string
}

export default function Page() {
  const [computadores, setComputadores] = useState<Computador[]>([])
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [descricao, setDescricao] = useState('')
  const [cpu, setCpu] = useState('')
  const [memoria, setMemoria] = useState('')
  const [placa_de_video, setPlacaDeVideo] = useState('')
  const [placa_mae, setPlacaMae] = useState('')
  const [fonte, setfonte] = useState('')
  const [Armazenamento, setArmazenamento] = useState('')

  const fetchComputadores = async () => {
    try {
      const data = await getComputadores()
      setComputadores(data)
    } catch (error) {
      console.error('Erro ao buscar Computador:', error)
    }
  }

  useEffect(() => {
    fetchComputadores()
  }, [])

  const handleEdit = (Computador: Computador) => {
    setId(Computador.id)
    setDescricao(Computador.descricao)
    setCpu(Computador.cpu)
    setMemoria(Computador.memoria)
    setPlacaDeVideo(Computador.placa_de_video)
    setPlacaMae(Computador.placa_mae)
    setfonte(Computador.fonte)
    setArmazenamento(Computador.Armazenamento)
    setIsModalOpen(true)
  }

  const handleRemove = async (computador: Computador) => {
    try {
      await removeComputadores(computador.id)
      fetchComputadores()
    } catch (error) {
      console.error('Erro ao remover computador:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addComputadores(
          descricao,
          cpu,
          memoria,
          placa_de_video,
          placa_mae,
          fonte,
          Armazenamento
        )
      } else {
        await updateComputadores(
          id,
          descricao,
          cpu,
          memoria,
          placa_de_video,
          placa_mae,
          fonte,
          Armazenamento
        )
      }
      fetchComputadores()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar computador:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE COMPUTADORES</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            descricao: '',
            cpu: '',
            memoria: '',
            placa_de_video: '',
            placa_mae: '',
            fonte: '',
            Armazenamento: '',
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR NOVO COMPUTADOR
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">descricao</th>
              <th className="border px-4 py-2">cpu</th>
              <th className="border px-4 py-2">memoria</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {computadores.map((computador) => (
              <tr key={computador.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{computador.descricao}</td>
                <td className="border px-4 py-2">{computador.cpu}</td>
                <td className="border px-4 py-2">{computador.memoria}</td>
                <td className="border px-4 py-2">
                  {computador.placa_de_video?.toString()}
                </td>
                <td className="border px-4 py-2">{computador.placa_mae}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(computador)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(computador)}
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
            <h2 className="text-lg font-bold mb-4">Novo computador</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="cpu"
                value={cpu}
                onChange={(e) => setCpu(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="memoria"
                value={memoria}
                onChange={(e) => setMemoria(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                value={placa_de_video}
                onChange={(e) => setPlacaDeVideo(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="placa mae"
                value={placa_mae}
                onChange={(e) => setPlacaMae(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="fonte"
                value={fonte}
                onChange={(e) => setfonte(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="armazenamento"
                value={Armazenamento}
                onChange={(e) => setArmazenamento(e.target.value)}
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
