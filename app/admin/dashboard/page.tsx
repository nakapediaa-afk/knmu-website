"use client";

import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db, auth } from "@/lib/firebase";

import ProtectedRoute from "@/components/ProtectedRoute";

import {
  signOut,
} from "firebase/auth";

import { useRouter } from "next/navigation";

import Link from "next/link";

import Image from "next/image";

interface DokumentasiItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export default function DashboardPage() {
  const router = useRouter();

  const [data, setData] = useState<
    DokumentasiItem[]
  >([]);

  const fetchData = async () => {
    const snapshot = await getDocs(
      collection(db, "dokumentasi")
    );

    const result: DokumentasiItem[] = [];

    snapshot.forEach((docItem) => {
      result.push({
        id: docItem.id,
        ...(docItem.data() as Omit<
          DokumentasiItem,
          "id"
        >),
      });
    });

    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);

    router.push("/admin/login");
  };

  return (
    <ProtectedRoute>

      <main className="min-h-screen bg-[#F7FAF5] p-6 md:p-10">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-14">

            <div>

              <p className="uppercase tracking-[4px] text-[#92C064] font-semibold mb-3">
                Admin Panel
              </p>

              <h1 className="text-5xl font-black text-[#2D5A27] mb-3">
                Dashboard KNMU
              </h1>

              <p className="text-gray-600 text-lg">
                Kelola website Yayasan
                Karya Nyata Mandiri Utama
              </p>

            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-2xl font-semibold"
            >
              Logout
            </button>

          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">

            <div className="bg-white rounded-[30px] p-8 shadow-lg">

              <p className="text-gray-500 mb-3">
                Total Dokumentasi
              </p>

              <h2 className="text-5xl font-black text-[#2D5A27]">
                {data.length}
              </h2>

            </div>

            <div className="bg-[#2D5A27] rounded-[30px] p-8 shadow-lg text-white">

              <p className="text-green-100 mb-3">
                Status Website
              </p>

              <h2 className="text-4xl font-black">
                Online
              </h2>

            </div>

            <div className="bg-[#92C064] rounded-[30px] p-8 shadow-lg text-[#2D5A27]">

              <p className="mb-3">
                Admin Access
              </p>

              <h2 className="text-4xl font-black">
                Active
              </h2>

            </div>

          </div>

          {/* QUICK ACTION */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">

            <Link
              href="/admin/upload"
              className="bg-white rounded-[30px] p-8 shadow-lg hover:-translate-y-2"
            >

              <h3 className="text-2xl font-bold text-[#2D5A27] mb-4">
                Upload Dokumentasi
              </h3>

              <p className="text-gray-600">
                Tambahkan kegiatan terbaru yayasan
              </p>

            </Link>

            <Link
              href="/dokumentasi"
              className="bg-white rounded-[30px] p-8 shadow-lg hover:-translate-y-2"
            >

              <h3 className="text-2xl font-bold text-[#2D5A27] mb-4">
                Lihat Dokumentasi
              </h3>

              <p className="text-gray-600">
                Cek tampilan dokumentasi publik
              </p>

            </Link>

            <Link
              href="/"
              className="bg-white rounded-[30px] p-8 shadow-lg hover:-translate-y-2"
            >

              <h3 className="text-2xl font-bold text-[#2D5A27] mb-4">
                Buka Website
              </h3>

              <p className="text-gray-600">
                Lihat landing page utama
              </p>

            </Link>

          </div>

          {/* RECENT */}
          <div>

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold text-[#2D5A27]">
                Dokumentasi Terbaru
              </h2>

              <Link
                href="/admin/upload"
                className="text-[#2D5A27] font-semibold"
              >
                Kelola →
              </Link>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {data
                .filter(
                  (item) =>
                    item.imageUrl &&
                    item.imageUrl.startsWith("http")
                )
                .slice(0, 3)
                .map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[30px] overflow-hidden shadow-lg"
                  >

                    <div className="relative h-[240px]">

                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />

                    </div>

                    <div className="p-6">

                      <span className="inline-block bg-[#DDECCF] text-[#2D5A27] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        {item.category}
                      </span>

                      <h3 className="text-2xl font-bold text-[#2D5A27]">
                        {item.title}
                      </h3>

                    </div>

                  </div>
                ))}

            </div>

          </div>

        </div>

      </main>

    </ProtectedRoute>
  );
}