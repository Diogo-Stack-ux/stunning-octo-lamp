'use client'

import React, { useEffect, useState } from 'react'
import {
  addApartamentos,
  getApartamentos,
  removeApartamentos,
  updateApartamentos,
} from '@/lib/apartamentos/apartamentos'

interface Apartamento {
  id: number
  tipo: string
  condominio: string
  area_privativa: number
  area_comum: number
  quantidade_de_quartos: number
  quantidade_de_banheiros: number
  tem_churrasqueira: boolean
  tem_piscina: boolean
  valor_do_condominio: number
  preco_de_venda: number
}
export default function Page() {
  const [apartamentos, setApartamentos] = useState<Apartamento[]>([])
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tipo, setTipo] = useState('')
  const [condominio, setCondominio] = useState('')
  const [area_privativa, setAreaPrivativa] = useState(0)
  const [area_comum, setAreaComum] = useState(0)
  const [quantidade_de_quartos, setQuantidadeDeQuartos] = useState(0)
  const [quantidade_de_banheiros, setQuantidadeDeBanheiros] = useState(0)
  const [tem_churrasqueira, setTemChurrasqueira] = useState(true)
  const [tem_piscina, setTemPiscina] = useState(true)
  const [valor_do_condominio, setValorDoCondominio] = useState(0)
  const [preco_de_venda, setPrecoDeVenda] = useState(0)

  const fetchApartamentos = async () => {
    try {
      const data = await getApartamentos()
      setApartamentos(data)
    } catch (error) {
      console.error('Erro ao buscar apartamentos:', error)
    }
  }

  useEffect(() => {
    fetchApartamentos()
  }, [])

  const handleEdit = (apartamento: Apartamento) => {
    setId(apartamento.id)
    setTipo(apartamento.tipo)
    setCondominio(apartamento.condominio)
    setAreaPrivativa(apartamento.area_privativa)
    setAreaComum(apartamento.area_comum)
    setQuantidadeDeQuartos(apartamento.quantidade_de_quartos)
    setQuantidadeDeBanheiros(apartamento.quantidade_de_banheiros)
    setTemChurrasqueira(apartamento.tem_churrasqueira)
    setTemPiscina(apartamento.tem_piscina)
    setValorDoCondominio(apartamento.valor_do_condominio)
    setPrecoDeVenda(apartamento.preco_de_venda)
    setIsModalOpen(true)
  }

  const handleRemove = async (apartamento: Apartamento) => {
    try {
      await removeApartamentos(apartamento.id)
      fetchApartamentos()
    } catch (error) {
      console.error('Erro ao remover apartamento:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addApartamentos(
          tipo,
          condominio,
          area_privativa,
          area_comum,
          quantidade_de_quartos,
          quantidade_de_banheiros,
          tem_churrasqueira,
          tem_piscina,
          valor_do_condominio,
          preco_de_venda
        )
      } else {
        await updateApartamentos(
          id,
          tipo,
          condominio,
          area_privativa,
          area_comum,
          quantidade_de_quartos,
          quantidade_de_banheiros,
          tem_churrasqueira,
          tem_piscina,
          valor_do_condominio,
          preco_de_venda
        )
      }
      fetchApartamentos()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar apartamentos:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE APARTAMENTOS</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            tipo: '',
            condominio: '',
            area_privativa: 0,
            area_comum: 0,
            quantidade_de_quartos: 0,
            quantidade_de_banheiros: 0,
            tem_churrasqueira: false,
            tem_piscina: false,
            valor_do_condominio: 0,
            preco_de_venda: 0,
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR UM NOVO APARTAMENTO
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Tipo</th>
              <th className="border px-4 py-2">condominio</th>
              <th className="border px-4 py-2">Area Privativa </th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {apartamentos.map((apartamento) => (
              <tr key={apartamento.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{apartamento.tipo}</td>
                <td className="border px-4 py-2">{apartamento.condominio}</td>
                <td className="border px-4 py-2">
                  {apartamento.area_privativa}
                </td>
                <td className="border px-4 py-2">{apartamento.area_comum}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(apartamento)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(apartamento)}
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
            <h2 className="text-lg font-bold mb-4">Novo apartamento</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Cadastro de Apartamentos
              </h2>
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-4">
                  <label className="block text-sm font-medium text-gray-900">
                    Tipo
                  </label>
                  <input
                    type="text"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-900">
                    Condominio
                  </label>
                  <input
                    type="text"
                    value={condominio}
                    onChange={(e) => setCondominio(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-5">
                  <label className="block text-sm font-medium text-gray-900">
                    Area privativa
                  </label>
                  <input
                    type="number"
                    value={area_privativa}
                    onChange={(e) => setAreaPrivativa(parseInt(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-900">
                    Area comum
                  </label>
                  <input
                    type="number"
                    value={area_comum}
                    onChange={(e) => setAreaComum(parseInt(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Quantidade de Quartos
                  </label>
                  <input
                    type="number"
                    value={quantidade_de_quartos}
                    onChange={(e) =>
                      setQuantidadeDeQuartos(parseInt(e.target.value))
                    }
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
              </div>
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-900">
                    Quantidade de Banheiros
                  </label>
                  <input
                    type="number"
                    value={quantidade_de_banheiros}
                    onChange={(e) =>
                      setQuantidadeDeBanheiros(parseInt(e.target.value))
                    }
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Tem Churrasqueira
                  </label>
                  <input
                    type="boolean"
                    value={tem_churrasqueira}
                    onChange={(e) => setTemChurrasqueira(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
              </div>
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-900">
                    Tem piscina
                  </label>
                  <input
                    type="boolean"
                    value={tem_piscina}
                    onChange={(e) => setTemPiscina(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Valor do condominio
                  </label>
                  <input
                    type="number"
                    value={valor_do_condominio}
                    onChange={(e) =>
                      setValorDoCondominio(parseInt(e.target.value))
                    }
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
              </div>
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-900">
                    preço de venda
                  </label>
                  <input
                    type="number"
                    value={preco_de_venda}
                    onChange={(e) => setPrecoDeVenda(parseInt(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-sm font-semibold text-gray-900"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
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
