import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import VisionMission from "@/components/VisionMission";
import DocumentationPreview from "@/components/DocumentationPreview";
import DonationCTA from "@/components/DonationCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function HomePage() {
  return (
    <main>

      <Navbar />

      <Hero />

      <About />

      <Programs />

      <VisionMission />

      <DocumentationPreview />

      <DonationCTA />

      <Contact />

      <Footer />

      <WhatsappButton />

    </main>
  );
}