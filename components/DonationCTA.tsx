"use client";

import { useState } from "react";

export default function DonationCTA() {
  const rekening = "146201000552561";

  const [copied, setCopied] = useState(false);

  const copyRekening = async () => {
    await navigator.clipboard.writeText(rekening);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section
      id="donasi"
      className="py-28 bg-[#2D5A27]"
    >

      <div className="max-w-5xl mx-auto px-6 text-center text-white">

        {/* HEADER */}
        <p className="uppercase tracking-[4px] text-[#FDB813] font-semibold mb-6">
          Dukungan & Kolaborasi
        </p>

        <h2 className="text-5xl font-bold leading-tight mb-8">
          Bersama Membangun
          Masa Depan yang
          Lebih Hijau dan Mandiri
        </h2>

        <p className="text-green-100 text-lg leading-relaxed mb-10">
          Dukungan dari masyarakat, mitra, dan investor
          menjadi langkah nyata dalam menciptakan
          keberlanjutan pangan dan lingkungan hidup.
        </p>

        {/* BUTTON */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-16">

          <a
            href="#kontak"
            className="bg-[#FDB813] hover:bg-yellow-400 transition px-8 py-4 rounded-full text-black font-bold"
          >
            Hubungi Yayasan
          </a>

          <a
            href="/dokumentasi"
            className="border border-white hover:bg-white hover:text-[#2D5A27] transition px-8 py-4 rounded-full font-semibold"
          >
            Lihat Kegiatan
          </a>

        </div>

        {/* DONATION CARD */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-[40px] p-10 max-w-2xl mx-auto">

          <p className="uppercase tracking-[3px] text-[#FDB813] font-semibold mb-4">
            Rekening Donasi
          </p>

          <h3 className="text-3xl font-bold mb-3">
            BANK RAKYAT INDONESIA (BRI)
          </h3>

          <p className="text-4xl font-black tracking-wider mb-4">
            {rekening}
          </p>

          <p className="text-green-100 mb-8">
            a.n Yayasan Karya Nyata Mandiri Utama
          </p>

          <button
            onClick={copyRekening}
            className="bg-[#FDB813] hover:bg-yellow-400 transition text-black px-8 py-4 rounded-full font-bold"
          >
            {copied
              ? "Nomor Rekening Disalin ✓"
              : "Salin Nomor Rekening"}
          </button>

        </div>

      </div>

    </section>
  );
}