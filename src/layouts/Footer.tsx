import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='flex h-44 bg-gray-300'>
          <div className="h-[100%]  container mx-auto px-6">
            <div className=" h-[100%] border-t-2 border-gray-300 flex flex-col items-center">
              <div className="h-[100%] flex flex-col justify-center items-center sm:w-2/3 text-center py-6">
                <p className="text-sm text-blue-700 font-bold mb-2">
                  © 2021 por Administradora de Comercios y Franquicias. Todos los derechos reservados.
                </p>
                <div className="flex justify-center mt-4 space-x-4">
                  <Link to="/Conocenos" className="text-sm text-blue-700 font-bold hover:underline">
                    Conócenos
                  </Link>
                  <Link to="/Aplicacion" className="text-sm text-blue-700 font-bold hover:underline">
                    App Web
                  </Link>
                  <Link to="/PreguntasFrecuentes" className="text-sm text-blue-700 font-bold hover:underline">
                    Preguntas Frecuentes
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </footer>
  )
}

export default Footer