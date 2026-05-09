import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/6283832827452"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:scale-110 transition text-white p-5 rounded-full shadow-2xl text-3xl"
    >
      <FaWhatsapp />
    </a>
  );
}