import { DashboardAdmin } from "../../pages/Admin/Dashboard";
import { UtilisateurAdmin } from "../../pages/Admin/Utilisateurs";
import { EtudiantAdmin } from "../../pages/Admin/Etudiants";
import { EnseignantAdmin } from "../../pages/Admin/Enseignants";
import { FiliereAdmin } from "../../pages/Admin/Filieres";
import { CourAdmin } from "../../pages/Admin/Cours";
import { EmploiDuTempAdmin } from "../../pages/Admin/EmploieDuTemps";
import { InscriptionAdmin } from "../../pages/Admin/inscriptions";
import { AnnonceAdmin } from "../../pages/Admin/Annonces";
import { RapportEtStatistiqueAdmin } from "../../pages/Admin/RapportEtStatistique";
export const adminRoutes = [
    {
        path: "/admin",
        element: <DashboardAdmin />
    },
    {
        path: "/admin/utilisateurs",
        element: <UtilisateurAdmin />
    },
    {
        path: "/admin/etudiants",
        element: <EtudiantAdmin />
    },
    {
        path: "/admin/enseignants",
        element: <EnseignantAdmin />
    },
    {
        path:"/admin/filieres",
        element: <FiliereAdmin/>
    },
    {
        path:"/admin/cours",
        element: <CourAdmin/>
    },
    {
        path: "/admin/emplois-du-temps",
        element: <EmploiDuTempAdmin/>
    },
    {
        path: "/admin/inscriptions",
        element: <InscriptionAdmin/>
    },
    {
        path: "/admin/annonces",
        element: <AnnonceAdmin/>
    },
    {
        path: "/admin/rapports",
        element: <RapportEtStatistiqueAdmin/>
    }
    

];