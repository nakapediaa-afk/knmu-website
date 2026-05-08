import Reveal from "./Reveal";
export default function VisionMission() {
  return (
    <Reveal>
    <section
      id="visi"
      className="py-28 bg-[#EEF5E8]"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="text-[#92C064] uppercase tracking-[4px] font-semibold mb-4">
            Visi & Misi
          </p>

          <h2 className="text-5xl font-bold text-[#2D5A27]">
            Arah dan Komitmen Yayasan
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* VISI */}
          <div className="bg-white rounded-[40px] p-10 shadow-xl">

            <div className="text-5xl mb-6">
              🌍
            </div>

            <h3 className="text-3xl font-bold text-[#2D5A27] mb-6">
              Visi
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              Menjadi pusat kolaborasi global
              dalam menciptakan solusi pangan,
              lingkungan, dan pemberdayaan
              masyarakat yang berkelanjutan.
            </p>

          </div>

          {/* MISI */}
          <div className="bg-[#2D5A27] rounded-[40px] p-10 shadow-xl text-white">

            <div className="text-5xl mb-6">
              🤝
            </div>

            <h3 className="text-3xl font-bold mb-8">
              Misi
            </h3>

            <ul className="space-y-5 text-green-100">

              <li>
                • Sosialisasi perlindungan hayati
                dan lingkungan hidup.
              </li>

              <li>
                • Membangun kemitraan strategis
                lintas sektor dan global.
              </li>

              <li>
                • Mengembangkan ekonomi mitra
                lokal berbasis keberlanjutan.
              </li>

              <li>
                • Investasi sektor pertanian dan
                peternakan yang produktif.
              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
    </Reveal>
  );
}