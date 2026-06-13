import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {Home} from "../pages/Home/Home";
import {About} from "../pages/Home/About";
import {Contact} from "../pages/Home/Contact";
import { DashboardAdmin } from "../pages/Admin/Dashboard";
export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/DashboardAdmin",
                element: <DashboardAdmin/>
            }
        ]
    }

])
