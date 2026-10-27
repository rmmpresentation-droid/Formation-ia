import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import JoinSection from "./components/JoinSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a1128] font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <Highlights />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
