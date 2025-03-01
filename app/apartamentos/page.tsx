export default function Page() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold text-gray-900">
            apartamentos
          </h2>
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="tipo_apartamento"
          className="block text-sm font-medium text-gray-900"
        >
          Tipo de Apartamento
        </label>
        <div className="mt-2">
          <select
            id="tipo_apartamento"
            name="tipo_apartamento"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
          >
            <option value="">Selecione</option>
            <option value="1quarto">1 Quarto</option>
            <option value="2quartos">2 Quartos</option>
            <option value="3quartos">3 Quartos</option>
            <option value="cobertura">Cobertura</option>
            <option value="studio">Studio</option>
          </select>
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="condominio"
          className="block text-sm font-medium text-gray-900"
        >
          Condomínio
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="condominio"
            name="condominio"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Nome do Condomínio"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="area_privativa"
          className="block text-sm font-medium text-gray-900"
        >
          Área Privativa (m²)
        </label>
        <div className="mt-2">
          <input
            type="number"
            id="area_privativa"
            name="area_privativa"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Digite a área privativa em metros quadrados"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="area_comum"
          className="block text-sm font-medium text-gray-900"
        >
          Área Comum (m²)
        </label>
        <div className="mt-2">
          <input
            type="number"
            id="area_comum"
            name="area_comum"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Digite a área comum em metros quadrados"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="quant_quartos"
          className="block text-sm font-medium text-gray-900"
        >
          Quantidade de Quartos
        </label>
        <div className="mt-2">
          <input
            type="number"
            id="quant_quartos"
            name="quant_quartos"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Digite a quantidade de quartos"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="quant_banheiros"
          className="block text-sm font-medium text-gray-900"
        >
          Quantidade de Banheiros
        </label>
        <div className="mt-2">
          <input
            type="number"
            id="quant_banheiros"
            name="quant_banheiros"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Digite a quantidade de banheiros"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="tem_churrasqueira"
          className="block text-sm font-medium text-gray-900"
        >
          Tem Churrasqueira?
        </label>
        <div className="mt-2">
          <select
            id="tem_churrasqueira"
            name="tem_churrasqueira"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
          >
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="tem_piscina"
          className="block text-sm font-medium text-gray-900"
        >
          Tem Piscina?
        </label>
        <div className="mt-2">
          <select
            id="tem_piscina"
            name="tem_piscina"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
          >
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="valor_condominio"
          className="block text-sm font-medium text-gray-900"
        >
          Valor do Condomínio
        </label>
        <div className="mt-2">
          <input
            type="number"
            id="valor_condominio"
            name="valor_condominio"
            min="0"
            placeholder="Digite o valor mensal do condomínio"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="preco_venda"
          className="block text-sm font-medium text-gray-900"
        >
          Preço de Venda
        </label>
        <div className="mt-2">
          <input
            type="number"
            id="preco_venda"
            name="preco_venda"
            min="0"
            placeholder="Digite o preço de venda"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
          />
        </div>
      </div>
    </form>
  )
}
