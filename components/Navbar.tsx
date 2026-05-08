"use client";

import Image from "next/image";

import { useState } from "react";

import {
    HiOutlineMenuAlt3,
    HiX,
} from "react-icons/hi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
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
            {isOpen && (
                <div className="fixed inset-0 z-50">

                    {/* OVERLAY */}
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* SIDEBAR */}
                    <div className="
      absolute
      top-0
      right-0
      w-[280px]
      h-full
      bg-[#2D5A27]
      text-white
      p-8
      shadow-2xl
      flex
      flex-col
    ">

                        {/* CLOSE */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-3xl mb-10 self-end"
                        >
                            ×
                        </button>

                        {/* MENU */}
                        <div className="flex flex-col gap-6 text-lg font-semibold">

                            <a
                                href="#tentang"
                                onClick={() => setIsOpen(false)}
                                className="hover:text-[#FDB813]"
                            >
                                Tentang
                            </a>

                            <a
                                href="#program"
                                onClick={() => setIsOpen(false)}
                                className="hover:text-[#FDB813]"
                            >
                                Program
                            </a>

                            <a
                                href="#donasi"
                                onClick={() => setIsOpen(false)}
                                className="hover:text-[#FDB813]"
                            >
                                Donasi
                            </a>

                            <a
                                href="#kontak"
                                onClick={() => setIsOpen(false)}
                                className="hover:text-[#FDB813]"
                            >
                                Kontak
                            </a>

                        </div>

                    </div>

                </div>
            )}

        </nav>
    );
}