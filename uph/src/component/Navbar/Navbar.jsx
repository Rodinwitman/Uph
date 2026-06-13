import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="text-6xl">Navbar</div>

      <Link
        to="/DashboardAdmin"
        className="text-blue-500 underline text-xl"
      >
        Admin
      </Link>
    </div>
  );
};