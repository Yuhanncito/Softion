import { Link } from "react-router-dom"

function CommingSong() {
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl w-full px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Proximamente</h1>
          <p className="text-lg text-gray-600 text-center mb-12">¡Esta página estará disponible dentro de poco!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 border" to='/'>Regresar al Inicio</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommingSong