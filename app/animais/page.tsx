'use client'

import { useEffect, useState } from 'react'
import {
  addAnimais,
  getAnimais,
  removeAnimais,
  updateAnimais,
} from '@/lib/animais/animais'

interface Animal {
  id: number
  nome: string
  nome_cientifico: string
  especie: string
  grupo: string
}

export default function Page() {
  const [animais, setAnimais] = useState<Animal[]>([])
  const [nome, setNome] = useState('')
  const [nome_cientifico, setNomeCientifico] = useState('')
  const [especie, setEspecie] = useState('')
  const [grupo, setGrupo] = useState('')
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(true)

  const fetchAnimais = async () => {
    try {
      const data = await getAnimais()
      setAnimais(data)
    } catch (error) {
      console.error('Erro ao buscar animais:', error)
    }
  }

  useEffect(() => {
    fetchAnimais()
  }, [])

  const handleEdit = (animal: Animal) => {
    setId(animal.id)
    setNome(animal.nome)
    setNomeCientifico(animal.nome_cientifico)
    setEspecie(animal.especie)
    setGrupo(animal.grupo)
    setIsModalOpen(true)
  }

  const handleRemove = async (animal: Animal) => {
    try {
      await removeAnimais(animal.id)
      fetchAnimais()
    } catch (error) {
      console.error('Erro ao remover animal:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addAnimais(nome, nome_cientifico, especie, grupo)
      } else {
        await updateAnimais(id, nome, nome_cientifico, especie, grupo)
      }
      fetchAnimais()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar animal:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE ANIMAIS</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            nome: '',
            nome_cientifico: '',
            especie: '',
            grupo: '',
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR UM NOVO ANIMAL
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Nome CIÊNTIFICO</th>
              <th className="border px-4 py-2">ESPECIE</th>
              <th className="border px-4 py-2">GRUPO</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {animais.map((animal) => (
              <tr key={animal.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{animal.nome}</td>
                <td className="border px-4 py-2">{animal.nome_cientifico}</td>
                <td className="border px-4 py-2">{animal.especie}</td>
                <td className="border px-4 py-2">{animal.grupo}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(animal)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(animal)}
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
            <h2 className="text-lg font-bold mb-4">Novo Animal</h2>
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
                placeholder="Nome cientifico"
                value={nome_cientifico}
                onChange={(e) => setNomeCientifico(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="especie"
                value={especie}
                onChange={(e) => setEspecie(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="grupo"
                value={grupo}
                onChange={(e) => setGrupo(e.target.value)}
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
