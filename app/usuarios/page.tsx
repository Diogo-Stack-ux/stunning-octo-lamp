'use client'

import {
  addUsuarios,
  getUsuarios,
  updateUsuarios,
  removeUsuarios,
} from '@/lib/usuarios/usuarios'
import { useState, useEffect } from 'react'

interface Usuario {
  id: number
  nome: string
  apelido: string
  endereco_de_email: string
  senha: string
}

export default function Page() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [apelido, setApelido] = useState('')
  const [endereco_de_email, setEnderecoDeEmail] = useState('')
  const [senha, setSenha] = useState('')

  const fetchUsuarios = async () => {
    try {
      const data = await getUsuarios()
      setUsuarios(data)
    } catch (error) {
      console.error('Erro ao buscar usuarios:', error)
    }
  }

  useEffect(() => {
    fetchUsuarios()
  }, [])

  const handleEdit = (Usuario: Usuario) => {
    setId(Usuario.id)
    setNome(Usuario.nome)
    setApelido(Usuario.apelido)
    setEnderecoDeEmail(Usuario.endereco_de_email)
    setSenha(Usuario.senha)
    setIsModalOpen(true)
  }

  const handleRemove = async (Usuario: Usuario) => {
    try {
      await removeUsuarios(Usuario.id)
      fetchUsuarios()
    } catch (error) {
      console.error('Erro ao remover usuario:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addUsuarios(nome, apelido, endereco_de_email, senha)
      } else {
        await updateUsuarios(id, nome, apelido, endereco_de_email, senha)
      }
      fetchUsuarios()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar usuario:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE USUARIOS</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            nome: '',
            apelido: '',
            endereco_de_email: '',
            senha: '',
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR NOVO USUARIO
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">apelido</th>
              <th className="border px-4 py-2">Endereço de email</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{usuario.nome}</td>
                <td className="border px-4 py-2">{usuario.apelido}</td>
                <td className="border px-4 py-2">
                  {usuario.endereco_de_email}
                </td>
                <td className="border px-4 py-2">
                  {usuario.senha?.toString()}
                </td>
                <td className="border px-4 py-2">{usuario.nome}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(usuario)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(usuario)}
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
            <h2 className="text-lg font-bold mb-4">Novo Usuario</h2>
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
                placeholder="Apelido"
                value={apelido}
                onChange={(e) => setApelido(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="endereco_de_email"
                value={endereco_de_email}
                onChange={(e) => setEnderecoDeEmail(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
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
