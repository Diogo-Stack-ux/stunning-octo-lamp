'use client'

import { useEffect, useState } from 'react'
import { addCasas, getCasas, removeCasas, updateCasas } from '@/lib/casas/casas'

interface Casa {
  id: number
  tipo: string
  endereco: string
  area_terreno: number
  area_construida: number
  quantidade_de_quartos: number
  quantidade_de_banheiros: number
  tem_churrasqueira: boolean
  tem_piscina: boolean
  valor_do_condominio: number
  preco_de_venda: number
}

export default function Page() {
  const [casas, setCasas] = useState<Casa[]>([])
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tipo, setTipo] = useState('tipo')
  const [endereco, setEndereco] = useState('endereco')
  const [areaTerreno, setAreaTerreno] = useState(0)
  const [areaConstruida, setAreaConstruida] = useState(0)
  const [quantidadeDeQuartos, setQuantidadeDeQuartos] = useState(0)
  const [quantidadeDeBanheiros, setQuantidadeDeBanheiros] = useState(0)
  const [temEdicula, setTemEdicula] = useState(false)
  const [temChurrasqueira, setTemChurrasqueira] = useState(false)
  const [temPiscina, setTemPiscina] = useState(false)
  const [valorDoCondominio, setValorDoCondominio] = useState(0)
  const [precoDeVenda, setPrecoDeVenda] = useState(0)

  const fetchCasas = async () => {
    try {
      const data = await getCasas()
      setCasas(data)
    } catch (error) {
      console.error('Erro ao buscar apartamentos:', error)
    }
  }

  useEffect(() => {
    fetchCasas()
  }, [])

  const handleEdit = (casa: Casa) => {
    setId(casa.id)
    setTipo(casa.tipo)
    setEndereco(casa.endereco)
    setAreaTerreno(casa.area_terreno)
    setAreaConstruida(casa.area_construida)
    setQuantidadeDeQuartos(casa.quantidade_de_quartos)
    setQuantidadeDeBanheiros(casa.quantidade_de_banheiros)
    setTemEdicula(casa.temEdicula)
    setTemChurrasqueira(casa.tem_churrasqueira)
    setTemPiscina(casa.tem_piscina)
    setValorDoCondominio(casa.valor_do_condominio)
    setPrecoDeVenda(casa.preco_de_venda)
    setIsModalOpen(true)
  }

  const handleRemove = async (casa: Casa) => {
    try {
      await removeCasas(casa.id)
      fetchCasas()
    } catch (error) {
      console.error('Erro ao remover casa:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === 0) {
        await addCasas(
          tipo,
          endereco,
          areaTerreno,
          areaConstruida,
          quantidadeDeQuartos,
          quantidadeDeBanheiros,
          temEdicula,
          temChurrasqueira,
          temPiscina,
          valorDoCondominio,
          precoDeVenda
        )
      } else {
        await updateCasas(
          id,
          tipo,
          endereco,
          areaTerreno,
          areaConstruida,
          quantidadeDeQuartos,
          quantidadeDeBanheiros,
          temEdicula,
          temChurrasqueira,
          temPiscina,
          valorDoCondominio,
          precoDeVenda
        )
      }
      fetchCasas()
      closeModal()
    } catch (error) {
      console.error('Erro ao salvar casas:', error)
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
              <th className="border px-4 py-2">Endereço</th>
              <th className="border px-4 py-2">Area Terreno </th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {casas.map((casa) => (
              <tr key={casa.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{casa.tipo}</td>
                <td className="border px-4 py-2">{casa.endereco}</td>
                <td className="border px-4 py-2">{casa.area_terreno}</td>
                <td className="border px-4 py-2">{casa.area_construida}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(casa)}
                    className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleRemove(casa)}
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
            <h2 className="text-lg font-bold mb-4">Casa de Aluguel</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Cadastro de casas
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
                    Endereço
                  </label>
                  <input
                    type="text"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-5">
                  <label className="block text-sm font-medium text-gray-900">
                    Area Terreno
                  </label>
                  <input
                    type="number"
                    value={areaTerreno}
                    onChange={(e) => setAreaTerreno(parseInt(e.target.value))}
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-900">
                    Area Construida
                  </label>
                  <input
                    type="number"
                    value={areaConstruida}
                    onChange={(e) =>
                      setAreaConstruida(parseInt(e.target.value))
                    }
                    className="w-full rounded-md border-gray-300 px-3 py-1.5"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Quantidade de Quartos
                  </label>
                  <input
                    type="number"
                    value={quantidadeDeQuartos}
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
                    value={quantidadeDeBanheiros}
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
                    value={temChurrasqueira}
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
                    value={temPiscina}
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
                    value={valorDoCondominio}
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
                    value={precoDeVenda}
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
