"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

import {
  collection,
  getDocs,
  limit,
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

export default function DocumentationPreview() {
  const [data, setData] = useState<DokumentasiItem[]>([]);

  const fetchData = async () => {
    try {
      const q = query(
        collection(db, "dokumentasi"),
        orderBy("createdAt", "desc"),
        limit(3)
      );

      const snapshot = await getDocs(q);

      const result: DokumentasiItem[] = [];

      snapshot.forEach((doc) => {
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
    <Reveal>
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

          <div>

            <p className="text-[#92C064] uppercase tracking-[4px] font-semibold mb-4">
              Dokumentasi
            </p>

            <h2 className="text-5xl font-bold text-[#2D5A27]">
              Kegiatan Terbaru
            </h2>

          </div>

          <a
            href="/dokumentasi"
            className="text-[#2D5A27] font-semibold hover:text-[#92C064]"
          >
            Lihat Semua →
          </a>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {data.map((item) => (
            <div
              key={item.id}
              className="group bg-[#F7FAF5] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >

              <div className="relative h-[260px] overflow-hidden">

                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
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

    </section>
    </Reveal>
  );
}