  import { Link, useLocation } from 'react-router-dom';
  import { IoIosHome } from "react-icons/io";

  function Breadcrumbs() {
    let location = useLocation();
    let pathnames = location.pathname.split('/').filter((item) => item);

    const clases = 'mx-2 hover:text-blue-500 font-lg text-lg flex justify-center item-center'

    let breadcrumbComponents = pathnames.map((value, index) => {
      const to = `/${pathnames.slice(0, index + 1).join('/')}`;
      
      return (
        <Link key={to} to={to} className={clases}>{value}</Link>
      );
    });

    return (
      <div className='w-[70%] flex px-5 py-3 items-center h-12'>
      <Link to="/" className={clases}><IoIosHome /></Link>
      /
      {breadcrumbComponents.length > 0 && breadcrumbComponents.reduce((prev, curr) => (
        <>
          {prev}
          <span> / </span>
          {curr}
        </>
      ))}
    </div>
    );
  }

  export default Breadcrumbs;
