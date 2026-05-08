import Reveal from "./Reveal";
export default function Programs() {
  return (
    <Reveal>
    <section
      id="program"
      className="py-28 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="text-[#92C064] uppercase tracking-[4px] font-semibold mb-4">
            Program Utama
          </p>

          <h2 className="text-5xl font-bold text-[#2D5A27] mb-6">
            Fokus Pengembangan Yayasan
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Program yayasan difokuskan pada pengembangan
            sektor strategis yang berdampak langsung terhadap
            masyarakat dan keberlanjutan lingkungan.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD */}
          <div className="group bg-[#F7FAF5] hover:bg-[#2D5A27] rounded-3xl p-10 transition duration-300">

            <div className="text-6xl mb-8">
              🌾
            </div>

            <h3 className="text-3xl font-bold text-[#2D5A27] group-hover:text-white mb-6">
              Pertanian
            </h3>

            <p className="text-gray-600 group-hover:text-green-100 leading-relaxed">
              Mendukung ketahanan pangan melalui
              pengembangan pertanian modern dan
              pemberdayaan masyarakat lokal.
            </p>

          </div>

          {/* CARD */}
          <div className="group bg-[#F7FAF5] hover:bg-[#2D5A27] rounded-3xl p-10 transition duration-300">

            <div className="text-6xl mb-8">
              🐄
            </div>

            <h3 className="text-3xl font-bold text-[#2D5A27] group-hover:text-white mb-6">
              Peternakan
            </h3>

            <p className="text-gray-600 group-hover:text-green-100 leading-relaxed">
              Mengembangkan usaha peternakan
              produktif yang berkelanjutan dan
              berbasis kemitraan masyarakat.
            </p>

          </div>

          {/* CARD */}
          <div className="group bg-[#F7FAF5] hover:bg-[#2D5A27] rounded-3xl p-10 transition duration-300">

            <div className="text-6xl mb-8">
              🌱
            </div>

            <h3 className="text-3xl font-bold text-[#2D5A27] group-hover:text-white mb-6">
              Lingkungan
            </h3>

            <p className="text-gray-600 group-hover:text-green-100 leading-relaxed">
              Menjalankan program perlindungan
              hayati dan edukasi lingkungan untuk
              masa depan yang lebih hijau.
            </p>

          </div>

        </div>

      </div>

    </section>
    </Reveal>
  );
}