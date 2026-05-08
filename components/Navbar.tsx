"use client";

import Image from "next/image";

import { useState } from "react";

import {
  HiOutlineMenuAlt3,
  HiX,
} from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-white/20">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="/"
          className="flex items-center gap-3"
        >

          <Image
            src="/images/logo.png"
            alt="KNMU Logo"
            width={50}
            height={50}
            className="object-contain"
          />

          <div>

            <h1 className="font-bold text-[#2D5A27] text-lg leading-tight">
              KNMU
            </h1>

            <p className="text-xs text-gray-500">
              Yayasan Karya Nyata Mandiri Utama
            </p>

          </div>

        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <a href="#tentang" className="hover:text-[#92C064] transition text-[#2D5A27]">
            Tentang
          </a>

          <a href="#program" className="hover:text-[#92C064] transition text-[#2D5A27]">
            Program
          </a>

          <a href="#visi" className="hover:text-[#92C064] transition text-[#2D5A27]">
            Visi Misi
          </a>

          <a href="#kontak" className="hover:text-[#92C064] transition text-[#2D5A27]">
            Kontak
          </a>

          <a
            href="#donasi"
            className="bg-[#FDB813] hover:bg-yellow-400 transition px-5 py-3 rounded-full font-semibold"
          >
            Donasi
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-[#2D5A27]"
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-5 font-medium shadow-lg">

          <a
            href="#tentang"
            className="block"
          >
            Tentang
          </a>

          <a
            href="#program"
            className="block"
          >
            Program
          </a>

          <a
            href="#visi"
            className="block"
          >
            Visi Misi
          </a>

          <a
            href="#kontak"
            className="block"
          >
            Kontak
          </a>

          <a
            href="#donasi"
            className="block bg-[#FDB813] text-center py-3 rounded-full"
          >
            Donasi
          </a>

        </div>
      )}

    </nav>
  );
}