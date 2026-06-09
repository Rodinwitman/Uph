import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/home";
import About from "../pages/About/about";
import Contact from "../pages/Contact/contact";

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
            }
        ]
    }

])
