"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (pathname === "/admin/login") {
      setAuthorized(true);
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    } else {
      setAuthorized(true);
    }
  }, [pathname, router]);

  if (!authorized) {
    return null; // Or a loading spinner
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const navItems = [
    { name: "Dashboard", href: "/admin" },
    { name: "Upload Image", href: "/admin/upload" },
    { name: "Manage Admins", href: "/admin/users" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full z-10 hidden md:block">
        <div className="p-6 border-b border-gray-100">
          <h1 className="font-heading text-2xl font-bold uppercase tracking-wider">Brandsculpt<span className="text-xs ml-1 bg-black text-white px-2 py-0.5 rounded-full align-top">Admin</span></h1>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? "bg-black text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-4"
          >
            Logout
          </button>
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-100">
            <Link href="/" className="flex items-center justify-center px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors">
                ← Back to Website
            </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {children}
      </div>
    </div>
  );
}
