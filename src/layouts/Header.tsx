    import {Link} from 'react-router-dom';


    
    function Header() {


      const navs = 'text-black hover:text-blue-950 font-semibold hover:translate-y-0.5 transition-all ml-2 w-auto h-12 flex justify-around items-center text-xl max-sm:text-sm'
  
      return (
        <>
        <header className="max-sm:flex-col flex justify-center items-center bg-white w-full py-6 px-20 shadow-md shadow-gray-200">
          <div className="  max-sm:flex-col flex items-center justify-between">
            <Link to='/' className='flex justify-center items-center'>
              <img src='/Imagen1.ico' alt="Logo" className="mr-4 w-14 rounded-lg shadow-md shadow-gray-400 bg-transparent" />
              <h1 className=' font-bold text-[30px] font-sans'>SoftionPro</h1>
            </Link>
            
            <nav className='ml-5 max-sm:ml-0 flex max-sm:flex-col'>
            <ul className="flex mr-20 w-full max-sm:justify-center max-sm:my-1">
              <li className="mx-4">
                <Link to="/" className={navs}
                >Inicio </Link>
              </li>
              <li className="mx-2">
                <Link to="/Aplicacion" className={navs}>Aplicacion </Link>
              </li>
              <li className="mx-2">
                <Link to="/Conocenos" className={navs}>Conócenos </Link>
              </li>
            </ul>
          </nav>
          </div>
          <nav className=' px-8 flex max-sm:mr-0 -mr-5 max-sm:h-full '>
            <ul className="flex">
              <li className="mx-2">
                <Link to="https://softion2-4.vercel.app/"  className=' max-sm:text-sm max-sm:w-32 shadow-lg shadow-gray-300 hover:shadow-none bg-blue-500 hover:bg-blue-700 -translate-y-0.5 hover:translate-y-0 duration-300 text-white font-bold py-2 px-4 rounded flex w-auto h-12 items-center'>Iniciar Sesion</Link>
              </li>
              <li className="mx-2">
                <Link to="https://softion2-4.vercel.app/register" className='bg-gray-200 shadow-lg shadow-gray-300 duration-300 hover:translate-x-0.5 text-gray-600 font-bold py-2 px-4 rounded flex w-auto h-12 items-center'>Registrarse</Link>
              </li>
            </ul>
          </nav>
        </header>
        </>
      )
    }
  
    export default Header