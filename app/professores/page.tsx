'use client'

import { useState, useEffect } from 'react'
import {
  addProfessores,
  getProfessores,
  removeProfessores,
  updateProfessores,
} from '@/lib/professores/professores'

interface Professor {
  id: number
  nome: string
  endereco: string
  especialidade: string
  telefone: number
  email: string
}

export default function Page() {
  const [professores, setProfessores] = useState<Professor[]>([])
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [especialidade, setEspecialidade] = useState('')
  const [telefone, setTelefone] = useState(0)
  const [email, setEmail] = useState('')

  const fetchProfessores = async () => {
    try {
      const data = await getProfessores()
      setProfessores(data)
    } catch (error) {
      console.error('Erro ao buscar professores:', error)
    }
  }

  useEffect(() => {
    fetchProfessores()
  }, [])

  const handleEdit = (professor: Professor) => {
    setId(professor.id)
    setNome(professor.nome)
    setEndereco(professor.endereco)
    setEspecialidade(professor.especialidade)
    setTelefone(professor.telefone)
    setEmail(professor.email)
    setIsModalOpen(true)
  }

  const handleRemove = async (professor: Professor) => {
    try {
      await removeProfessores(professor.id)
      fetchProfessores()
    } catch (error) {
      console.error('Erro ao remover professor:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addProfessores(nome, endereco, especialidade, telefone, email)
      } else {
        await updateProfessores(
          id,
          nome,
          endereco,
          especialidade,
          telefone,
          email
        )
      }
      fetchProfessores()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar professor:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE PROFESOR</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            nome: '',
            endereco: '',
            especialidade: '',
            telefone: 0,
            email: '',
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR NOVO PROFESSOR
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Endereço</th>
              <th className="border px-4 py-2">Especialidade</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {professores.map((professor) => (
              <tr key={professor.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{professor.nome}</td>
                <td className="border px-4 py-2">{professor.endereco}</td>
                <td className="border px-4 py-2">{professor.especialidade}</td>
                <td className="border px-4 py-2">
                  {professor.nome?.toString()}
                </td>
                <td className="border px-4 py-2">{professor.telefone}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(professor)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(professor)}
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
            <h2 className="text-lg font-bold mb-4">NOVO PROFESSOR</h2>
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
                placeholder="endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="especialidade"
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="telefone"
                value={telefone}
                onChange={(e) => setTelefone(parseInt(e.target.value))}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
