'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Empleado {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  puesto: string;
  departamento: string;
  sueldoDeseado: number;
  fechaRegistro: string;
  estado: string;
  sueldoActual: number;
  fechaPago: string;
}

export default function RegistroEmpleados() {
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const empleadoData = Object.fromEntries(formData.entries()) as Record<string, string>
    
    const empleado: Empleado = {
      ...empleadoData,
      fechaRegistro: new Date().toISOString().split('T')[0],
      estado: 'Pendiente',
      sueldoDeseado: parseFloat(empleadoData.sueldoDeseado) || 0,
      sueldoActual: 0,
      fechaPago: '',
    } as Empleado
    
    const empleados: Empleado[] = JSON.parse(localStorage.getItem('empleados') || '[]')
    empleados.push(empleado)
    localStorage.setItem('empleados', JSON.stringify(empleados))
    
    setSuccessMessage('¡Registro exitoso! Su solicitud está pendiente de aprobación.')
    e.currentTarget.reset()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-md bg-gray-800 bg-opacity-90 rounded-lg shadow-xl">
      <Image src="/STORM.png" alt="STORM Logo" width={128} height={128} className="mx-auto mb-6 filter drop-shadow-lg" />
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Registro de Empleados STORM</h1>
      <p className="text-center text-gray-400 mb-8">Empresa de Producción y Distribución</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">Nombre</label>
          <input type="text" id="nombre" name="nombre" required className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="apellido" className="block text-sm font-medium text-gray-300">Apellido</label>
          <input type="text" id="apellido" name="apellido" required className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Correo Electrónico</label>
          <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-300">Número de Celular</label>
          <input type="tel" id="telefono" name="telefono" required className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="puesto" className="block text-sm font-medium text-gray-300">Puesto Deseado</label>
          <input type="text" id="puesto" name="puesto" required className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="departamento" className="block text-sm font-medium text-gray-300">Departamento</label>
          <select id="departamento" name="departamento" required className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
            <option value="">Selecciona un departamento</option>
            <option value="Producción">Producción</option>
            <option value="Distribución">Distribución</option>
            <option value="Administración">Administración</option>
            <option value="Ventas">Ventas</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
          </select>
        </div>
        <div>
          <label htmlFor="sueldoDeseado" className="block text-sm font-medium text-gray-300">Sueldo Deseado</label>
          <input type="number" id="sueldoDeseado" name="sueldoDeseado" required min="0" step="0.01" className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Registrar
        </button>
      </form>
      {successMessage && <p className="mt-4 text-center text-green-400">{successMessage}</p>}
      <Link href="/login-ceo" className="block mt-4 text-center text-blue-400 hover:text-blue-300">Acceso CEO</Link>
      <Link href="/" className="block mt-2 text-center text-blue-400 hover:text-blue-300">Volver al Inicio</Link>
    </div>
  )
}