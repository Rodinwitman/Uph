import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {Home} from "../pages/Home/Home";
import {About} from "../pages/Home/About";
import {Contact} from "../pages/Home/Contact";
import { adminRoutes } from "./admin/adminRoutes";

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
            
            // on separe les routes pour chaque roles
            ...adminRoutes
        ]
    }

])
