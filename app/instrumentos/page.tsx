'use client'

import {
  addInstrumentos,
  getInstrumentos,
  removeInstrumentos,
  updateInstrumentos,
} from '@/lib/instrumentos/instrumentos'
import { useState, useEffect } from 'react'

interface Instrumento {
  id: number
  nome: string
  tipo: string
}

export default function Page() {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([])
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [tipo, setTipo] = useState('')

  const fetchInstrumentos = async () => {
    try {
      const data = await getInstrumentos()
      setInstrumentos(data)
    } catch (error) {
      console.error('Erro ao buscar instrumentos:', error)
    }
  }

  useEffect(() => {
    fetchInstrumentos()
  }, [])

  const handleEdit = (instrumento: Instrumento) => {
    setId(instrumento.id)
    setNome(instrumento.nome)
    setTipo(instrumento.tipo)
    setIsModalOpen(true)
  }

  const handleRemove = async (instrumento: Instrumento) => {
    try {
      await removeInstrumentos(instrumento.id)
      fetchInstrumentos()
    } catch (error) {
      console.error('Erro ao remover instrumento:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addInstrumentos(nome, tipo)
      } else {
        await updateInstrumentos(id, nome, tipo)
      }
      fetchInstrumentos()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar instrumento:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE ALUNOS</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            nome: '',
            tipo: '',
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR NOVO ALUNO
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">tipo</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {instrumentos.map((instrumento) => (
              <tr key={instrumento.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{instrumento.nome}</td>
                <td className="border px-4 py-2">{instrumento.tipo}</td>
                <td className="border px-4 py-2">
                  {instrumento.nome?.toString()}
                </td>
                <td className="border px-4 py-2">{instrumento.tipo}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(instrumento)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(instrumento)}
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
            <h2 className="text-lg font-bold mb-4">Novo Instrumento</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
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
