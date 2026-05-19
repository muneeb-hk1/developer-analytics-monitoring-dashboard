import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 border-r border-slate-700 p-5">
      <h1 className="text-2xl font-bold mb-10">DevMonitor</h1>

      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:bg-slate-700 p-3 rounded-lg transition">
          Dashboard
        </Link>

        <Link
          to="/analytics"
          className="hover:bg-slate-700 p-3 rounded-lg transition"
        >
          Analytics
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
