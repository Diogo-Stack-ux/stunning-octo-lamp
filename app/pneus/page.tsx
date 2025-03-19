'use client'

import { addPneus } from '@/lib/pneus/pneus'
import { useState } from 'react'

export default function Page() {
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [largura, setLargura] = useState(0)
  const [raio, setRaio] = useState(0)
  const [especura, setEspecura] = useState(0)
  const [carga_maxima, setCargaMaxima] = useState(0)

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await addPneus(marca, modelo, largura, raio, especura, carga_maxima)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">PNEUS</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold text-gray-900"></h2>
            <p className="mt-1 text-sm text-gray-600">
              AS MELHORS MARCAS ESTÃO AQUI.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-900"
                >
                  MARCA
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="name"
                    value={marca}
                    onChange={(event) => setMarca(event.target.value)}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="modelo"
                  className="block text-sm font-medium text-gray-900"
                >
                  Modelo
                </label>
                <div className="mt-2">
                  <input
                    id="modelo"
                    value={modelo}
                    onChange={(event) => setModelo(event.target.value)}
                    type="text"
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="largura"
                  className="block text-sm font-medium text-gray-900"
                >
                  largura
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="largura"
                    value={largura}
                    onChange={(event) =>
                      setLargura(parseInt(event.target.value))
                    }
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="raio"
                  className="block text-sm font-medium text-gray-900"
                >
                  Raio
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="raio"
                    value={raio}
                    onChange={(event) => setRaio(parseInt(event.target.value))}
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="especura"
                  className="block text-sm font-medium text-gray-900"
                >
                  especura
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id=""
                    value={especura}
                    onChange={(event) =>
                      setEspecura(parseInt(event.target.value))
                    }
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="carga_maxima"
                  className="block text-sm font-medium text-gray-900"
                >
                  carga maxima
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="especura"
                    value={carga_maxima}
                    onChange={(event) =>
                      setCargaMaxima(parseInt(event.target.value))
                    }
                    className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold text-gray-900">
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
  )
}
