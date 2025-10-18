import React, { useState } from "react";
import { topBarLinks } from "./adminPages";

// Pages
import AdminUser from "./Pages/Users/AdminUser";

// Components
import Header from "./comp/Header";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../../Components/Common/Logo/Logo";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Extract active page id from URL
  const pathParts = location.pathname.split("/");
  const activePage = pathParts[pathParts.length - 1];

  // Render current page content
  const renderPage = () => {
    const page = topBarLinks.find((p) => p.id === activePage);
    const PageComponent = page?.component;

    return (
      <div className="p-5">
        {/* Breadcrumb */}
        <div className="mb-4">
          <p className="flex gap-2 text-sm text-gray-400 dark:text-gray-600">
            <NavLink to={'/admin/dashboard/overview'} className="text-sm text-gray-500 dark:text-gray-400">Dashboard</NavLink>
            <span className="text-sm text-gray-500 dark:text-gray-400">{'>'}</span>
            <span className="text-sky-500 dark:text-sky-400">
              {page?.name || "Unknown"}
            </span>
          </p>
        </div>

        {/* Page Content */}
        <div className="flex-1 h-full rounded-xl">
          {PageComponent ? (
            <PageComponent />
          ) : (
            <p>This is the {page?.name || "selected"} page content.</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-full">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <div className="h-screen w-full flex mt-12">
          {/* Sidebar */}
          <aside
            className={`md:hidden flex fixed z-30 inset-y-0 left-0 w-64 
          bg-white dark:bg-gray-950 border-r border-gray-950/5 dark:border-white/10
          transform transition-transform duration-200 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:relative md:translate-x-0`}
          >
            <div className="flex flex-col h-full w-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-6 py-1.5 border-b border-gray-950/5 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="grid place-content-center p-1 bg-gray-100 dark:bg-gray-900 w-7 h-7 rounded-lg overflow-hidden">
                    <Logo className="w-5 h-5" />
                  </div>
                  <p className="font-medium text-sm dark:text-gray-400 [user-select:none]">
                    CWT Admin
                  </p>
                </div>
                {/* Close button (mobile only) */}
                <button
                  className="md:hidden p-2 text-xl"
                  onClick={() => setSidebarOpen(false)}
                >
                  ×
                </button>
              </div>

              {/* Sidebar Navigation */}
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-2 border-s border-gray-300 dark:border-gray-800">
                  {topBarLinks.map((page) => (
                    <li key={page.id}>
                      <NavLink
                        to={`/admin/dashboard/${page.id}`}
                        className={() =>
                          `w-full block text-left px-6 py-1 border-s-2  -ms-[1px] transition-all duration-300
                      ${activePage === page.id
                            ? " border-sky-500 dark:border-sky-400 text-sky-500 dark:text-sky-400"
                            : "text-gray-600 border-transparent dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 hover:border-gray-800 dark:hover:border-gray-300"
                          }`
                        }
                      // onClick={() => setSidebarOpen(false)}
                      >
                        {page.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Mobile Overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-20 md:hidden bg-gray-950/70 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-h-screen">
            {/* Reusable Header */}
            {/* <Header onMenuClick={() => setSidebarOpen(true)} /> */}

            {/* Page Content */}
            <main className="flex-1">{renderPage()}</main>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
