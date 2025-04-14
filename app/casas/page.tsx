'use client'

import { useEffect, useState } from 'react'
import { addCasas, getCasas, removeCasas, updateCasas } from '@/lib/casas/casas'

interface Casa {
  id: number
  tipo: string
  endereco: string
  area_terreno: number
  area_construida: number
  quantidade_quartos: number
  quantidade_banheiros: number
  tem_edicula: boolean
  tem_churrasqueira: boolean
  tem_piscina: boolean
  valor_condominio: number
  preco_venda: number
}

export default function Page() {
  const [casas, setCasas] = useState<Casa[]>([])
  const [id, setId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tipo, setTipo] = useState('')
  const [endereco, setEndereco] = useState('')
  const [areaTerreno, setAreaTerreno] = useState(0)
  const [areaConstruida, setAreaConstruida] = useState(0)
  const [quantidadeDeQuartos, setQuantidadeDeQuartos] = useState(0)
  const [quantidadeBanheiros, setQuantidadeBanheiros] = useState(0)
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
      console.error('Erro ao buscar casas:', error)
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
    setQuantidadeDeQuartos(casa.quantidade_quartos)
    setQuantidadeBanheiros(casa.quantidade_banheiros)
    setTemEdicula(casa.tem_edicula)
    setTemChurrasqueira(casa.tem_churrasqueira)
    setTemPiscina(casa.tem_piscina)
    setValorDoCondominio(casa.valor_condominio || 0)
    setPrecoDeVenda(casa.preco_venda || 0)
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

  const resetForm = () => {
    setId(0)
    setTipo('')
    setEndereco('')
    setAreaTerreno(0)
    setAreaConstruida(0)
    setQuantidadeDeQuartos(0)
    setQuantidadeBanheiros(0)
    setTemEdicula(false)
    setTemChurrasqueira(false)
    setTemPiscina(false)
    setValorDoCondominio(0)
    setPrecoDeVenda(0)
  }

  const closeModal = () => {
    resetForm()
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
          quantidadeBanheiros,
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
          quantidadeBanheiros,
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
      <h1 className="text-2xl font-bold mb-4">CADASTRO DE CASAS</h1>
      <button
        onClick={() =>
          handleEdit({
            id: 0,
            tipo: '',
            endereco: '',
            area_terreno: 0,
            area_construida: 0,
            quantidade_quartos: 0,
            quantidade_banheiros: 0,
            tem_edicula: false,
            tem_churrasqueira: false,
            tem_piscina: false,
            valor_condominio: 0,
            preco_venda: 0,
          })
        }
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
      >
        ADICIONAR UMA NOVA CASA
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Tipo</th>
              <th className="border px-4 py-2">Endereço</th>
              <th className="border px-4 py-2">Área Terreno</th>
              <th className="border px-4 py-2">Área Construída</th>
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
          <div className="bg-white p-6 rounded-md w-full max-w-4xl">
            <h2 className="text-lg font-bold mb-4">Cadastro de casas</h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
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
              <div>
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
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Área Terreno
                </label>
                <input
                  type="number"
                  value={areaTerreno}
                  onChange={(e) => setAreaTerreno(parseInt(e.target.value))}
                  className="w-full rounded-md border-gray-300 px-3 py-1.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Área Construída
                </label>
                <input
                  type="number"
                  value={areaConstruida}
                  onChange={(e) => setAreaConstruida(parseInt(e.target.value))}
                  className="w-full rounded-md border-gray-300 px-3 py-1.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Quartos
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
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Banheiros
                </label>
                <input
                  type="number"
                  value={quantidadeBanheiros}
                  onChange={(e) =>
                    setQuantidadeBanheiros(parseInt(e.target.value))
                  }
                  className="w-full rounded-md border-gray-300 px-3 py-1.5"
                />
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={temEdicula}
                    onChange={(e) => setTemEdicula(e.target.checked)}
                  />
                  <span>Tem Edícula</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={temChurrasqueira}
                    onChange={(e) => setTemChurrasqueira(e.target.checked)}
                  />
                  <span>Tem Churrasqueira</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={temPiscina}
                    onChange={(e) => setTemPiscina(e.target.checked)}
                  />
                  <span>Tem Piscina</span>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Valor do Condomínio
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
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Preço de Venda
                </label>
                <input
                  type="number"
                  value={precoDeVenda}
                  onChange={(e) => setPrecoDeVenda(parseInt(e.target.value))}
                  className="w-full rounded-md border-gray-300 px-3 py-1.5"
                />
              </div>
              <div className="md:col-span-2 flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-700 font-semibold"
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
