'use client'

import {
  addCurriculos,
  getCurriculos,
  updateCurriculos,
  removeCurriculos,
} from '@/lib/curriculos/curriculos'
import { useState, useEffect } from 'react'

interface Curriculo {
  id: number
  nome: string
  endereco: string
  curriculo: string
  habilidades: string
}

export default function Page() {
  const [curriculos, setCurriculos] = useState<Curriculo[]>([])
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [curriculo, setCurriculo] = useState('')
  const [habilidades, setHabilidades] = useState('')

  const fetchCurriculos = async () => {
    try {
      const data = await getCurriculos()
      setCurriculos(data)
    } catch (error) {
      console.error('Erro ao buscar curriculos:', error)
    }
  }

  useEffect(() => {
    fetchCurriculos()
  }, [])

  const handleEdit = (curriculo: Curriculo) => {
    setId(curriculo.id)
    setNome(curriculo.nome)
    setEndereco(curriculo.endereco)
    setCurriculo(curriculo.curriculo)
    setHabilidades(curriculo.habilidades)
    setIsModalOpen(true)
  }

  const handleRemove = async (curriculo: Curriculo) => {
    try {
      await removeCurriculos(curriculo.id)
      fetchCurriculos()
    } catch (error) {
      console.error('Erro ao remover curriculo:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addCurriculos(nome, endereco, curriculo, habilidades)
      } else {
        await updateCurriculos(id, nome, endereco, curriculo, habilidades)
      }
      fetchCurriculos()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar curriculo:', error)
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
            endereco: '',
            curriculo: '',
            habilidades: '',
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR NOVO CURRICULO
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Endereço</th>
              <th className="border px-4 py-2">Curriculo</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {curriculos.map((curriculo) => (
              <tr key={curriculo.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{curriculo.nome}</td>
                <td className="border px-4 py-2">{curriculo.endereco}</td>
                <td className="border px-4 py-2">{curriculo.curriculo}</td>
                <td className="border px-4 py-2">
                  {curriculo.habilidades?.toString()}
                </td>
                <td className="border px-4 py-2">{curriculo.habilidades}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(curriculo)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(curriculo)}
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
            <h2 className="text-lg font-bold mb-4">Novo Aluno</h2>
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
                placeholder="curriculo"
                value={curriculo}
                onChange={(e) => setCurriculo(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="habilidades"
                value={habilidades}
                onChange={(e) => setHabilidades(e.target.value)}
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
