import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#1F3F1B] text-white py-14">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-3 gap-10 mb-10">

                    {/* LOGO */}
                    <div>

                        <div className="flex items-center gap-4 mb-5">

                            <Image
                                src="/images/logo.png"
                                alt="KNMU Logo"
                                width={60}
                                height={60}
                            />

                            <div>

                                <h2 className="text-2xl font-bold">
                                    KNMU
                                </h2>

                                <p className="text-green-200 text-sm">
                                    Yayasan Karya Nyata
                                    Mandiri Utama
                                </p>

                            </div>

                        </div>

                        <p className="text-green-100 leading-relaxed">
                            Dari Bumi, Oleh Rakyat,
                            Untuk Masa Depan.
                        </p>

                    </div>

                    {/* MENU */}
                    <div>

                        <h3 className="text-xl font-bold mb-5">
                            Navigasi
                        </h3>

                        <div className="space-y-3 text-green-100">

                            <a href="#tentang" className="block hover:text-white">
                                Tentang
                            </a>

                            <a href="#program" className="block hover:text-white">
                                Program
                            </a>

                            <a href="#visi" className="block hover:text-white">
                                Visi Misi
                            </a>

                            <a href="#kontak" className="block hover:text-white">
                                Kontak
                            </a>

                        </div>

                    </div>

                    {/* KONTAK */}
                    <div>

                        <h3 className="text-xl font-bold mb-5">
                            Hubungi Kami
                        </h3>

                        <div className="space-y-3 text-green-100">

                            <p>
                                karyanyatamandiriutama@gmail.com
                            </p>

                            <p>
                                Kampar & Pekanbaru
                            </p>

                        </div>

                    </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t border-white/10 pt-8 text-center text-green-200 text-sm">

                    © 2026 Yayasan Karya Nyata Mandiri Utama.
                    All rights reserved.

                </div>
                
            </div>

        </footer>
    );

}

