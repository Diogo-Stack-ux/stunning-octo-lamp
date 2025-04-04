'use client'

import {
  addFilmes,
  getFilmes,
  removeFilmes,
  updateFilmes,
} from '@/lib/filmes/filmes'
import { useState, useEffect } from 'react'

interface Filme {
  id: number
  nome: string
  diretor: string
  assunto: string
  classificacao_etaria: string
}

export default function Page() {
  const [filmes, setFilmes] = useState<Filme[]>([])
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [diretor, setDiretor] = useState('')
  const [assunto, setAssunto] = useState('')
  const [classificacao_etaria, setClassificacaoEtaria] = useState('')

  const fetchFilmes = async () => {
    try {
      const data = await getFilmes()
      setFilmes(data)
    } catch (error) {
      console.error('Erro ao buscar filmes:', error)
    }
  }

  useEffect(() => {
    fetchFilmes()
  }, [])

  const handleEdit = (filme: Filme) => {
    setId(filme.id)
    setNome(filme.nome)
    setDiretor(filme.diretor)
    setAssunto(filme.assunto)
    setClassificacaoEtaria(filme.classificacao_etaria)
    setIsModalOpen(true)
  }

  const handleRemove = async (filme: Filme) => {
    try {
      await removeFilmes(filme.id)
      fetchFilmes()
    } catch (error) {
      console.error('Erro ao remover filme:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addFilmes(nome, diretor, assunto, classificacao_etaria)
      } else {
        await updateFilmes(id, nome, diretor, assunto, classificacao_etaria)
      }
      fetchFilmes()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar filme:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">seleção de Filmes</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            nome: '',
            diretor: '',
            assunto: '',
            classificacao_etaria: '',
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR NOVO FILME
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Diretor</th>
              <th className="border px-4 py-2">Assunto</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filmes.map((filme) => (
              <tr key={filme.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{filme.nome}</td>
                <td className="border px-4 py-2">{filme.diretor}</td>
                <td className="border px-4 py-2">{filme.assunto}</td>
                <td className="border px-4 py-2">
                  {filme.classificacao_etaria?.toString()}
                </td>
                <td className="border px-4 py-2">{filme.nome}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(filme)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(filme)}
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
            <h2 className="text-lg font-bold mb-4">Novo Filme</h2>
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
                placeholder="diretor"
                value={diretor}
                onChange={(e) => setDiretor(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="assunto"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="classificacao_etaria"
                value={classificacao_etaria}
                onChange={(e) => setClassificacaoEtaria(e.target.value)}
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
