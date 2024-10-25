'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Empleado = {
  nombre: string
  apellido: string
  email: string
  telefono: string
  puesto: string
  departamento: string
  sueldoActual: number
  fechaPago: string
  fechaRegistro: string
  estado: string
}

export default function ControlEmpleados() {
  const [empleados, setEmpleados] = useState<Empleado[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  useEffect(() => {
    const ceoAuthenticated = localStorage.getItem('ceoAuthenticated')
    if (!ceoAuthenticated) {
      router.push('/login-ceo')
    } else {
      const storedEmpleados = JSON.parse(localStorage.getItem('empleados') || '[]')
      setEmpleados(storedEmpleados)
    }
  }, [router])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase())
  }

  const filteredEmpleados = empleados.filter(empleado => 
    Object.values(empleado).some(value => 
      typeof value === 'string' && value.toLowerCase().includes(searchTerm)
    )
  )

  const handleLogout = () => {
    localStorage.removeItem('ceoAuthenticated')
    router.push('/login-ceo')
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Contratado': return 'bg-green-100 text-green-800'
      case 'Prueba': return 'bg-blue-100 text-blue-800'
      case 'Despedido': return 'bg-red-100 text-red-800'
      case 'Pendiente': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 bg-opacity-90 rounded-lg shadow-xl">
      <Image src="/STORM.png" alt="STORM Logo" width={128} height={128} className="mx-auto mb-6 filter drop-shadow-lg" />
      <h1 className="text-3xl font-bold text-center mb-6">Control de Empleados STORM</h1>
      <p className="text-center text-gray-400 mb-8">Empresa de Producción y Distribución</p>
      
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Buscar empleado..." 
          className="w-full px-4 py-2 rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          onChange={handleSearch}
        />
      </div>

      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Puesto</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Departamento</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Sueldo Actual</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Estado</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {filteredEmpleados.map((empleado, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{`${empleado.nombre} ${empleado.apellido}`}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{empleado.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{empleado.puesto}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{empleado.departamento}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${empleado.sueldoActual}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(empleado.estado)}`}>
                    {empleado.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <button onClick={handleLogout} className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        Cerrar Sesión
      </button>
      <Link href="/registro-empleados" className="block mt-4 text-center text-blue-400 hover:text-blue-300">Volver a Registro de Empleados</Link>
      <Link href="/" className="block mt-2 text-center text-blue-400 hover:text-blue-300">Volver al Inicio</Link>
    </div>
  )
}