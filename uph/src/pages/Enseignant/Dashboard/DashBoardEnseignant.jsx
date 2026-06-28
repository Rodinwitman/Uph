import { SidebarEnseignant } from "../../../component/Sidebar/SidebarEnseignant"

export const DashBoard = () => {
  return (
    <>
      <div className="flex gap-2">
        <SidebarEnseignant/>
        <h1 className="ml-64 text-6xl">Dashboard</h1>
      </div>
    </>
  );
}
