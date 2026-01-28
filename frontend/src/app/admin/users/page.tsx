"use client";

import { useState } from "react";
import { getApiUrl } from "@/lib/api";

export default function ManageUsersPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const apiUrl = getApiUrl();
      const token = localStorage.getItem("token");
      const res = await fetch(`${apiUrl}/api/auth/create-admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage(`Admin user created: ${data.user.email}`);
        setEmail("");
        setPassword("");
      } else {
        setIsError(true);
        setMessage(data.error || "Failed to create admin");
      }
    } catch (error) {
      setIsError(true);
      setMessage("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8 bg-gray-50/50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">Manage Admins</h1>
        <p className="text-gray-500 mb-8">Create new administrative accounts for the backend.</p>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6">Create New Admin</h2>
          
          <form onSubmit={handleCreateAdmin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                placeholder="new.admin@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                placeholder="********"
                required
                minLength={6}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white font-bold py-3 rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Admin User"}
            </button>

            {message && (
              <div className={`p-4 rounded-lg text-sm text-center ${isError ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
