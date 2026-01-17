"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/sections/Navigation";

interface UploadedImage {
  _id: string;
  url: string;
  alt: string;
  category: string;
  createdAt: string;
}

export default function AdminUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [alt, setAlt] = useState("");
  const [category, setCategory] = useState("general");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [images, setImages] = useState<UploadedImage[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch("/api/upload");
      const data = await res.json();
      if (data.success) {
        setImages(data.data);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    setUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("alt", alt);
    formData.append("category", category);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Upload successful!");
        setFile(null);
        setAlt("");
        // Refresh list
        fetchImages();
      } else {
        const errorData = await response.json();
        setMessage(`Upload failed: ${errorData.error || "Unknown error"}`);
      }
    } catch (error) {
      setMessage("An error occurred during upload.");
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-32 px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
            {/* Upload Form */}
            <div>
                <h1 className="text-3xl font-bold mb-8">Admin Image Upload</h1>
                
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image File</label>
                    <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-black file:text-white
                        hover:file:bg-gray-800"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Alt Text</label>
                    <input
                    type="text"
                    value={alt}
                    onChange={(e) => setAlt(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                    placeholder="Description of the image"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                    >
                    <option value="general">General</option>
                    <option value="portfolio">Portfolio</option>
                    <option value="brands">Brands</option>
                    <option value="team">Team</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={uploading}
                    className="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {uploading ? "Uploading..." : "Upload Image"}
                </button>

                {message && (
                    <div className={`text-center p-3 rounded-lg ${message.includes("success") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                    {message}
                    </div>
                )}
                </form>
            </div>

            {/* Gallery Preview */}
            <div>
                <h2 className="text-2xl font-bold mb-8">Recent Uploads</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((img) => (
                        <div key={img._id} className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                            <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                <span className="text-white text-xs truncate w-full">{img.category}</span>
                            </div>
                        </div>
                    ))}
                    {images.length === 0 && (
                        <p className="text-gray-500 col-span-full">No images uploaded yet.</p>
                    )}
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}