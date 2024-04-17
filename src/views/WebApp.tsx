import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {IoIosArrowDropright} from 'react-icons/io'

function WebApp() {
  const styles = {
    title:'mt-10 text-7xl font-bold mb-8  justify-center flex items-center',
    subtitle: 'text-2xl text-gray-500 font-semibold mb-8 w-[80%]'
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center justify-center items-center flex flex-col"
      >
        <h1 className={styles.title}>Descubre SoftionPro</h1>
        <h3 className={styles.subtitle}>
          SoftionPro es más que una simple herramienta de gestión de proyectos. Es una solución integral que te permite controlar tus actividades basándote en el tiempo que dedicas a cada una. Con SoftionPro, tienes el control total de tus tareas, con la posibilidad de personalizar cada detalle.
        </h3>
        <img src="/images/canvaPage.png" alt="" className=' border-gray-950 shadow-gray-600 w-[70%] shadow-2xl mt-5 hover:scale-110 duration-300'/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center justify-center items-center flex flex-col mt-12 w-[100%] "
      >
        <h1 className={styles.title}>Potencia tus proyectos con SoftionPro</h1>
        <h3 className={styles.subtitle+ " w-[40%]"}>
          SoftionPro te ofrece la posibilidad de llevar un seguimiento detallado de tus tareas, ya sea para un proyecto, tema, asignatura, etc. Con nuestra plataforma, puedes asignar un tiempo específico para cada tarea, lo que te permite tener una estimación precisa del tiempo total necesario para completar un proyecto.
        </h3>
        <p className={styles.subtitle}>Con SoftionPro, puedes:</p>
        <ul className='flex '>
          <li className={styles.subtitle+ " bg-white shadow-xl text-[20px] mx-2 py-4 px-2 flex items-center justify-center hover:scale-105 duration-300"}>Crear Proyectos</li>
          <li className={styles.subtitle+ " bg-white shadow-xl text-[20px] mx-2 py-4 px-2 flex items-center justify-center hover:scale-105 duration-300"}>Asignar Responsables</li>
          <li className={styles.subtitle+ " bg-white shadow-xl text-[20px] mx-2 py-4 px-2 flex items-center justify-center hover:scale-105 duration-300"}>Generar un Diagrama de Gantt</li>
          <li className={styles.subtitle+ " bg-white shadow-xl text-[20px] mx-2 py-4 px-2 flex items-center justify-center hover:scale-105 duration-300"}>Relacionar una tarea con otra</li>
          <li className={styles.subtitle+ " bg-white shadow-xl text-[20px] mx-2 py-4 px-2 flex items-center justify-center hover:scale-105 duration-300"}>Definir la fecha de inicio del proyecto</li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center justify-center items-center flex flex-col mt-12"
      >
        <h1 className={styles.title}>Comienza tu viaje con SoftionPro</h1>
        <div className='flex px-36 mb-16 items-center'>
          <img src="/images/listPage.png" alt="" className=' border-gray-950 shadow-gray-600 w-[50%] shadow-2xl mt-5'/>
          <div className='flex flex-col items-center'>
            <h3 className={styles.subtitle + " w-[85%]  px-12"}>
              SoftionPro es una herramienta web accesible desde cualquier navegador y ahora también desde tu móvil. No importa dónde estés, siempre podrás gestionar tus proyectos con SoftionPro. Haz clic en el botón de abajo para comenzar tu viaje con nosotros.
            </h3>
            <Link to='https://softion2-4.vercel.app/' className=' shadow-lg hover:shadow-none bg-blue-500 hover:bg-blue-700 -translate-y-0.5 hover:translate-y-0 duration-300 text-white font-bold py-2 px-4 rounded flex w-44 h-12 items-center'>Empezar a usar <IoIosArrowDropright className='ml-2'/></Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default WebApp