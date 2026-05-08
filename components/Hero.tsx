export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/rice-field.webp')",
      }}
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">

        <p className="uppercase tracking-[6px] text-[#FDB813] mb-6 font-semibold">
          Yayasan Karya Nyata Mandiri Utama
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
          Dari Bumi,
          <br />
          Oleh Rakyat,
          <br />
          Untuk Masa Depan
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-10">
          Peduli Alam, Cerdaskan Bangsa
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5">

          <a
            href="#program"
            className="bg-[#FDB813] hover:bg-yellow-400 transition px-8 py-4 rounded-full text-black font-bold"
          >
            Jelajahi Program
          </a>

          <a
            href="#kontak"
            className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-semibold"
          >
            Hubungi Kami
          </a>

        </div>

      </div>

    </section>
  );
}