"use client";

import { useState, useEffect } from "react";
import { getApiUrl } from "@/lib/api";

export default function ProfilePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      setEmail(user.email);
    }
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    if (password && password !== confirmPassword) {
      setIsError(true);
      setMessage("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const apiUrl = getApiUrl();
      const token = localStorage.getItem("token");
      const res = await fetch(`${apiUrl}/api/auth/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ 
            email, 
            password: password || undefined 
        }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Profile updated successfully");
        setPassword("");
        setConfirmPassword("");
        // Update local storage
        localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        setIsError(true);
        setMessage(data.error || "Update failed");
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
        <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-500 mb-8">Update your account settings and password.</p>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <form onSubmit={handleUpdate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none bg-gray-50 cursor-not-allowed"
                disabled // Keep email readonly for now to prevent lockout confusion
              />
              <p className="text-xs text-gray-400 mt-1">Email cannot be changed directly.</p>
            </div>

            <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-bold mb-4">Change Password</h3>
                
                <div className="space-y-4">
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                        placeholder="Leave blank to keep current"
                        minLength={6}
                    />
                    </div>

                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                        placeholder="Confirm new password"
                    />
                    </div>
                </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white font-bold py-3 rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Profile"}
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
