"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getApiUrl } from "@/lib/api";

interface UploadedImage {
  _id: string;
  url: string;
  alt: string;
  category: string;
  createdAt: string;
}

const CATEGORIES = [
  { label: "All", value: "" },
  { label: "Logos", value: "logos" },
  { label: "Graphic Design", value: "graphic-design" },
  { label: "Packaging", value: "packaging" },
  { label: "Menu Designing", value: "menu-designing" },
  { label: "Brand Identity", value: "brand-identity" },
  { label: "Website Development", value: "website-development" },
  { label: "Portfolio", value: "portfolio" },
  { label: "Brands", value: "brands" },
  { label: "Team", value: "team" },
  { label: "General", value: "general" },
];

export default function AdminDashboard() {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetchImages();
  }, [filter]);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const apiUrl = getApiUrl();
      const url = filter 
        ? `${apiUrl}/api/images?category=${filter}` 
        : `${apiUrl}/api/images`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setImages(data.data);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image? This action cannot be undone.")) return;

    setDeleting(id);
    try {
      const apiUrl = getApiUrl();
      const token = localStorage.getItem("token");
      const res = await fetch(`${apiUrl}/api/images/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (data.success) {
        setImages((prev) => prev.filter((img) => img._id !== id));
      } else {
        alert("Failed to delete image");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Error deleting image");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage your website content and gallery images.</p>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-1.5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-sm font-medium text-gray-500 pl-3">Filter:</span>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-transparent text-sm font-semibold text-gray-900 focus:outline-none cursor-pointer py-1 pr-2"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.label} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {images.map((img) => (
              <div key={img._id} className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  <Image
                    src={img.url}
                    alt={img.alt || "Uploaded image"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => window.open(img.url, '_blank')}
                      className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-sm transition-colors"
                      title="View Full Size"
                    >
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(img._id)}
                      disabled={deleting === img._id}
                      className="p-2 bg-red-500/80 hover:bg-red-600 text-white rounded-full backdrop-blur-sm transition-colors"
                      title="Delete Image"
                    >
                      {deleting === img._id ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="p-3">
                  <div className="flex justify-between items-start gap-2">
                    <span className="inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-black bg-gray-100 rounded-md">
                      {img.category}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {new Date(img.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  {img.alt && (
                    <p className="mt-2 text-xs text-gray-600 truncate" title={img.alt}>
                      {img.alt}
                    </p>
                  )}
                </div>
              </div>
            ))}
            
            {images.length === 0 && !loading && (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
                <svg className="w-16 h-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-lg font-medium text-gray-600">No images found</p>
                <p className="text-sm">Upload some images to get started</p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
