import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import WebApp from "../views/WebApp";
import Feactures from "../views/Feactures";
import LayoutPublic from "../layouts/LayoutPublic";
import Error404 from "../views/Error404";
import PreguntasFrecuentes from "../views/PreguntasFrecuentes";
import CommingSong from "../views/CommingSong";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<LayoutPublic />,
        errorElement: <Error404 />,
        children:[
            {
                index:true,
                element: <Home />
            },
            {
                path:'/Conocenos',
                element: <About />
            },
            {
                path:'/Aplicacion',
                element: <WebApp />
            },
            {
                path: '/Aplicacion/Carcteristicas',
                element: <Feactures />
            },
            {
                path: '/Preguntasfrecuentes',
                element: <PreguntasFrecuentes />
            },
            {
                path:'/Aplicacion/descarga',
                element: <CommingSong />
            },
            {
                path:'/login',
                element: <CommingSong />
            },
            {
                path:'/register',
                element:<CommingSong />
            }
        ]
    }
])