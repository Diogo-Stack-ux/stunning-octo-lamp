'use client'

import {
  addAlunos,
  getAlunos,
  removeAlunos,
  updateAlunos,
} from '@/lib/alunos/alunos'
import { useEffect, useState } from 'react'

interface Aluno {
  id: number
  nome: string
  nome_do_pai: string
  nome_da_mae: string
  data_de_nascimento: Date
  cor_da_pele: string
}

export default function Page() {
  const [alunos, setAlunos] = useState<Aluno[]>([])
  const [id, setId] = useState(0)
  const [nome, setNome] = useState('')
  const [nome_do_pai, setNomeDoPai] = useState('')
  const [nome_da_mae, setNomeDaMae] = useState('')
  const [data_de_nascimento, setDataDeNascimento] = useState('')
  const [cor_da_pele, setCorDaPele] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchAlunos = async () => {
    try {
      const data = await getAlunos()
      setAlunos(data)
    } catch (error) {
      console.error('Erro ao buscar alunos:', error)
    }
  }

  useEffect(() => {
    fetchAlunos()
  }, [])

  const handleEdit = (aluno: Aluno) => {
    setId(aluno.id)
    setNome(aluno.nome)
    setNomeDoPai(aluno.nome_do_pai)
    setNomeDaMae(aluno.nome_da_mae)
    setDataDeNascimento(aluno.data_de_nascimento)
    setCorDaPele(aluno.cor_da_pele)
    setIsModalOpen(true)
  }

  const handleRemove = async (aluno: Aluno) => {
    try {
      await removeAlunos(aluno.id)
      fetchAlunos()
    } catch (error) {
      console.error('Erro ao remover aluno:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addAlunos(
          nome,
          nome_do_pai,
          nome_da_mae,
          data_de_nascimento,
          cor_da_pele
        )
      } else {
        await updateAlunos(
          id,
          nome,
          nome_do_pai,
          nome_da_mae,
          data_de_nascimento,
          cor_da_pele
        )
      }
      fetchAlunos()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar aluno:', error)
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
            nome_do_pai: '',
            nome_da_mae: '',
            data_de_nascimento: '',
            cor_da_pele: '',
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
              <th className="border px-4 py-2">Nome do Pai</th>
              <th className="border px-4 py-2">Nome da Mãe</th>
              <th className="border px-4 py-2">Data de Nascimento</th>
              <th className="border px-4 py-2">Cor da Pele</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr key={aluno.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{aluno.nome}</td>
                <td className="border px-4 py-2">{aluno.nome_do_pai}</td>
                <td className="border px-4 py-2">{aluno.nome_da_mae}</td>
                <td className="border px-4 py-2">
                  {aluno.data_de_nascimento?.toDateString()}
                </td>
                <td className="border px-4 py-2">{aluno.cor_da_pele}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(aluno)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(aluno)}
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
                placeholder="Nome do Pai"
                value={nome_do_pai}
                onChange={(e) => setNomeDoPai(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Nome da Mãe"
                value={nome_da_mae}
                onChange={(e) => setNomeDaMae(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="date"
                value={data_de_nascimento}
                onChange={(e) => setDataDeNascimento(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <select
                value={cor_da_pele}
                onChange={(e) => setCorDaPele(e.target.value)}
              >
                <option value={'preto'}>Preto</option>
                <option value={'branco'}>branco</option>
                <option value={'parda'}>parda</option>
              </select>

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
