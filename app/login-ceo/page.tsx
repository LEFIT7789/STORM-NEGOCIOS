'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginCEO() {
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const nombre = formData.get('nombre') as string
    const password = formData.get('password') as string

    if (nombre === 'LEFIT7789' && password === 'STORM2024') {
      localStorage.setItem('ceoAuthenticated', 'true')
      router.push('/control-empleados')
    } else {
      setErrorMessage('Credenciales incorrectas. Por favor, intente de nuevo.')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-md bg-gray-800 bg-opacity-90 rounded-lg shadow-xl">
      <Image src="/STORM.png" alt="STORM Logo" width={128} height={128} className="mx-auto mb-6 filter drop-shadow-lg" />
      <h1 className="text-3xl font-bold text-center mb-6">Acceso CEO - STORM</h1>
      <p className="text-center text-gray-400 mb-8">Ingrese sus credenciales para acceder al control de empleados</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">Nombre del CEO</label>
          <input  type="text" id="nombre" name="nombre" required className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">Contraseña</label>
          <input type="password" id="password" name="password" required className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Iniciar Sesión
        </button>
      </form>
      {errorMessage && <p className="mt-4 text-center text-red-400">{errorMessage}</p>}
      <Link href="/registro-empleados" className="block mt-4 text-center text-blue-400 hover:text-blue-300">Volver a Registro de Empleados</Link>
      <Link href="/" className="block mt-2 text-center text-blue-400 hover:text-blue-300">Volver al Inicio</Link>
    </div>
  )
}