import Reveal from "./Reveal";
import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <Reveal>
    <section
      id="kontak"
      className="py-28 bg-[#F7FAF5]"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-[#92C064] font-semibold mb-4">
            Kontak & Legalitas
          </p>

          <h2 className="text-5xl font-bold text-[#2D5A27] mb-6">
            Mari Berkolaborasi
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Yayasan terbuka untuk kerja sama,
            kemitraan strategis, dan kolaborasi
            dalam mendukung pembangunan berkelanjutan.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* KONTAK */}
          <div className="bg-white rounded-[40px] p-10 shadow-xl">

            <h3 className="text-3xl font-bold text-[#2D5A27] mb-10">
              Informasi Kontak
            </h3>

            <div className="space-y-8">

              {/* EMAIL */}
              <div className="flex items-start gap-5">

                <div className="bg-[#EEF5E8] p-4 rounded-2xl text-[#2D5A27] text-xl">
                  <FaEnvelope />
                </div>

                <div>

                  <h4 className="font-bold text-lg mb-1 text-[#2D5A27]">
                    Email
                  </h4>

                  <p className="text-gray-600 break-all text-[#2D5A27]">
                    karyanyatamandiriutama@gmail.com
                  </p>

                </div>

              </div>

              {/* ALAMAT */}
              <div className="flex items-start gap-5">

                <div className="bg-[#EEF5E8] p-4 rounded-2xl text-[#2D5A27] text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h4 className="font-bold text-lg mb-2 text-[#2D5A27]">
                    Lokasi
                  </h4>

                  <p className="text-gray-600 mb-2 text-[#2D5A27]">
                    Kampar, Riau
                  </p>

                  <p className="text-gray-600 text-[#2D5A27]">
                    Pekanbaru, Riau
                  </p>

                </div>

              </div>

              {/* SOSMED */}
              <div className="flex items-start gap-5">

                <div className="bg-[#EEF5E8] p-4 rounded-2xl text-[#2D5A27] text-xl">
                  <FaInstagram />
                </div>

                <div>

                  <h4 className="font-bold text-lg mb-1 text-[#2D5A27]">
                    Media Sosial
                  </h4>

                  <p className="text-gray-600 text-[#2D5A27]">
                    Akan segera tersedia
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* LEGIT */}
          <div className="bg-[#2D5A27] rounded-[40px] p-10 shadow-xl text-white">

            <h3 className="text-3xl font-bold mb-10">
              Legalitas Yayasan
            </h3>

            <div className="space-y-8">

              <div>

                <p className="text-[#FDB813] font-semibold mb-2">
                  Akta Notaris
                </p>

                <p className="text-green-100 leading-relaxed">
                  Nomor 02
                  <br />
                  Deke Saputra, S.H., M.Kn
                </p>

              </div>

              <div>

                <p className="text-[#FDB813] font-semibold mb-2">
                  SK Menteri
                </p>

                <p className="text-green-100">
                  AHU-0007526
                </p>

              </div>

              <div>

                <p className="text-[#FDB813] font-semibold mb-2">
                  NIB
                </p>

                <p className="text-green-100">
                  0504260017882
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
    </Reveal>
  );
}