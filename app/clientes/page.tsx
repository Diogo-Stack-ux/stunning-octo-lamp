'use client'

import {
  addClientes,
  getClientes,
  removeClientes,
  updateClientes,
} from '@/lib/clientes/clientes'
import { useEffect, useState } from 'react'

interface Cliente {
  id: number
  nome: string
  endereco_de_email: string
  endereco: string
  data_de_nascimento: string
  numero_de_telefone: number
  cpf: string
}

export default function Page() {
  const [cliente, setClientes] = useState<Cliente[]>([])
  const [nome, setNome] = useState('')
  const [endereco_de_email, setEnderecoDeEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [data_de_nascimento, setDataDeNascimento] = useState('')
  const [numero_de_telefone, setNumeroDeTelefone] = useState(0)
  const [cpf, setCpf] = useState('')
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchClientes = async () => {
    try {
      const data = await getClientes()
      setClientes(data)
    } catch (error) {
      console.error('Erro ao buscar clientes:', error)
    }
  }

  useEffect(() => {
    fetchClientes()
  }, [])

  const handleEdit = (cliente: Cliente) => {
    setId(cliente.id)
    setNome(cliente.nome)
    setEnderecoDeEmail(cliente.endereco_de_email)
    setEndereco(cliente.endereco)
    setDataDeNascimento(cliente.data_de_nascimento)
    setNumeroDeTelefone(cliente.numero_de_telefone)
    setCpf(cliente.cpf)
    setIsModalOpen(true)
  }

  const handleRemove = async (cliente: Cliente) => {
    try {
      await removeClientes(cliente.id)
      fetchClientes()
    } catch (error) {
      console.error('Erro ao remover cliente:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addClientes(
          nome,
          endereco_de_email,
          endereco,
          data_de_nascimento,
          numero_de_telefone,
          cpf
        )
      } else {
        await updateClientes(
          id,
          nome,
          endereco_de_email,
          endereco,
          data_de_nascimento,
          numero_de_telefone,
          cpf
        )
      }
      fetchClientes()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar cliente:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE CLIENTES</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            nome: '',
            endereco_de_email: '',
            endereco: '',
            data_de_nascimento: '',
            numero_de_telefone: 0,
            cpf: '',
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR NOVO CLIENTE
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Endereço de Email</th>
              <th className="border px-4 py-2">Endereço</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {cliente.map((cliente) => (
              <tr key={cliente.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{cliente.nome}</td>
                <td className="border px-4 py-2">
                  {cliente.endereco_de_email}
                </td>
                <td className="border px-4 py-2">{cliente.endereco}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(cliente)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(cliente)}
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
            <h2 className="text-lg font-bold mb-4">Novo cliente</h2>
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
                placeholder="Endereço de Email"
                value={endereco_de_email}
                onChange={(e) => setEnderecoDeEmail(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="date"
                placeholder="Data de nascimento"
                value={data_de_nascimento}
                onChange={(e) => setDataDeNascimento(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="numero de telefone"
                value={numero_de_telefone}
                onChange={(e) => setNumeroDeTelefone(parseInt(e.target.value))}
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
