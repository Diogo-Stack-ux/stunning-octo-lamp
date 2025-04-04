'use client'

import {
  addMaterias,
  getMaterias,
  updateMaterias,
  removeMaterias,
} from '@/lib/materias/materias'
import { useState, useEffect } from 'react'

interface Materia {
  id: number
  nome: string
  descricao: string
  ano_letivo: Date
}

export default function Page() {
  const [materias, setMaterias] = useState<Materia[]>([])
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [ano_letivo, setAnoLetivo] = useState(new Date())

  const fetchMaterias = async () => {
    try {
      const data = await getMaterias()
      setMaterias(data)
    } catch (error) {
      console.error('Erro ao buscar materias:', error)
    }
  }

  useEffect(() => {
    fetchMaterias()
  }, [])

  const handleEdit = (Materia: Materia) => {
    setId(Materia.id)
    setNome(Materia.nome)
    setDescricao(Materia.descricao)
    setAnoLetivo(Materia.ano_letivo)
    setIsModalOpen(true)
  }

  const handleRemove = async (materia: Materia) => {
    try {
      await removeMaterias(materia.id)
      fetchMaterias()
    } catch (error) {
      console.error('Erro ao remover materias:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addMaterias(nome, descricao, ano_letivo)
      } else {
        await updateMaterias(id, nome, descricao, ano_letivo)
      }
      fetchMaterias()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar materia:', error)
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
            descricao: '',
            ano_letivo: new Date(),
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR NOVA MATERIA
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Descrição</th>
              <th className="border px-4 py-2">Ano Letivo</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {materias.map((materia) => (
              <tr key={materia.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{materia.nome}</td>
                <td className="border px-4 py-2">{materia.descricao}</td>
                <td className="border px-4 py-2">{materia.nome?.toString()}</td>
                <td className="border px-4 py-2">{materia.descricao}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(materia)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(materia)}
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
            <h2 className="text-lg font-bold mb-4">materias</h2>
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
                placeholder="descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="date"
                placeholder="ano_letivo"
                value={ano_letivo}
                onChange={(e) => setAnoLetivo(e.target.value)}
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
