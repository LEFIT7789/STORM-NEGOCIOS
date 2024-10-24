import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 bg-opacity-90 rounded-lg shadow-xl">
      <Image src="/STORM.png" alt="STORM Logo" width={128} height={128} className="mx-auto mb-6 filter drop-shadow-lg" />
      <h1 className="text-4xl font-bold text-center mb-6">STORM - Sistema de Gestión de Empleados</h1>
      <p className="text-center text-gray-400 mb-12">Bienvenido al portal de gestión de empleados de STORM</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/registro-empleados" className="bg-gray-800 rounded-lg p-6 text-center transition duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
          <div className="text-4xl mb-4">👥</div>
          <h2 className="text-2xl font-semibold mb-2">Registro de Empleados</h2>
          <p className="text-gray-400">Registra nuevos empleados en el sistema</p>
        </Link>
        <Link href="/control-empleados" className="bg-gray-800 rounded-lg p-6 text-center transition duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
          <div className="text-4xl mb-4">📊</div>
          <h2 className="text-2xl font-semibold mb-2">Control de Empleados</h2>
          <p className="text-gray-400">Gestiona y visualiza la información de los empleados</p>
        </Link>
        <Link href="/login-ceo" className="bg-gray-800 rounded-lg p-6 text-center transition duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
          <div className="text-4xl mb-4">🔐</div>
          <h2 className="text-2xl font-semibold mb-2">Acceso CEO</h2>
          <p className="text-gray-400">Área exclusiva para el CEO</p>
        </Link>
      </div>
    </div>
  )
}