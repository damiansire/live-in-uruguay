import React from "react"

const Header = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-azulcito p-3">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span class="font-semibold text-xl tracking-tight">Vivir en UY</span>
      </div>

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <ul class="flex">
            <li class="mr-3">
              <a
                class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
                href="#"
              >
                Beneficios
              </a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
                href="/selectCard"
              >
                Beneficios por tarjeta
              </a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block py-1 px-3 text-gray-400 cursor-not-allowed"
                href="#"
              >
                Proximamente
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
