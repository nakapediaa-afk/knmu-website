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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-white/20 overflow-x-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between overflow-hidden">

        {/* LOGO */}
        <a
          href="/"
          className="flex items-center gap-3 min-w-0"
        >

          <Image
            src="/images/logo.png"
            alt="KNMU Logo"
            width={50}
            height={50}
            className="object-contain flex-shrink-0"
          />

          <div className="min-w-0">

            <h1 className="font-bold text-[#2D5A27] text-lg leading-tight truncate">
              KNMU
            </h1>

            <p className="text-xs text-gray-500 truncate">
              Yayasan Karya Nyata Mandiri Utama
            </p>

          </div>

        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <a
            href="#tentang"
            className="hover:text-[#92C064] transition text-[#2D5A27]"
          >
            Tentang
          </a>

          <a
            href="#program"
            className="hover:text-[#92C064] transition text-[#2D5A27]"
          >
            Program
          </a>

          <a
            href="#visi"
            className="hover:text-[#92C064] transition text-[#2D5A27]"
          >
            Visi Misi
          </a>

          <a
            href="#kontak"
            className="hover:text-[#92C064] transition text-[#2D5A27]"
          >
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
          className="md:hidden text-3xl text-[#2D5A27] flex-shrink-0"
          aria-label="Toggle Menu"
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="w-full bg-white px-6 pb-6 pt-2 space-y-5 font-medium shadow-lg">

          <a
            href="#tentang"
            className="block text-[#2D5A27]"
            onClick={() => setOpen(false)}
          >
            Tentang
          </a>

          <a
            href="#program"
            className="block text-[#2D5A27]"
            onClick={() => setOpen(false)}
          >
            Program
          </a>

          <a
            href="#visi"
            className="block text-[#2D5A27]"
            onClick={() => setOpen(false)}
          >
            Visi Misi
          </a>

          <a
            href="#kontak"
            className="block text-[#2D5A27]"
            onClick={() => setOpen(false)}
          >
            Kontak
          </a>

          <a
            href="#donasi"
            className="block bg-[#FDB813] text-center py-3 rounded-full font-semibold"
            onClick={() => setOpen(false)}
          >
            Donasi
          </a>

        </div>

      </div>

    </nav>
  );
}