import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel McGrath - Full-Stack Developer Portfolio"
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
