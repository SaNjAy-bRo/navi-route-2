import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreValues from "@/components/CoreValues";
import Services from "@/components/Services";
import WhyPartner from "@/components/WhyPartner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-orange-brand/10 selection:text-orange-brand relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <CoreValues />
        <WhyPartner />
      </main>
      <Footer />
    </div>
  );
}
