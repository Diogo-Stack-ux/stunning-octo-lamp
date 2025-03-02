import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="flex">
          <aside className="w-64 h-screen bg-gray-800 text-gray-100">
            <div className="p-4 text-xl font-semibold border-b border-gray-700">
              MENU
            </div>
            <nav className="mt-4">
              <ul>
                <li>
                  <a
                    href="clientes"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="red" // Altere para a cor desejada
                      stroke="blue" // Altere para a cor desejada"
                      strokeWidth="1"
                      width="24px"
                      height="24px"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M687 479.8c-12.7-6.2-25.7-11.8-38.9-16.6 49.8-40.3 81.6-101.8 81.6-170.6 0-12.6-1.1-24.9-3.1-36.9h78.2v-73.1H700.2c-38-65.4-108.9-109.4-189.8-109.4-121 0-219.4 98.4-219.4 219.4 0 68.9 31.9 130.5 81.7 170.7-154.2 56.4-264.6 204.5-264.6 378h73.1c0-181.5 147.7-329.1 329.1-329.1 50.7 0 99.3 11.2 144.5 33.3l32.2-65.7z m-80.3-297.2H414c25.8-22.6 59.5-36.3 96.3-36.3 36.9 0 70.6 13.7 96.4 36.3z m-237.9 73.1H652c3.1 11.8 4.7 24.1 4.7 36.9 0 80.7-65.6 146.3-146.3 146.3s-146.3-65.6-146.3-146.3c0-12.8 1.6-25.1 4.7-36.9zM731.5 548.7c-101 0-182.9 81.9-182.9 182.9s81.9 182.9 182.9 182.9 182.9-81.9 182.9-182.9c-0.1-101-81.9-182.9-182.9-182.9z m0 292.6c-60.5 0-109.7-49.2-109.7-109.7S671 621.9 731.5 621.9s109.7 49.2 109.7 109.7S792 841.3 731.5 841.3z"
                        fill="#0F1F3C"
                      />
                      <path
                        d="M758.9 655.7H704V743l69.4 68.8 38.6-39-53.1-52.7z"
                        fill="#0F1F3C"
                      />
                    </svg>
                    clientes
                  </a>
                </li>

                <li>
                  <a
                    href="products"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    products
                  </a>
                </li>

                <li>
                  <a
                    href="carros"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    carros
                  </a>
                </li>
                <li>
                  <a
                    href="instrutores"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    instrutores
                  </a>
                </li>

                <li>
                  <a
                    href="alunos"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    alunos
                  </a>
                </li>
                <li>
                  <a
                    href="materias"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    materias
                  </a>
                </li>
                <li>
                  <a
                    href="livros"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    livros
                  </a>
                </li>
                <li>
                  <a
                    href="filmes"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    filmes
                  </a>
                </li>
                <li>
                  <a
                    href="pneus"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    pneus
                  </a>
                </li>
                <li>
                  <a
                    href="instrumentos"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    instrumentos
                  </a>
                </li>
                <li>
                  <a
                    href="computadores"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    Computadores
                  </a>
                </li>
                <li>
                  <a
                    href="casas"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    Casas
                  </a>
                </li>
                <li>
                  <a
                    href="apartamentos"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    Apartamentos
                  </a>
                </li>
                <li>
                  <a
                    href="casa_de_oracao"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    Casa de oração
                  </a>
                </li>
                <li>
                  <a
                    href="hinos"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    Hinos
                  </a>
                </li>
                <li>
                  <a
                    href="usuarios"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    usuarios
                  </a>
                </li>
                <li>
                  <a
                    href="curriculos"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    curriculos
                  </a>
                </li>
                <li>
                  <a
                    href="animais"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    animais
                  </a>
                </li>
                <li>
                  <a
                    href="escolas"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    escolas
                  </a>
                </li>
                <li>
                  <a
                    href="professores"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="black" // Altere para a cor desejada"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5v14"
                      ></path>
                    </svg>
                    professores
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
