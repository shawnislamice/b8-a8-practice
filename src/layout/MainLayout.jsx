import { Outlet } from "react-router-dom";
import { NavbarSimple } from "../pages/Shared/NavBar/NavbarSimple";

const MainLayout = () => {
    return (
        <div>
            <NavbarSimple></NavbarSimple>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;