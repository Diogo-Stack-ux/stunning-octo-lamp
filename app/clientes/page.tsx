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
  primeiroNome: string
  enderecoDeEmail: string
  endereco: string
  dataDeNascimento: string
  numeroDeTelefone: number
  cpf: string
}

export default function Page() {
  const [cliente, setClientes] = useState<Cliente[]>([])
  const [primeiroNome, setPrimeiroNome] = useState('')
  const [enderecoDeEmail, setEnderecoDeEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [dataDeNascimento, setDataDeNascimento] = useState('')
  const [numeroDeTelefone, setNumeroDeTelefone] = useState(0)
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
    setPrimeiroNome(cliente.primeiroNome)
    setEnderecoDeEmail(cliente.enderecoDeEmail)
    setEndereco(cliente.endereco)
    setDataDeNascimento(cliente.dataDeNascimento)
    setNumeroDeTelefone(cliente.numeroDeTelefone)
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
          primeiroNome,
          enderecoDeEmail,
          endereco,
          dataDeNascimento,
          numeroDeTelefone,
          cpf
        )
      } else {
        await updateClientes(
          id,
          primeiroNome,
          enderecoDeEmail,
          endereco,
          dataDeNascimento,
          numeroDeTelefone,
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
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE ALUNOS</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            primeiroNome: '',
            enderecoDeEmail: '',
            endereco: '',
            dataDeNascimento: new Date(),
            numeroDeTelefone: 0,
            cpf: '',
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
              <th className="border px-4 py-2">Primeiro Nome</th>
              <th className="border px-4 py-2">Endereço de Email</th>
              <th className="border px-4 py-2">Data de Nascimento</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {cliente.map((cliente) => (
              <tr key={cliente.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{cliente.primeiroNome}</td>
                <td className="border px-4 py-2">{cliente.enderecoDeEmail}</td>
                <td className="border px-4 py-2">{cliente.endereco}</td>
                <td className="border px-4 py-2">
                  {cliente.dataDeNascimento?.toDateString()}
                </td>
                <td className="border px-4 py-2">{cliente.numeroDeTelefone}</td>
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
                placeholder="primeiro Nome"
                value={primeiroNome}
                onChange={(e) => setPrimeiroNome(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Endereço de Email"
                value={enderecoDeEmail}
                onChange={(e) => setEnderecoDeEmail(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="date"
                placeholder="Data de nascimento"
                value={dataDeNascimento}
                onChange={(e) => setDataDeNascimento(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                value={numeroDeTelefone}
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
