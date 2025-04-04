'use client'

import {
  addProducts,
  getProducts,
  updateProducts,
  removeProducts,
} from '@/lib/products/products'
import { useState, useEffect } from 'react'

interface Product {
  id: number
  nome: string
  valor_unitario: number
  validade: Date
  descricao: string
}

export default function Page() {
  const [products, setProducts] = useState<Product[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [id, setId] = useState(0)
  const [nome, setNome] = useState('')
  const [valorUnitario, setValorUnitario] = useState(0)
  const [validade, setValidade] = useState(new Date())
  const [descricao, setDescricao] = useState('')

  const fetchProducts = async () => {
    try {
      const data = await getProducts()
      setProducts(data)
    } catch (error) {
      console.error('Erro ao buscar products:', error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleEdit = (product: Product) => {
    setId(product.id)
    setNome(product.nome)
    setValorUnitario(product.valor_unitario)
    setValidade(product.validade)
    setDescricao(product.descricao)

    setIsModalOpen(true)
  }

  const handleRemove = async (product: Product) => {
    try {
      await removeProducts(product.id)
      fetchProducts()
    } catch (error) {
      console.error('Erro ao remover product:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addProducts(nome, valorUnitario, validade, descricao)
      } else {
        await updateProducts(id, nome, valorUnitario, validade, descricao)
      }
      fetchProducts()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar product:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE PRODUTOS</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            nome: '',
            valor_unitario: 0,
            validade: new Date(),
            descricao: '',
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR NOVO PRODUTO
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Valor Unitário</th>
              <th className="border px-4 py-2">Validade</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{product.nome}</td>
                <td className="border px-4 py-2">{product.valor_unitario}</td>
                <td className="border px-4 py-2">{product.descricao}</td>
                <td className="border px-4 py-2">
                  {product.validade?.toDateString()}
                </td>
                <td className="border px-4 py-2">{product.nome}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(product)}
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
            <h2 className="text-lg font-bold mb-4">Novo Produto</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="valor_unitario"
                value={valorUnitario}
                onChange={(e) => setValorUnitario(parseInt(e.target.value))}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="date"
                placeholder="validade"
                value={validade}
                onChange={(e) => setValidade(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
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
