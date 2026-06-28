import { DashBoard } from "../../pages/Enseignant/Dashboard/DashBoardEnseignant";
import { Notes } from "../../pages/Enseignant/Notes/Notes";
import { Cours } from "../../pages/Enseignant/Cours/Cours";
import { Presence } from "../../pages/Enseignant/Présences/Presence";

export const enseignantRoutes = [
    {
        path:'/Enseignant',
        element:<DashBoard/>
    },
    {
        path:'/Notes',
        element:<Notes/>
    },
    {
        path:'/Cours',
        element: <Cours/>
    },
    {
        path:'/Presence',
        element: <Presence/>
    }
]
