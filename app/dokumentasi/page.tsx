"use client";

import Link from "next/link";
import { FaCog } from "react-icons/fa";

import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import Image from "next/image";

interface DokumentasiItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export default function DokumentasiPage() {
  const [data, setData] = useState<DokumentasiItem[]>([]);

  const fetchData = async () => {
    try {
      const q = query(
        collection(db, "dokumentasi"),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);

      const result: DokumentasiItem[] = [];

      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...(doc.data() as Omit<
            DokumentasiItem,
            "id"
          >),
        });
      });

      setData(result);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FFF4] py-20 px-6 relative">

      {/* ADMIN BUTTON */}
      <Link
        href="/admin/login"
        className="
          fixed
          top-4
          right-4
          md:top-6
          md:right-6
          z-50
          opacity-40
          hover:opacity-100
          hover:scale-110
          transition
          bg-white
          shadow-xl
          w-11
          h-11
          rounded-full
          flex
          items-center
          justify-center
          text-[#2D5A27]
        "
      >
        <FaCog />
      </Link>

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#92C064] font-semibold mb-4">
            Galeri Kegiatan
          </p>

          <h1 className="text-5xl font-bold text-[#2D5A27] mb-4">
            Dokumentasi Kegiatan
          </h1>

          <p className="text-gray-600 text-lg">
            Dokumentasi program dan kegiatan
            Yayasan Karya Nyata Mandiri Utama
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {data.map((item) => (
            <div
              key={item.id}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-xl
                hover:-translate-y-2
              "
            >

              {/* IMAGE */}
              <div className="relative h-[250px]">

                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <span className="
                  inline-block
                  bg-[#DDECCF]
                  text-[#2D5A27]
                  px-4
                  py-1
                  rounded-full
                  text-sm
                  font-semibold
                  mb-4
                ">
                  {item.category}
                </span>

                <h2 className="text-2xl font-bold text-[#2D5A27] leading-snug">
                  {item.title}
                </h2>

              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}