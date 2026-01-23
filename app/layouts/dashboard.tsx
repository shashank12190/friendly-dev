import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <>
      <div className="min-h-screen flex bg-gray-900 text-white">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 p-6 hidden md:block">
          <h2 className="text-xl font-bold mb-6">Dashboard</h2>
          <nav className="space-y-3">
            <a href="/dashboard" className="block hover:text-blue-400">
              Overview
            </a>
            <a href="/dashboard/projects" className="block hover:text-blue-400">
              Projects
            </a>
            <a href="/dashboard/settings" className="block hover:text-blue-400">
              Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
