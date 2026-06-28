import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="text-6xl">Navbar</div>

      <Link
        to="/admin"
        className="text-blue-500 underline text-xl"
      >
        Admin
      </Link>
      <br />
      <Link 
        to="/Enseignant"
        className="text-blue-500 underline text-xl"
      >
        Enseignant
      </Link>
      <br />
      <Link 
        to="/Etudiant"
        className="text-blue-500 underline text-xl"
      >
        Etudiant
      </Link>
    </div>
  );
};