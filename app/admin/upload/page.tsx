"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";

import { db } from "@/lib/firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Pertanian");

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    setImage(file || null);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image || !title) {
      alert("Lengkapi data terlebih dahulu");
      return;
    }

    setLoading(true);

    try {
      // UPLOAD KE CLOUDINARY
      const formData = new FormData();

      formData.append("file", image);
      formData.append("upload_preset", "knmu_upload");

      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dr0t412yv/image/upload",
        formData
      );

      const imageUrl = uploadRes.data.secure_url;

      // SIMPAN KE FIRESTORE
      await addDoc(collection(db, "dokumentasi"), {
        title,
        category,
        imageUrl,
        createdAt: serverTimestamp(),
      });

      alert("Dokumentasi berhasil ditambahkan!");

      // RESET
      setTitle("");
      setCategory("Pertanian");
      setImage(null);
      setPreview(null);

    } catch (error) {
      console.log(error);

      alert("Terjadi kesalahan");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#F8FFF4] p-6 md:p-10">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-[#2D5A27] text-white p-8">
          <h1 className="text-4xl font-bold mb-2">
            Upload Dokumentasi
          </h1>

          <p className="text-green-100">
            Tambahkan dokumentasi kegiatan yayasan
          </p>
        </div>

        <div className="p-8 space-y-6">

          {/* JUDUL */}
          <div>
            <label className="block mb-2 font-semibold text-[#2D5A27]">
              Judul Kegiatan
            </label>

            <input
              type="text"
              placeholder="Contoh: Penanaman Pohon Bersama"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-400 rounded-xl p-4 text-[#2D5A27]"
            />
          </div>

          {/* KATEGORI */}
          <div>
            <label className="block mb-2 font-semibold text-[#2D5A27]">
              Kategori Program
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-400 rounded-xl p-4 text-[#2D5A27]"
            >
              <option className="text-[#2D5A27]" value="Pertanian">
                Pertanian
              </option>
              <option className="text-[#2D5A27]" value="Peternakan">
                Peternakan
              </option>
              <option className="text-[#2D5A27]" value="Lingkungan">
                Lingkungan
              </option>
            </select>
          </div>

          {/* PREVIEW */}
          {preview && (
            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden text-[#2D5A27]">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* INPUT FILE */}
          <div>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-xl p-4"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={handleUpload}
            disabled={loading}
            className="w-full bg-[#2D5A27] hover:bg-green-900 transition text-white py-4 rounded-2xl text-lg font-semibold"
          >
            {loading ? "Uploading..." : "Publish Dokumentasi"}
          </button>

        </div>
      </div>
    </main>
  );
}