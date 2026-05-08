import Reveal from "./Reveal";
export default function About() {
  return (
    <Reveal>
    <section
      id="tentang"
      className="py-28 bg-[#F7FAF5]"
    >

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>

          <p className="text-[#92C064] font-semibold uppercase tracking-[4px] mb-4">
            Tentang Yayasan
          </p>

          <h2 className="text-5xl font-bold text-[#2D5A27] leading-tight mb-8">
            Kolaborasi Nyata
            untuk Pangan dan
            Lingkungan Berkelanjutan
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Yayasan Karya Nyata Mandiri Utama
            merupakan yayasan yang bergerak dalam
            pengembangan sektor pertanian,
            peternakan, dan lingkungan hidup
            melalui kemitraan strategis lintas sektor.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Kami percaya bahwa keberlanjutan pangan,
            pemberdayaan masyarakat, dan pelestarian
            lingkungan adalah fondasi masa depan
            yang lebih baik.
          </p>

        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <h3 className="text-5xl font-black text-[#2D5A27] mb-3">
              100+
            </h3>

            <p className="text-gray-600">
              Mitra & Kolaborasi
            </p>

          </div>

          <div className="bg-[#2D5A27] rounded-3xl p-8 shadow-lg text-white">

            <h3 className="text-5xl font-black mb-3">
              3
            </h3>

            <p className="text-green-100">
              Fokus Program Utama
            </p>

          </div>

          <div className="bg-[#92C064] rounded-3xl p-8 shadow-lg text-[#2D5A27]">

            <h3 className="text-5xl font-black mb-3">
              2
            </h3>

            <p>
              Lokasi Operasional
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <h3 className="text-5xl font-black text-[#2D5A27] mb-3">
              2026
            </h3>

            <p className="text-gray-600">
              Tahun Berdiri
            </p>

          </div>

        </div>

      </div>

    </section>
    </Reveal>
  );
}