'use client'

import { addHinos, getHinos, removeHinos, updateHinos } from '@/lib/hinos/hinos'
import { useEffect, useState } from 'react'

interface Hino {
  id: number
  titulo: string
  numero: number
  letra: string
}
export default function Page() {
  const [hinos, setHinos] = useState<Hino[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [id, setId] = useState(0)
  const [titulo, setTitulo] = useState('')
  const [numero, setNumero] = useState(0)
  const [letra, setLetra] = useState('')

  const fetchHinos = async () => {
    try {
      const data = await getHinos()
      setHinos(data)
    } catch (error) {
      console.error('Error fetching hinos:', error)
    }
  }

  useEffect(() => {
    fetchHinos()
  }, [])

  const handleEdit = ({ id, titulo, numero, letra }: Hino) => {
    setId(id)
    setTitulo(titulo)
    setNumero(numero)
    setLetra(letra)
    setIsModalOpen(true)
  }
  const handleRemove = async ({ id }: Hino) => {
    await removeHinos(id)
    fetchHinos()
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) await addHinos(titulo, numero, letra)
      else await updateHinos(id, titulo, numero, letra)
      fetchHinos()
      closeModal()
    } catch (error) {
      console.error('Error adding hinos:', error)
    }
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Hinos</h1>

      <div className="mb-4">
        <button
          onClick={() =>
            handleEdit({ id: 0, titulo: '', numero: 0, letra: '' })
          }
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Adicionar Novo Hino
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Número</th>
              <th className="border px-4 py-2">Título</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {hinos.map((hino) => (
              <tr key={hino.id} className="hover:bg-gray-100 cursor-pointer">
                <td className="border px-4 py-2">{hino.numero}</td>
                <td className="border px-4 py-2">{hino.titulo}</td>
                <td className="border px-4 py-2">
                  <button
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => handleEdit(hino)}
                  >
                    Editar
                  </button>
                  <button
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => handleRemove(hino)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <h2 className="text-base font-semibold text-gray-900 mb-4">
              Novo Hino
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                  <div>
                    <label
                      htmlFor="titulo"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Título
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        value={titulo}
                        onChange={(event) => setTitulo(event.target.value)}
                        id="titulo"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="numero"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Número
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        value={numero}
                        onChange={(event) =>
                          setNumero(Number(event.target.value))
                        }
                        id="numero"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="letra"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Letra
                    </label>
                    <div className="mt-1">
                      <textarea
                        value={letra}
                        onChange={(event) => setLetra(event.target.value)}
                        id="letra"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                        rows={4}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold text-gray-900"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
