import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode; // anything that reat can render
};

function MainLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
