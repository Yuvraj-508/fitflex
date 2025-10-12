import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import { List, User, PlusCircle, LayoutDashboard,BarChart2, LogOut } from "lucide-react";

function SellerLayout() {
  const sidebarLinks = [
    { name: "Dashboard", path: "/seller/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Add User", path: "/seller", icon: <PlusCircle className="w-5 h-5" /> },
    { name: "User List", path: "/seller/user-list", icon: <List className="w-5 h-5" /> },
 { name: "Analytics", path: "/seller/analytics", icon: <BarChart2 className="w-5 h-5" /> },  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-3 bg-white shadow-sm border-b">
        <Link to="/" className="text-xl font-bold text-blue-600 tracking-wide">
          FitFlex Admin
        </Link>
        <div className="flex items-center gap-4">
          <p className="hidden md:block text-gray-600">Hi, Admin 👋</p>
          <button className="flex items-center gap-2 text-sm text-white bg-red-500 px-4 py-1.5 rounded-full hover:bg-red-600 transition">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </header>

      {/* Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="md:w-64 w-20 bg-white border-r border-gray-200 py-6 flex flex-col justify-between">
          <nav className="space-y-1">
            {sidebarLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-4 px-5 py-3 text-gray-700 font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-blue-100 text-blue-600 border-r-4 border-blue-500"
                      : "hover:bg-gray-50"
                  }`
                }
              >
                {item.icon}
                <span className="hidden md:inline">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default SellerLayout;
