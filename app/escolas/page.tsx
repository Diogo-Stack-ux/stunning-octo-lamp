'use client'

import { useState, useEffect } from 'react'
import {
  addEscolas,
  getEscolas,
  updateEscolas,
  removeEscolas,
} from '@/lib/escolas/escolas'

interface Escola {
  id: number
  nome: string
  endereco: string
  quantidadeDeAlunos: number
  telefone: string
}

export default function Page() {
  const [escolas, setEscolas] = useState<Escola[]>([])
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [quantidadeDeAlunos, setQuantidadeAlunos] = useState(0)
  const [telefone, setTelefone] = useState('')

  const fetchEscolas = async () => {
    try {
      const data = await getEscolas()
      setEscolas(data)
    } catch (error) {
      console.error('Erro ao buscar escolas:', error)
    }
  }

  useEffect(() => {
    fetchEscolas()
  }, [])

  const handleEdit = (escola: Escola) => {
    setId(escola.id)
    setNome(escola.nome)
    setEndereco(escola.endereco)
    setQuantidadeAlunos(escola.quantidadeDeAlunos)
    setTelefone(escola.telefone)
    setIsModalOpen(true)
  }

  const handleRemove = async (escola: Escola) => {
    try {
      await removeEscolas(escola.id)
      fetchEscolas()
    } catch (error) {
      console.error('Erro ao remover escolas:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addEscolas(nome, endereco, quantidadeDeAlunos, telefone)
      } else {
        await updateEscolas(id, nome, endereco, quantidadeDeAlunos, telefone)
      }
      fetchEscolas()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar escolas:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE ESCOLAS</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            nome: '',
            endereco: '',
            quantidadeDeAlunos: 0,
            telefone: '',
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR NOVO ESCOLAS
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Endereço</th>
              <th className="border px-4 py-2">Quantidade de Alunos</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {escolas.map((escola) => (
              <tr key={escola.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{escola.nome}</td>
                <td className="border px-4 py-2">{escola.endereco}</td>
                <td className="border px-4 py-2">
                  {escola.quantidadeDeAlunos}
                </td>
                <td className="border px-4 py-2">
                  {escola.telefone?.toString()}
                </td>
                <td className="border px-4 py-2">{escola.nome}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(escola)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(escola)}
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
            <h2 className="text-lg font-bold mb-4">Novo Escola</h2>
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
                placeholder="Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="quantidade de alunos"
                value={quantidadeDeAlunos}
                onChange={(e) => setQuantidadeAlunos(e.target.valueAsNumber)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
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
