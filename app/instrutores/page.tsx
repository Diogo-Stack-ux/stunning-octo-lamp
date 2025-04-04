'use client'

import {
  addInstrutores,
  getInstrutores,
  updateInstrutores,
  removeInstrutores,
} from '@/lib/instrutores/instrutores'
import { useState, useEffect } from 'react'

interface Instrutor {
  id: number
  nome: string
  especialidade: string
  endereco: string
  data_de_nascimento: Date
  comum: string
}

export default function Page() {
  const [instrutores, setInstrutores] = useState<Instrutor[]>([])
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [especialidade, setEspecialidade] = useState('')
  const [endereco, setEndereco] = useState('')
  const [data_de_nascimento, setDataDeNascimento] = useState('')
  const [comum, setComum] = useState('')

  const fetchInstrutores = async () => {
    try {
      const data = await getInstrutores()
      setInstrutores(data)
    } catch (error) {
      console.error('Erro ao buscar instrutores:', error)
    }
  }

  useEffect(() => {
    fetchInstrutores()
  }, [])

  const handleEdit = (Instrutor: Instrutor) => {
    setId(Instrutor.id)
    setNome(Instrutor.nome)
    setEspecialidade(Instrutor.especialidade)
    setEndereco(Instrutor.endereco)
    setDataDeNascimento(Instrutor.data_de_nascimento)
    setComum(Instrutor.comum)
    setIsModalOpen(true)
  }

  const handleRemove = async (Instrutor: Instrutor) => {
    try {
      await removeInstrutores(Instrutor.id)
      fetchInstrutores()
    } catch (error) {
      console.error('Erro ao remover instrutor:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addInstrutores(
          nome,
          especialidade,
          endereco,
          data_de_nascimento,
          comum
        )
      } else {
        await updateInstrutores(
          id,
          nome,
          especialidade,
          endereco,
          data_de_nascimento,
          comum
        )
      }
      fetchInstrutores()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar instrutor:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE INSTRUTORES</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            nome: '',
            especialidade: '',
            endereco: '',
            data_de_nascimento: '',
            comum: '',
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR NOVO INSTRUTOR
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Especialidade</th>
              <th className="border px-4 py-2">Endereço</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {instrutores.map((instrutor) => (
              <tr key={instrutor.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{instrutor.nome}</td>
                <td className="border px-4 py-2">{instrutor.especialidade}</td>
                <td className="border px-4 py-2">{instrutor.endereco}</td>
                <td className="border px-4 py-2">
                  {instrutor.data_de_nascimento?.toDateString()}
                </td>
                <td className="border px-4 py-2">{instrutor.especialidade}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(instrutor)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(instrutor)}
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
            <h2 className="text-lg font-bold mb-4">Novo Instrutor</h2>
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
                placeholder="Especialidade"
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="date"
                placeholder="data de nascimento"
                value={data_de_nascimento}
                onChange={(e) => setDataDeNascimento(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="comum"
                value={comum}
                onChange={(e) => setComum(e.target.value)}
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
