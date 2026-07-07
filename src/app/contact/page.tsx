import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-orange-brand/10 selection:text-orange-brand relative">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
