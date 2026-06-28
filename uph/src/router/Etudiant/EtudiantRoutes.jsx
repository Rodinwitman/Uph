import { Dashboard } from "../../pages/Etudiant/Dashboard/DashboardEtudiant";
import { Edt } from "../../pages/Etudiant/EDT/Edt";
import { MesCours } from "../../pages/Etudiant/MesCours/MesCours";
import { MesNotes } from "../../pages/Etudiant/MesNotes/MesNotes";

export const EtudiantRoutes = [
    {
        path:'/Etudiant',
        element: <Dashboard/>
    },
    {
        path:'/edt',
        element: <Edt/>
    },
    {
        path:'/MesCours',
        element: <MesCours/>
    },
    {
        path:'/MesNotes',
        element: <MesNotes/>
    }
]