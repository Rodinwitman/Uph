
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Briefcase,
  BookOpen,
  Clock,
  FileText,
  Bell,
  BarChart3,
  Settings,
  User,
  LogOut,
  ChevronRight,
} from "lucide-react";


const navigationItems = [
  { icon: LayoutDashboard, label: "Tableau de bord", path: "/admin" },
  { icon: Users, label: "Gestion utilisateurs", path: "/admin/utilisateurs" },
  { icon: GraduationCap, label: "Gestion étudiants", path: "/admin/etudiants" },
  { icon: Briefcase, label: "Gestion enseignants", path: "/admin/enseignants" },
  { icon: BookOpen, label: "Gestion filières", path: "/admin/filieres" },
  { icon: BookOpen, label: "Gestion cours", path: "/admin/cours" },
  { icon: Clock, label: "Emplois du temps", path: "/admin/emplois-du-tempss" },
  { icon: FileText, label: "Inscriptions", path: "/admin/inscriptions" },
  { icon: Bell, label: "Annonces", path: "/admin/annonces" },
  { icon: BarChart3, label: "Rapports & statistiques", path: "/admin/rapports" },
];

export const SidebarAdmin = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col fixed top-0 left-0 border-r border-gray-800">

      <div className="px-6 py-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-1 rounded-lg border-amber-100   flex items-center justify-center">
            <LayoutDashboard size={22} />
          </div>

          <div>
            <h1 className="text-sm font-bold text-amber-500">Admin Panel</h1>
            <p className="text-xs text-gray-400">Campusia</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">

        <p className="px-3 py-2 text-xs text-gray-500 uppercase">
          Menu principal
        </p>
        {/* modification dynamique en haut  */}
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.path} // lien 
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition group"
            >
              <Icon  size={20} className="text-gray-400 group-hover:text-white" /> {/* iconee  */}

              <span className="flex-1">{item.label}</span>

              <ChevronRight
                size={16}
                className="opacity-0 group-hover:opacity-100 transition"
              /> {/* iconee chevron  */}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-gray-800 space-y-2">

        <Link
          to="/admin/profil"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition"
        >
          <User size={20} />
          <span className="flex-1">Mon profil</span>
        </Link>

        <Link
          to="/admin/parametres"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition"
        >
          <Settings size={20} />
          <span className="flex-1">Paramètres</span>
        </Link>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition">
          <LogOut size={20} />
          <span className="flex-1 text-left">Déconnexion</span>
        </button>

      </div>

    </div>
  );
};