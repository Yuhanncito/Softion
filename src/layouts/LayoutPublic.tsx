import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "../components/breadcrumbs";

const LayoutPublic = () => {
    return (
        <div>
            <Header />
            <div className='flex justify-center'>
                <Breadcrumbs />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};
export default LayoutPublic;