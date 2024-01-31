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

/**
 * Home component for Daniel McGrath's Full-Stack Developer Portfolio website.
 * This main function constructs the homepage layout. It includes a navigation bar, 
 * hero section, about section, email contact section, and a footer. The page is 
 * styled using Tailwind CSS for a responsive and modern design. Additionally, the 
 * 'metadata' object sets the page title for SEO and improved user experience.
 * 
 * @returns The JSX layout for the homepage, structuring various sections and components.
 */
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
