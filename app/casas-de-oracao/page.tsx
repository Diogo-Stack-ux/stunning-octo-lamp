export default function Page() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold text-gray-900">
            Casas de Oração
          </h2>
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="nome"
          className="block text-sm font-medium text-gray-900"
        >
          Nome da Casa de Oração
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="nome"
            name="nome"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Digite o nome da Casa de Oração"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="endereco"
          className="block text-sm font-medium text-gray-900"
        >
          Endereço
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="endereco"
            name="endereco"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Digite o endereço completo"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="anciao"
          className="block text-sm font-medium text-gray-900"
        >
          Ancião
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="anciao"
            name="anciao"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Nome do Ancião"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="telefone_anciao"
          className="block text-sm font-medium text-gray-900"
        >
          Telefone do Ancião
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="telefone_anciao"
            name="telefone_anciao"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Telefone do Ancião"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="cooperador"
          className="block text-sm font-medium text-gray-900"
        >
          Cooperador
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="cooperador"
            name="cooperador"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Nome do Cooperador"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="telefone_cooperador"
          className="block text-sm font-medium text-gray-900"
        >
          Telefone do Cooperador
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="telefone_cooperador"
            name="telefone_cooperador"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Telefone do Cooperador"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="cooperador_jovens"
          className="block text-sm font-medium text-gray-900"
        >
          Cooperador de Jovens
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="cooperador_jovens"
            name="cooperador_jovens"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Nome do Cooperador de Jovens"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="telefone_cooperador_jovens"
          className="block text-sm font-medium text-gray-900"
        >
          Telefone do Cooperador de Jovens
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="telefone_cooperador_jovens"
            name="telefone_cooperador_jovens"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Telefone do Cooperador de Jovens"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="diacono"
          className="block text-sm font-medium text-gray-900"
        >
          Diácono
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="diacono"
            name="diacono"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Nome do Diácono"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="telefone_diacono"
          className="block text-sm font-medium text-gray-900"
        >
          Telefone do Diácono
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="telefone_diacono"
            name="telefone_diacono"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Telefone do Diácono"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="numero_santa_ceia"
          className="block text-sm font-medium text-gray-900"
        >
          Número da Última Santa Ceia
        </label>
        <div className="mt-2">
          <input
            type="number"
            id="numero_santa_ceia"
            name="numero_santa_ceia"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Digite o número da última Santa Ceia"
          />
        </div>
      </div>
    </form>
  )
}
