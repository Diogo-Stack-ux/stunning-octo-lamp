'use client'

import {
  addLivros,
  getLivros,
  updateLivros,
  removeLivros,
} from '@/lib/livros/livros'
import { useState, useEffect } from 'react'

interface Livro {
  id: number
  nome: string
  autor: string
  assunto: string
  resumo: string
  data_de_lancamento: Date
  preco_sugerido: number
}

export default function Page() {
  const [livros, setLivros] = useState<Livro[]>([])
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [autor, setAutor] = useState('')
  const [assunto, setAssunto] = useState('')
  const [resumo, setResumo] = useState('')
  const [data_de_lancamento, setDataDeLancamento] = useState(new Date())
  const [preco_sugerido, setPrecoSugerido] = useState(0)

  const fetchLivros = async () => {
    try {
      const data = await getLivros()
      setLivros(data)
    } catch (error) {
      console.error('Erro ao buscar livros:', error)
    }
  }

  useEffect(() => {
    fetchLivros()
  }, [])

  const handleEdit = (livro: Livro) => {
    setId(livro.id)
    setNome(livro.nome)
    setAutor(livro.autor)
    setAssunto(livro.assunto)
    setResumo(livro.resumo)
    setDataDeLancamento(livro.data_de_lancamento)
    setPrecoSugerido(livro.preco_sugerido)
    setIsModalOpen(true)
  }

  const handleRemove = async (livro: Livro) => {
    try {
      await removeLivros(livro.id)
      fetchLivros()
    } catch (error) {
      console.error('Erro ao remover livro:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addLivros(
          nome,
          autor,
          assunto,
          resumo,
          data_de_lancamento,
          preco_sugerido
        )
      } else {
        await updateLivros(
          id,
          nome,
          autor,
          assunto,
          resumo,
          data_de_lancamento,
          preco_sugerido
        )
      }
      fetchLivros()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar aluno:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE LIVROS</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            nome: '',
            autor: '',
            assunto: '',
            resumo: '',
            data_de_lancamento: new Date(),
            preco_sugerido: 0,
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR NOVO LIVRO
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Autor</th>
              <th className="border px-4 py-2">Assunto</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <tr key={livro.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{livro.nome}</td>
                <td className="border px-4 py-2">{livro.autor}</td>
                <td className="border px-4 py-2">{livro.assunto}</td>
                <td className="border px-4 py-2">{livro.resumo?.toString()}</td>
                <td className="border px-4 py-2">{livro.preco_sugerido}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(livro)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(livro)}
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
            <h2 className="text-lg font-bold mb-4">Novo Livro</h2>
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
                placeholder="autor"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
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
                placeholder="resumo"
                value={resumo}
                onChange={(e) => setResumo(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="date"
                placeholder="data_de_lancamento"
                value={data_de_lancamento}
                onChange={(e) => setDataDeLancamento(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="preco_sugerido"
                value={preco_sugerido}
                onChange={(e) => setPrecoSugerido(parseInt(e.target.value))}
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
