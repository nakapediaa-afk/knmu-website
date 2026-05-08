"use client";

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
          ...(doc.data() as Omit<DokumentasiItem, "id">),
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
    <main className="min-h-screen bg-[#F8FFF4] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-[#2D5A27] mb-4">
            Dokumentasi Kegiatan
          </h1>

          <p className="text-gray-600">
            Dokumentasi program yayasan
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >

              <div className="relative h-[250px]">

                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-6">

                <span className="inline-block bg-[#92C064] px-4 py-1 rounded-full text-sm mb-4">
                  {item.category}
                </span>

                <h2 className="text-2xl font-bold text-[#2D5A27]">
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