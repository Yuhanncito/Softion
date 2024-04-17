import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {IoIosArrowDropright} from 'react-icons/io'

function Home() {

  const styles = {
    title:' max-sm:text-3xl mt-10 max-sm:mb-4 text-7xl font-bold mb-8 w-96  justify-center flex items-center',
    subtitle: ' max-sm:text-sm max-sm:mb-4 text-2xl text-gray-500 font-bold mb-8 w-[80%]'
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center justify-center items-center flex flex-col"
      >
        <h1 className={styles.title}>Una mejor opción</h1>
        <h3 className={styles.subtitle}>
          Una herramienta de gestión de proyectos con la peculiaridad de poder gestionar tus actividades por horas dedicadas a cada tarea.
        </h3>
        <img src="/images/loginSoftio.png" alt="" className=' border-gray-950 shadow-gray-600 w-[70%] shadow-2xl mt-5 hover:scale-110 duration-300'/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center justify-center items-center flex flex-col mt-12"
      >
        <h1 className={styles.title}>Organízate mejor</h1>
        <h3 className={styles.subtitle+ " w-[40%]"}>
          Al tener una capasidad de organizar los trabajos y personalizar el contenido de cada tarea, mantener un order y organización entre cada una de las actividades será mas efectiva
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center justify-center items-center flex flex-col mt-12 max-sm:mt-5"
      >
        <h1 className={styles.title}>Fácil de Usar</h1>
        <div className='flex max-sm:flex-col px-36 max-sm:px-16 max-sm:mb-8 mb-16 items-center'>
          <img src="/images/homeSoftion.png" alt="" className=' border-gray-950 max-sm:mb-10 shadow-gray-600 max-sm:w-full w-[50%] shadow-2xl mt-5'/>
          <div className='flex flex-col items-center '>
            <h3 className={styles.subtitle + " max-sm:w-full max-sm:px-2 w-[85%]  px-12"}>
              Por su interfás facil y sencilla de entender y de aprender, organizar tus actividades será una tarea facil de hacer. Gracias a sus diversas opciones, tendrás una gran variedad de personalización en tus tareas       
            </h3>
            <Link to='https://softion2-4.vercel.app/' className=' shadow-lg hover:shadow-none bg-blue-500 hover:bg-blue-700 -translate-y-0.5 hover:translate-y-0 duration-300 text-white font-bold py-2 px-4 max-sm:w-22 max-sm:text-sm  max-sm:justify-center max-sm:py-1 max-sm:px-2  rounded flex w-44 h-12 items-center'>Empezar a usar <IoIosArrowDropright className='ml-2'/></Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Home