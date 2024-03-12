import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {IoIosArrowDropright} from 'react-icons/io'

function PreguntasFrecuentes() {
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
        <h1 className={styles.title}>¿Qué es SoftionPro?</h1>
        <h3 className={styles.subtitle}>
          SoftionPro es una herramienta de gestión de proyectos con la peculiaridad de poder gestionar tus actividades por horas dedicadas a cada tarea.
          Permite la personalización de informacion de cara una de las tareas que se ingresan dentro del panel de tareas, en la cual se presentan opciones como el tiempo en el cual se va a concluir dicha actividad, ademas, de que actividad se hizo antes y cual se hará despues de conlcuir esa.
        </h3>
        <img src="/images/loginSoftio.jpg" alt="" className=' border-gray-950 shadow-gray-600 w-[70%] shadow-2xl mt-5 hover:scale-110 duration-300'/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center justify-center items-center flex flex-col mt-12 w-[100%] "
      >
        <h1 className={styles.title}>¿Qué puedo hacer?</h1>
        <h3 className={styles.subtitle+ " w-[40%]"}>
          Con SoftionPro puedes llevar un control de las tareas que tengas dependiendo algun proyecto, tema, asignatura, etc. Cada tarea puede tener un cierto tiempo para su realización y conclución, esta se define al inicio de la creacion de una tarea ya que, mediante horas, podrás optener el total de tiempo que se ocupará para el desarrollo de algun proyecto o la conclusion de dicha tarea.
        </h3>
        <p className={styles.subtitle}>Ademas de poder hacer lo siguiente</p>
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
        <h1 className={styles.title}>¿Dónde Empezar?</h1>
        <div className='flex px-36 mb-16 items-center'>
          <img src="/images/homeSoftion.jpg" alt="" className=' border-gray-950 shadow-gray-600 w-[50%] shadow-2xl mt-5'/>
          <div className='flex flex-col items-center'>
            <h3 className={styles.subtitle + " w-[85%]  px-12"}>
              Esta es una Herramienta en la web, la cual te permite acceder desde cualquier navegador, siempre y cuando cuentes con una conexión a internet. Para poder iniciar a utilizar SoftionPro da click en el botón de abajo
            </h3>
            <Link to='/Aplicacion/descarga' className=' shadow-lg hover:shadow-none bg-blue-500 hover:bg-blue-700 -translate-y-0.5 hover:translate-y-0 duration-300 text-white font-bold py-2 px-4 rounded flex w-44 h-12 items-center'>Empezar a usar <IoIosArrowDropright className='ml-2'/></Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default PreguntasFrecuentes